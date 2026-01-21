"use client";
import { useState } from "react";
import { Icon } from "../Icon";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputBox, TextArea } from "@/components";

type VirtualConsultFormValues = {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  concern: string;
  preferredDate: string;
  preferredTime: string;
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  age: Yup.number().required("Age is required").positive().integer(),
  concern: Yup.string().required("Please describe your concern"),
  preferredDate: Yup.string().required("Please select a date"),
  preferredTime: Yup.string().required("Please select a time"),
});

const initialValues: VirtualConsultFormValues = {
  fullName: "",
  email: "",
  phone: "",
  age: "",
  concern: "",
  preferredDate: "",
  preferredTime: "",
};

export const VirtualConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  const handleSubmit = async (values: VirtualConsultFormValues) => {
    console.log("Virtual consultation request:", values);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <>
      {/* Virtual Consultation Banner - Shows on scroll */}
      <div className="fixed top-24 right-6 z-40 hidden lg:block animate-fadeInUp">
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icon iconName="video" className="text-2xl" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-blue-600 animate-pulse" />
          </div>
          <div className="text-left">
            <p className="font-montserratBold text-sm">Virtual Consultation</p>
            <p className="text-xs text-white/80 font-poppinsRegular">Connect from home</p>
          </div>
          <Icon iconName="caretRight" className="text-xl group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-40 right-6 z-40 w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        <Icon iconName="video" className="text-2xl group-hover:scale-110 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-blue-600 animate-pulse" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 lg:p-8 rounded-t-3xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon iconName="video" className="text-3xl" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-blue-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-montserratBold">Virtual Consultation</h2>
                    <p className="text-white/80 text-sm font-poppinsRegular">Consult from the comfort of your home</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon iconName="times" className="text-xl" />
                </button>
              </div>

              {/* Benefits Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: "check", text: "HD Video Call" },
                  { icon: "clock", text: "30 Min Session" },
                  { icon: "shield", text: "100% Private" },
                  { icon: "star", text: "Expert Advice" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-montserratSemibold">
                    <Icon iconName={benefit.icon} className="text-sm" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fadeInUp">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <Icon iconName="check" className="text-green-600 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-montserratBold text-gray-900 mb-3">
                    Virtual Consultation Booked!
                  </h3>
                  <p className="text-gray-600 font-poppinsRegular mb-6 max-w-md mx-auto">
                    We&apos;ll send you a video call link via email 10 minutes before your scheduled time.
                  </p>
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-sm text-blue-600 font-montserratSemibold bg-blue-50 px-4 py-2 rounded-full">
                      <Icon iconName="email" />
                      <span>Check your email for confirmation</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm text-gray-600 font-poppinsRegular">
                      <Icon iconName="info" className="text-primary" />
                      <span>Make sure you have a stable internet connection</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Info Banner */}
                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
                    <Icon iconName="info" className="text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-sm text-gray-700 font-poppinsRegular">
                      <p className="font-montserratSemibold text-gray-900 mb-1">What to expect:</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>30-minute one-on-one video consultation with Dr. Ramzan Bhatti</li>
                        <li>Discuss your skin concerns and get expert recommendations</li>
                        <li>Receive a personalized treatment plan</li>
                      </ul>
                    </div>
                  </div>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values, setFieldValue, isValid, dirty }) => (
                      <Form className="space-y-6">
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <InputBox
                            label="Full Name"
                            name="fullName"
                            placeholder="Enter your full name"
                          />

                          <InputBox
                            label="Age"
                            name="age"
                            type="number"
                            placeholder="Your age"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <InputBox
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                          />

                          <InputBox
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        <TextArea
                          label="Describe Your Concern"
                          name="concern"
                          placeholder="Tell us about your skin concern, symptoms, duration, etc."
                          rows={4}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-montserratSemibold text-gray-700 mb-2">
                              Preferred Date <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="date"
                              name="preferredDate"
                              min={getTomorrowDate()}
                              value={values.preferredDate}
                              onChange={(e) => setFieldValue("preferredDate", e.target.value)}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-poppinsRegular"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-montserratSemibold text-gray-700 mb-2">
                              Preferred Time <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="preferredTime"
                              value={values.preferredTime}
                              onChange={(e) => setFieldValue("preferredTime", e.target.value)}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-poppinsRegular"
                            >
                              <option value="">Select time</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>{time}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
                          <Icon iconName="exclamation" className="text-yellow-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700 font-poppinsRegular">
                            Please ensure you&apos;re in a well-lit area and have a stable internet connection for the best consultation experience.
                          </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-full font-montserratBold transition-all duration-300"
                          >
                            Cancel
                          </button>

                          <button
                            type="submit"
                            disabled={!isValid || !dirty}
                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-4 rounded-full font-montserratBold transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl group"
                          >
                            <Icon iconName="video" />
                            <span>Confirm Booking</span>
                            <Icon iconName="arrow-right" className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
