"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type UserRole = "doctor" | "receptionist" | "editor";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  hasPermission: (requiredRole: UserRole | UserRole[]) => boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

// Mock users for frontend demo (replace with API calls later)
const MOCK_USERS = {
  doctor: {
    id: "1",
    name: "Dr. Ramzan Bhatti",
    email: "doctor@clinic.com",
    password: "doctor123",
    role: "doctor" as UserRole,
  },
  receptionist: {
    id: "2",
    name: "Sarah Ahmed",
    email: "receptionist@clinic.com",
    password: "receptionist123",
    role: "receptionist" as UserRole,
  },
  editor: {
    id: "3",
    name: "John Smith",
    email: "editor@clinic.com",
    password: "editor123",
    role: "editor" as UserRole,
  },
};

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("adminUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    try {
      // Call authentication API
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const user: AdminUser = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
        };
        
        setUser(user);
        setIsAuthenticated(true);
        localStorage.setItem("adminUser", JSON.stringify(user));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("adminUser");
  };

  const hasPermission = (requiredRole: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    
    if (Array.isArray(requiredRole)) {
      return requiredRole.includes(user.role);
    }
    
    return user.role === requiredRole;
  };

  return (
    <AdminAuthContext.Provider value={{ user, isAuthenticated, login, logout, hasPermission }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
};
