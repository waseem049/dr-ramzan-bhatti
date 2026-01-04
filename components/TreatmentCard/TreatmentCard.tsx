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
  // Map treatment names to specific SVG icons
  const getIconSVG = () => {
    const treatmentLower = treatment.toLowerCase();

    if (treatmentLower.includes('acne') || treatmentLower.includes('scar')) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      );
    } else if (treatmentLower.includes('laser') || treatmentLower.includes('hair')) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    } else if (treatmentLower.includes('pigment') || treatmentLower.includes('melasma')) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      );
    } else if (treatmentLower.includes('tattoo')) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    } else if (treatmentLower.includes('anti-aging') || treatmentLower.includes('rejuvenation')) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    } else if (treatmentLower.includes('prp') || treatmentLower.includes('hair fall')) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    } else if (treatmentLower.includes('hydra') || treatmentLower.includes('glow')) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    } else if (treatmentLower.includes('mole') || treatmentLower.includes('wart')) {
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );
    }

    // Default medical icon
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  };

  return (
    <div
      className={`group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/20 ${featured
          ? "lg:hover:-translate-y-3 hover:scale-105"
          : "lg:hover:-translate-y-2 hover:scale-102"
        }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-primary text-white text-[10px] font-montserratBold px-2 py-0.5 rounded-full uppercase tracking-wider">
            FEATURED
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className={`p-5 ${featured ? "lg:p-6" : ""}`}>
        {/* Icon Section */}
        <div className="flex justify-center mb-5">
          <div
            className={`bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 ${featured ? "w-16 h-16" : "w-14 h-14"
              }`}
          >
            <div className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110">
              {getIconSVG()}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3
            className={`font-montserratBold text-gray-900 group-hover:text-primary transition-colors duration-300 ${featured ? "text-lg lg:text-xl" : "text-base lg:text-lg"
              }`}
          >
            {treatment}
          </h3>

          <p
            className={`text-gray-600 font-poppinsRegular leading-relaxed ${featured ? "text-sm lg:text-base" : "text-xs lg:text-sm"
              }`}
          >
            {description}
          </p>
        </div>

        {/* Hover Effect - Learn More */}
        <div className="mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center justify-center gap-2 text-primary font-montserratSemibold text-xs cursor-pointer">
            <span>Learn More</span>
            <svg
              className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
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
