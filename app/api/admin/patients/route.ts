import { NextRequest, NextResponse } from 'next/server';
import { patientsDB, generateId, getCurrentTimestamp } from '@/lib/json-db';

// GET - Fetch all patients
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search');

    const data = await patientsDB.read();
    let patients = data.patients || [];

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      patients = patients.filter(
        (patient) =>
          patient.name.toLowerCase().includes(searchLower) ||
          patient.email.toLowerCase().includes(searchLower) ||
          patient.phone.includes(search)
      );
    }

    // Sort by name
    patients.sort((a, b) => a.name.localeCompare(b.name));

    return NextResponse.json({
      success: true,
      patients,
      count: patients.length,
    });
  } catch (error) {
    console.error('Error fetching patients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patients' },
      { status: 500 }
    );
  }
}

// POST - Create new patient
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      dateOfBirth,
      gender,
      address,
      medicalHistory,
      emergencyContact,
    } = body;

    // Validation
    if (!name || !email || !phone || !dateOfBirth || !gender || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await patientsDB.read();
    if (!data.patients) {
      data.patients = [];
    }

    // Check if patient already exists
    const existingPatient = data.patients.find(
      (p) => p.email === email || p.phone === phone
    );
    if (existingPatient) {
      return NextResponse.json(
        { error: 'Patient with this email or phone already exists' },
        { status: 409 }
      );
    }

    const newPatient = {
      id: generateId('pat'),
      name,
      email,
      phone,
      dateOfBirth,
      gender,
      address,
      medicalHistory: medicalHistory || '',
      emergencyContact: emergencyContact || {
        name: '',
        relationship: '',
        phone: '',
      },
      appointments: [],
      createdAt: getCurrentTimestamp(),
      updatedAt: getCurrentTimestamp(),
    };

    data.patients.push(newPatient);
    await patientsDB.write(data);

    return NextResponse.json({
      success: true,
      patient: newPatient,
    });
  } catch (error) {
    console.error('Error creating patient:', error);
    return NextResponse.json(
      { error: 'Failed to create patient' },
      { status: 500 }
    );
  }
}
