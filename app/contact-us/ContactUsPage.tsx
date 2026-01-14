import { ContactUsForm } from "./components/ContactUsForm";
import { Icon } from "@/components";
import Link from "next/link";

export const ContactUsPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* Professional Header */}
      <div className="pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 mb-5">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs font-montserratSemibold uppercase tracking-widest">
              Get in Touch
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-montserratBold text-gray-900 mb-5 tracking-tight">
            Contact Dr. Ramzan Bhatti
          </h1>

          <p className="text-base lg:text-lg text-gray-600 font-poppinsRegular leading-relaxed max-w-2xl mx-auto">
            Schedule a consultation or reach out with your questions. We&apos;re here to help you achieve your skin health goals.
          </p>
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 py-12 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Column - Contact Information */}
          <div className="lg:col-span-2 space-y-12">

            <div>
              <h2 className="text-xl font-montserratBold text-gray-900 mb-8">
                Clinic Information
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon iconName="location" className="text-primary text-lg" />
                  </div>
                  <div>
                    <h3 className="font-montserratSemiBold text-sm text-gray-900 mb-1.5">Address</h3>
                    <p className="text-sm text-gray-600 font-poppinsRegular leading-relaxed">
                      123 Medical Plaza, Suite 456<br />
                      Lahore, Punjab 54000<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon iconName="phone" className="text-primary text-lg" />
                  </div>
                  <div>
                    <h3 className="font-montserratSemiBold text-sm text-gray-900 mb-1.5">Phone</h3>
                    <a href="tel:+923001234567" className="text-sm text-gray-600 font-poppinsRegular hover:text-primary transition-colors">
                      +92 300 1234567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon iconName="email" className="text-primary text-lg" />
                  </div>
                  <div>
                    <h3 className="font-montserratSemiBold text-sm text-gray-900 mb-1.5">Email</h3>
                    <a href="mailto:info@drramzanbhatti.com" className="text-sm text-gray-600 font-poppinsRegular hover:text-primary transition-colors">
                      info@drramzanbhatti.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon iconName="clock" className="text-primary text-lg" />
                  </div>
                  <div>
                    <h3 className="font-montserratSemiBold text-sm text-gray-900 mb-1.5">Hours</h3>
                    <div className="text-sm text-gray-600 font-poppinsRegular space-y-1.5">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-montserratSemiBold text-gray-900 mb-4 uppercase tracking-wider">
                Quick Actions
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/about"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors font-poppinsRegular group"
                >
                  <Icon iconName="user" className="text-gray-400 group-hover:text-primary transition-colors" />
                  <span>About Dr. Bhatti</span>
                </Link>
                <Link
                  href="/blogs"
                  className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors font-poppinsRegular group"
                >
                  <Icon iconName="blog" className="text-gray-400 group-hover:text-primary transition-colors" />
                  <span>Read Our Blog</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-xl font-montserratBold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-gray-500 font-poppinsRegular mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <ContactUsForm />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
