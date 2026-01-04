import type { Metadata } from "next";
import AdminBaseLayout from "./AdminLayout";

export const metadata: Metadata = {
  title: "Dr. Ramzan Bhatti | Admin Panel",
  description: "Admin panel for Dr. Ramzan Bhatti",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminBaseLayout>{children}</AdminBaseLayout>;
}
