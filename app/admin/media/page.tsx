"use client";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";

export default function MediaPage() {
  const { hasPermission } = useAdminAuth();

  if (!hasPermission(["doctor", "editor"])) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Icon iconName="lock" className="text-6xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-montserratBold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600 font-poppinsRegular">
          You don't have permission to access media library.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
      <Icon iconName="images" className="text-6xl text-gray-400 mb-4" />
      <h2 className="text-2xl font-montserratBold text-gray-900 mb-2">
        Media Library
      </h2>
      <p className="text-gray-600 font-poppinsRegular mb-6">
        Upload and manage images, videos, and documents here.
      </p>
      <button className="px-6 py-3 bg-primary text-white rounded-xl font-poppinsMedium hover:bg-primary-600 transition-colors">
        Upload Media
      </button>
    </div>
  );
}
