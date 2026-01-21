"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";
import Link from "next/link";

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  medicalHistory?: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  appointments: string[];
  createdAt: string;
  updatedAt: string;
}

export default function PatientsPage() {
  const { hasPermission } = useAdminAuth();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, [searchQuery]);

  const fetchPatients = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.append("search", searchQuery);

      const response = await fetch(`/api/admin/patients?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        setPatients(data.patients);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasPermission(["doctor", "receptionist"])) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Icon iconName="lock" className="text-6xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-montserratBold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600 font-poppinsRegular">
          You don't have permission to view patient records.
        </p>
      </div>
    );
  }

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon iconName="users" className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-2xl font-montserratBold text-gray-900">{patients.length}</p>
              <p className="text-sm text-gray-600 font-poppinsRegular">Total Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Icon iconName="user-plus" className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-2xl font-montserratBold text-gray-900">
                {patients.filter(p => {
                  const created = new Date(p.createdAt);
                  const now = new Date();
                  return created.getMonth() === now.getMonth() && 
                         created.getFullYear() === now.getFullYear();
                }).length}
              </p>
              <p className="text-sm text-gray-600 font-poppinsRegular">New This Month</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Icon iconName="calendar-check" className="text-purple-600 text-xl" />
            </div>
            <div>
              <p className="text-2xl font-montserratBold text-gray-900">
                {patients.filter(p => p.appointments.length > 0).length}
              </p>
              <p className="text-sm text-gray-600 font-poppinsRegular">Active Patients</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Icon iconName="user-doctor" className="text-orange-600 text-xl" />
            </div>
            <div>
              <p className="text-2xl font-montserratBold text-gray-900">
                {patients.filter(p => {
                  const created = new Date(p.createdAt);
                  const dayAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                  return created >= dayAgo;
                }).length}
              </p>
              <p className="text-sm text-gray-600 font-poppinsRegular">New This Week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Icon
              iconName="magnifying-glass"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search patients by name, email, or phone..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
            />
          </div>

          {/* Action Buttons */}
          <button
            onClick={fetchPatients}
            disabled={isLoading}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-poppinsMedium hover:bg-gray-200 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Icon iconName={isLoading ? "spinner" : "rotate"} className={isLoading ? "animate-spin" : ""} />
            Refresh
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-6 py-3 bg-primary text-white rounded-xl font-poppinsMedium hover:bg-primary-600 transition-colors flex items-center gap-2"
          >
            <Icon iconName="user-plus" />
            Add New Patient
          </button>
        </div>
      </div>

      {/* Patients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))
        ) : patients.length === 0 ? (
          <div className="col-span-full bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Icon iconName="users" className="text-6xl text-gray-300 mb-4 inline-block" />
            <h3 className="text-xl font-montserratBold text-gray-900 mb-2">No Patients Found</h3>
            <p className="text-gray-600 font-poppinsRegular mb-6">
              {searchQuery ? "Try adjusting your search criteria" : "Start by adding your first patient"}
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-primary text-white rounded-xl font-poppinsMedium hover:bg-primary-600 transition-colors inline-flex items-center gap-2"
            >
              <Icon iconName="user-plus" />
              Add First Patient
            </button>
          </div>
        ) : (
          patients.map((patient) => (
            <Link
              key={patient.id}
              href={`/admin/patients/${patient.id}`}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all group"
            >
              {/* Patient Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-montserratBold text-2xl">
                    {patient.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-montserratBold text-lg text-gray-900 truncate group-hover:text-primary transition-colors">
                    {patient.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-poppinsRegular">
                    {calculateAge(patient.dateOfBirth)} years, {patient.gender}
                  </p>
                </div>
              </div>

              {/* Patient Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon iconName="envelope" className="text-gray-400" />
                  <span className="font-poppinsRegular truncate">{patient.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon iconName="phone" className="text-gray-400" />
                  <span className="font-poppinsRegular">{patient.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon iconName="calendar-days" className="text-gray-400" />
                  <span className="font-poppinsRegular">
                    {patient.appointments.length} appointment{patient.appointments.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-poppinsRegular">
                  Added {new Date(patient.createdAt).toLocaleDateString()}
                </span>
                <Icon iconName="chevron-right" className="text-gray-400 group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
