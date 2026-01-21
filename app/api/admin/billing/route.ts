import { NextRequest, NextResponse } from 'next/server';
import { billingDB, generateId, getCurrentTimestamp } from '@/lib/json-db';

// GET - Fetch invoices
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const patientId = searchParams.get('patientId');
    const status = searchParams.get('status');

    const data = await billingDB.read();
    let invoices = data.invoices || [];

    // Filter by patient if provided
    if (patientId) {
      invoices = invoices.filter(inv => inv.patientId === patientId);
    }

    // Filter by status if provided
    if (status && status !== 'all') {
      invoices = invoices.filter(inv => inv.paymentStatus === status);
    }

    // Sort by date (newest first)
    invoices.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json({
      success: true,
      invoices,
      count: invoices.length,
    });
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    );
  }
}

// POST - Create new invoice
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const data = await billingDB.read();
    if (!data.invoices) {
      data.invoices = [];
    }

    // Generate invoice number
    const invoiceNumber = `INV-${new Date().getFullYear()}-${String(data.invoices.length + 1).padStart(3, '0')}`;

    const newInvoice = {
      id: generateId('inv'),
      invoiceNumber,
      ...body,
      createdAt: getCurrentTimestamp(),
      updatedAt: getCurrentTimestamp(),
    };

    data.invoices.push(newInvoice);
    await billingDB.write(data);

    return NextResponse.json({
      success: true,
      invoice: newInvoice,
    });
  } catch (error) {
    console.error('Error creating invoice:', error);
    return NextResponse.json(
      { error: 'Failed to create invoice' },
      { status: 500 }
    );
  }
}
