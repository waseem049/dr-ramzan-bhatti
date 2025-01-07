import { TreatmentCard } from "@/components";
import { TreatmentsList } from "@/utils/constants";

export const TreatmentsSection = () => {
  return (
    <div className="w-full px-5 lg:px-16 py-5 lg:py-16 flex flex-col gap-6 bg-backgroundBlue">
      <div className="w-full lg:w-[40%] flex flex-col gap-3 items-center lg:items-start">
        <h1 className="text-primary text-[28px] font-poppinsRegular text-center lg:text-left">
          TREATMENTS
        </h1>
        <p className="font-poppinsRegular text-[18px] lg:text-[22px] text-lightGrey text-center lg:text-left">{`
            From ingrown toenails to foot pain, we’ve developed treatments and procedures using state of the art technology and tools, resulting in a unique patient centred treatments. See our treatments.
        `}</p>
      </div>
      <div className="flex flex-row flex-wrap gap-6">
        {TreatmentsList.map((t, i) => (
          <TreatmentCard
            key={i}
            treatment={t.treatment}
            description={t.description}
            icon={t.icon}
          />
        ))}
      </div>
    </div>
  );
};
