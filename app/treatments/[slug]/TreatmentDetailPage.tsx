"use client";
import { Icon } from "@/components";
import Link from "next/link";
import Image from "next/image";
import { useAppointmentBooking } from "@/contexts/AppointmentBookingContext";

type Treatment = {
  treatment: string;
  description: string;
};

type Props = {
  treatment: Treatment;
};

export const TreatmentDetailPage = ({ treatment }: Props) => {
  const { openModal } = useAppointmentBooking();
  const benefits = [
    "Advanced medical-grade treatment protocols",
    "Personalized care plans tailored to your needs",
    "State-of-the-art equipment and technology",
    "Minimal downtime and quick recovery",
    "FDA-approved procedures and products",
    "Follow-up care and support included",
  ];

  const faqs = [
    {
      question: "How many sessions will I need?",
      answer: "The number of sessions varies based on your individual condition and desired results. Typically, patients see significant improvement within 3-6 sessions.",
    },
    {
      question: "Is the treatment painful?",
      answer: "Most patients experience minimal discomfort. We use advanced techniques and numbing options to ensure your comfort throughout the procedure.",
    },
    {
      question: "What is the recovery time?",
      answer: "Recovery time varies by treatment type, but most procedures have minimal downtime. You can typically return to normal activities within 24-48 hours.",
    },
    {
      question: "Are the results permanent?",
      answer: "Results longevity depends on the treatment type and proper aftercare. Many treatments offer long-lasting results, with maintenance sessions recommended.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 lg:px-16 bg-gradient-to-br from-primary/10 via-white to-transparent">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 font-poppinsRegular animate-fadeInUp">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Icon iconName="caretRight" className="text-xs" />
            <Link href="/treatments" className="hover:text-primary transition-colors">Treatments</Link>
            <Icon iconName="caretRight" className="text-xs" />
            <span className="text-gray-900 font-montserratSemibold">{treatment.treatment}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <Icon iconName="star" className="text-primary" />
                <span className="text-primary font-montserratSemibold text-xs tracking-widest uppercase">
                  Premium Treatment
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-montserratBold text-gray-900 leading-tight">
                {treatment.treatment}
              </h1>

              <p className="text-xl text-gray-600 font-poppinsRegular leading-relaxed">
                {treatment.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-montserratBold transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  <Icon iconName="calendar" />
                  <span>Book Consultation</span>
                  <Icon iconName="arrow-right" className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-montserratBold border-2 border-gray-200 hover:border-primary/30 transition-all duration-300"
                >
                  <Icon iconName="phone" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white animate-fadeInUp delay-200">
              <Image
                src="/images/hero-bg.png"
                alt={treatment.treatment}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About This Treatment */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 animate-fadeInUp">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon iconName="info" className="text-primary text-xl" />
                  </div>
                  <h2 className="text-3xl font-montserratBold text-gray-900">
                    About This Treatment
                  </h2>
                </div>

                <div className="space-y-4 text-gray-700 font-poppinsRegular leading-relaxed">
                  <p>
                    {treatment.description} Our clinic uses the latest technology and proven medical techniques 
                    to deliver exceptional results with your safety and comfort as our top priority.
                  </p>
                  <p>
                    Dr. Ramzan Bhatti brings over 10 years of specialized experience in dermatology and laser 
                    treatments, ensuring you receive world-class care tailored to your unique skin needs.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-3xl p-8 lg:p-12 border border-primary/10 animate-fadeInUp">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon iconName="check" className="text-white text-xl" />
                  </div>
                  <h2 className="text-3xl font-montserratBold text-gray-900">
                    Treatment Benefits
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="mt-1 w-6 h-6 bg-primary/10 group-hover:bg-primary rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon iconName="check" className="text-primary group-hover:text-white text-sm transition-colors" />
                      </div>
                      <p className="text-gray-700 font-poppinsRegular">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="animate-fadeInUp">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon iconName="question" className="text-primary text-xl" />
                  </div>
                  <h2 className="text-3xl font-montserratBold text-gray-900">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                      <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                        <h3 className="text-lg font-montserratBold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <Icon iconName="caretDown" className="text-primary text-xl group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 font-poppinsRegular leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Quick Info Card */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 sticky top-24 animate-fadeInUp delay-200">
                <h3 className="text-xl font-montserratBold text-gray-900 mb-6">
                  Quick Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon iconName="clock" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-montserratSemibold text-gray-900 mb-1">Session Duration</p>
                      <p className="text-sm text-gray-600 font-poppinsRegular">30-60 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon iconName="refresh" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-montserratSemibold text-gray-900 mb-1">Recovery Time</p>
                      <p className="text-sm text-gray-600 font-poppinsRegular">Minimal to none</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon iconName="calendar" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-montserratSemibold text-gray-900 mb-1">Sessions Needed</p>
                      <p className="text-sm text-gray-600 font-poppinsRegular">3-6 typically</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon iconName="star" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-montserratSemibold text-gray-900 mb-1">Results Visible</p>
                      <p className="text-sm text-gray-600 font-poppinsRegular">2-4 weeks</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <button
                    onClick={openModal}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-full font-montserratBold transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <Icon iconName="calendar" />
                    <span>Schedule Now</span>
                    <Icon iconName="arrow-right" className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl p-8 shadow-xl animate-fadeInUp delay-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon iconName="phone" className="text-xl" />
                  </div>
                  <h3 className="text-lg font-montserratBold">Have Questions?</h3>
                </div>
                <p className="text-white/80 text-sm font-poppinsRegular mb-6">
                  Our team is here to help you understand your treatment options.
                </p>
                <a
                  href="tel:+919876543210"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-montserratBold hover:bg-gray-50 transition-all duration-300"
                >
                  <Icon iconName="phone" />
                  <span>+91 9876543210</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 lg:px-16 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserratBold text-gray-900 mb-6">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl text-gray-600 font-poppinsRegular mb-8">
            Book a consultation with Dr. Ramzan Bhatti and take the first step toward radiant, healthy skin.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-montserratBold text-lg transition-all duration-300 shadow-2xl hover:shadow-primary/50 group"
          >
            <Icon iconName="calendar" className="text-2xl" />
            <span>Book Your Consultation</span>
            <Icon iconName="arrow-right" className="text-xl group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
