"use client";
import { useEffect, useState } from "react";
import { useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";
import Link from "next/link";

export default function AdminDashboard() {
  const { user } = useAdminAuth();
  const [apiStats, setApiStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch real stats from API
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setApiStats(data.stats);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  // Stats based on role
  const getStatsForRole = () => {
    switch (user?.role) {
      case "doctor":
        return [
          {
            label: "Today's Appointments",
            value: "12",
            change: "+3 from yesterday",
            icon: "calendar-check",
            color: "blue",
          },
          {
            label: "Pending Consultations",
            value: "8",
            change: "2 urgent",
            icon: "clock",
            color: "orange",
          },
          {
            label: "Total Patients",
            value: "1,247",
            change: "+45 this month",
            icon: "users",
            color: "green",
          },
          {
            label: "Revenue (This Month)",
            value: "₹2.4L",
            change: "+18% from last month",
            icon: "chart-line",
            color: "purple",
          },
        ];
      case "receptionist":
        return [
          {
            label: "Today's Appointments",
            value: "12",
            change: "3 confirmed",
            icon: "calendar-check",
            color: "blue",
          },
          {
            label: "Pending Bookings",
            value: "5",
            change: "Awaiting confirmation",
            icon: "clock",
            color: "orange",
          },
          {
            label: "New Patients",
            value: "23",
            change: "This week",
            icon: "user-plus",
            color: "green",
          },
          {
            label: "Follow-ups",
            value: "8",
            change: "Scheduled today",
            icon: "rotate",
            color: "purple",
          },
        ];
      case "editor":
        return [
          {
            label: "Published Blogs",
            value: "24",
            change: "+2 this week",
            icon: "file-lines",
            color: "blue",
          },
          {
            label: "Draft Content",
            value: "7",
            change: "Pending review",
            icon: "pen-to-square",
            color: "orange",
          },
          {
            label: "Media Files",
            value: "342",
            change: "12.4 MB used",
            icon: "images",
            color: "green",
          },
          {
            label: "Page Views",
            value: "8.2K",
            change: "+12% this month",
            icon: "eye",
            color: "purple",
          },
        ];
      default:
        return [];
    }
  };

  const stats = getStatsForRole();

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      orange: "bg-orange-100 text-orange-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getQuickActions = () => {
    switch (user?.role) {
      case "doctor":
        return [
          {
            label: "View Appointments",
            href: "/admin/appointments",
            icon: "calendar-check",
            color: "primary",
          },
          {
            label: "Patient Records",
            href: "/admin/patients",
            icon: "folder-open",
            color: "blue-600",
          },
          {
            label: "Write Prescription",
            href: "/admin/prescriptions",
            icon: "prescription",
            color: "green-600",
          },
        ];
      case "receptionist":
        return [
          {
            label: "Book Appointment",
            href: "/admin/appointments/new",
            icon: "calendar-plus",
            color: "primary",
          },
          {
            label: "View Schedule",
            href: "/admin/appointments",
            icon: "calendar-days",
            color: "blue-600",
          },
          {
            label: "Patient Database",
            href: "/admin/patients",
            icon: "users",
            color: "green-600",
          },
        ];
      case "editor":
        return [
          {
            label: "Create Blog Post",
            href: "/admin/content/blogs/new",
            icon: "pen-to-square",
            color: "primary",
          },
          {
            label: "Manage Content",
            href: "/admin/content",
            icon: "folder-tree",
            color: "blue-600",
          },
          {
            label: "Upload Media",
            href: "/admin/media",
            icon: "cloud-arrow-up",
            color: "green-600",
          },
        ];
      default:
        return [];
    }
  };

  const quickActions = getQuickActions();

  const recentActivity = [
    {
      user: "Sarah Ahmed",
      action: "Booked appointment for John Doe",
      time: "5 minutes ago",
      icon: "calendar-check",
    },
    {
      user: "Dr. Ramzan",
      action: "Completed consultation with Jane Smith",
      time: "23 minutes ago",
      icon: "user-doctor",
    },
    {
      user: "John Smith",
      action: "Published new blog: Skin Care Tips",
      time: "1 hour ago",
      icon: "file-lines",
    },
    {
      user: "Sarah Ahmed",
      action: "Added new patient: Mike Johnson",
      time: "2 hours ago",
      icon: "user-plus",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-montserratBold mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-white/90 font-poppinsRegular">
              Here's what's happening with your {user?.role === "doctor" ? "practice" : user?.role === "receptionist" ? "schedule" : "content"} today.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Icon
                iconName={
                  user?.role === "doctor"
                    ? "user-md"
                    : user?.role === "receptionist"
                    ? "calendar-check"
                    : "pen-to-square"
                }
                className="text-5xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(
                  stat.color
                )}`}
              >
                <Icon iconName={stat.icon} className="text-xl" />
              </div>
            </div>
            <h3 className="text-3xl font-montserratBold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-600 font-poppinsRegular mb-2">
              {stat.label}
            </p>
            <p className="text-xs text-gray-500 font-poppinsRegular">
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-montserratBold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className={`p-6 rounded-xl bg-${action.color}/5 border-2 border-${action.color}/10 hover:border-${action.color}/30 transition-all group`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon iconName={action.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="font-poppinsMedium text-gray-900 group-hover:text-gray-700">
                    {action.label}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming Schedule (for doctor/receptionist) */}
          {(user?.role === "doctor" || user?.role === "receptionist") && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-montserratBold text-gray-900">
                  Today's Schedule
                </h2>
                <Link
                  href="/admin/appointments"
                  className="text-primary hover:text-primary-600 font-poppinsMedium text-sm"
                >
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {isLoading ? (
                  <div className="text-center py-8">
                    <Icon iconName="spinner" className="text-3xl text-primary animate-spin inline-block" />
                  </div>
                ) : apiStats?.todaysSchedule && apiStats.todaysSchedule.length > 0 ? (
                  apiStats.todaysSchedule.map((appointment: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-center min-w-[80px]">
                      <p className="text-lg font-montserratBold text-primary">
                        {appointment.time}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="font-poppinsMedium text-gray-900">
                        {appointment.patientName}
                      </p>
                      <p className="text-sm text-gray-600 font-poppinsRegular">
                        {appointment.treatment}
                      </p>
                    </div>
                    <Icon iconName="chevron-right" className="text-gray-400" />
                  </div>
                ))
                ) : (
                  <div className="text-center py-8">
                    <Icon iconName="calendar-xmark" className="text-5xl text-gray-300 mb-3 inline-block" />
                    <p className="text-gray-500 font-poppinsRegular">No appointments scheduled for today</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
            <h2 className="text-xl font-montserratBold text-gray-900 mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon iconName={activity.icon} className="text-primary text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-poppinsMedium text-gray-900">
                      {activity.user}
                    </p>
                    <p className="text-xs text-gray-600 font-poppinsRegular">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-400 font-poppinsRegular mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
