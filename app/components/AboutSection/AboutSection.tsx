import { Icon } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left Column: Portrait & Badge - Asymmetrical Width - HIDDEN ON MOBILE */}
          <div className="hidden lg:block w-full lg:w-[45%] relative group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/doctor.png"
                alt="Dr. Ramzan Bhatti"
                fill
                className="object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            </div>

            {/* Overlap Experience Badge */}
            <div className="absolute -bottom-8 -right-8 lg:-right-12 bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl border-l-4 border-primary animate-float">
              <p className="text-5xl font-montserratBold text-primary leading-none">10+</p>
              <p className="text-gray-600 font-montserratSemibold text-sm uppercase tracking-wider mt-2">Years of<br />Experience</p>
            </div>

            {/* Pattern Accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary/20 rounded-tl-3xl -z-10"></div>
          </div>

          {/* Right Column: Content & Interactive Grid - Centered on Mobile */}
          <div className="w-full lg:w-[55%] space-y-12 text-center lg:text-left">

            <div className="space-y-6 animate-fadeInUp">
              <h4 className="text-primary font-montserratBold text-sm tracking-[0.2em] uppercase flex items-center justify-center lg:justify-start gap-3">
                <span className="w-8 h-[2px] bg-primary"></span>
                Meet The Specialist
              </h4>
              <h2 className="text-4xl lg:text-6xl font-montserratBold text-gray-900 leading-tight">
                Redefining <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Skin Health</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-poppinsRegular">
                {"I believe that confidence begins with healthy skin. My practice combines cutting-edge medical dermatology with the artistry of aesthetic medicine to deliver natural, lasting results."}
              </p>
            </div>

            {/* Interactive Expertise Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Clinical Dermatology", icon: "editDoc", desc: "Expert diagnosis and treatment of complex skin conditions." },
                { title: "Aesthetic Artistry", icon: "about", desc: "Enhancing natural beauty with precise cosmetic procedures." },
                { title: "Laser Technology", icon: "circleRight", desc: "Advanced laser solutions for hair removal and skin resurfacing." },
                { title: "Patient Care", icon: "home", desc: "A compassionate, patient-first approach to your wellness." },
              ].map((item, idx) => (
                <div key={idx} className="group p-6 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon iconName={item.icon} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-montserratBold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-poppinsRegular group-hover:text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 animate-fadeInUp delay-200">
              <Link href="/about" className="inline-flex items-center gap-2 text-gray-900 font-montserratSemibold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
                Read Full Profile
                <Icon iconName="caretRight" className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
