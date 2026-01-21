# Content Management System

This directory contains all website content in JSON format. This makes it easy to manage content and build an admin panel in the future.

## Directory Structure

```
content/
├── site/              # Site-wide settings
│   ├── metadata.json  # SEO, site info, analytics
│   ├── contact.json   # Contact info, phone, email, social
│   └── navigation.json # Navbar, footer menus
├── pages/             # Page-specific content
│   ├── home.json      # Homepage sections
│   └── about.json     # About page content
├── treatments/        # Treatments data
│   └── treatments.json
├── clinics/           # Clinics data
│   └── clinics.json
├── faqs/              # FAQ data
│   └── faqs.json
├── testimonials/      # Testimonials data
│   └── testimonials.json
└── blogs/             # Blog posts (can be added)
    └── blogs.json
```

## How to Use

### In Server Components

```typescript
import { loadHomePageContent, loadTreatments } from '@/lib/content-loader';

export default function HomePage() {
  const homeContent = loadHomePageContent();
  const treatments = loadTreatments();

  return (
    <div>
      <h1>{homeContent.hero.title}</h1>
      <p>{homeContent.hero.description}</p>
    </div>
  );
}
```

### In Client Components

Pass the data as props from a Server Component:

```typescript
// Server Component (page.tsx)
import { loadHomePageContent } from '@/lib/content-loader';
import { HeroClient } from './HeroClient';

export default function Page() {
  const content = loadHomePageContent();
  return <HeroClient heroContent={content.hero} />;
}

// Client Component (HeroClient.tsx)
'use client';
export function HeroClient({ heroContent }) {
  return <h1>{heroContent.title}</h1>;
}
```

## Content Files

### 1. Site Metadata (`site/metadata.json`)
Contains SEO, site information, social media links, analytics IDs.

### 2. Site Contact (`site/contact.json`)
Phone numbers, email, WhatsApp info, working hours, address.

### 3. Navigation (`site/navigation.json`)
Navbar links, footer links, social media links.

### 4. Home Page (`pages/home.json`)
Hero section, stats, about section, treatments section content.

### 5. About Page (`pages/about.json`)
Doctor's biography, qualifications, awards, expertise.

### 6. Treatments (`treatments/treatments.json`)
All treatment services with details, benefits, procedures.

### 7. Clinics (`clinics/clinics.json`)
Clinic locations, addresses, timings, facilities.

### 8. FAQs (`faqs/faqs.json`)
Frequently asked questions with categories.

### 9. Testimonials (`testimonials/testimonials.json`)
Patient testimonials and reviews.

## Editing Content

1. **Edit JSON files directly** - All content is in JSON format
2. **Validate JSON** - Use a JSON validator to ensure proper format
3. **Restart dev server** - Changes in Server Components require restart
4. **Build admin panel** - Use these JSON files as your database

## Benefits

✅ **Easy to manage** - All content in one place  
✅ **Admin panel ready** - Can easily build CRUD interface  
✅ **Version control friendly** - Track changes in git  
✅ **Type-safe** - TypeScript types provided  
✅ **No database needed** - Perfect for static/JAMstack sites  
✅ **Fast performance** - Content loaded at build time  

## Future Enhancements

- [ ] Add blog posts JSON
- [ ] Add gallery/before-after images JSON
- [ ] Add team members JSON
- [ ] Build admin panel to edit JSON files
- [ ] Add JSON schema validation
- [ ] Add multi-language support

## For Developers

All content loading functions are in `/lib/content-loader.ts`.

All TypeScript types are defined in the same file for type safety.

To add new content:
1. Create new JSON file in appropriate directory
2. Add loading function in `content-loader.ts`
3. Add TypeScript type
4. Use in components

## For Content Editors

Simply edit the JSON files to change website content.

**Important**: Maintain proper JSON formatting (commas, quotes, brackets).

Use a JSON editor or validator to avoid syntax errors.
