import { ApiResponse } from "./types";

export const getMessageFromResponse = (r: ApiResponse) => {
  const ResponseMessages = {
    // Auth related messages
    [ApiResponse.AUTH_TOKEN_MISSING]: "Authentication Token Required",
    [ApiResponse.AUTH_SECRET_MISSING]: "Server Configuration Error",
    [ApiResponse.AUTH_INVALID_TOKEN]: "Invalid Authentication Token",

    // User related messages
    [ApiResponse.USER_ID_REQUIRED]: "User ID Required",
    [ApiResponse.USER_NOT_FOUND]: "User Not Found",
    [ApiResponse.USER_ALREADY_EXISTS]: "Email Already Used",
    [ApiResponse.USER_FOUND]: "User Found",
    [ApiResponse.USER_FETCH_ERROR]: "Error Fetching User Details",

    // Login/Registration messages
    [ApiResponse.LOGIN_SUCCESS]: "Logged In Successfully",
    [ApiResponse.LOGIN_INVALID_PASSWORD]: "Invalid Password",
    [ApiResponse.LOGIN_ERROR]: "Error Logging In",
    [ApiResponse.REGISTRATION_SUCCESS]: "Registered Successfully",
    [ApiResponse.REGISTRATION_ERROR]: "Error Registering",

    // Slug related messages
    [ApiResponse.SLUG_CHECK_ERROR]: "Error Checking Slug Availability",
    [ApiResponse.BLOG_SLUG_MISSING]: "Blog Slug Is Required",
    [ApiResponse.SLUG_NOT_FOUND]: "Slug Not Found",

    // Blog related messages
    [ApiResponse.BLOG_ID_MISSING]: "Blog ID Is Required",

    // Generic CRUD messages
    [ApiResponse.FETCH_SUCCESS]: "Data Retrieved Successfully",
    [ApiResponse.FETCH_FAILURE]: "Error Retrieving Data",
    [ApiResponse.CREATION_SUCCESS]: "Created Successfully",
    [ApiResponse.CREATION_FAILURE]: "Error Creating Data",
    [ApiResponse.UPDATE_SUCCESS]: "Updated Successfully",
    [ApiResponse.UPDATE_FAILURE]: "Error Updating Data",
    [ApiResponse.DELETE_SUCCESS]: "Deleted Successfully",
    [ApiResponse.DELETE_FAILURE]: "Error Deleting Data",

    // Subscription related messages
    [ApiResponse.SUBSCRIPTION_SUCCESS]: "Subscribed Successfully",
    [ApiResponse.SUBSCRIPTION_FAILURE]: "Error Subscribing",
    [ApiResponse.SUBSCRIPTION_ALREADY_ACTIVE]: "Email Is Already Subscribed",

    //Validation related messages
    [ApiResponse.VALIDATION_ERROR]: "Validation Error",
  };

  return ResponseMessages[r] || "Unknown Response";
};
