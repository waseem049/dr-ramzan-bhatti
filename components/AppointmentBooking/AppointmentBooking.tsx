"use client";
import { useState } from "react";
import { Icon } from "../Icon";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputBox, TextArea } from "@/components";
import { ClinicsData, TreatmentsList } from "@/utils/constants";
import { useAppointmentBooking } from "@/contexts/AppointmentBookingContext";

type AppointmentFormValues = {
  fullName: string;
  email: string;
  phone: string;
  clinic: { label: string; value: string } | null;
  treatment: { label: string; value: string } | null;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  clinic: Yup.object().nullable().required("Please select a clinic"),
  treatment: Yup.object().nullable().required("Please select a treatment"),
  preferredDate: Yup.string().required("Please select a date"),
  preferredTime: Yup.string().required("Please select a time"),
  message: Yup.string(),
});

const initialValues: AppointmentFormValues = {
  fullName: "",
  email: "",
  phone: "",
  clinic: null,
  treatment: null,
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export const AppointmentBooking = () => {
  const { isOpen, closeModal } = useAppointmentBooking();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const clinicOptions = ClinicsData.map((clinic) => ({
    label: clinic.name,
    value: clinic.slug,
  }));

  const treatmentOptions = TreatmentsList.map((treatment) => ({
    label: treatment.treatment,
    value: treatment.treatment.toLowerCase().replace(/\s+/g, "-"),
  }));

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
    "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"
  ];

  const handleSubmit = async (values: AppointmentFormValues) => {
    console.log("Appointment booking:", values);
    setIsSubmitted(true);
    setTimeout(() => {
      closeModal();
      setIsSubmitted(false);
      setStep(1);
    }, 3000);
  };

  // Get tomorrow's date as minimum selectable date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/80 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon iconName="calendar" className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-montserratBold">Book Your Appointment</h2>
                    <p className="text-white/80 text-sm font-poppinsRegular">Step {step} of 2</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon iconName="times" className="text-xl" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 2) * 100}%` }}
                />
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12 animate-fadeInUp">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <Icon iconName="check" className="text-green-600 text-4xl" />
                  </div>
                  <h3 className="text-2xl font-montserratBold text-gray-900 mb-3">
                    Appointment Requested!
                  </h3>
                  <p className="text-gray-600 font-poppinsRegular mb-6">
                    Thank you! We&apos;ll confirm your appointment shortly via email or phone.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-montserratSemibold">
                    <Icon iconName="clock" />
                    <span>Our team will contact you within 2 hours</span>
                  </div>
                </div>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, setFieldValue, isValid, dirty }) => (
                    <Form className="space-y-6">
                      
                      {/* Step 1: Personal Information */}
                      {step === 1 && (
                        <div className="space-y-6 animate-fadeInUp">
                          <div className="bg-primary/5 rounded-xl p-4 flex items-start gap-3">
                            <Icon iconName="info" className="text-primary mt-1" />
                            <p className="text-sm text-gray-700 font-poppinsRegular">
                              Please provide your contact details. All information is kept confidential.
                            </p>
                          </div>

                          <InputBox
                            label="Full Name"
                            name="fullName"
                            placeholder="Enter your full name"
                          />

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

                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              disabled={!values.fullName || !values.email || !values.phone}
                              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-montserratBold transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed group"
                            >
                              <span>Continue</span>
                              <Icon iconName="arrow-right" className="group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Appointment Details */}
                      {step === 2 && (
                        <div className="space-y-6 animate-fadeInUp">
                          <div className="bg-primary/5 rounded-xl p-4 flex items-start gap-3">
                            <Icon iconName="calendar" className="text-primary mt-1" />
                            <p className="text-sm text-gray-700 font-poppinsRegular">
                              Select your preferred clinic, treatment, date and time.
                            </p>
                          </div>

                          <div>
                            <label className="block text-sm font-montserratSemibold text-gray-700 mb-2">
                              Select Clinic <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="clinic"
                              value={values.clinic?.value || ""}
                              onChange={(e) => {
                                const selected = clinicOptions.find(c => c.value === e.target.value);
                                setFieldValue("clinic", selected || null);
                              }}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-poppinsRegular"
                            >
                              <option value="">Choose a clinic location</option>
                              {clinicOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-montserratSemibold text-gray-700 mb-2">
                              Treatment Type <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="treatment"
                              value={values.treatment?.value || ""}
                              onChange={(e) => {
                                const selected = treatmentOptions.find(t => t.value === e.target.value);
                                setFieldValue("treatment", selected || null);
                              }}
                              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-poppinsRegular"
                            >
                              <option value="">Choose a treatment</option>
                              {treatmentOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
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
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-poppinsRegular"
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
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-poppinsRegular"
                              >
                                <option value="">Select time</option>
                                {timeSlots.map((time) => (
                                  <option key={time} value={time}>{time}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <TextArea
                            label="Additional Message (Optional)"
                            name="message"
                            placeholder="Any specific concerns or questions you'd like to discuss..."
                            rows={4}
                          />

                          <div className="flex justify-between gap-4">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-montserratBold transition-all duration-300"
                            >
                              <Icon iconName="arrow-left" />
                              <span>Back</span>
                            </button>

                            <button
                              type="submit"
                              disabled={!isValid || !dirty}
                              className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-3 rounded-full font-montserratBold transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-lg hover:shadow-xl group"
                            >
                              <Icon iconName="check" />
                              <span>Confirm Booking</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </Form>
                  )}
                </Formik>
              )}
            </div>

            {/* Modal Footer */}
            {!isSubmitted && (
              <div className="bg-gray-50 px-8 py-6 rounded-b-3xl border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600 font-poppinsRegular">
                    <Icon iconName="lock" className="text-primary" />
                    <span>Your information is secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 font-poppinsRegular">
                    <Icon iconName="phone" className="text-primary" />
                    <span>Call: +91 9876543210</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
