import { LoginResponses, RegistrationResponses } from "./types";

export const getMessageFromResponse = (
  r: LoginResponses | RegistrationResponses
) => {
  const ErrorMap = {
    [LoginResponses.LOGIN_SUCCESS]: "Logged In Successfully",
    [LoginResponses.INVALID_PASSWORD]: "Invalid Password",
    [LoginResponses.USER_NOT_FOUND]: "User Not Found",
    [LoginResponses.ERROR_LOGGING_IN]: "Error Logging In",
    [RegistrationResponses.REGISTRATION_SUCCESS]: "Registered Successfully",
    [RegistrationResponses.USER_ALREADY_EXISTS]: "Email Already Used",
    [RegistrationResponses.ERROR_REGISTERING]: "Error Registering",
  };

  return ErrorMap[r];
};
