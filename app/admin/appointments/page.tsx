"use client";
import { useState, useEffect } from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";

type AppointmentStatus = "pending" | "confirmed" | "completed" | "cancelled";

interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
  treatment: string;
  clinic: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export default function AppointmentsPage() {
  const { user, hasPermission } = useAdminAuth();
  const [filter, setFilter] = useState<AppointmentStatus | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch appointments from API
  useEffect(() => {
    fetchAppointments();
  }, [filter, searchQuery]);

  const fetchAppointments = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams();
      if (filter !== "all") params.append("status", filter);
      if (searchQuery) params.append("search", searchQuery);

      const response = await fetch(`/api/admin/appointments?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        setAppointments(data.appointments);
      } else {
        setError("Failed to fetch appointments");
      }
    } catch (err) {
      setError("An error occurred while fetching appointments");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (appointmentId: string, newStatus: AppointmentStatus) => {
    try {
      const response = await fetch(`/api/admin/appointments/${appointmentId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Refresh appointments
        fetchAppointments();
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleDelete = async (appointmentId: string) => {
    if (!confirm('Are you sure you want to delete this appointment?')) return;

    try {
      const response = await fetch(`/api/admin/appointments/${appointmentId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Refresh appointments
        fetchAppointments();
      }
    } catch (err) {
      console.error('Error deleting appointment:', err);
    }
  };

  // Original mock appointments data (removed)
  const mockAppointments = [
  ];

  // Check permissions
  if (!hasPermission(["doctor", "receptionist"])) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <Icon iconName="lock" className="text-6xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-montserratBold text-gray-900 mb-2">
          Access Denied
        </h2>
        <p className="text-gray-600 font-poppinsRegular">
          You don't have permission to view appointments.
        </p>
      </div>
    );
  }


  const getStatusColor = (status: AppointmentStatus) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      confirmed: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status];
  };

  // Calculate status counts from all appointments (not filtered)
  const [allAppointments, setAllAppointments] = useState<Appointment[]>([]);
  
  useEffect(() => {
    // Fetch all appointments for counts (separate from filtered)
    fetch('/api/admin/appointments')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setAllAppointments(data.appointments);
        }
      })
      .catch(console.error);
  }, [appointments]);

  const statusCounts = {
    all: allAppointments.length,
    pending: allAppointments.filter((a) => a.status === "pending").length,
    confirmed: allAppointments.filter((a) => a.status === "confirmed").length,
    completed: allAppointments.filter((a) => a.status === "completed").length,
    cancelled: allAppointments.filter((a) => a.status === "cancelled").length,
  };

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {(["all", "pending", "confirmed", "completed", "cancelled"] as const).map(
          (status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`p-4 rounded-xl border-2 transition-all ${
                filter === status
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <p className="text-2xl font-montserratBold text-gray-900">
                {statusCounts[status]}
              </p>
              <p className="text-sm text-gray-600 font-poppinsRegular capitalize">
                {status}
              </p>
            </button>
          )
        )}
      </div>

      {/* Search and Filters */}
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
              placeholder="Search by patient name, email, or treatment..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
            />
          </div>

          {/* Refresh Button */}
          <button 
            onClick={fetchAppointments}
            disabled={isLoading}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-poppinsMedium hover:bg-gray-200 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Icon iconName={isLoading ? "spinner" : "rotate"} className={isLoading ? "animate-spin" : ""} />
            Refresh
          </button>

          {/* Action Buttons */}
          <button className="px-6 py-3 bg-primary text-white rounded-xl font-poppinsMedium hover:bg-primary-600 transition-colors flex items-center gap-2">
            <Icon iconName="calendar-plus" />
            New Appointment
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-montserratBold text-gray-700 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-4 text-left text-xs font-montserratBold text-gray-700 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-montserratBold text-gray-700 uppercase tracking-wider">
                  Treatment
                </th>
                <th className="px-6 py-4 text-left text-xs font-montserratBold text-gray-700 uppercase tracking-wider">
                  Clinic
                </th>
                <th className="px-6 py-4 text-left text-xs font-montserratBold text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-montserratBold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <Icon iconName="spinner" className="text-5xl text-primary animate-spin mb-3 inline-block" />
                    <p className="text-gray-600 font-poppinsRegular">Loading appointments...</p>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <Icon iconName="circle-xmark" className="text-5xl text-red-400 mb-3 inline-block" />
                    <p className="text-red-600 font-poppinsRegular">{error}</p>
                  </td>
                </tr>
              ) : appointments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <Icon iconName="calendar-xmark" className="text-5xl text-gray-400 mb-3" />
                    <p className="text-gray-600 font-poppinsRegular">
                      No appointments found
                    </p>
                  </td>
                </tr>
              ) : (
                appointments.map((appointment) => (
                  <tr
                    key={appointment.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-poppinsMedium text-gray-900">
                          {appointment.patientName}
                        </p>
                        <p className="text-sm text-gray-600 font-poppinsRegular">
                          {appointment.patientPhone}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-poppinsMedium text-gray-900">
                          {new Date(appointment.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-gray-600 font-poppinsRegular">
                          {appointment.time}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-poppinsRegular text-gray-900">
                        {appointment.treatment}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-poppinsRegular text-gray-600">
                        {appointment.clinic}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-poppinsMedium capitalize ${getStatusColor(
                          appointment.status
                        )}`}
                      >
                        {appointment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {appointment.status === "pending" && (
                          <button 
                            onClick={() => handleStatusChange(appointment.id, "confirmed")}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Confirm"
                          >
                            <Icon iconName="circle-check" />
                          </button>
                        )}
                        {appointment.status === "confirmed" && (
                          <button 
                            onClick={() => handleStatusChange(appointment.id, "completed")}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Mark Complete"
                          >
                            <Icon iconName="check-double" />
                          </button>
                        )}
                        <button 
                          onClick={() => handleDelete(appointment.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Icon iconName="trash" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
