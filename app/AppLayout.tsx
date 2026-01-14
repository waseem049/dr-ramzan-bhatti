import { ClientNavBar, Footer } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ClientNavBar />
      {children}
      <Footer />
    </div>
  );
}
