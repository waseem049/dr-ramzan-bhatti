import { useState, useCallback, useRef, useEffect } from "react";
import debounce from "lodash/debounce";
import { ApiResponse, SlugCheckResponse } from "@/utils/types";

interface UseCheckBlogSlugUniquenessReturn {
  isChecking: boolean;
  slugExists: boolean;
  checkSlugUniqueness: (slug: string) => Promise<boolean>;
  error: ApiResponse | null;
}

export const useCheckBlogSlugUniqueness = (
  blogId?: string
): UseCheckBlogSlugUniquenessReturn => {
  const [isChecking, setIsChecking] = useState(false);
  const [slugExists, setSlugExists] = useState(false);
  const [error, setError] = useState<ApiResponse | null>(null);

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
          const data: SlugCheckResponse = await response.json();

          if (data.success && data.response === ApiResponse.FETCH_SUCCESS) {
            setSlugExists(data.exists);
            resolve(data.exists);
          } else {
            setError(data.response as ApiResponse);
            throw new Error(data.error);
          }
        } catch (error) {
          if ((error as Error).name === "AbortError") {
            resolve(false);
            return;
          }

          console.error("Error Checking Slug:", error);
          setError(ApiResponse.SLUG_CHECK_ERROR);
          resolve(false);
        } finally {
          setIsChecking(false);
        }
      },
      500
    )
  );

  // Cleanup debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedCheckRef.current.cancel();
    };
  }, []);

  const checkSlugUniqueness = useCallback(
    (slug: string): Promise<boolean> => {
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
