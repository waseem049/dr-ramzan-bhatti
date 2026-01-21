"use client";
import { Icon } from "@/components";
import { TreatmentsList } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { useAppointmentBooking } from "@/contexts/AppointmentBookingContext";

export default function TreatmentsPage() {
  const { openModal } = useAppointmentBooking();
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Background Elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative z-10 text-center animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Icon iconName="star" className="text-primary" />
              <span className="text-primary text-xs font-montserratSemibold uppercase tracking-widest">
                Premium Treatments
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-montserratBold text-gray-900 mb-6 tracking-tight">
              Advanced Dermatology
              <span className="block text-primary">Treatments & Solutions</span>
            </h1>

            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />

            <p className="text-lg lg:text-xl text-gray-600 font-poppinsRegular leading-relaxed max-w-3xl mx-auto">
              Discover our comprehensive range of medical-grade dermatology treatments, 
              powered by state-of-the-art technology and over 10 years of clinical expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="py-16 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fadeInUp">
            {[
              { number: "8+", label: "Treatments" },
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Happy Patients" },
              { number: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group">
                <p className="text-3xl lg:text-4xl font-montserratBold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-600 font-montserratSemibold uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Treatments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TreatmentsList.map((treatment, index) => {
              const slug = treatment.treatment.toLowerCase().replace(/\s+/g, "-");
              
              return (
                <Link
                  key={index}
                  href={`/treatments/${slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                    <Image
                      src="/images/hero-bg.png"
                      alt={treatment.treatment}
                      fill
                      className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                      <Icon iconName="star" className="text-primary text-xs" />
                      <span className="text-xs font-montserratBold text-gray-900">Popular</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-montserratBold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {treatment.treatment}
                    </h3>
                    
                    <p className="text-gray-600 font-poppinsRegular leading-relaxed mb-6 line-clamp-3">
                      {treatment.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {[
                        "Medical-grade treatment",
                        "FDA-approved procedures",
                        "Minimal downtime"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon iconName="check" className="text-primary text-xs" />
                          </div>
                          <span className="font-poppinsRegular">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-primary font-montserratBold text-sm group-hover:underline">
                        Learn More
                      </span>
                      <div className="w-10 h-10 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300">
                        <Icon 
                          iconName="arrow-right" 
                          className="text-primary group-hover:text-white group-hover:translate-x-1 transition-all" 
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-16 text-center text-white shadow-2xl animate-fadeInUp">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon iconName="calendar" className="text-3xl" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-montserratBold mb-4">
                Not Sure Which Treatment is Right for You?
              </h2>
              
              <p className="text-lg text-white/90 font-poppinsRegular mb-8">
                Book a free consultation with Dr. Ramzan Bhatti to discuss your skin concerns 
                and get personalized treatment recommendations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-montserratBold hover:bg-gray-100 transition-all duration-300 shadow-xl group"
                >
                  <Icon iconName="calendar" />
                  <span>Book Free Consultation</span>
                  <Icon iconName="arrow-right" className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-montserratBold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon iconName="phone" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-4 lg:px-16 bg-gradient-to-br from-gray-50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-5xl font-montserratBold text-gray-900 mb-4">
              Why Choose Our Clinic?
            </h2>
            <p className="text-lg text-gray-600 font-poppinsRegular max-w-2xl mx-auto">
              We combine medical excellence with personalized care to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "shield",
                title: "FDA Approved",
                description: "All treatments use FDA-approved equipment and procedures"
              },
              {
                icon: "user",
                title: "Expert Care",
                description: "Over 10 years of specialized dermatology experience"
              },
              {
                icon: "star",
                title: "Proven Results",
                description: "95% patient satisfaction rate with visible improvements"
              },
              {
                icon: "clock",
                title: "Minimal Downtime",
                description: "Advanced techniques ensure quick recovery times"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300">
                  <Icon iconName={item.icon} className="text-primary group-hover:text-white text-2xl transition-colors" />
                </div>
                <h3 className="text-xl font-montserratBold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-poppinsRegular leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
