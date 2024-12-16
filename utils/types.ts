import { Blog, BlogStatus, Contact, Salutation } from "@prisma/client";
import { ContactDataDto } from "./dto";

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

export enum ContactResponses {
  SUBMISSION_SUCCESS = "SUBMISSION_SUCCESS",
  SUBMISSION_FAILURE = "SUBMISSING_FAILURE",
  AUTH_TOKEN_MISSING = "AUTH_TOKEN_MISSING",
  AUTH_SECRET_MISSING = "AUTH_SECRET_MISSING",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
}

export type LoginResponse = {
  success: boolean;
  response: LoginResponses;
  data?: {
    token: string;
  };
  error?: string;
};

export type RegistrationResponse = {
  success: boolean;
  response: RegistrationResponses;
  error?: string;
};

export type LoginValues = {
  email: string;
  password: string;
};

export type RegistrationValues = {
  salutation: Salutation;
  name: string;
  email: string;
  userName: string;
  password: string;
};

export type FetchContactResponse = {
  success: boolean;
  response: ContactResponses;
  data?: Contact[];
  error?: string;
};

export type CreateContactResponse = Omit<FetchContactResponse, "data"> & {
  data?: ContactDataDto;
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
