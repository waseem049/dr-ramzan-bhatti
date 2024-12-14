import { Blog, BlogStatus, Salutation } from "@prisma/client";

export type Login = {
  email: string;
  password: string;
};

export type Registration = {
  salutation: Salutation;
  name: string;
  email: string;
  userName: string;
  password: string;
};

export type UpdateBlogValues = Omit<
  Blog,
  | "createdAt"
  | "updatedAt"
  | "id"
  | "user"
  | "status"
  | "tags"
  | "isFeatured"
  | "category"
  | "userId"
> & {
  status: LabelValue;
  tags: LabelValue[];
  isFeatured: LabelValue;
  category: LabelValue | null;
};

export type LabelValue = {
  label: string;
  value: string | boolean | BlogStatus;
};
