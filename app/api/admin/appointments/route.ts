import { NextRequest, NextResponse } from 'next/server';
import { appointmentsDB, generateId, getCurrentTimestamp } from '@/lib/json-db';

// GET - Fetch all appointments
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const search = searchParams.get('search');

    const data = await appointmentsDB.read();
    let appointments = data.appointments || [];

    // Filter by status
    if (status && status !== 'all') {
      appointments = appointments.filter((apt) => apt.status === status);
    }

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      appointments = appointments.filter(
        (apt) =>
          apt.patientName.toLowerCase().includes(searchLower) ||
          apt.patientEmail.toLowerCase().includes(searchLower) ||
          apt.treatment.toLowerCase().includes(searchLower)
      );
    }

    // Sort by date (newest first)
    appointments.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`).getTime();
      const dateB = new Date(`${b.date} ${b.time}`).getTime();
      return dateB - dateA;
    });

    return NextResponse.json({
      success: true,
      appointments,
      count: appointments.length,
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}

// POST - Create new appointment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      patientName,
      patientEmail,
      patientPhone,
      date,
      time,
      treatment,
      clinic,
      notes,
    } = body;

    // Validation
    if (!patientName || !patientEmail || !patientPhone || !date || !time || !treatment || !clinic) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await appointmentsDB.read();
    if (!data.appointments) {
      data.appointments = [];
    }

    const newAppointment = {
      id: generateId('apt'),
      patientName,
      patientEmail,
      patientPhone,
      date,
      time,
      treatment,
      clinic,
      status: 'pending' as const,
      notes: notes || '',
      createdAt: getCurrentTimestamp(),
      updatedAt: getCurrentTimestamp(),
    };

    data.appointments.push(newAppointment);
    await appointmentsDB.write(data);

    return NextResponse.json({
      success: true,
      appointment: newAppointment,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}
