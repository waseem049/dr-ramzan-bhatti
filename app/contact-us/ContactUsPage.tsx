import { ContactUsForm } from "./components/ContactUsForm";

export const ContactUsPage = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-[80%] lg:w-[40%] bg-[rgba(0,0,0,0.5)] p-3 lg:p-12 rounded-md">
        <ContactUsForm />
      </div>
    </div>
  );
};
