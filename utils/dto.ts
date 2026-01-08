import { Contact } from "./types";

export type ContactDataDto = Omit<Contact, "createdAt" | "updatedAt" | "id">;
