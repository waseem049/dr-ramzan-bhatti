"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AdminAuthProvider, useAdminAuth } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";
import Link from "next/link";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAdminAuth();

  useEffect(() => {
    if (!isAuthenticated && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [isAuthenticated, pathname, router]);

  // Show login page without layout
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // Show loading or redirect for unauthenticated users
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Icon iconName="spinner" className="text-4xl text-primary animate-spin mb-4" />
          <p className="text-gray-600 font-poppinsRegular">Loading...</p>
        </div>
      </div>
    );
  }

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: "gauge",
      roles: ["doctor", "receptionist", "editor"],
    },
    {
      name: "Appointments",
      href: "/admin/appointments",
      icon: "calendar-check",
      roles: ["doctor", "receptionist"],
    },
    {
      name: "Patients",
      href: "/admin/patients",
      icon: "users",
      roles: ["doctor", "receptionist"],
    },
    {
      name: "Blogs",
      href: "/admin/blogs",
      icon: "file-lines",
      roles: ["doctor", "editor"],
    },
    {
      name: "Content",
      href: "/admin/content",
      icon: "folder-tree",
      roles: ["doctor", "editor"],
    },
    {
      name: "Media Library",
      href: "/admin/media",
      icon: "images",
      roles: ["doctor", "editor"],
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: "gear",
      roles: ["doctor"],
    },
  ];

  const filteredNavigation = navigation.filter((item) =>
    item.roles.includes(user?.role || "")
  );

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-40">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon iconName="user-md" className="text-white text-xl" />
            </div>
            <div>
              <h1 className="font-montserratBold text-lg text-gray-900">
                Admin Panel
              </h1>
              <p className="text-xs text-gray-500 font-poppinsRegular">
                Dr. Ramzan Bhatti
              </p>
            </div>
          </Link>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-montserratBold">
                {user?.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-poppinsMedium text-gray-900 truncate">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 font-poppinsRegular capitalize">
                {user?.role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {filteredNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon iconName={item.icon} className="text-lg" />
                <span className="font-poppinsMedium text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Icon iconName="right-from-bracket" className="text-lg" />
            <span className="font-poppinsMedium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-montserratBold text-gray-900">
                {navigation.find((item) => item.href === pathname)?.name || "Admin"}
              </h2>
              <p className="text-sm text-gray-500 font-poppinsRegular">
                Welcome back, {user?.name}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Icon iconName="bell" className="text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Quick Actions */}
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Icon iconName="arrow-up-right-from-square" />
                <span className="font-poppinsMedium text-sm">View Site</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AdminAuthProvider>
  );
}
