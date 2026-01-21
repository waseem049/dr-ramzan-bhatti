# Dr. Ramzan Bhatti - Dermatology & Laser Specialist Website

A modern, professional medical website built with Next.js 15, featuring advanced UI/UX design and comprehensive dermatology clinic features.

## 🚀 Features

### Core Features
- ✅ **Responsive Design** - Mobile-first, fully responsive across all devices
- ✅ **Modern UI/UX** - Skin-tone inspired color palette with smooth animations
- ✅ **SEO Optimized** - Complete meta tags, Open Graph, Schema.org markup
- ✅ **Performance** - Optimized images, code splitting, skeleton loaders
- ✅ **Analytics** - Google Analytics & Umami integration

### New Design Improvements & Features

#### 1. **WhatsApp Quick Contact Button** 🟢
- Floating button with ripple effect
- Direct WhatsApp messaging
- Animated notification badge
- Tooltip on hover

#### 2. **Back to Top Button** ⬆️
- Circular progress indicator
- Appears after scrolling 300px
- Smooth scroll animation
- Auto-hides at top

#### 3. **Before/After Gallery** 🖼️
- Interactive image comparison slider
- Drag to compare results
- Treatment category selection
- Touch-friendly mobile interface
- Patient results showcase

#### 4. **Advanced Appointment Booking** 📅
- Multi-step booking form
- Date & time slot selection
- Clinic location picker
- Treatment type selector
- Progress indicator
- Form validation

#### 5. **Virtual Consultation** 💻
- Video call consultation booking
- HD video consultation option
- Secure & private
- Scheduling system
- Email confirmation

#### 6. **Individual Treatment Pages** 🏥
- Detailed treatment information
- Benefits & features list
- FAQ sections
- Quick info sidebar
- Session details
- Call-to-action sections

#### 7. **Testimonials Carousel** ⭐
- Auto-play functionality
- Manual navigation
- Pause on hover
- Progress bar
- Dot indicators
- Smooth transitions

#### 8. **Smooth Scroll Navigation** 🎯
- Anchor link smooth scrolling
- Section-based navigation
- Header offset compensation

#### 9. **Loading Skeletons** ⏳
- Card skeletons
- Blog post skeletons
- Treatment card skeletons
- Testimonial skeletons
- List skeletons
- Better perceived performance

#### 10. **Enhanced Hero Section** 🎨
- Interactive parallax background
- Mouse movement effects
- Animated statistics counter
- Premium badge designs
- Professional photography
- Sophisticated overlays

## 🎨 Design System

### Color Palette
```css
Primary: #D88D7F (Warm Rose - Healthy Skin Glow)
Accent: #EFCAC4 (Soft Pink - Natural Radiance)
Background: #FFFCF9 (Warm White)
Success: #A8C5A3 (Soft Sage Green)
Medical Blue: #1E40AF (Trust & Professionalism)
Luxury Gold: #D4AF37 (Elegance)
```

### Typography
- **Headings**: Montserrat (Thin, Light, Regular, Semibold, Bold)
- **Body**: Poppins (Thin, Light, Regular, Semibold, Bold)

### Animations
- Fade In / Out
- Slide In (Left, Right, Up)
- Scale In
- Float
- Gradient
- Shine
- Pulse

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Forms**: Formik + Yup
- **Icons**: FontAwesome
- **Images**: Next/Image with optimization
- **Analytics**: Google Analytics + Umami

## 📦 Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── about/              # About page
│   ├── blogs/              # Blog listing & individual posts
│   ├── clinics/            # Clinic pages
│   ├── components/         # Page-specific components
│   ├── contact-us/         # Contact form
│   ├── treatments/         # Treatment pages
│   │   └── [slug]/        # Dynamic treatment detail pages
│   ├── AppLayout.tsx       # Main layout wrapper
│   ├── HomePage.tsx        # Home page composition
│   └── layout.tsx          # Root layout with metadata
│
├── components/             # Reusable UI components
│   ├── AppointmentBooking/ # Appointment modal
│   ├── BackToTop/          # Back to top button
│   ├── BeforeAfterGallery/ # Image comparison gallery
│   ├── SkeletonLoader/     # Loading skeletons
│   ├── TestimonialsCarousel/ # Testimonials slider
│   ├── VirtualConsultation/ # Virtual booking modal
│   ├── WhatsAppButton/     # WhatsApp floating button
│   └── ...                 # Other components
│
├── hooks/                  # Custom React hooks
│   ├── useScrollDirection.ts
│   └── useSmoothScroll.ts
│
├── utils/                  # Utilities & constants
│   ├── constants.ts        # Static data
│   ├── types.ts           # TypeScript types
│   └── countryCodes.ts    # Country dial codes
│
└── public/                # Static assets
    ├── fonts/             # Custom fonts
    └── images/            # Images
```

## 🌟 Key Components

### WhatsAppButton
```tsx
<WhatsAppButton />
```
Floating WhatsApp button with animation and tooltip.

### AppointmentBooking
```tsx
<AppointmentBooking />
```
Multi-step appointment booking modal with form validation.

### VirtualConsultation
```tsx
<VirtualConsultation />
```
Video consultation booking system.

### BeforeAfterGallery
```tsx
<BeforeAfterGallery />
```
Interactive before/after image comparison slider.

### BackToTop
```tsx
<BackToTop />
```
Scroll-to-top button with progress indicator.

## 📄 Pages

1. **Home** (`/`) - Hero, About, Treatments, Gallery, FAQ, Testimonials, Blogs
2. **About** (`/about`) - Professional journey, awards, qualifications
3. **Treatments** (`/treatments`) - All treatments overview
4. **Treatment Detail** (`/treatments/[slug]`) - Individual treatment pages
5. **Clinics** (`/clinics`) - Clinic locations
6. **Blogs** (`/blogs`) - Blog listing (API integration needed)
7. **Contact** (`/contact-us`) - Contact form

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_UMAMI_ID=your-umami-id
```

### Phone Numbers
Update in components:
- `components/WhatsAppButton/WhatsAppButton.tsx`
- `app/layout.tsx`

### Clinic Data
Update in `utils/constants.ts`:
- `ClinicsData` - Clinic locations
- `TreatmentsList` - Available treatments
- `Testimonials` - Patient reviews
- `FAQs` - Frequently asked questions

## 🎯 Performance Optimizations

- ✅ Image optimization with Next/Image
- ✅ Code splitting with dynamic imports
- ✅ Skeleton loading states
- ✅ Lazy loading components
- ✅ Optimized fonts with font-display: swap
- ✅ Minified CSS & JS
- ✅ Gzip compression

## 🔐 SEO Features

- Complete meta tags
- Open Graph tags
- Twitter Card tags
- Schema.org JSON-LD (Person + MedicalClinic)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs
- Alt tags on images

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Build & Export
```bash
npm run build
npm start
```

## 📝 Future Enhancements

- [ ] Blog CMS integration
- [ ] Patient portal
- [ ] Online payment system
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Treatment result tracking
- [ ] Email newsletter system
- [ ] Social media integration

## 🤝 Contributing

This is a private project for Dr. Ramzan Bhatti's clinic.

## 📧 Support

For technical support or inquiries:
- Email: info@drramzanbhatti.com
- Phone: +91 9876543210

## 📄 License

© 2026 Dr. Ramzan Bhatti. All rights reserved.

---

**Built with ❤️ using Next.js 15 & Tailwind CSS**
