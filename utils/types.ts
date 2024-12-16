import { Blog, BlogStatus, Salutation } from "@prisma/client";

export enum LoginResponses {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  ERROR_LOGGING_IN = "ERROR_LOGGING_IN",
}

export enum RegistrationResponses {
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
  USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS",
  ERROR_REGISTERING = "ERROR_REGISTERING",
}

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
