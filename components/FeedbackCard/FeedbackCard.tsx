type FeedbackCardProps = {
  name: string;
  feedback: string;
  treatmentReceived: string;
  displayPicture: string;
};

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  name,
  feedback,
  treatmentReceived,
  displayPicture,
}) => {
  return (
    <div className="w-[100%] lg:w-[25vw] h-[60vw] lg:h-[17vw] cursor-pointer border border-primary rounded-md shadow-md p-4 lg:p-6 flex flex-col gap-6 hover:scale-[105%] transition-all duration-300 ease-in-out ">
      <div className="w-full flex flex-row gap-5 items-center">
        <div
          className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] bg-center bg-cover"
          style={{ backgroundImage: `url(${displayPicture})` }}
        />
        <div>
          <h1 className="text-[18px] lg:text-[26px] font-poppinsRegular">
            {name}
          </h1>
          <p className="text-[14px] lg:text-[16px] font-poppinsRegular">
            {treatmentReceived}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <p className="text-lightGrey font-poppinsRegular text-[16px]">
          {feedback}
        </p>
      </div>
    </div>
  );
};
