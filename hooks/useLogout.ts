import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("jb-admin-token");
    router.push("/login");
  };

  return { logout };
};
