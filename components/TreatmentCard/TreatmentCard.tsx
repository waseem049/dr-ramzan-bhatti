type TreatmentCardProps = {
  treatment: string;
  description: string;
  icon: string;
};

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  treatment,
  description,
  icon,
}) => {
  return (
    <div className="p-4 rounded-md shadow-md flex flex-row items-center gap-3 w-full lg:w-[29vw] lg:hover:-translate-y-2 cursor-pointer transition-all duration-300 ease-in-out">
      <div className="flex flex-col gap-3">
        <h1 className="font-poppinsRegular text-black text-[28px]">
          {treatment}
        </h1>
        <p className="font-poppinsRegular text-lightGrey text-[16px]">
          {description}
        </p>
      </div>
      <div className="bg-primary rounded-md flex justify-center items-center min-w-[25vw] min-h-[25vw] max-w-[25vw] max-h-[25vw] lg:min-w-[7vw]  lg:min-h-[7vw] lg:max-w-[7vw] lg:max-h-[7vw] ">
        <div
          style={{ backgroundImage: `url(${icon})` }}
          className="w-[20vw] h-[20vw] lg:w-[5vw] lg:h-[5vw] bg-center bg-cover"
        />
      </div>
    </div>
  );
};
