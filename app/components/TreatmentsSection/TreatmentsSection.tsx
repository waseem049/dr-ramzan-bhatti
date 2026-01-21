"use client";
import { TreatmentCard } from "@/components";
import { TreatmentsList } from "@/utils/constants";
import { Icon } from "@/components";
import Link from "next/link";
import { useAppointmentBooking } from "@/contexts/AppointmentBookingContext";

export const TreatmentsSection = () => {
  const { openModal } = useAppointmentBooking();
  // Featured treatments (first 3)
  const featuredTreatments = TreatmentsList.slice(0, 3);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-16 py-20 lg:py-24 bg-gradient-to-br from-skin-lightest via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Refined Typography */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs font-montserratSemibold uppercase tracking-widest">
              Our Specialties
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-montserratBold text-gray-900 mb-5 tracking-tight">
            Advanced Skin & Laser
            <span className="block text-primary">Treatments</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto rounded-full mb-5" />
          <p className="text-base lg:text-lg text-gray-600 font-poppinsRegular leading-relaxed max-w-3xl mx-auto">
            From clinical dermatology to advanced cosmetic enhancements, we
            offer cutting-edge skin treatments using state-of-the-art
            laser technology, delivering safety, rapid results, and
            patient-centered care.
          </p>
        </div>

        {/* Featured Treatments */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Icon iconName="about" className="text-primary" />
            <h3 className="text-xl lg:text-2xl font-montserratBold text-gray-900">
              Featured Procedures
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredTreatments.map((treatment, index) => (
              <div key={index} className="group">
                <TreatmentCard
                  treatment={treatment.treatment}
                  description={treatment.description}
                  featured={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* All Treatments Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Icon iconName="home" className="text-primary" />
            <h3 className="text-xl lg:text-2xl font-montserratBold text-gray-900">
              Complete Treatment Portfolio
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TreatmentsList.map((treatment, index) => (
              <div key={index} className="group">
                <TreatmentCard
                  treatment={treatment.treatment}
                  description={treatment.description}
                  featured={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Process Section - NEW */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-montserratBold text-gray-900 mb-4">
              Your Journey to Radiance
            </h3>
            <p className="text-gray-600 font-poppinsRegular max-w-2xl mx-auto">
              We ensure a smooth, comfortable, and transparent experience from your first visit to your final result.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10" />

            {[
              {
                step: "01",
                title: "Consultation",
                desc: "In-depth skin analysis and discussion of your aesthetic goals with Dr. Ramzan."
              },
              {
                step: "02",
                title: "Treatment",
                desc: "Customized procedure performed using advanced technology in a safe environment."
              },
              {
                step: "03",
                title: "Aftercare",
                desc: "Comprehensive post-treatment guidance to ensure long-lasting results."
              }
            ].map((process, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center relative group hover:-translate-y-2 transition-transform duration-500">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-montserratBold mx-auto mb-6 border-8 border-white shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h4 className="text-xl font-montserratBold text-gray-900 mb-3">{process.title}</h4>
                <p className="text-gray-500 font-poppinsRegular text-sm leading-relaxed">
                  {process.desc}
                </p>
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
                Our practice utilizes the latest in dermatological technology
                including FDA-approved lasers, radiofrequency devices, and
                advanced imaging systems to ensure the highest precision, safety,
                and best aesthetic outcomes for our patients.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Diode & CO2 Laser",
                  "Microneedling RF",
                  "Q-Switched Laser",
                  "Dermoscopy",
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
                { number: "99%", label: "Satisfaction Rate" },
                { number: "FDA", label: "Approved Tech" },
                { number: "20+", label: "Treatment Types" },
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
              Ready to Glow?
            </h3>
            <p className="text-gray-600 font-poppinsRegular text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Ramzan Bhatti to discuss your
              skin goals and develop a personalized treatment plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white font-montserratSemibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Icon
                  iconName="calendar"
                  className="text-white group-hover:animate-pulse"
                />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
