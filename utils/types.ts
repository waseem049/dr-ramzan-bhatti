import { Blog, Contact } from "@prisma/client";
import { ContactDataDto } from "./dto";

export enum ApiResponse {
  // Blog related responses
  BLOG_NOT_FOUND = "BLOG_NOT_FOUND",

  // Generic CRUD responses
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
  CREATION_SUCCESS = "CREATION_SUCCESS",
  CREATION_FAILURE = "CREATION_FAILURE",

  //Subscribe responses
  SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS",
  SUBSCRIPTION_FAILURE = "SUBSCRIPTION_FAILURE",
  SUBSCRIPTION_ALREADY_ACTIVE = "SUBSCRIPTION_ALREADY_ACTIVE",

  // Validation
  VALIDATION_ERROR = "VALIDATION_ERROR",
}


export type FetchBlogResponse = {
  success: boolean;
  response: ApiResponse;
  data?: Blog[] | Blog;
  error?: string;
};

export type FetchBlogsWithPaginationResponse = {
  success: boolean;
  response: ApiResponse;
  data?: {
    blogs: Blog[];
    count: number;
    skip: number;
    take: number;
  };
  error?: string;
};

export type FetchSimiliarBlogsResponse = {
  success: boolean;
  response: ApiResponse;
  data?: Blog[];
  error?: string;
};


export type CreateContactResponse = {
  success: boolean;
  response: ApiResponse;
  data?: ContactDataDto;
  error?: string;
};

export type CreateContactInput = Omit<
  Contact,
  "id" | "createdAt" | "updatedAt"
>;


export type LabelValue = {
  label: string;
  value: string;
};

export type SubscribeValues = {
  email: string;
};

export type SubscriptionResponse = {
  success: boolean;
  response: ApiResponse;
  error?: string;
};
