import { NextRequest, NextResponse } from 'next/server';
import { appointmentsDB, getCurrentTimestamp } from '@/lib/json-db';

// GET - Fetch single appointment
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await appointmentsDB.read();
    const appointment = data.appointments?.find((apt) => apt.id === id);

    if (!appointment) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      appointment,
    });
  } catch (error) {
    console.error('Error fetching appointment:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointment' },
      { status: 500 }
    );
  }
}

// PATCH - Update appointment
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const data = await appointmentsDB.read();
    const index = data.appointments?.findIndex((apt) => apt.id === id);

    if (index === undefined || index === -1) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }

    // Update appointment
    data.appointments[index] = {
      ...data.appointments[index],
      ...body,
      id, // Ensure ID doesn't change
      updatedAt: getCurrentTimestamp(),
    };

    await appointmentsDB.write(data);

    return NextResponse.json({
      success: true,
      appointment: data.appointments[index],
    });
  } catch (error) {
    console.error('Error updating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to update appointment' },
      { status: 500 }
    );
  }
}

// DELETE - Delete appointment
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await appointmentsDB.read();
    const index = data.appointments?.findIndex((apt) => apt.id === id);

    if (index === undefined || index === -1) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }

    // Remove appointment
    data.appointments.splice(index, 1);
    await appointmentsDB.write(data);

    return NextResponse.json({
      success: true,
      message: 'Appointment deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    return NextResponse.json(
      { error: 'Failed to delete appointment' },
      { status: 500 }
    );
  }
}
