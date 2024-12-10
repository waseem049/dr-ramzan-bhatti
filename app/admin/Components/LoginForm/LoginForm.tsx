"use client";
import { FormButton, InputBox } from "@/components";
import { useLogin } from "@/hooks/useLogin";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

type LoginFormValues = {
  email: string;
  password: string;
};

const initialValues = {
  email: "",
  password: "",
};
export const LoginForm = () => {
  const { login, isLoading } = useLogin();
  const router = useRouter();
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const response = await login(values.email, values.password);
      if (response?.token) {
        router.push("/admin");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-white rounded-xl w-[90%] h-[50%] lg:w-[50%] lg:h-[50%] p-10 lg:p-16">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({}) => (
          <Form>
            <div className="flex flex-col gap-5">
              <InputBox label={"Email"} name={"email"} placeholder={"Email"} />
              <InputBox
                label={"Password"}
                name={"password"}
                placeholder={"Password"}
                type="password"
              />
              <FormButton label={"Login"} loading={isLoading} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
