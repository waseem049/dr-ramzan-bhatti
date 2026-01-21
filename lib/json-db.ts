import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export interface JSONDatabase<T> {
  read: () => Promise<T>;
  write: (data: T) => Promise<void>;
  readSync: () => T;
  writeSync: (data: T) => void;
}

/**
 * Create a JSON database handler for a specific file
 */
export function createJSONDB<T>(filename: string): JSONDatabase<T> {
  const filePath = path.join(DATA_DIR, filename);

  const read = async (): Promise<T> => {
    try {
      const data = await fs.promises.readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      // If file doesn't exist, create it with empty structure
      const emptyData = {} as T;
      await write(emptyData);
      return emptyData;
    }
  };

  const write = async (data: T): Promise<void> => {
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
  };

  const readSync = (): T => {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      // If file doesn't exist, create it with empty structure
      const emptyData = {} as T;
      writeSync(emptyData);
      return emptyData;
    }
  };

  const writeSync = (data: T): void => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  };

  return { read, write, readSync, writeSync };
}

// Type definitions for our data structures
export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
  treatment: string;
  clinic: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
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

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'doctor' | 'receptionist' | 'editor';
  phone: string;
  avatar: string | null;
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  type: 'consultation' | 'treatment' | 'follow-up' | 'emergency';
  chiefComplaint: string;
  symptoms: string[];
  diagnosis: string;
  prescriptions: Array<{
    medication: string;
    dosage: string;
    duration: string;
    instructions: string;
  }>;
  treatmentPlan: string;
  vitalSigns?: {
    bloodPressure?: string;
    pulse?: string;
    temperature?: string;
    weight?: string;
  };
  procedureDetails?: {
    procedure: string;
    area: string;
    settings: string;
    duration: string;
    anesthesia?: string;
  };
  notes: string;
  followUpDate?: string;
  doctorId: string;
  doctorName: string;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  patientId: string;
  patientName: string;
  appointmentId?: string;
  date: string;
  dueDate: string;
  items: Array<{
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
  }>;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  amountPaid: number;
  amountDue: number;
  paymentStatus: 'pending' | 'partial' | 'paid' | 'overdue';
  paymentMethod?: string;
  paymentDate?: string;
  notes?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

// Database instances
export const appointmentsDB = createJSONDB<{ appointments: Appointment[] }>('appointments.json');
export const patientsDB = createJSONDB<{ patients: Patient[] }>('patients.json');
export const adminUsersDB = createJSONDB<{ users: AdminUser[] }>('admin-users.json');
export const medicalRecordsDB = createJSONDB<{ records: MedicalRecord[] }>('medical-records.json');
export const billingDB = createJSONDB<{ invoices: Invoice[] }>('billing.json');

// Helper functions
export const generateId = (prefix: string): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${prefix}_${timestamp}_${random}`;
};

export const getCurrentTimestamp = (): string => {
  return new Date().toISOString();
};
