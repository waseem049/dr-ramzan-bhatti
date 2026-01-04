import { Metadata } from "next";
import { ContactUsPage } from "./ContactUsPage";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Ramzan Bhatti",
  description:
    "Get in touch with Dr. Ramzan Bhatti for expert skin care in India. Schedule an appointment for consultation, laser treatment, or skin analysis.",
};

export default function ContactUs() {
  return <ContactUsPage />;
}
