import { Icon } from "@/components";
import Link from "next/link";

export const HeroSection = () => {
  const backgroundImage = "/images/hero_section_image.png";

  return (
    <div
      className="w-[100vw] h-[100vh] bg-cover bg-top bg-no-repeat flex flex-col justify-center lg:items-start items-center px-16"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="lg:w-[55%] w-full flex flex-col gap-4">
        <div className="w-full">
          <h1 className="lg:text-[74px] text-[44px] lg:text-start text-center text-white font-montserratRegular">
            Book Your
          </h1>
          <h1 className="lg:text-[74px] text-[44px] lg:text-start text-center text-white font-montserratRegular">
            Appointment
          </h1>
          <h1 className="lg:text-[74px] text-[44px] lg:text-start text-center text-white font-montserratRegular">
            Now
          </h1>
        </div>
        <h1 className="text-white font-montserratRegular lg:text-[28px] text-[18px] lg:text-start text-center">
          A Healthier Tommorow starts: schedule your appointment! Your wellness
          our expertise: Setup Your account today!
        </h1>
        <div className="flex flex-row lg:justify-start justify-center gap-5">
          <div className="bg-primary hover:bg-gray-400 flex flex-row items-center gap-2 px-4 py-2 rounded-sm">
            <Icon iconName="phone" className="text-white" />
            <Link
              href={"/contact-us"}
              className=" text-white font-montserratRegular text-[18px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
