import { Salutation } from "@prisma/client";

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
