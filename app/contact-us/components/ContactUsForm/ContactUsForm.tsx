"use client";
import { FormButton, InputBox, SelectInput, TextArea } from "@/components";
import { ApiResponse, LabelValue } from "@/utils/types";
import { Form, Formik } from "formik";
import { Countries } from "@/utils/countryCodes";
import { useCreateContact } from "@/hooks/useCreateContact";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

type ContactUsFormValues = {
  name: string;
  email: string;
  countryCode: LabelValue | null;
  phone: string;
  subject: string;
  message: string;
};

const initialValues: ContactUsFormValues = {
  name: "",
  email: "",
  countryCode: null,
  phone: "",
  subject: "",
  message: "",
};

export const ContactUsForm = () => {
  const { createContact, isLoading } = useCreateContact();
  const [message, setMessage] = useState<ApiResponse | null>(null);

  const transformedCountryList: LabelValue[] = Countries.map((c) => ({
    label: `${c.emoji} ${c.name} (${c.dial_code})`,
    value: c.dial_code,
  }));

  const countryOptions = (inputValue: string): Promise<LabelValue[]> =>
    new Promise((resolve) => {
      if (!transformedCountryList) return [];
      setTimeout(() => {
        resolve(
          transformedCountryList.filter((i: { label: string }) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
      });
    });

  const handleSubmit = async (
    values: ContactUsFormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    console.log({
      name: values.name,
      email: values.email,
      countryCode: values.countryCode?.value || null,
      phone: values.phone,
      subject: values.subject,
      message: values.message,
    });

    try {
      const response = await createContact({
        name: values.name,
        email: values.email,
        countryCode: (values.countryCode?.value as string) || null,
        phone: values.phone || null,
        subject: values.subject,
        message: values.message,
      });

      if (response.success) {
        console.log("Contact Created Successfully");
        setMessage(ApiResponse.CREATION_SUCCESS);
        resetForm();
      }
    } catch (err) {
      console.error("Error Creating Contact:", err);
      setMessage(ApiResponse.CREATION_FAILURE);
    } finally {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="w-full">
      <Formik<ContactUsFormValues>
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div className="w-full flex flex-col lg:flex-row gap-3">
              <InputBox
                label={"Name"}
                name={"name"}
                placeholder={"Your Name"}
                className="w-full"
              />
              <InputBox
                name={"email"}
                placeholder={"Your Email"}
                label={"Email"}
                className="w-full"
              />
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-3">
              <SelectInput
                name={"countryCode"}
                placeholder={"Select Country"}
                label={"Country Code"}
                loadOptions={countryOptions}
                defaultOptions={transformedCountryList}
                className="w-full"
              />
              <InputBox
                label={"Phone"}
                name={"phone"}
                placeholder={"Your Phone"}
                className="w-full"
              />
            </div>
            <InputBox
              label={"Subject"}
              name={"subject"}
              placeholder={"Subject"}
              className="w-full"
            />
            <TextArea
              label={"Message"}
              name={"message"}
              placeholder={"Your Message"}
              className="w-full max-h-[400px]"
            />
            {message && (
              <div
                className={`text-white py-2 px-4 rounded-md font-montserratRegular flex justify-center items-center w-fit self-center ${
                  message === ApiResponse.CREATION_SUCCESS
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {message === ApiResponse.CREATION_SUCCESS
                  ? "Contact Request Created Successfully"
                  : "Error Creating Contact Request"}
              </div>
            )}
            <FormButton
              disabled={!dirty || !isValid}
              label={"Submit"}
              loading={isLoading || isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
