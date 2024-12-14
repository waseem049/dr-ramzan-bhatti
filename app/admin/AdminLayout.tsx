import { NavBar } from "@/components";

export default function AdminBaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[100vw] h-[100vh] bg-svg">
      <NavBar />
      {children}
    </div>
  );
}
