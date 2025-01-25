import { BlogStatus, Salutation } from "@prisma/client";

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
    icon: "/svgs/joint_replacement.svg",
  },
  {
    treatment: "Total Knee Replacement",
    description:
      "Complete replacement of damaged knee joint surfaces with prosthetic components to restore function and eliminate arthritis pain.",
    icon: "/svgs/total_knee_replacement.svg",
  },
  {
    treatment: "Arthroscopic Surgery",
    description:
      "Minimally invasive procedure using tiny cameras and instruments to diagnose and treat joint problems through small incisions.",
    icon: "/svgs/arthroscopic_surgery.svg",
  },
  {
    treatment: "Hip Replacement",
    description:
      "Surgical replacement of damaged hip joint with prosthetic ball and socket to improve mobility and reduce pain.",
    icon: "/svgs/hip_replacement.svg",
  },
  {
    treatment: "Orthopedic Trauma",
    description:
      "Specialized care for severe injuries to bones, joints, and soft tissues, including fractures and complex wound management.",
    icon: "/svgs/orthopedic_trauma.svg",
  },
  {
    treatment: "Ilizarov Fixation",
    description:
      "External frame system using rings and wires to gradually correct complex bone deformities and heal difficult fractures.",
    icon: "/svgs/ilizarov_fixation.svg",
  },
  {
    treatment: "Deformity Correction",
    description:
      "Surgical and non-surgical techniques to correct bone and joint misalignments, improving function and appearance of affected limbs.",
    icon: "/svgs/deformity_correction.svg",
  },
  {
    treatment: "3D Navigated Total Knee Replacement",
    description:
      "Advanced knee replacement using 3D computer guidance for precise implant positioning and improved surgical outcomes.",
    icon: "/svgs/3d_total_knee_replacement.svg",
  },
];

export const FAQs = [
  {
    question: "Whats the cost involved in knee surgery?",
    answer:
      "The cost of knee surgery varies between 2.5-3.5 lakhs for a basic implant, and 4.5-5.5 lakhs for premium implants. Additional costs include hospital stay, medications, and rehabilitation. Insurance coverage may significantly reduce out-of-pocket expenses.",
  },
  {
    question: "How long rest is required after unicondilar Knee replacement?",
    answer:
      "After unicondylar knee replacement, initial rest of 2-3 weeks is needed. Most patients can resume light activities within 4-6 weeks. Full recovery with physiotherapy typically takes 8-12 weeks, though individual healing times may vary.",
  },
  {
    question: "What is the success rate of a Total Hip Replacement Surgery?",
    answer:
      "Total Hip Replacement Surgery has a success rate of 90-95% over a 10-year period. More than 80% of hip replacements last 20+ years. Successful outcomes depend on proper rehabilitation and following post-surgery care instructions.",
  },
  {
    question: "Is it possible to go for Hip Replacement at the age of 72 yrs?",
    answer:
      "Yes, hip replacement is safe and effective at age 72. Age alone isn't a barrier - overall health and bone quality are more important factors. Many patients in their 70s and 80s successfully undergo hip replacement with excellent outcomes.",
  },
];

export const Testimonials = [
  {
    name: "Mohd Ibrahim",
    treatmentReceived: "Total Knee Replacement",
    feedback:
      "After years of knee pain, I can finally walk without discomfort. The surgery and recovery process was well-explained and managed. Thank you for giving me my mobility back.",
    displayPicture: "/images/male_placeholder.png",
  },
  {
    name: "Varun Patel",
    treatmentReceived: "Arthroscopic ACL Reconstruction",
    feedback:
      "I was able to return to my regular activities within 6 months. The minimally invasive approach really helped with recovery time.",
    displayPicture: "/images/male_placeholder.png",
  },
  {
    name: "Fatima Begum",
    treatmentReceived: "Hip Replacement Surgery",
    feedback:
      "The chronic hip pain was affecting my daily life. Post-surgery, I've regained my independence. The staff was supportive throughout my treatment journey.",
    displayPicture: "/images/female_placeholder.png",
  },
  {
    name: "Mohd Ismail",
    treatmentReceived: "Knee Arthroscopy",
    feedback:
      "Professional treatment with great attention to detail. The keyhole surgery left minimal scarring, and the physiotherapy guidance helped me recover faster than expected.",
    displayPicture: "/images/male_placeholder.png",
  },
];

export const CareerHighlights = {
  qualification: {
    heading: "QUALIFICATION",
    highlights: [
      "Fellowship in Adult Hip Reconstruction and Knee Arthroscopy, RWTH University, Germany",
      "DNB in Orthopaedic Surgery, National Board of Examinations, New Delhi",
      "Diploma in Orthopaedic Surgery, Government Medical College, Jammu",
      "MBBS, BVP Medical College, Pune",
    ],
  },
  careerHighlights: {
    heading: "CAREER HIGHLIGHTS",
    highlights: [
      "Extensive experience in performing complex orthopaedic trauma, primary & revision knee & hip replacement surgeries, and knee arthroscopy",
      "Delivered multiple guest lectures at prestigious institutions",
      "Published research papers in reputed Orthopaedic Journals",
      "Authored several chapters in Orthopaedic textbooks",
      "Multiple national podium and poster presentations",
      "Trained in Robotic-Assisted Hip and Knee Arthroplasty",
    ],
  },
  workExperience: {
    heading: "WORK EXPERIENCE",
    highlights: [
      "Post-Graduate Resident in Orthopaedics (2015-2018), Government Medical College, Jammu, India",
      "DNB Resident in Orthopaedics (2019-2021), AIMS, Faridabad (Under NBE New Delhi)",
      "Registrar Orthopaedics (2021-2024), SKIMS Medical College Hospital, Srinagar",
      "Fellow in Adult Hip Reconstruction, Joint Replacement, and Advanced Knee Arthroscopy (2024), RWTH University, Germany",
      "Consultant Orthopaedics (2024-2025), Amrita Hospital, Faridabad",
    ],
  },
  affiliations: {
    heading: "AFFILIATIONS",
    highlights: [
      "Member, AO Switzerland",
      "Member, British Orthopaedic Society",
      "Member, The International Society of Arthroscopy, Knee Surgery and Orthopaedic Sports Medicine (ISAKOS)",
      "Member, Société Internationale de Chirurgie Orthopédique et de Traumatologie (SICOT), Belgium",
      "Member, Indian Orthopaedic Association",
      "Member, National Academy of Medical Sciences (MNAMS)",
    ],
  },
};
