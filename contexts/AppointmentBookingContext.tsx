"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AppointmentBookingContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const AppointmentBookingContext = createContext<AppointmentBookingContextType | undefined>(undefined);

export const AppointmentBookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <AppointmentBookingContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </AppointmentBookingContext.Provider>
  );
};

export const useAppointmentBooking = () => {
  const context = useContext(AppointmentBookingContext);
  if (!context) {
    throw new Error("useAppointmentBooking must be used within AppointmentBookingProvider");
  }
  return context;
};
