import { Blog, Contact, User } from "@prisma/client";

export type BlogDataDto = Omit<Blog, "createdAt" | "updatedAt" | "id" | "user">;

export type UserDataDto = Omit<User, "password">;

export type ContactDataDto = Omit<Contact, "createdAt" | "updatedAt" | "id">;
