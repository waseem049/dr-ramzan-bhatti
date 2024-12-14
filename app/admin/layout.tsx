import type { Metadata } from "next";
import AdminBaseLayout from "./AdminLayout";

export const metadata: Metadata = {
  title: "Dr Jibran Bashir | Admin Panel",
  description: "Admin panel for Dr Jibran Bashir",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminBaseLayout>{children}</AdminBaseLayout>;
}
