# 🚀 Deployment Checklist

## Pre-Deployment Tasks

### 1. Content Updates
- [ ] Update phone numbers in all components
  - [ ] `components/WhatsAppButton/WhatsAppButton.tsx` (line 6)
  - [ ] `app/layout.tsx` (line 134)
  - [ ] Treatment detail pages
  - [ ] Contact page
  - [ ] Footer component

- [ ] Update clinic information
  - [ ] Edit `utils/constants.ts` - `ClinicsData`
  - [ ] Add accurate addresses
  - [ ] Update Google Maps embed URLs
  - [ ] Update operating hours

- [ ] Add real images
  - [ ] Upload doctor's photo to `/public/images/doctor.png`
  - [ ] Add before/after treatment images to `/public/images/before-after/`
  - [ ] Update placeholder images

- [ ] Review and update text content
  - [ ] Hero section copy
  - [ ] About section details
  - [ ] Treatment descriptions
  - [ ] FAQ answers
  - [ ] Testimonials (ensure patient consent)

### 2. Configuration
- [ ] Set up environment variables
  ```env
  NEXT_PUBLIC_GA_ID=your-google-analytics-id
  NEXT_PUBLIC_UMAMI_ID=your-umami-tracking-id
  NEXT_PUBLIC_SITE_URL=https://www.drramzanbhatti.com
  ```

- [ ] Update site metadata
  - [ ] `app/layout.tsx` - Update URLs
  - [ ] Verify email addresses
  - [ ] Check social media links
  - [ ] Update canonical URLs

- [ ] Configure domain
  - [ ] Purchase/configure domain
  - [ ] Set up DNS records
  - [ ] Configure SSL certificate

### 3. Analytics & Tracking
- [ ] Set up Google Analytics
  - [ ] Create GA4 property
  - [ ] Add tracking ID
  - [ ] Configure goals/conversions
  - [ ] Test tracking

- [ ] Set up Umami Analytics (optional)
  - [ ] Create account
  - [ ] Add website
  - [ ] Configure tracking

- [ ] Set up Google Search Console
  - [ ] Verify ownership
  - [ ] Submit sitemap
  - [ ] Monitor indexing

### 4. SEO Optimization
- [ ] Generate sitemap
  - [ ] Run build to generate `/sitemap.xml`
  - [ ] Verify all pages included

- [ ] Verify robots.txt
  - [ ] Check `/robots.txt` configuration
  - [ ] Ensure critical pages are indexed

- [ ] Test meta tags
  - [ ] Open Graph tags
  - [ ] Twitter Cards
  - [ ] Schema markup

- [ ] Image optimization
  - [ ] Compress all images
  - [ ] Add alt text
  - [ ] Use WebP format where possible

### 5. Performance Testing
- [ ] Run Lighthouse audit
  - [ ] Performance > 90
  - [ ] Accessibility > 95
  - [ ] Best Practices > 90
  - [ ] SEO > 95

- [ ] Test page load speed
  - [ ] First Contentful Paint < 1.8s
  - [ ] Largest Contentful Paint < 2.5s
  - [ ] Time to Interactive < 3.8s

- [ ] Mobile optimization
  - [ ] Test on real devices
  - [ ] Check touch targets
  - [ ] Verify responsive layout

### 6. Functionality Testing
- [ ] Test all forms
  - [ ] Contact form (currently disabled)
  - [ ] Appointment booking
  - [ ] Virtual consultation booking
  - [ ] Newsletter subscription

- [ ] Test navigation
  - [ ] All menu links
  - [ ] Internal page links
  - [ ] Back to top button
  - [ ] Smooth scrolling

- [ ] Test interactive features
  - [ ] Before/after slider
  - [ ] Testimonials carousel
  - [ ] WhatsApp button
  - [ ] All modals and popups

- [ ] Test on multiple browsers
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
  - [ ] Mobile browsers

### 7. Security
- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Configure CORS if needed
- [ ] Review environment variables
- [ ] Enable rate limiting (if API is added)

### 8. Backup & Recovery
- [ ] Set up automated backups
- [ ] Document deployment process
- [ ] Create rollback plan
- [ ] Save copy of current site

## Deployment Steps

### Option 1: Vercel (Recommended)

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Login to Vercel
```bash
vercel login
```

3. Deploy
```bash
vercel --prod
```

4. Configure custom domain in Vercel dashboard

### Option 2: Manual Build

1. Build the project
```bash
npm run build
```

2. Test production build locally
```bash
npm start
```

3. Deploy build folder to hosting provider

## Post-Deployment Tasks

### Immediate
- [ ] Test live site thoroughly
- [ ] Check all forms are working
- [ ] Verify analytics tracking
- [ ] Test on mobile devices
- [ ] Check page load times

### Within 24 Hours
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Create social media profiles
- [ ] Share on social media

### Within 1 Week
- [ ] Monitor analytics data
- [ ] Check for any errors
- [ ] Gather initial user feedback
- [ ] Optimize based on real data

### Ongoing
- [ ] Weekly: Check analytics
- [ ] Monthly: Review and update content
- [ ] Monthly: Check for broken links
- [ ] Quarterly: Performance audit
- [ ] As needed: Add blog posts

## Backend Integration (When Ready)

### 1. Contact Form
- [ ] Set up email service (SendGrid, AWS SES, etc.)
- [ ] Create API endpoint for form submissions
- [ ] Update `app/contact-us/components/ContactUsForm/ContactUsForm.tsx`
- [ ] Test email delivery

### 2. Appointment System
- [ ] Set up database (PostgreSQL, MongoDB, etc.)
- [ ] Create booking API
- [ ] Implement calendar sync
- [ ] Set up email notifications
- [ ] Add SMS reminders

### 3. Blog System
- [ ] Set up CMS (Contentful, Sanity, Strapi)
- [ ] Create API endpoints
- [ ] Update blog pages to fetch from API
- [ ] Add blog management interface

### 4. Virtual Consultation
- [ ] Integrate video platform (Zoom, Twilio, etc.)
- [ ] Set up scheduling system
- [ ] Create meeting links
- [ ] Send confirmation emails

## Monitoring & Maintenance

### Tools to Set Up
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] Security scanning

### Regular Tasks
- Weekly:
  - Check analytics
  - Review error logs
  - Monitor uptime

- Monthly:
  - Update dependencies
  - Security audit
  - Performance review
  - Content updates

- Quarterly:
  - Full site audit
  - User feedback review
  - Feature additions
  - Design refresh

## Emergency Contacts

**Developer:**
- Name: [Your Name]
- Email: [Your Email]
- Phone: [Your Phone]

**Hosting:**
- Provider: [Vercel/Other]
- Support: [Support Email/Phone]

**Domain Registrar:**
- Provider: [Domain Provider]
- Support: [Support Contact]

## Notes

- Always test in staging before production
- Keep backups before major updates
- Document all configuration changes
- Maintain version control (Git)

---

**Deployment Checklist Version:** 1.0
**Last Updated:** January 20, 2026
**Status:** Ready for Deployment ✅
