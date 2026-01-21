import { NextRequest, NextResponse } from 'next/server';
import { patientsDB, getCurrentTimestamp } from '@/lib/json-db';

// GET - Fetch single patient
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await patientsDB.read();
    const patient = data.patients?.find((p) => p.id === id);

    if (!patient) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      patient,
    });
  } catch (error) {
    console.error('Error fetching patient:', error);
    return NextResponse.json(
      { error: 'Failed to fetch patient' },
      { status: 500 }
    );
  }
}

// PATCH - Update patient
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const data = await patientsDB.read();
    const index = data.patients?.findIndex((p) => p.id === id);

    if (index === undefined || index === -1) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    // Update patient
    data.patients[index] = {
      ...data.patients[index],
      ...body,
      id, // Ensure ID doesn't change
      updatedAt: getCurrentTimestamp(),
    };

    await patientsDB.write(data);

    return NextResponse.json({
      success: true,
      patient: data.patients[index],
    });
  } catch (error) {
    console.error('Error updating patient:', error);
    return NextResponse.json(
      { error: 'Failed to update patient' },
      { status: 500 }
    );
  }
}

// DELETE - Delete patient
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await patientsDB.read();
    const index = data.patients?.findIndex((p) => p.id === id);

    if (index === undefined || index === -1) {
      return NextResponse.json(
        { error: 'Patient not found' },
        { status: 404 }
      );
    }

    // Remove patient
    data.patients.splice(index, 1);
    await patientsDB.write(data);

    return NextResponse.json({
      success: true,
      message: 'Patient deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting patient:', error);
    return NextResponse.json(
      { error: 'Failed to delete patient' },
      { status: 500 }
    );
  }
}
