"use client";
import Link from "next/link";
import { Icon } from "../Icon";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
    return null;
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const locations = [
    {
      name: "BoneSense Joint Care Clinic",
      address: "PC Depot, Parimpora, Srinagar, J&K",
      // timing: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    {
      name: "Kawoosa Hospital",
      address: "Umerabad, Srinagar, J&K",
      // timing: "Mon-Fri: 10:00 AM - 5:00 PM",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/", icon: "home" },
    { name: "About", href: "/about", icon: "about" },
    { name: "Blogs", href: "/blogs", icon: "blog" },
    { name: "Contact", href: "/contact-us", icon: "email" },
  ];

  const services = [
    "Joint Replacement",
    "Arthroscopic Surgery",
    "Hip Replacement",
    "Knee Replacement",
    "Trauma Care",
    "Deformity Correction",
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - Improved Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 mb-12">
              {/* Brand & About - Full width on mobile, spans 2 cols on xl */}
              <div className="md:col-span-2 xl:col-span-1 space-y-6">
                <div className="space-y-4">
                  {/* Logo - Responsive sizing */}
                  <div className="flex items-center">
                    <div
                      className="w-40 h-12 lg:w-48 lg:h-14 xl:w-52 xl:h-16 bg-contain bg-no-repeat bg-left"
                      style={{ backgroundImage: "url(/svgs/logo_white.svg)" }}
                    />
                  </div>

                  <div>
                    <h2 className="text-lg lg:text-xl font-montserratBold text-white mb-2">
                      Dr. Jibran Bashir
                    </h2>
                    <p className="text-sm text-gray-400 font-poppinsRegular mb-1">
                      Consultant Orthopedic Surgeon
                    </p>
                    <p className="text-gray-300 font-poppinsRegular text-sm leading-relaxed">
                      Leading orthopedic surgeon specializing in robotic joint
                      replacement and advanced surgical techniques.
                    </p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="space-y-3">
                  <h3 className="text-white font-montserratSemibold text-sm uppercase tracking-wider">
                    Credentials
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["MBBS", "D.Ortho", "DNB", "MNAMS"].map(
                      (credential, index) => (
                        <span
                          key={index}
                          className="bg-primary/20 text-primary font-montserratSemibold text-xs px-2 py-1 rounded-full"
                        >
                          {credential}
                        </span>
                      )
                    )}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Fellowship in Hip Arthroplasty & Advanced Knee Arthroscopy,
                    Germany
                  </p>
                </div>
              </div>

              {/* Quick Links & Services */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-white font-montserratBold text-lg">
                    Quick Links
                  </h3>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>

                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
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
                  <h4 className="text-white font-montserratSemibold text-sm uppercase tracking-wider">
                    Services
                  </h4>
                  <div className="space-y-2">
                    {services.slice(0, 4).map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-gray-400 font-poppinsRegular text-sm">
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
                  <h3 className="text-white font-montserratBold text-lg">
                    Contact Info
                  </h3>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>

                {/* Primary Contact */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon iconName="phone" className="text-primary text-xs" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href="tel:+918491049816"
                        className="text-white font-montserratSemibold hover:text-primary transition-colors duration-300 text-sm block"
                      >
                        +91-8491049816
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon iconName="phone" className="text-primary text-xs" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href="tel:+918491999816"
                        className="text-white font-montserratSemibold hover:text-primary transition-colors duration-300 text-sm block"
                      >
                        +91-8491999816
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 hidden">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon iconName="email" className="text-primary text-xs" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link
                        href="mailto:hello@drjibranbashir.com"
                        className="text-white font-montserratSemibold hover:text-primary transition-colors duration-300 text-sm block break-all"
                      >
                        hello@drjibranbashir.com
                      </Link>
                      <p className="text-gray-400 text-xs">General Inquiries</p>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-3">
                  <h4 className="text-white font-montserratSemibold text-sm uppercase tracking-wider">
                    Locations
                  </h4>
                  <div className="space-y-3">
                    {locations.map((location, index) => (
                      <div key={index} className="group">
                        <div className="flex items-start gap-2">
                          <Icon
                            iconName="location"
                            className="text-primary mt-1 flex-shrink-0 text-xs"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-white font-montserratSemibold text-sm group-hover:text-primary transition-colors duration-300">
                              {location.name}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {location.address}
                            </p>
                            {/* <p className="text-gray-500 text-xs">
                              {location.timing}
                            </p> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter & Emergency */}
              <div className="space-y-6 hidden">
                <div className="space-y-3">
                  <h3 className="text-white font-montserratBold text-lg">
                    Stay Connected
                  </h3>
                  <div className="w-12 h-1 bg-primary rounded-full" />
                </div>

                {/* Newsletter */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <h4 className="text-white font-montserratSemibold text-sm mb-2">
                    Newsletter
                  </h4>
                  <p className="text-gray-400 text-xs mb-4">
                    Get medical insights & health tips
                  </p>

                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-montserratSemibold py-2 rounded-lg transition-all duration-300 text-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                {/* Professional Affiliations */}
                <div className="space-y-3">
                  <h4 className="text-white font-montserratSemibold text-sm uppercase tracking-wider">
                    Affiliations
                  </h4>
                  <div className="space-y-1">
                    {[
                      "AO Switzerland",
                      "British Orthopaedic Society",
                      "ISAKOS",
                      "SICOT Belgium",
                    ].map((org, index) => (
                      <div
                        key={index}
                        className="text-gray-400 font-poppinsRegular text-xs"
                      >
                        • {org}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Notice */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon iconName="phone" className="text-red-400 text-xs" />
                    <span className="text-red-400 font-montserratBold text-xs uppercase">
                      Emergency
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    For emergencies, call immediately or visit nearest ER.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8" />

            {/* Bottom Section - Improved Responsive Layout */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
              {/* Copyright */}
              <div className="text-center lg:text-left flex-1">
                <p className="text-gray-400 font-poppinsRegular text-sm">
                  © {new Date().getFullYear()} Dr. Jibran Bashir. All Rights
                  Reserved.
                </p>
                <p className="text-gray-500 font-poppinsRegular text-xs mt-1">
                  Leading Orthopedic Care • RWTH Fellowship • Robotic Surgery
                </p>
              </div>

              {/* Trust Indicators - Responsive */}
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 lg:gap-6">
                <div className="flex items-center gap-2">
                  <Icon iconName="about" className="text-primary text-xs" />
                  <span className="text-gray-400 font-montserratSemibold text-xs">
                    Board Certified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon iconName="home" className="text-primary text-xs" />
                  <span className="text-gray-400 font-montserratSemibold text-xs">
                    10+ Years
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon iconName="calendar" className="text-primary text-xs" />
                  <span className="text-gray-400 font-montserratSemibold text-xs">
                    Fellowship Trained
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
      </div>
    </footer>
  );
};
