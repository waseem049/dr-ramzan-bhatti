import { Icon } from "../Icon";

type CareerHighlightsProps = {
  heading: string;
  highlights: string[];
  isActive?: boolean;
  icon?: string;
};

export const CareerHighlightsCard = ({
  heading,
  highlights,
  isActive = false,
  icon = "about",
}: CareerHighlightsProps) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 border border-gray-100 hover:border-primary/20 overflow-hidden ${
        isActive ? "ring-2 ring-primary/20 shadow-xl" : ""
      }`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isActive
              ? "bg-primary text-white"
              : "bg-primary/10 text-primary group-hover:bg-primary/20"
          }`}
        >
          <Icon
            iconName={icon}
            className={isActive ? "text-white" : "text-primary"}
          />
        </div>

        <div className="flex-1">
          <h3
            className={`text-xl lg:text-2xl font-montserratBold transition-colors duration-300 ${
              isActive
                ? "text-primary"
                : "text-gray-900 group-hover:text-primary"
            }`}
          >
            {heading}
          </h3>
          <div
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-primary w-16"
                : "bg-gray-200 group-hover:bg-primary group-hover:w-16"
            }`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 relative z-10">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="flex items-start gap-3 group/item hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
            <p className="text-gray-700 font-poppinsRegular text-base lg:text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors duration-300">
              {highlight}
            </p>
          </div>
        ))}
      </div>

      {/* Active Indicator */}
      {isActive && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full" />
      )}

      {/* Hover Effect Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};
