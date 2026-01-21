import { NextRequest, NextResponse } from 'next/server';
import { adminUsersDB } from '@/lib/json-db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, role } = body;

    if (!email || !password || !role) {
      return NextResponse.json(
        { error: 'Email, password, and role are required' },
        { status: 400 }
      );
    }

    // Read users from JSON
    const data = await adminUsersDB.read();
    const user = data.users.find(
      (u) => u.email === email && u.role === role && u.isActive
    );

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Simple password check (for demo - in production use bcrypt)
    // For now, accept the demo passwords
    const demoPasswords: Record<string, string> = {
      'doctor@clinic.com': 'doctor123',
      'receptionist@clinic.com': 'receptionist123',
      'editor@clinic.com': 'editor123',
    };

    if (demoPasswords[email] !== password) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    user.lastLogin = new Date().toISOString();
    await adminUsersDB.write(data);

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
