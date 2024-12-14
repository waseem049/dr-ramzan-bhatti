import { useState, useCallback, useRef } from "react";
import debounce from "lodash/debounce";

interface UseCheckBlogSlugUniquenessReturn {
  isChecking: boolean;
  slugExists: boolean;
  checkSlugUniqueness: (slug: string) => Promise<boolean>;
  error: string | null;
}

export const useCheckBlogSlugUniqueness = (
  blogId?: string
): UseCheckBlogSlugUniquenessReturn => {
  const [isChecking, setIsChecking] = useState(false);
  const [slugExists, setSlugExists] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedCheckRef = useRef(
    debounce(
      async (
        slug: string,
        signal: AbortSignal,
        resolve: (value: boolean) => void
      ) => {
        if (!slug) {
          setIsChecking(false);
          setSlugExists(false);
          resolve(false);
          return;
        }

        setIsChecking(true);
        setError(null);

        try {
          const params = new URLSearchParams({
            slug,
            ...(blogId && { blogId }),
          });

          const response = await fetch(`/api/blog/check-slug?${params}`, {
            signal,
          });
          const data = await response.json();

          setSlugExists(data.exists);
          resolve(data.exists);
        } catch (error) {
          if ((error as Error).name !== "AbortError") {
            console.error("Error checking slug:", error);
            setError("Failed to check slug uniqueness");
          }
          resolve(false);
        } finally {
          setIsChecking(false);
        }
      },
      500
    )
  );

  useRef(() => {
    return () => {
      debouncedCheckRef.current.cancel();
    };
  });

  const checkSlugUniqueness = useCallback(
    (slug: string): Promise<boolean> => {
      // Create an AbortController for each request
      const controller = new AbortController();

      return new Promise((resolve) => {
        debouncedCheckRef.current(slug, controller.signal, resolve);
      });
    },
    [blogId]
  );

  return {
    isChecking,
    slugExists,
    checkSlugUniqueness,
    error,
  };
};
