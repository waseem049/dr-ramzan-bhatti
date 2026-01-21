"use client";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";

export default function SettingsPage() {
  const { hasPermission } = useAdminAuth();

  if (!hasPermission(["doctor"])) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Icon iconName="lock" className="text-6xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-montserratBold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600 font-poppinsRegular">
          Only doctors can access settings.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon iconName="gear" className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-montserratBold text-gray-900">
              General Settings
            </h3>
          </div>
          <p className="text-gray-600 font-poppinsRegular mb-4">
            Manage site configuration, SEO, and basic settings.
          </p>
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-poppinsMedium">
            Configure
          </button>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Icon iconName="users-gear" className="text-green-600 text-xl" />
            </div>
            <h3 className="text-xl font-montserratBold text-gray-900">
              User Management
            </h3>
          </div>
          <p className="text-gray-600 font-poppinsRegular mb-4">
            Add, edit, or remove admin users and their roles.
          </p>
          <button className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors font-poppinsMedium">
            Manage Users
          </button>
        </div>

        {/* Clinic Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon iconName="hospital" className="text-purple-600 text-xl" />
            </div>
            <h3 className="text-xl font-montserratBold text-gray-900">
              Clinic Settings
            </h3>
          </div>
          <p className="text-gray-600 font-poppinsRegular mb-4">
            Configure clinic locations, timings, and contact info.
          </p>
          <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-poppinsMedium">
            Edit Clinics
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Icon iconName="bell" className="text-orange-600 text-xl" />
            </div>
            <h3 className="text-xl font-montserratBold text-gray-900">
              Notifications
            </h3>
          </div>
          <p className="text-gray-600 font-poppinsRegular mb-4">
            Configure email alerts, SMS, and push notifications.
          </p>
          <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-poppinsMedium">
            Setup Alerts
          </button>
        </div>
      </div>
    </div>
  );
}
