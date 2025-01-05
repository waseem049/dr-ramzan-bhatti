import { ClientNavBar } from "@/components";
import "./globals.css";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <ClientNavBar />
      {children}
    </div>
  );
}
