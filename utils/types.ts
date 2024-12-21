import { Blog, BlogStatus, Contact, Salutation, User } from "@prisma/client";
import { ContactDataDto } from "./dto";

export enum ApiResponse {
  // Auth related responses
  AUTH_TOKEN_MISSING = "AUTH_TOKEN_MISSING",
  AUTH_SECRET_MISSING = "AUTH_SECRET_MISSING",
  AUTH_INVALID_TOKEN = "AUTH_INVALID_TOKEN",

  // User related responses
  USER_ID_REQUIRED = "USER_ID_REQUIRED",
  USER_NOT_FOUND = "USER_NOT_FOUND",
  USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS",
  USER_FOUND = "USER_FOUND",
  USER_FETCH_ERROR = "USER_FETCH_ERROR",

  // Login/Registration responses
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_INVALID_PASSWORD = "LOGIN_INVALID_PASSWORD",
  LOGIN_ERROR = "LOGIN_ERROR",
  REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS",
  REGISTRATION_ERROR = "REGISTRATION_ERROR",

  // Slug related responses
  SLUG_CHECK_ERROR = "SLUG_CHECK_ERROR",
  BLOG_SLUG_MISSING = "BLOG_SLUG_MISSING",
  SLUG_NOT_FOUND = "SLUG_NOT_FOUND",

  // Blog related responses
  BLOG_ID_MISSING = "BLOG_ID_MISSING",

  // Generic CRUD responses
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
  CREATION_SUCCESS = "CREATION_SUCCESS",
  CREATION_FAILURE = "CREATION_FAILURE",
  UPDATE_SUCCESS = "UPDATE_SUCCESS",
  UPDATE_FAILURE = "UPDATE_FAILURE",
  DELETE_SUCCESS = "DELETE_SUCCESS",
  DELETE_FAILURE = "DELETE_FAILURE",

  //Subscribe responses
  SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS",
  SUBSCRIPTION_FAILURE = "SUBSCRIPTION_FAILURE",
  SUBSCRIPTION_ALREADY_ACTIVE = "SUBSCRIPTION_ALREADY_ACTIVE",

  // Validation
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

export type FetchUserResponse = {
  success: boolean;
  response: ApiResponse;
  data?: Omit<User, "password">;
  error?: string;
};

export type SlugCheckResponse = {
  success: boolean;
  response?: ApiResponse;
  error?: string;
  exists: boolean;
};

export type FetchBlogResponse = {
  success: boolean;
  response: ApiResponse;
  data?: Blog[] | Blog;
  error?: string;
};

export type LoginResponse = {
  success: boolean;
  response: ApiResponse;
  data?: {
    token: string;
  };
  error?: string;
};

export type RegistrationResponse = {
  success: boolean;
  response: ApiResponse;
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
  response: ApiResponse;
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

export type SubscribeValues = {
  email: string;
};

export type SubscriptionResponse = {
  success: boolean;
  response: ApiResponse;
  error?: string;
};
