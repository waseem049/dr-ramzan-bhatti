# Admin Panel Guide

## 🎯 Overview

A comprehensive admin panel with **role-based access control (RBAC)** for managing your clinic website. Currently configured for frontend-only usage (no backend integration).

## 🚀 Quick Start

### Accessing the Admin Panel

1. Navigate to: `http://localhost:3000/admin` or `http://localhost:3000/admin/login`
2. Select your role from the available options
3. Use the provided credentials to login

## 👥 User Roles & Access

### 🩺 Doctor (Full Access)
**Credentials:** `doctor@clinic.com` / `doctor123`

**Access to:**
- ✅ Dashboard (Full stats and analytics)
- ✅ Appointments Management
- ✅ Patient Records
- ✅ Content Management (Blogs, Treatments, FAQs)
- ✅ Media Library
- ✅ Settings (Full system configuration)

**Permissions:**
- View and manage all appointments
- Access patient database
- Create, edit, and delete content
- Upload and manage media files
- Configure system settings
- Manage user accounts and roles

---

### 📅 Receptionist (Limited Access)
**Credentials:** `receptionist@clinic.com` / `receptionist123`

**Access to:**
- ✅ Dashboard (Appointment-focused stats)
- ✅ Appointments Management
- ✅ Patient Records (View and add)
- ❌ Content Management (No access)
- ❌ Media Library (No access)
- ❌ Settings (No access)

**Permissions:**
- View, create, and manage appointments
- Add new patients to the database
- View patient records
- Confirm and schedule appointments
- Cannot edit content or system settings

---

### ✍️ Editor (Content-Focused Access)
**Credentials:** `editor@clinic.com` / `editor123`

**Access to:**
- ✅ Dashboard (Content-focused stats)
- ❌ Appointments (No access)
- ❌ Patient Records (No access)
- ✅ Content Management (Full access)
- ✅ Media Library
- ❌ Settings (No access)

**Permissions:**
- Create, edit, and publish blog posts
- Manage treatments, FAQs, and testimonials
- Upload and organize media files
- View content analytics and stats
- Cannot access appointments or patient data

## 📋 Features

### 1. **Dashboard**
- Role-specific statistics and metrics
- Quick action buttons
- Recent activity feed
- Today's schedule (for Doctor/Receptionist)
- Content performance (for Editor)

### 2. **Appointments Management**
- View all appointments with filters (pending, confirmed, completed, cancelled)
- Search appointments by patient name, email, or treatment
- Appointment status management
- Patient contact information
- Treatment and clinic details

### 3. **Patient Database**
- Comprehensive patient records (coming soon)
- Patient history and notes
- Contact information management
- Medical records (for Doctor only)

### 4. **Content Management**
- **Blog Posts**: Create, edit, and publish articles
- **Treatments**: Manage treatment information and descriptions
- **FAQs**: Add and organize frequently asked questions
- **Testimonials**: Review and approve patient testimonials

### 5. **Media Library**
- Upload images, videos, and documents
- Organize media files by category
- AWS S3 integration (configurable)
- Media usage tracking

### 6. **Settings** (Doctor Only)
- General site configuration
- User management (add/remove admin users)
- Clinic settings (locations, timings, contact info)
- Notification preferences (email, SMS)

## 🔐 Security Features

### Frontend Security (Current Implementation)
- ✅ Role-based routing protection
- ✅ localStorage-based session management
- ✅ Automatic redirect for unauthorized access
- ✅ Permission checks on every page
- ✅ Role-specific UI elements

### Backend Security (To Be Implemented)
- ⏳ JWT token authentication
- ⏳ API route protection
- ⏳ Password hashing (bcrypt)
- ⏳ Session expiration
- ⏳ CSRF protection
- ⏳ Rate limiting

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Sidebar Navigation**: Easy access to all sections
- **Quick Actions**: Fast access to common tasks
- **Real-time Stats**: Live updates on dashboard
- **Dark Mode**: (Coming soon)

## 🛠️ Technical Details

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: FontAwesome
- **Authentication**: Context API (localStorage)
- **Forms**: Formik + Yup validation

