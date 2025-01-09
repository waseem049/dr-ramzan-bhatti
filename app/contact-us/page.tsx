import { Metadata } from "next";
import { ContactUsPage } from "./ContactUsPage";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Jibran Bashir",
  description:
    "Get in touch with Dr. Jibran Bashir for expert orthopedic care in India. Schedule an appointment for consultation, surgery, or follow-up care.",
};

export default function ContactUs() {
  return <ContactUsPage />;
}
