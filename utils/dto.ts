import { Blog, User } from "@prisma/client";

export type BlogDataDto = Omit<Blog, "createdAt" | "updatedAt" | "id" | "user">;

export type UserDataDto = Omit<User, "password">;