### File Structure
```
app/admin/
├── layout.tsx              # Admin layout with sidebar
├── page.tsx                # Redirect to dashboard
├── login/
│   └── page.tsx            # Login page with role selection
├── dashboard/
│   └── page.tsx            # Role-based dashboard
├── appointments/
│   └── page.tsx            # Appointments management
├── patients/
│   └── page.tsx            # Patient database
├── content/
│   └── page.tsx            # Content management
├── media/
│   └── page.tsx            # Media library
└── settings/
    └── page.tsx            # System settings

contexts/
└── AdminAuthContext.tsx    # Authentication state management
```

## 🔄 Next Steps for Backend Integration

When you're ready to add backend functionality:

1. **Create API Routes** (`app/api/admin/...`)
   - `/api/admin/auth/login` - Login endpoint
   - `/api/admin/auth/logout` - Logout endpoint
   - `/api/admin/appointments` - CRUD for appointments
   - `/api/admin/content` - Content management endpoints
   - `/api/admin/users` - User management

2. **Database Setup**
   - Create database schema for users, appointments, patients
   - Set up Prisma ORM or MongoDB
   - Create migration files

3. **Update Auth Context**
   - Replace localStorage with JWT tokens
   - Add token refresh mechanism
   - Implement session expiration

4. **Add Middleware**
   - Create `middleware.ts` for route protection
   - Verify JWT tokens on protected routes
   - Handle unauthorized access

5. **Environment Variables**
   ```env
   DATABASE_URL=your_database_url
   JWT_SECRET=your_secret_key
   AWS_S3_BUCKET=your_bucket
   AWS_ACCESS_KEY=your_key
   AWS_SECRET_KEY=your_secret
   ```

## 📱 Usage Examples

### Example 1: Logging in as Doctor
1. Go to `/admin/login`
2. Select "Doctor" role
3. Enter: `doctor@clinic.com` / `doctor123`
4. Click "Sign In as Doctor"
5. You'll be redirected to the dashboard with full access

### Example 2: Managing Appointments (Receptionist)
1. Login as receptionist
2. Go to "Appointments" from sidebar
3. View all appointments with status filters
4. Search for specific patient or treatment
5. Use action buttons to view, edit, or delete appointments

### Example 3: Publishing Content (Editor)
1. Login as editor
2. Go to "Content" from sidebar
3. Select "Blog Posts" tab
4. Click "Add New" button
5. Write and publish your blog post

## 🐛 Troubleshooting

### Issue: Can't access admin panel
**Solution**: Make sure you're using the correct URL: `/admin/login`

### Issue: Getting "Access Denied" error
**Solution**: You're trying to access a page your role doesn't have permission for. Check the role permissions above.

### Issue: Session expired after refresh
**Solution**: This is expected with localStorage-based auth. For persistent sessions, backend integration with JWT is needed.

### Issue: Changes not saving
**Solution**: Currently all data is mock data. Backend integration is required for persistent storage.

## 🎯 Future Enhancements

- [ ] Real-time notifications
- [ ] Email templates management
- [ ] SMS integration
- [ ] Appointment reminders
- [ ] Analytics dashboard
- [ ] Export functionality (PDF, Excel)
- [ ] Calendar view for appointments
- [ ] Patient portal
- [ ] Online payment integration
- [ ] Multi-language support

## 💡 Tips & Best Practices

1. **Regular Backups**: When backend is integrated, set up automated backups
2. **Strong Passwords**: Use complex passwords for production
3. **Role Separation**: Assign roles based on actual job responsibilities
4. **Regular Audits**: Review user activity and permissions
5. **Mobile Access**: Test admin panel on mobile devices regularly

## 📞 Support

For issues or questions:
- Check this guide first
- Review the code comments
- Test with different roles to understand permissions
- Prepare for backend integration following the "Next Steps" section

---

**Version**: 1.0.0 (Frontend Only)  
**Last Updated**: January 21, 2026  
**Status**: ✅ Fully Functional (Frontend) | ⏳ Backend Integration Pending
