import { Icon } from "@/components";

export const AboutSection = () => {
  const achievements = [
    {
      icon: "about",
      title: "Fellowship Germany",
      description: "RWTH University Hip & Knee Expertise",
    },
    {
      icon: "calendar",
      title: "10+ Years",
      description: "Orthopedic Surgery Experience",
    },
    {
      icon: "home",
      title: "35,000+",
      description: "Successful Procedures",
    },
  ];

  const credentials = [
    "MBBS",
    "D.Ortho",
    "DNB Orthopedics",
    "MNAMS",
    "Fellowship Germany",
  ];

  return (
    <section
      className="w-full px-4 sm:px-6 lg:px-16 py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-sm font-montserratSemibold uppercase tracking-wider">
              About Dr. Jibran
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 mb-4">
            Leading Orthopedic
            <span className="block text-primary">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Main Image */}
              <div
                className="w-full h-[400px] lg:h-[600px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("/images/about_image.png")` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Credential Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="font-montserratSemibold text-gray-900">
                      Credentials
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {credentials.map((cred, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary text-xs font-montserratSemibold px-2 py-1 rounded-full"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Main Content */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900 leading-tight">
                World-Class Surgical Care &
                <span className="text-primary"> Comprehensive Treatment</span>
              </h3>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg leading-relaxed mb-4">
                  Dr. Jibran Bashir leads a distinguished orthopedic practice
                  dedicated to providing world-class surgical care and
                  comprehensive treatment solutions. With his extensive training
                  in Germany and expertise in robotic joint replacement surgery,
                  he has established himself as a pioneer in advanced orthopedic
                  procedures.
                </p>

                <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg leading-relaxed mb-4">
                  His practice embodies the perfect blend of cutting-edge
                  technology and patient-centered care, offering innovative
                  treatments for complex orthopedic conditions. Building upon
                  his impressive credentials including MBBS, D.Ortho, DNB
                  Orthopedics, and MNAMS, Dr. Jibran has developed structured
                  treatment protocols that prioritize patient safety and optimal
                  outcomes.
                </p>

                <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg leading-relaxed">
                  His expertise spans across trauma care, sports medicine, and
                  advanced joint replacement, making his practice a center of
                  excellence for patients seeking high-quality orthopedic care.
                  Through his commitment to evidence-based practices and
                  integration of the latest surgical advancements, Dr. Bashir
                  continues to set new standards in orthopedic treatment and
                  patient recovery.
                </p>
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon
                        iconName={achievement.icon}
                        className="text-primary"
                        size="lg"
                      />
                    </div>
                    <h4 className="font-montserratBold text-gray-900 text-sm">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-xs font-poppinsRegular">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Specialties */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6">
              <h4 className="font-montserratBold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Icon iconName="about" className="text-primary" />
                Areas of Expertise
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Robotic Joint Replacement",
                  "Trauma Care & Sports Medicine",
                  "Advanced Joint Replacement",
                  "Evidence-Based Practices",
                ].map((specialty, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-gray-700 font-poppinsRegular text-sm">
                      {specialty}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-montserratSemibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Icon
                  iconName="calendar"
                  className="text-white group-hover:animate-pulse"
                />
                <span>Schedule Consultation</span>
              </button>

              <button className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-primary text-primary font-montserratSemibold px-6 py-3 rounded-lg transition-all duration-300">
                <Icon iconName="phone" className="text-primary" />
                <span>Contact Dr. Bashir</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 lg:mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "10+", label: "Years Experience", icon: "calendar" },
                { number: "35K+", label: "Happy Patients", icon: "about" },
                { number: "3K+", label: "Knee Surgeries", icon: "home" },
                { number: "4K+", label: "Hip Surgeries", icon: "home" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon iconName={stat.icon} className="text-primary" />
                  </div>
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
      </div>
    </section>
  );
};
