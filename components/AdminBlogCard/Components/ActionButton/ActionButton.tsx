"use client";
import { useRouter } from "next/navigation";

type ActionButtonProps = {
  slug: string;
};

export const ActionButton: React.FC<ActionButtonProps> = ({ slug }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 w-fit self-center px-3 py-1 text-white rounded-md hover:bg-slate-400"
    >
      View Blog
    </button>
  );
};
