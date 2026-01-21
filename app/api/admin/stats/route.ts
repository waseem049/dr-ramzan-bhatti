import { NextResponse } from 'next/server';
import { appointmentsDB, patientsDB } from '@/lib/json-db';
import fs from 'fs/promises';
import path from 'path';

// GET - Fetch dashboard statistics
export async function GET() {
  try {
    const appointmentsData = await appointmentsDB.read();
    const patientsData = await patientsDB.read();

    const appointments = appointmentsData.appointments || [];
    const patients = patientsData.patients || [];

    // Calculate today's date
    const today = new Date().toISOString().split('T')[0];

    // Load blogs data for editor stats
    const blogsFile = path.join(process.cwd(), 'data/blogs.json');
    let blogsData: any = { posts: [] };
    try {
      const blogsContent = await fs.readFile(blogsFile, 'utf-8');
      blogsData = JSON.parse(blogsContent);
    } catch (error) {
      console.error('Error loading blogs:', error);
    }

    const blogPosts = blogsData.posts || [];
    const publishedBlogs = blogPosts.filter((post: any) => post.status === 'published').length;
    const draftBlogs = blogPosts.filter((post: any) => post.status === 'draft').length;

    const recentAppointments = appointments
      .filter((apt: any) => apt.status !== 'cancelled')
      .sort((a: any, b: any) => {
        const dateA = new Date(a.date + ' ' + a.time).getTime();
        const dateB = new Date(b.date + ' ' + b.time).getTime();
        return dateB - dateA;
      })
      .slice(0, 5)
      .map((apt: any) => ({
        id: apt.id,
        patientName: apt.patientName,
        treatment: apt.treatment,
        date: apt.date,
        time: apt.time,
        status: apt.status === 'pending' ? 'Pending' : apt.status === 'confirmed' ? 'Confirmed' : 'Completed',
      }));

    // Statistics for all roles
    const stats = {
      // Doctor stats
      totalAppointments: appointments.length,
      newPatients: patients.filter((p: any) => {
        const createdDate = new Date(p.createdAt);
        const now = new Date();
        return createdDate.getMonth() === now.getMonth() && 
               createdDate.getFullYear() === now.getFullYear();
      }).length,
      treatmentsPerformed: appointments.filter((apt: any) => apt.status === 'completed').length,
      revenueGenerated: appointments.filter((apt: any) => apt.status === 'completed').length * 150,
      
      // Receptionist stats
      todayAppointments: appointments.filter((apt: any) => apt.date === today).length,
      pendingAppointments: appointments.filter((apt: any) => apt.status === 'pending').length,
      totalPatients: patients.length,
      newInquiries: 5, // Mock data
      
      // Editor stats
      totalBlogs: blogPosts.length,
      publishedTreatments: 8, // Mock data (will be updated when treatments API is built)
      pendingReviews: draftBlogs,
      mediaUploads: 45, // Mock data (will be updated when media API is built)
      
      // Shared stats
      unreadNotifications: 7,
      recentAppointments,
    };

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
