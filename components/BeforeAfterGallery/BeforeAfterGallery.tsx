"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "../Icon";

type BeforeAfterImage = {
  id: number;
  treatment: string;
  before: string;
  after: string;
  description: string;
};

const beforeAfterData: BeforeAfterImage[] = [
  {
    id: 1,
    treatment: "Acne Treatment",
    before: "/images/hero-bg.png",
    after: "/images/hero-bg.png",
    description: "3 months of specialized acne treatment with laser therapy"
  },
  {
    id: 2,
    treatment: "Laser Hair Removal",
    before: "/images/hero-bg.png",
    after: "/images/hero-bg.png",
    description: "6 sessions of laser hair removal treatment"
  },
  {
    id: 3,
    treatment: "Pigmentation Treatment",
    before: "/images/hero-bg.png",
    after: "/images/hero-bg.png",
    description: "Advanced pigmentation removal with Q-switched laser"
  },
  {
    id: 4,
    treatment: "Anti-Aging",
    before: "/images/hero-bg.png",
    after: "/images/hero-bg.png",
    description: "Botox and dermal fillers for facial rejuvenation"
  }
];

export const BeforeAfterGallery = () => {
  const [selectedImage, setSelectedImage] = useState<BeforeAfterImage>(beforeAfterData[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon iconName="image" className="text-primary" />
            <span className="text-primary font-montserratSemibold text-xs tracking-widest uppercase">
              Real Results
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-montserratBold text-gray-900 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-lg text-gray-600 font-poppinsRegular max-w-2xl mx-auto">
            See the transformative results our patients have achieved with our advanced treatments
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Side - Treatment Categories */}
          <div className="lg:col-span-1 space-y-3">
            {beforeAfterData.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedImage(item);
                  setSliderPosition(50);
                }}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${
                  selectedImage.id === item.id
                    ? "bg-primary border-primary text-white shadow-xl scale-105"
                    : "bg-white border-gray-100 hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    selectedImage.id === item.id
                      ? "bg-white/20"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <Icon 
                      iconName="image" 
                      className={selectedImage.id === item.id ? "text-white" : "text-primary"}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-montserratBold text-lg mb-1 ${
                      selectedImage.id === item.id ? "text-white" : "text-gray-900"
                    }`}>
                      {item.treatment}
                    </h3>
                    <p className={`text-sm font-poppinsRegular ${
                      selectedImage.id === item.id ? "text-white/80" : "text-gray-500"
                    }`}>
                      View results
                    </p>
                  </div>
                  <Icon 
                    iconName="caretRight" 
                    className={`text-xl transition-transform group-hover:translate-x-1 ${
                      selectedImage.id === item.id ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Image Comparison Slider */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              
              {/* Treatment Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-montserratBold text-gray-900 mb-2">
                  {selectedImage.treatment}
                </h3>
                <p className="text-gray-600 font-poppinsRegular flex items-center gap-2">
                  <Icon iconName="info" className="text-primary" />
                  {selectedImage.description}
                </p>
              </div>

              {/* Image Comparison Container */}
              <div 
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
              >
                {/* After Image (Full) */}
                <div className="absolute inset-0 bg-gray-200">
                  <Image
                    src={selectedImage.after}
                    alt={`${selectedImage.treatment} - After`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-montserratBold shadow-lg">
                    After
                  </div>
                </div>

                {/* Before Image (Clipped) */}
                <div 
                  className="absolute inset-0 bg-gray-300"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image
                    src={selectedImage.before}
                    alt={`${selectedImage.treatment} - Before`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-montserratBold shadow-lg">
                    Before
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary">
                    <div className="flex gap-1">
                      <Icon iconName="caretLeft" className="text-primary text-sm" />
                      <Icon iconName="caretRight" className="text-primary text-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-poppinsRegular">
                <Icon iconName="hand" className="text-primary" />
                <span>Drag the slider or tap to compare before and after results</span>
              </div>

              {/* Results Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <p className="text-2xl font-montserratBold text-primary mb-1">95%</p>
                  <p className="text-xs text-gray-600 font-poppinsRegular">Success Rate</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <p className="text-2xl font-montserratBold text-primary mb-1">500+</p>
                  <p className="text-xs text-gray-600 font-poppinsRegular">Treatments Done</p>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <p className="text-2xl font-montserratBold text-primary mb-1">4.9★</p>
                  <p className="text-xs text-gray-600 font-poppinsRegular">Patient Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 font-poppinsRegular max-w-3xl mx-auto">
            <Icon iconName="info" className="text-primary inline mr-2" />
            Results may vary from person to person. These are actual patient results with their consent. 
            Individual results depend on various factors including skin type, age, and adherence to treatment protocols.
          </p>
        </div>
      </div>
    </section>
  );
};
