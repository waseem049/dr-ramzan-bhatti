"use client";
import { AppointmentBookingProvider } from "@/contexts/AppointmentBookingContext";
import { ReactNode } from "react";

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppointmentBookingProvider>
      {children}
    </AppointmentBookingProvider>
  );
};
