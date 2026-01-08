import { Contact } from "@prisma/client";

export type ContactDataDto = Omit<Contact, "createdAt" | "updatedAt" | "id">;
