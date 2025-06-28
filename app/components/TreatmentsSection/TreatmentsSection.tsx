import { TreatmentCard } from "@/components";
import { TreatmentsList } from "@/utils/constants";
import { Icon } from "@/components";

export const TreatmentsSection = () => {
  // Featured treatments (first 3)
  const featuredTreatments = TreatmentsList.slice(0, 3);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-12 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-montserratSemibold uppercase tracking-wider">
              Our Specialties
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 mb-6">
            Advanced Orthopedic
            <span className="block text-primary">Treatments</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg lg:text-xl text-gray-600 font-poppinsRegular leading-relaxed max-w-4xl mx-auto">
            From complex joint replacements to minimally invasive procedures, we
            offer cutting-edge orthopedic treatments using state-of-the-art
            technology and advanced surgical techniques, delivering exceptional
            patient-centered care with optimal outcomes.
          </p>
        </div>

        {/* Featured Treatments */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Icon iconName="about" className="text-primary" size="lg" />
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900">
              Featured Procedures
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredTreatments.map((treatment, index) => (
              <div key={index} className="group">
                <TreatmentCard
                  treatment={treatment.treatment}
                  description={treatment.description}
                  icon={treatment.icon}
                  featured={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* All Treatments Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Icon iconName="home" className="text-primary" size="lg" />
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900">
              Complete Treatment Portfolio
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TreatmentsList.map((treatment, index) => (
              <div key={index} className="group">
                <TreatmentCard
                  treatment={treatment.treatment}
                  description={treatment.description}
                  icon={treatment.icon}
                  featured={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Technology & Expertise Banner */}
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon iconName="about" className="text-primary" size="lg" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900">
                  Advanced Technology
                </h3>
              </div>

              <p className="text-gray-700 font-poppinsRegular text-base lg:text-lg leading-relaxed">
                Our practice utilizes the latest in orthopedic technology
                including robotic-assisted surgery, 3D navigation systems, and
                minimally invasive techniques to ensure the highest precision
                and best outcomes for our patients.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Robotic Surgery",
                  "3D Navigation",
                  "Minimally Invasive",
                  "Advanced Imaging",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary font-montserratSemibold text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "98%", label: "Success Rate" },
                { number: "24/7", label: "Emergency Care" },
                { number: "15+", label: "Procedures Offered" },
                { number: "5★", label: "Patient Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-md"
                >
                  <div className="text-2xl lg:text-3xl font-montserratBold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-poppinsRegular text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900 mb-4">
              Ready to Start Your Recovery Journey?
            </h3>
            <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Jibran Bashir to discuss your
              treatment options and develop a personalized care plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <Icon
                  iconName="calendar"
                  className="text-white group-hover:animate-pulse"
                />
                <span>Book Consultation</span>
              </button>

              <button className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border-2 border-primary text-primary font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300">
                <Icon iconName="phone" className="text-primary" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
