import { Icon } from "@/components/Icon";
import Link from "next/link";
import { TreatmentsList } from "@/utils/constants";

export const MegaMenu = ({
    isVisible,
    onMouseEnter,
    onMouseLeave,
}: {
    isVisible: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 transform origin-top z-40 ${isVisible
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-2 invisible"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 lg:px-10 py-12">
                <div className="flex gap-12">
                    {/* Left Column: Intro */}
                    <div className="w-1/3 pr-8 border-r border-gray-100">
                        <h3 className="text-2xl font-montserratBold text-gray-900 mb-4">
                            Personalized
                            <br />
                            <span className="text-primary">Skin Care for You</span>
                        </h3>
                        <p className="text-gray-600 font-poppinsRegular text-sm leading-relaxed mb-6">
                            From acne solutions to advanced anti-aging procedures, we provide
                            customized treatments using state-of-the-art technology to restore
                            your skin&apos;s health and radiance.
                        </p>
                        <Link
                            href="/treatments"
                            className="inline-flex items-center text-primary font-montserratSemibold text-sm hover:translate-x-1 transition-transform duration-200"
                        >
                            Explore all treatments
                            <Icon iconName="caretRight" className="ml-1 w-4 h-4" />
                        </Link>
                    </div>

                    {/* Right Column: Grid */}
                    <div className="w-2/3 grid grid-cols-2 gap-x-8 gap-y-8">
                        {TreatmentsList.slice(0, 6).map((service, index) => (
                            <Link
                                key={index}
                                href="/treatments"
                                className="group flex gap-4 hover:bg-gray-50 p-3 rounded-lg transition-colors border border-transparent hover:border-gray-50"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Icon iconName="about" className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h4 className="font-montserratSemibold text-gray-900 text-sm mb-1 group-hover:text-primary transition-colors">
                                        {service.treatment}
                                    </h4>
                                    <p className="text-xs text-gray-500 font-poppinsRegular group-hover:text-gray-600 line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
