"use client";
import React, { useState } from "react";
import { CheckBox, FormButton, InputBox } from "@/components";
import { useLogin } from "@/hooks/useLogin";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Salutations } from "@/utils/constants";
import { Salutation } from "@prisma/client";
import { Login, Registration } from "@/utils/types";
import { useRegister } from "@/hooks/useRegister";

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const registerValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const loginInitialValues = {
  email: "",
  password: "",
};

const registrationInitialValues = {
  salutation: Salutation.DR,
  name: "",
  email: "",
  userName: "",
  password: "",
};

export const LoginForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { login, isLoading: loggingIn } = useLogin();
  const { register, isLoading: registering } = useRegister();
  const router = useRouter();

  const handleLoginSubmit = async (values: Login) => {
    try {
      const response = await login({
        email: values.email,
        password: values.password,
      });
      if (response?.token) {
        router.push("/admin");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleRegisterSubmit = async (values: Registration) => {
    try {
      const response = await register({
        name: values.name,
        email: values.email,
        userName: values.userName,
        password: values.password,
        salutation: values.salutation,
      });
      if (response?.status === 201) {
        setIsFlipped(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-[90%] md:w-[500px] md:h-[500px] h-[600px] perspective-1000 ">
      <div
        className={`relative w-full h-full flex justify-center items-center transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Login Form - Front */}
        <div className="glassbox absolute w-full p-10 backface-hidden ">
          <Formik<Login>
            initialValues={loginInitialValues}
            onSubmit={handleLoginSubmit}
            validationSchema={loginValidationSchema}
          >
            {({}) => (
              <Form className="h-full flex flex-col">
                <div className="flex-1 flex flex-col gap-5">
                  <InputBox
                    label="Email"
                    name="email"
                    placeholder="Email"
                    labelColor="text-foreground"
                  />
                  <InputBox
                    label="Password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    labelColor="text-foreground"
                  />
                  <FormButton type="submit" label="Login" loading={loggingIn} />
                  <button
                    type="button"
                    onClick={() => setIsFlipped(true)}
                    className="text-sm text-white hover:text-yellow-500 mt-4"
                  >
                    No Account? Register
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Registration Form - Back */}
        <div className="glassbox absolute w-full p-10 backface-hidden rotate-y-180 ">
          <Formik<Registration>
            initialValues={registrationInitialValues}
            onSubmit={handleRegisterSubmit}
            validationSchema={registerValidationSchema}
          >
            {({}) => (
              <Form className="h-full flex flex-col">
                <div className="flex-1 flex flex-col gap-5">
                  <div className="flex flex-row items-center gap-5">
                    {Salutations.map((s, i) => (
                      <CheckBox
                        key={i}
                        name={"salutation"}
                        label={s.label}
                        value={s.value}
                        labelColor="text-white"
                      />
                    ))}
                  </div>
                  <InputBox
                    label="Name"
                    name="name"
                    placeholder="Full Name"
                    labelColor="text-foreground"
                  />
                  <InputBox
                    label="Email"
                    name="email"
                    placeholder="Email"
                    labelColor="text-foreground"
                  />
                  <InputBox
                    label="Username"
                    name="userName"
                    placeholder="Username"
                    labelColor="text-foreground"
                  />
                  <InputBox
                    label="Password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    labelColor="text-foreground"
                  />

                  <FormButton
                    type="submit"
                    label="Register"
                    loading={registering}
                  />
                  <button
                    type="button"
                    onClick={() => setIsFlipped(false)}
                    className="text-sm text-white hover:text-yellow-500 mt-4"
                  >
                    Already have an account? Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
