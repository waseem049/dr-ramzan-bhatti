import { BlogStatus, Salutation } from "@prisma/client";

export const uploadApiEndpoint = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT;

export const AdminNavBarData = [
  { label: "Home", href: "/" },
  { label: "Admin", href: "/admin" },
  { label: "Blog", href: "/admin/my-blogs" },
  { label: "Contact Requests", href: "/admin/contact-requests" },
];

export const NavBarData = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "BLOGS",
    href: "/blogs",
  },
  {
    label: "ABOUT",
    href: "/about",
  },

  {
    label: "CONTACT US",
    href: "/contact-us",
  },
];

export const Salutations = [
  { label: "Dr", value: Salutation.DR },
  { label: "Mr", value: Salutation.MR },
  { label: "Ms", value: Salutation.MS },
  { label: "Mrs", value: Salutation.MRS },
];

export const Categories = [
  { label: "Surgery", value: "SURGERY" },
  { label: "Prosthetics", value: "PROSTHETICS" },
  { label: "Bone Grafting", value: "BONE_GRAFTING" },
];

export const Featured = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

export const BlogStatusList = [
  { label: "Draft", value: BlogStatus.DRAFT },
  { label: "Published", value: BlogStatus.PUBLISHED },
  { label: "Withdrawn", value: BlogStatus.WITHDRAWN },
];
