"use client";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AppointmentBooking } from "@/components/AppointmentBooking";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export const ClientWrapper = () => {
  useSmoothScroll();
  
  return (
    <>
      <WhatsAppButton />
      <BackToTop />
      <AppointmentBooking />
    </>
  );
};
