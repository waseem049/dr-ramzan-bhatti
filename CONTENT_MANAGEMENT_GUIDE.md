# 📝 Content Management Guide

## Overview

Your website content is now **fully managed through JSON files**. This makes it extremely easy to update content without touching code, and sets the foundation for building an admin panel in the future.

## 🎯 Quick Start for Content Editors

### How to Edit Content

1. **Navigate to the `/content` folder**
2. **Find the JSON file** you want to edit
3. **Edit the content** (keep JSON format intact)
4. **Save the file**
5. **Restart the development server** (if running)

### Important Rules

✅ **DO:**
- Keep proper JSON syntax (quotes, commas, brackets)
- Use a JSON validator before saving
- Make backups before major changes
- Test changes locally before deploying

❌ **DON'T:**
- Remove required fields
- Break JSON syntax
- Delete files without checking usage
- Edit without validation

## 📁 Content Structure

### 1. Site-Wide Settings

#### `/content/site/metadata.json`
Controls SEO, site title, description, keywords, social media links, analytics.

**Edit this to change:**
- Site title and description
- SEO keywords
- Social media profiles
- Google Analytics ID
- Site location/geo data

#### `/content/site/contact.json`
Phone numbers, email, WhatsApp settings, working hours, address.

**Edit this to change:**
- Contact phone number
- WhatsApp number and default message
- Email address
- Working hours
- Physical address

#### `/content/site/navigation.json`
Navbar, footer menus, quick links.

**Edit this to change:**
- Navigation menu items
- Footer sections and links
- Social media links in footer
- Copyright text

### 2. Page Content

#### `/content/pages/home.json`
Homepage content: hero section, stats, about preview, treatments preview.

**Edit this to change:**
- Hero section title, description, CTAs
- Statistics (years experience, patient count)
- About section preview
- Trust badges

#### `/content/pages/about.json`
About page: doctor's bio, qualifications, awards, expertise.

**Edit this to change:**
- Doctor's biography
- Qualifications and education
- Work experience
- Professional affiliations
- Awards and recognition
- Areas of expertise

### 3. Services & Locations

#### `/content/treatments/treatments.json`
All treatment services with full details.

**Edit this to change:**
- Treatment names and descriptions
- Treatment duration, sessions, downtime
- Benefits and procedures
- Pricing (if added)
- Before/after images (if added)

#### `/content/clinics/clinics.json`
Clinic locations, addresses, timings, facilities.

**Edit this to change:**
- Clinic names and addresses
- Phone numbers
- Opening hours
- Map embed URLs
- Facilities and services
- Images

### 4. Content Collections

#### `/content/faqs/faqs.json`
Frequently asked questions with categories.

**Edit this to change:**
- Questions and answers
- FAQ categories
- Order/priority

#### `/content/testimonials/testimonials.json`
Patient testimonials and reviews.

**Edit this to change:**
- Patient names
- Testimonial text
- Treatments received
- Ratings
- Photos

## 🛠️ For Developers

### Using Content in Code

#### Server Components (Recommended)

```typescript
import { loadHomePageContent } from '@/lib/content-loader';

export default function HomePage() {
  const content = loadHomePageContent();
  
  return (
    <div>
      <h1>{content.hero.title}</h1>
      <p>{content.hero.description}</p>
    </div>
  );
}
```

#### Client Components

Pass data as props from parent Server Component:

```typescript
// page.tsx (Server Component)
import { loadHomePageContent } from '@/lib/content-loader';
import { HeroSection } from './HeroSection';

export default function Page() {
  const content = loadHomePageContent();
  return <HeroSection data={content.hero} />;
}

// HeroSection.tsx (Client Component)
'use client';

type Props = {
  data: {
    title: string;
    description: string;
  };
};

export function HeroSection({ data }: Props) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
```

### Available Loader Functions

```typescript
import {
  loadSiteMetadata,       // Site SEO and metadata
  loadSiteContact,        // Contact information
  loadSiteNavigation,     // Navbar and footer menus
  loadHomePageContent,    // Homepage content
  loadAboutPageContent,   // About page content
  loadTreatments,         // All treatments
  loadTreatmentBySlug,    // Single treatment by slug
  loadClinics,            // All clinics
  loadClinicBySlug,       // Single clinic by slug
  loadFAQs,               // All FAQs
  loadTestimonials,       // All testimonials
} from '@/lib/content-loader';
```

### TypeScript Types

All content has TypeScript types defined in `/lib/content-loader.ts`.

Example:
```typescript
import type { Treatment, Clinic, FAQ } from '@/lib/content-loader';
```

## 🔄 Migration from Old Constants

The old `/utils/constants.ts` still works but now loads from JSON:

```typescript
// Old way (still works)
import { TreatmentsList } from '@/utils/constants';

// New way (recommended)
import { loadTreatments } from '@/lib/content-loader';
const treatments = loadTreatments();
```

## 🎨 Admin Panel Ready

This JSON structure is perfect for building an admin panel:

1. **Create** - Add new items to JSON arrays
2. **Read** - Display content from JSON
3. **Update** - Edit JSON properties
4. **Delete** - Remove items from JSON arrays

### Future Admin Panel Features

- [ ] Visual JSON editor
- [ ] Image upload management
- [ ] Preview before publish
- [ ] Version control/history
- [ ] Multi-user access control
- [ ] Search and filter content
- [ ] Bulk operations

## 📋 Content Checklist

### Before Going Live

- [ ] Update all placeholder phone numbers
- [ ] Update all placeholder email addresses
- [ ] Update clinic addresses and map URLs
- [ ] Add real testimonials
- [ ] Add real awards and qualifications
- [ ] Update social media links
- [ ] Add real Google Analytics ID
- [ ] Update WhatsApp number
- [ ] Review all treatment descriptions
- [ ] Check all FAQ answers

### Regular Maintenance

- [ ] Update testimonials monthly
- [ ] Add new FAQs as needed
- [ ] Update treatment prices (if shown)
- [ ] Update clinic timings
- [ ] Add new blog posts
- [ ] Update awards and achievements

## 🆘 Troubleshooting

### JSON Syntax Errors

**Error**: `SyntaxError: Unexpected token`

**Solution**: 
- Check for missing commas
- Check for extra commas (last item in array/object)
- Check for unmatched brackets/braces
- Use a JSON validator

### Content Not Updating

**Problem**: Changes don't appear on website

**Solutions**:
1. Restart development server
2. Clear Next.js cache (`rm -rf .next`)
3. Hard refresh browser (Ctrl+Shift+R)
4. Check file path is correct

### Type Errors

**Problem**: TypeScript errors after editing JSON

**Solution**:
- Ensure JSON structure matches type definition
- Check `/lib/content-loader.ts` for type requirements
- Don't remove required fields

## 📞 Support

For content management questions:
- Check this guide first
- Review `/content/README.md`
- Check individual JSON file comments
- Contact development team

## 🚀 Best Practices

1. **Always validate JSON** before saving
2. **Make backups** before major changes
3. **Test locally** before deploying
4. **Use consistent formatting** (2-space indentation)
5. **Document changes** in commit messages
6. **Review content** for accuracy and grammar
7. **Optimize images** before adding URLs
8. **Keep structure consistent** across similar items

---

**Last Updated**: 2026-01-21  
**Version**: 1.0.0  
**Contact**: Development Team
