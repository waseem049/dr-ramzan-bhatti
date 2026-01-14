import { Icon } from "@/components/Icon";
import { TreatmentsList } from "@/utils/constants";
import Link from "next/link";
import React from "react";

type TreatmentsModalProps = {
    isVisible: boolean;
    onClose: () => void;
};

export const TreatmentsModal: React.FC<TreatmentsModalProps> = ({
    isVisible,
    onClose,
}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[70] bg-white flex flex-col animate-slideUp lg:hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white shadow-sm">
                <h2 className="text-lg font-montserratBold text-gray-900">
                    Select Treatment
                </h2>
                <button
                    onClick={onClose}
                    className="p-2 -mr-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <Icon iconName="close" size="lg" />
                </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {TreatmentsList.map((item, index) => (
                    <Link
                        key={index}
                        href={`/treatments#${item.treatment.replace(/\s+/g, "-").toLowerCase()}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all group"
                    >
                        <span className="font-montserratMedium text-gray-700 group-hover:text-primary">
                            {item.treatment}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400 group-hover:text-primary transition-colors">
                            <Icon iconName="caretRight" size="sm" />
                        </div>
                    </Link>
                ))}

                <div className="mt-8">
                    <Link
                        href="/treatments"
                        onClick={onClose}
                        className="block w-full text-center py-3 rounded-xl border border-primary text-primary font-montserratSemibold hover:bg-primary hover:text-white transition-all"
                    >
                        View All Treatments
                    </Link>
                </div>
            </div>
        </div>
    );
};
