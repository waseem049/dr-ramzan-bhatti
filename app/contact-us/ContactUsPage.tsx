import { ContactUsForm } from "./components/ContactUsForm";

export const ContactUsPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-backgroundBlue via-lightPrimary/10 to-backgroundBlue px-4 pt-20 pb-8 lg:pt-[15vh] md:pb-20">
      <div className="w-full md:w-[80%] lg:w-[40%] flex flex-col gap-6 md:gap-8">
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="font-poppinsBold text-3xl md:text-4xl lg:text-5xl text-background">
            Get in Touch
          </h1>
          <p className="font-montserratRegular text-lightGrey text-base md:text-lg px-2 md:px-0 max-w-2xl mx-auto">
            {`Have questions or want to discuss a project? Fill out the form below
            and we'll get back to you shortly.`}
          </p>
        </div>

        <div className="bg-foreground shadow-lg p-4 md:p-6 lg:p-12 rounded-xl relative">
          {/* Subtle gradient overlay on the form container */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-lg" />

          <div className="relative">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};
