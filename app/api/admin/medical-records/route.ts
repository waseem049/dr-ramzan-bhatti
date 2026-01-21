import { NextRequest, NextResponse } from 'next/server';
import { medicalRecordsDB, generateId, getCurrentTimestamp } from '@/lib/json-db';

// GET - Fetch medical records
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const patientId = searchParams.get('patientId');

    const data = await medicalRecordsDB.read();
    let records = data.records || [];

    // Filter by patient if provided
    if (patientId) {
      records = records.filter(record => record.patientId === patientId);
    }

    // Sort by date (newest first)
    records.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json({
      success: true,
      records,
      count: records.length,
    });
  } catch (error) {
    console.error('Error fetching medical records:', error);
    return NextResponse.json(
      { error: 'Failed to fetch medical records' },
      { status: 500 }
    );
  }
}

// POST - Create new medical record
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = await medicalRecordsDB.read();
    if (!data.records) {
      data.records = [];
    }

    const newRecord = {
      id: generateId('rec'),
      ...body,
      createdAt: getCurrentTimestamp(),
      updatedAt: getCurrentTimestamp(),
    };

    data.records.push(newRecord);
    await medicalRecordsDB.write(data);

    return NextResponse.json({
      success: true,
      record: newRecord,
    });
  } catch (error) {
    console.error('Error creating medical record:', error);
    return NextResponse.json(
      { error: 'Failed to create medical record' },
      { status: 500 }
    );
  }
}
