"use client";
import Link from "next/link";
import { Icon } from "../Icon";
import { usePathname } from "next/navigation";
// import { useState } from "react";

export const Footer = () => {
  const pathname = usePathname();
  // const [email, setEmail] = useState("");

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  // const handleNewsletterSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle newsletter subscription
  //   console.log("Newsletter subscription:", email);
  //   setEmail("");
  // };

  const locations = [
    {
      name: "Dr. Ramzan Skin Clinic",
      address: "Clinic Address, City",
      href: "#",
      // timing: "Mon-Sat: 10:00 AM - 7:00 PM",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/", icon: "home" },
    { name: "About", href: "/about", icon: "about" },
    { name: "Services", href: "/#treatments", icon: "blog" }, // Changed to anchor for now or keep /blogs if valid
    { name: "Contact", href: "/contact-us", icon: "email" },
  ];

  const services = [
    "Laser Hair Removal",
    "Acne Treatment",
    "Anti-Aging",
    "Pigmentation",
    "HydraFacial",
    "Skin Rejuvenation",
  ];

  return (
    <footer className="w-full bg-[#f8f5f2] relative overflow-hidden border-t border-primary/10">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - Improved Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 mb-12">
              {/* Brand & About */}
              <div className="md:col-span-2 xl:col-span-1 space-y-6">
                <div className="space-y-4">
                  {/* Logo - Text based for now or placeholder */}
                  <div className="flex items-center">
                    <h2 className="text-2xl font-montserratBold text-gray-900">
                      Dr. Ramzan <span className="text-primary">Bhatti</span>
                    </h2>
                  </div>

                  <div>
                    <p className="text-sm text-primary font-montserratSemibold mb-1 uppercase tracking-wider">
                      Dermatologist & Laser Specialist
                    </p>
                    <p className="text-gray-600 font-poppinsRegular text-sm leading-relaxed">
                      Dedicated to restoring skin health and confidence through advanced dermatological and aesthetic treatments.
                    </p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="space-y-3">
                  <h3 className="text-gray-900 font-montserratSemibold text-sm uppercase tracking-wider">
                    Credentials
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["MD", "FAM", "IADVL"].map(
                      (credential, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary font-montserratSemibold text-xs px-2 py-1 rounded-full"
                        >
                          {credential}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Links & Services */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-gray-900 font-montserratBold text-lg">
                    Quick Links
                  </h3>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>

                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-600 hover:text-primary transition-colors duration-300"
                    >
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                        <Icon
                          iconName={link.icon}
                          className="text-primary text-xs"
                        />
                      </div>
                      <span className="font-poppinsRegular text-sm">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Services */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-gray-900 font-montserratSemibold text-sm uppercase tracking-wider">
                    Services
                  </h4>
                  <div className="space-y-2">
                    {services.slice(0, 4).map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-gray-600 font-poppinsRegular text-sm">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-gray-900 font-montserratBold text-lg">
                    Contact Info
                  </h3>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>

                {/* Primary Contact */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon iconName="phone" className="text-primary text-xs" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href="tel:+910000000000"
                        className="text-gray-700 font-montserratSemibold hover:text-primary transition-colors duration-300 text-sm block"
                      >
                        +91-0000000000
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon iconName="email" className="text-primary text-xs" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href="mailto:info@drramzanbhatti.com"
                        className="text-gray-700 font-montserratSemibold hover:text-primary transition-colors duration-300 text-sm block break-all"
                      >
                        info@drramzanbhatti.com
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-3">
                  <h4 className="text-gray-900 font-montserratSemibold text-sm uppercase tracking-wider">
                    Locations
                  </h4>
                  <div className="space-y-3">
                    {locations.map((location, index) => (
                      <Link
                        href={location.href}
                        target="_blank"
                        key={index}
                        className="group"
                      >
                        <div className="flex items-start gap-2">
                          <Icon
                            iconName="location"
                            className="text-primary mt-1 flex-shrink-0 text-xs"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-gray-700 font-montserratSemibold text-sm group-hover:text-primary transition-colors duration-300">
                              {location.name}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {location.address}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-gray-900 font-montserratBold text-lg">
                    Socials
                  </h3>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>
                <div className="flex gap-4">
                  {/* Add social icons if available in Icon component, else text links */}
                  <Link href="#" className="text-gray-500 hover:text-primary transition-colors">Facebook</Link>
                  <Link href="#" className="text-gray-500 hover:text-primary transition-colors">Instagram</Link>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-8" />

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
              {/* Copyright */}
              <div className="text-center lg:text-left flex-1">
                <p className="text-gray-500 font-poppinsRegular text-sm">
                  © {new Date().getFullYear()} Dr. Ramzan Bhatti. All Rights Reserved.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <Icon iconName="about" className="text-primary text-xs" />
                  <span className="text-gray-500 font-montserratSemibold text-xs">
                    Board Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
