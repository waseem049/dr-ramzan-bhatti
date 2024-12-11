import { Salutation } from "@prisma/client";

export const AdminNavBarData = [
  { label: "Home", href: "/" },
  { label: "Admin", href: "/admin" },
  { label: "Blog", href: "/admin/my-blogs" },
];

export const Salutations = [
  { label: "Dr", value: Salutation.DR },
  { label: "Mr", value: Salutation.MR },
  { label: "Ms", value: Salutation.MS },
  { label: "Mrs", value: Salutation.MRS },
];
