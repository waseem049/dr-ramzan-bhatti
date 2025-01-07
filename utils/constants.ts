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

export const TreatmentsList = [
  {
    treatment: "Joint Replacement",
    description:
      "Advanced surgical procedure to replace damaged joints with artificial implants, restoring mobility and reducing chronic pain.",
    icon: "/svgs/stethoscope.svg",
  },
  {
    treatment: "Total Knee Replacement",
    description:
      "Complete replacement of damaged knee joint surfaces with prosthetic components to restore function and eliminate arthritis pain.",
    icon: "/svgs/stethoscope.svg",
  },
  {
    treatment: "Arthroscopic Surgery",
    description:
      "Minimally invasive procedure using tiny cameras and instruments to diagnose and treat joint problems through small incisions.",
    icon: "/svgs/stethoscope.svg",
  },
  {
    treatment: "Hip Replacement",
    description:
      "Surgical replacement of damaged hip joint with prosthetic ball and socket to improve mobility and reduce pain.",
    icon: "/svgs/stethoscope.svg",
  },
  {
    treatment: "Orthopedic Trauma",
    description:
      "Specialized care for severe injuries to bones, joints, and soft tissues, including fractures and complex wound management.",
    icon: "/svgs/stethoscope.svg",
  },
  {
    treatment: "Ilizarov Fixation",
    description:
      "External frame system using rings and wires to gradually correct complex bone deformities and heal difficult fractures.",
    icon: "/svgs/stethoscope.svg",
  },
  {
    treatment: "Deformity Correction",
    description:
      "Surgical and non-surgical techniques to correct bone and joint misalignments, improving function and appearance of affected limbs.",
    icon: "/svgs/stethoscope.svg",
  },
  {
    treatment: "3D Navigated Total Knee Replacement",
    description:
      "Advanced knee replacement using 3D computer guidance for precise implant positioning and improved surgical outcomes.",
    icon: "/svgs/stethoscope.svg",
  },
];
