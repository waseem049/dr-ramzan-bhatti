"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth, UserRole } from "@/contexts/AdminAuthContext";
import { Icon } from "@/components/Icon";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAdminAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("doctor");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const roles = [
    {
      value: "doctor" as UserRole,
      label: "Doctor",
      icon: "user-md",
      description: "Full access to all features",
      credentials: "doctor@clinic.com / doctor123",
    },
    {
      value: "receptionist" as UserRole,
      label: "Receptionist",
      icon: "calendar-check",
      description: "Manage appointments & patients",
      credentials: "receptionist@clinic.com / receptionist123",
    },
    {
      value: "editor" as UserRole,
      label: "Content Editor",
      icon: "pen-to-square",
      description: "Manage website content",
      credentials: "editor@clinic.com / editor123",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const success = await login(email, password, selectedRole);
      
      if (success) {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-montserratBold text-gray-900 mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-600 font-poppinsRegular">
            Select your role and sign in to continue
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Role Selection */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-montserratBold text-gray-900 mb-6">
              Select Role
            </h2>
            
            <div className="space-y-4">
              {roles.map((role) => (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => setSelectedRole(role.value)}
                  className={`w-full p-5 rounded-xl border-2 transition-all text-left ${
                    selectedRole === role.value
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        selectedRole === role.value
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Icon iconName={role.icon} className="text-xl" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-montserratBold text-lg text-gray-900 mb-1">
                        {role.label}
                      </h3>
                      <p className="text-sm text-gray-600 font-poppinsRegular mb-2">
                        {role.description}
                      </p>
                      <p className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
                        {role.credentials}
                      </p>
                    </div>
                    
                    {selectedRole === role.value && (
                      <Icon
                        iconName="circle-check"
                        className="text-primary text-xl"
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Demo Notice */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Icon iconName="circle-info" className="text-blue-600 text-lg mt-0.5" />
                <div>
                  <p className="text-sm text-blue-900 font-poppinsMedium mb-1">
                    Demo Mode (Frontend Only)
                  </p>
                  <p className="text-xs text-blue-700 font-poppinsRegular">
                    Use the credentials shown above to test different roles. No backend authentication yet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-montserratBold text-gray-900 mb-6">
              Sign In
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon iconName="envelope" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-poppinsMedium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon iconName="lock" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors font-poppinsRegular"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <Icon iconName={showPassword ? "eye-slash" : "eye"} />
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <Icon iconName="circle-xmark" className="text-red-600 text-lg mt-0.5" />
                  <p className="text-sm text-red-700 font-poppinsRegular">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary-600 text-white py-4 rounded-xl font-montserratBold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Icon iconName="spinner" className="animate-spin" />
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In as {roles.find(r => r.value === selectedRole)?.label}
                    <Icon iconName="arrow-right" />
                  </>
                )}
              </button>

              {/* Back to Site */}
              <button
                type="button"
                onClick={() => router.push("/")}
                className="w-full text-gray-600 hover:text-gray-900 py-3 font-poppinsMedium text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Icon iconName="arrow-left" />
                Back to Website
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
