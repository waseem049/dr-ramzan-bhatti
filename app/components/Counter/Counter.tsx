import { AnimatedNumber } from "@/components";

export const Counter = () => {
  return (
    <div className="w-full py-3 lg:py-12">
      <div className="w-full bg-primary px-5 lg:px-16 flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-evenly lg:items-center py-4 lg:py-8">
        <div className="w-[1/5] lg:p-6  flex flex-col items-center">
          <h1 className="font-poppinsSemiBold text-[64px] text-white">
            <AnimatedNumber value={10} />+
          </h1>
          <p className="font-montserratSemibold text-[16px]">
            Years Of Experience
          </p>
        </div>
        <div className="w-[1/5] lg:p-6 flex flex-col items-center">
          <h1 className="font-poppinsSemiBold text-[64px] text-white">
            <AnimatedNumber value={35000} />+
          </h1>
          <p className="font-montserratSemibold text-[16px]">Happy Patients</p>
        </div>
        <div className="w-[1/5] lg:p-6  flex flex-col items-center">
          <h1 className="font-poppinsSemiBold text-[64px] text-white">
            <AnimatedNumber value={20000} />+
          </h1>
          <p className="font-montserratSemibold text-[16px]">
            Orthopedic Procedures
          </p>
        </div>
        <div className="w-[1/5] lg:p-6  flex flex-col items-center">
          <h1 className="font-poppinsSemiBold text-[64px] text-white">
            <AnimatedNumber value={3000} />+
          </h1>
          <p className="font-montserratSemibold text-[16px]">
            Knee Replacement Surgeries
          </p>
        </div>
        <div className="w-[1/5] lg:p-6  flex flex-col items-center">
          <h1 className="font-poppinsSemiBold text-[64px] text-white">
            <AnimatedNumber value={4000} />+
          </h1>
          <p className="font-montserratSemibold text-[16px]">
            Hip Replacement Surgeries
          </p>
        </div>
      </div>
    </div>
  );
};
