type TreatmentCardProps = {
  treatment: string;
  description: string;
  icon: string;
  featured?: boolean;
};

export const TreatmentCard: React.FC<TreatmentCardProps> = ({
  treatment,
  description,
  icon,
  featured = false,
}) => {
  return (
    <div
      className={`group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 ${
        featured
          ? "lg:hover:-translate-y-3 hover:scale-105"
          : "lg:hover:-translate-y-2 hover:scale-102"
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-primary text-white text-xs font-montserratBold px-2 py-1 rounded-full">
            FEATURED
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className={`p-6 ${featured ? "lg:p-8" : ""}`}>
        {/* Icon Section */}
        <div className="flex justify-center mb-6">
          <div
            className={`bg-gradient-to-br from-primary to-primary/20 rounded-2xl p-4 group-hover:from-primary/20 group-hover:to-primary transition-all duration-300 ${
              featured ? "w-20 h-20" : "w-16 h-16"
            }`}
          >
            <div
              style={{ backgroundImage: `url(${icon})` }}
              className={`w-full h-full bg-center bg-contain bg-no-repeat transition-transform duration-300 group-hover:scale-110 ${
                featured ? "filter-none" : ""
              }`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3
            className={`font-montserratBold text-gray-900 group-hover:text-primary transition-colors duration-300 ${
              featured ? "text-xl lg:text-2xl" : "text-lg lg:text-xl"
            }`}
          >
            {treatment}
          </h3>

          <p
            className={`text-gray-600 font-poppinsRegular leading-relaxed ${
              featured ? "text-base lg:text-lg" : "text-sm lg:text-base"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Hover Effect - Learn More */}
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center justify-center gap-2 text-primary font-montserratSemibold text-sm cursor-pointer">
            <span>Learn More</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      {featured && (
        <>
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
      )}
    </div>
  );
};
