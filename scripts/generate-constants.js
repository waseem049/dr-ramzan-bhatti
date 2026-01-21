/**
 * Generate Constants from JSON
 * This script reads JSON files and generates a TypeScript constants file
 * Run this during build: node scripts/generate-constants.js
 */

const fs = require('fs');
const path = require('path');

const contentDir = path.join(process.cwd(), 'content');
const outputFile = path.join(process.cwd(), 'utils', 'constants.ts');

// Read JSON files
const navigation = JSON.parse(fs.readFileSync(path.join(contentDir, 'site/navigation.json'), 'utf8'));
const contact = JSON.parse(fs.readFileSync(path.join(contentDir, 'site/contact.json'), 'utf8'));
const treatments = JSON.parse(fs.readFileSync(path.join(contentDir, 'treatments/treatments.json'), 'utf8'));
const faqs = JSON.parse(fs.readFileSync(path.join(contentDir, 'faqs/faqs.json'), 'utf8'));
const testimonials = JSON.parse(fs.readFileSync(path.join(contentDir, 'testimonials/testimonials.json'), 'utf8'));
const about = JSON.parse(fs.readFileSync(path.join(contentDir, 'pages/about.json'), 'utf8'));
const clinics = JSON.parse(fs.readFileSync(path.join(contentDir, 'clinics/clinics.json'), 'utf8'));

// Generate TypeScript constants file
const content = `/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 * Generated from JSON content files in /content directory
 * To update: Edit JSON files and run 'npm run generate:constants'
 * 
 * For new code, prefer using the JSON loader functions:
 * import { loadTreatments } from '@/lib/content-loader.server';
 */

export const NavBarData = ${JSON.stringify(navigation.navbar.map(item => ({
  label: item.label,
  href: item.href,
})), null, 2)};

export const ContactInfo = ${JSON.stringify(contact, null, 2)};

export const TreatmentsList = ${JSON.stringify(treatments.treatments.map(t => ({
  treatment: t.name,
  description: t.description,
})), null, 2)};

export const FAQs = ${JSON.stringify(faqs.faqs.map(faq => ({
  question: faq.question,
  answer: faq.answer,
})), null, 2)};

export const Testimonials = ${JSON.stringify(testimonials.testimonials.map(t => ({
  name: t.name,
  treatmentReceived: t.treatmentReceived,
  feedback: t.feedback,
  displayPicture: t.displayPicture,
})), null, 2)};

export const CareerHighlights = ${JSON.stringify(about.careerHighlights, null, 2)};

export const ClinicsData = ${JSON.stringify(clinics.clinics.map(c => ({
  slug: c.slug,
  name: c.name,
  address: c.address,
  phone: c.phone,
  timings: c.timings,
  mapEmbedUrl: c.mapEmbedUrl,
  description: c.description,
})), null, 2)};

export const AwardsData = ${JSON.stringify(about.awards.map(a => ({
  title: a.title,
  year: a.year,
  organization: a.organization,
  description: a.description,
})), null, 2)};
`;

// Write file
fs.writeFileSync(outputFile, content, 'utf8');

console.log('✅ Constants generated successfully from JSON files!');
console.log(`📁 Output: ${outputFile}`);
