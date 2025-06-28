import { Icon } from "@/components";

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
  // Generate star rating (for demo, using 5 stars)
  const rating = 5;

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-primary/20 overflow-hidden h-full flex flex-col">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <svg
          className="w-8 h-8 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      {/* Patient Info Header */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="relative">
          <div
            className="w-16 h-16 lg:w-20 lg:h-20 bg-cover bg-center rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${displayPicture})` }}
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-montserratBold text-gray-900 text-lg lg:text-xl group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-600 font-poppinsRegular text-sm lg:text-base mb-2">
            {treatmentReceived}
          </p>

          {/* Star Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-gray-500 text-xs ml-1">({rating}.0)</span>
          </div>
        </div>
      </div>

      {/* Feedback Content */}
      <div className="flex-1 relative z-10">
        <p className="text-gray-700 font-poppinsRegular text-base lg:text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          {`"${feedback}"`}
        </p>
      </div>

      {/* Treatment Badge */}
      <div className="mt-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-montserratSemibold text-xs px-3 py-1 rounded-full">
          <Icon iconName="about" className="text-primary" />
          <span>Verified Patient</span>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-3/4 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full transition-all duration-500" />
    </div>
  );
};
