# 🎨 Design System Reference
## Dr. Ramzan Bhatti Medical Website

> **Quick reference for developers implementing design improvements**

---

## 🎨 Color Palette

### **Primary Colors**
Use these for main brand elements, CTAs, and primary UI components.

```css
/* Primary - Medical Blue (Trust & Professionalism) */
bg-primary-50     /* #EFF6FF - Lightest */
bg-primary-100    /* #DBEAFE */
bg-primary-500    /* #1E3A8A - Main Brand Color ⭐ */
bg-primary-600    /* #1E40AF - Hover State */
bg-primary-700    /* #1D4ED8 - Active State */

text-primary-500  /* Use for primary text accents */
border-primary-500 /* Use for primary borders */
```

**Usage:**
```tsx
✅ DO:
<button className="bg-primary-500 hover:bg-primary-600 text-white">
  Book Appointment
</button>

❌ DON'T:
<button className="bg-[#1E3A8A]">  // Use utility classes, not arbitrary values
```

---

### **Accent Colors**
Use these sparingly for warmth and dermatology-specific elements.

```css
/* Accent - Warm Rose (Dermatology Warmth) */
bg-accent-400     /* #E5A595 */
bg-accent-500     /* #D88D7F - Main Accent ⭐ */
bg-accent-600     /* #C87565 */

/* Use for: Treatment cards, specialty badges, warm highlights */
```

**Usage:**
```tsx
✅ DO:
<span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full">
  Featured Treatment
</span>

❌ DON'T: Overuse accent color - it should be special
```

---

### **Neutral Colors**
Use these for text, backgrounds, borders, and all neutral UI elements.

```css
/* Neutrals - Professional Gray Scale */
bg-neutral-50     /* #F9FAFB - Lightest background */
bg-neutral-100    /* #F3F4F6 - Light background */
bg-neutral-200    /* #E5E7EB - Borders */
bg-neutral-500    /* #6B7280 - Secondary text */
bg-neutral-700    /* #374151 - Primary text */
bg-neutral-900    /* #111827 - Darkest text */

text-neutral-500  /* Secondary/meta text */
text-neutral-700  /* Body text */
text-neutral-900  /* Headings */
```

**Usage:**
```tsx
✅ DO:
<div className="bg-neutral-50 border border-neutral-200">
  <h2 className="text-neutral-900">Title</h2>
  <p className="text-neutral-700">Body text</p>
  <span className="text-neutral-500">Meta info</span>
</div>
```

---

### **Semantic Colors**
Use these for status, alerts, and feedback.

```css
/* Success - Green */
bg-success-500    /* #10B981 */
text-success-500

/* Warning - Amber */
bg-warning-500    /* #F59E0B */
text-warning-500

/* Error - Red */
bg-error-500      /* #EF4444 */
text-error-500

/* Info - Blue */
bg-info-500       /* #3B82F6 */
text-info-500
```

**Usage:**
```tsx
<div className="bg-success-50 border border-success-200 text-success-800">
  ✓ Appointment confirmed!
</div>

<div className="bg-error-50 border border-error-200 text-error-800">
  ✗ Please fill in all required fields
</div>
```

---

## 📝 Typography

### **Utility Classes**
Use these classes for ALL typography. No inline font styles.

```css
/* Display - Hero Headlines */
.text-display {
  font-size: 3.5rem;        /* 56px */
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  font-family: 'Montserrat', sans-serif;
}

/* H1 - Page Titles */
.text-h1 {
  font-size: 2.5rem;        /* 40px */
  line-height: 1.2;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

/* H2 - Section Titles */
.text-h2 {
  font-size: 2rem;          /* 32px */
  line-height: 1.25;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}

/* H3 - Subsection Titles */
.text-h3 {
  font-size: 1.5rem;        /* 24px */
  line-height: 1.3;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}

/* Body Large - Intro/Lead Text */
.text-body-lg {
  font-size: 1.125rem;      /* 18px */
  line-height: 1.75;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

/* Body - Standard Text */
.text-body {
  font-size: 1rem;          /* 16px */
  line-height: 1.5;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

/* Small - Secondary Text */
.text-body-sm {
  font-size: 0.875rem;      /* 14px */
  line-height: 1.5;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}

/* Label - Form Labels & Tags */
.text-label {
  font-size: 0.75rem;       /* 12px */
  line-height: 1.5;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: 'Montserrat', sans-serif;
}
```

### **Usage Examples**

```tsx
// Hero Section
<h1 className="text-display text-neutral-900">
  Transform Your Skin
</h1>

// Page Title
<h1 className="text-h1 text-neutral-900">
  About Dr. Ramzan Bhatti
</h1>

// Section Heading
<h2 className="text-h2 text-neutral-900">
  Our Treatments
</h2>

// Card Title
<h3 className="text-h3 text-neutral-900">
  Laser Hair Removal
</h3>

// Intro Paragraph
<p className="text-body-lg text-neutral-700">
  Welcome to our state-of-the-art clinic...
</p>

// Body Text
<p className="text-body text-neutral-700">
  Our treatments are designed to...
</p>

// Meta Info
<span className="text-body-sm text-neutral-500">
  Published on Jan 21, 2026
</span>

// Form Label
<label className="text-label text-neutral-500">
  Full Name
</label>
```

### **Font Weights to Use**
```css
/* Montserrat (Headings) */
font-semibold  /* 600 - H2, H3 */
font-bold      /* 700 - Display, H1 */

/* Poppins (Body) */
font-normal    /* 400 - Body text */
font-medium    /* 500 - Emphasis */
```

❌ **REMOVE these unused weights:**
- PoppinsThin (100)
- PoppinsLight (300)
- MontserratThin (100)
- MontserratLight (300)
- MontserratRegular (400)

---

## 📏 Spacing System

### **Base Unit: 4px (0.25rem)**

```css
/* Tailwind Spacing Scale */
p-1   /* 4px */
p-2   /* 8px */
p-3   /* 12px */
p-4   /* 16px */
p-6   /* 24px */
p-8   /* 32px */
p-12  /* 48px */
p-16  /* 64px */
p-24  /* 96px */
```

### **Common Patterns**

```tsx
// Section Padding
<section className="py-24 px-4 lg:px-16">

// Container Max Width
<div className="max-w-7xl mx-auto">

// Card Padding
<div className="p-6 lg:p-8">

// Card Gap
<div className="space-y-6">

// Grid Gap
<div className="grid grid-cols-3 gap-6 lg:gap-8">

// Button Padding
<button className="px-6 py-3">

// Input Padding
<input className="px-4 py-3">
```

---

## 🎭 Animations

### **Allowed Animations**
Only use these purposeful, professional animations:

```css
/* Entry Animations (Use Once on Page Load) */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}

/* Interaction Animations */
.transition-all {
  transition: all 0.2s ease-in-out;
}

.transition-transform {
  transition: transform 0.2s ease-in-out;
}

.transition-colors {
  transition: color 0.2s, background-color 0.2s;
}

/* Loading Animations */
.animate-spin {
  animation: spin 1s linear infinite;
}
```

### **Hover Effects Pattern**
```tsx
// Cards
<div className="transition-all hover:-translate-y-1 hover:shadow-xl">

// Buttons
<button className="transition-colors hover:bg-primary-600">

// Links
<a className="transition-colors hover:text-primary-500">

// Images
<img className="transition-transform hover:scale-105" />
```

### **❌ BANNED Animations**
These create an unprofessional feel:

```css
/* DO NOT USE */
❌ animate-float
❌ animate-pulseSlow
❌ animate-bounce (except loading)
❌ animate-shine
❌ rotate-2 / hover:rotate-0
❌ group-hover:rotate-*
❌ Multiple simultaneous animations
```

---

## 📦 Components

### **Buttons**

```tsx
// Primary Button
<button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 
                   text-white rounded-lg font-semibold 
                   transition-colors shadow-md hover:shadow-lg">
  Book Appointment
</button>

// Secondary Button
<button className="px-6 py-3 bg-white hover:bg-neutral-50 
                   text-primary-500 border-2 border-primary-500 
                   rounded-lg font-semibold transition-colors">
  Learn More
</button>

// Ghost Button
<button className="px-6 py-3 bg-transparent hover:bg-neutral-100 
                   text-neutral-700 rounded-lg font-semibold 
                   transition-colors">
  Cancel
</button>

// Icon Button
<button className="w-10 h-10 flex items-center justify-center 
                   rounded-full bg-neutral-100 hover:bg-neutral-200 
                   transition-colors">
  <Icon name="close" />
</button>
```

**Sizes:**
```tsx
// Small
px-4 py-2 text-sm

// Medium (Default)
px-6 py-3 text-base

// Large
px-8 py-4 text-lg
```

---

### **Cards**

```tsx
// Standard Card
<div className="bg-white rounded-xl border border-neutral-200 
                p-6 hover:border-primary-200 hover:shadow-lg 
                transition-all">
  <h3 className="text-h3 text-neutral-900 mb-3">Card Title</h3>
  <p className="text-body text-neutral-700">Card content...</p>
</div>

// Featured Card
<div className="bg-gradient-to-br from-primary-50 to-accent-50 
                rounded-xl border border-primary-200 p-8 
                shadow-lg">
  <span className="bg-primary-500 text-white px-3 py-1 
                   rounded-full text-xs font-semibold uppercase">
    Featured
  </span>
  {/* Card content */}
</div>

// Interactive Card
<article className="group bg-white rounded-xl border border-neutral-200 
                    overflow-hidden hover:border-primary-200 
                    hover:shadow-xl transition-all cursor-pointer">
  <img className="w-full h-48 object-cover 
                  group-hover:scale-105 transition-transform" />
  <div className="p-6">
    <h3 className="text-h3 group-hover:text-primary-500 transition-colors">
      Card Title
    </h3>
  </div>
</article>
```

---

### **Forms**

```tsx
// Form Field
<div className="space-y-2">
  <label className="text-label text-neutral-700">
    Full Name *
  </label>
  <input 
    type="text"
    className="w-full px-4 py-3 border border-neutral-200 rounded-lg
               focus:border-primary-500 focus:ring-2 focus:ring-primary-100
               transition-colors"
    placeholder="John Doe"
  />
  <p className="text-body-sm text-error-500">
    This field is required
  </p>
</div>

// Select
<select className="w-full px-4 py-3 border border-neutral-200 rounded-lg
                   focus:border-primary-500 focus:ring-2 focus:ring-primary-100
                   transition-colors appearance-none bg-white">
  <option>Select an option</option>
</select>

// Textarea
<textarea 
  className="w-full px-4 py-3 border border-neutral-200 rounded-lg
             focus:border-primary-500 focus:ring-2 focus:ring-primary-100
             transition-colors resize-vertical"
  rows={4}
/>

// Checkbox
<label className="flex items-center gap-3 cursor-pointer">
  <input 
    type="checkbox"
    className="w-5 h-5 text-primary-500 border-neutral-300 
               rounded focus:ring-2 focus:ring-primary-100"
  />
  <span className="text-body text-neutral-700">
    I agree to the terms
  </span>
</label>
```

---

### **Badges**

```tsx
// Primary Badge
<span className="bg-primary-100 text-primary-700 px-3 py-1 
                rounded-full text-xs font-semibold uppercase">
  Featured
</span>

// Success Badge
<span className="bg-success-100 text-success-700 px-3 py-1 
                rounded-full text-xs font-semibold">
  Published
</span>

// Neutral Badge
<span className="bg-neutral-100 text-neutral-700 px-3 py-1 
                rounded-full text-xs font-semibold">
  Draft
</span>

// Pill Badge
<span className="bg-accent-50 text-accent-700 px-2 py-0.5 
                rounded-full text-xs">
  Skin Care
</span>
```

---

### **Modals**

```tsx
// Modal Overlay
<div className="fixed inset-0 bg-black/60 backdrop-blur-sm 
                flex items-center justify-center p-4 z-50 
                animate-fade-in">
  
  {/* Modal Container */}
  <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full 
                  max-h-[90vh] overflow-y-auto animate-slide-up">
    
    {/* Modal Header */}
    <div className="flex items-center justify-between p-6 
                    border-b border-neutral-200">
      <h2 className="text-h2 text-neutral-900">Modal Title</h2>
      <button className="w-10 h-10 rounded-full bg-neutral-100 
                         hover:bg-neutral-200 transition-colors">
        ×
      </button>
    </div>
    
    {/* Modal Content */}
    <div className="p-6">
      {/* Content */}
    </div>
    
    {/* Modal Footer */}
    <div className="flex items-center justify-end gap-3 p-6 
                    border-t border-neutral-200">
      <button className="px-6 py-3 bg-neutral-100">Cancel</button>
      <button className="px-6 py-3 bg-primary-500">Confirm</button>
    </div>
  </div>
</div>
```

---

## ♿ Accessibility

### **Color Contrast Requirements**
```
Text: ≥ 4.5:1 contrast ratio
Large text (≥18px or ≥14px bold): ≥ 3:1
UI components: ≥ 3:1
```

**Safe Combinations:**
```tsx
✅ text-neutral-900 on bg-white (21:1)
✅ text-neutral-700 on bg-white (8.6:1)
✅ text-white on bg-primary-500 (7.2:1)
✅ text-primary-700 on bg-primary-50 (8.1:1)

❌ text-neutral-400 on bg-white (3.1:1) - TOO LOW
❌ text-primary-300 on bg-white (2.8:1) - TOO LOW
```

### **Focus States**
All interactive elements MUST have visible focus indicators:

```tsx
// Buttons
<button className="focus:outline-none focus:ring-4 
                   focus:ring-primary-100">

// Links
<a className="focus:outline-none focus:ring-2 
              focus:ring-primary-500 focus:ring-offset-2">

// Inputs
<input className="focus:border-primary-500 focus:ring-2 
                  focus:ring-primary-100">
```

### **Touch Targets**
All clickable elements must be at least 44x44px:

```tsx
// Minimum button size
<button className="min-h-[44px] min-w-[44px]">

// Icon buttons
<button className="w-11 h-11 flex items-center justify-center">
  <Icon />
</button>
```

### **ARIA Labels**
```tsx
// Icon-only buttons
<button aria-label="Close modal">
  <Icon name="close" />
</button>

// Form inputs
<label htmlFor="email">Email Address</label>
<input id="email" type="email" />

// Landmark regions
<nav aria-label="Main navigation">
<main aria-label="Main content">
```

---

## 📱 Responsive Design

### **Breakpoints**
```css
sm:   640px   /* Mobile landscape */
md:   768px   /* Tablet */
lg:   1024px  /* Desktop */
xl:   1280px  /* Large desktop */
2xl:  1536px  /* Extra large */
```

### **Common Patterns**
```tsx
// Typography
<h1 className="text-3xl lg:text-5xl">

// Spacing
<section className="py-12 lg:py-24">

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Hide on mobile
<div className="hidden lg:block">

// Show only on mobile
<div className="lg:hidden">

// Padding
<div className="px-4 lg:px-16">
```

---

## 🎯 Usage Checklist

Before committing any component, verify:

- [ ] Uses only approved colors from unified palette
- [ ] Uses typography utility classes (no inline styles)
- [ ] Has ≤2 animation properties
- [ ] All text has ≥4.5:1 contrast
- [ ] Touch targets are ≥44x44px
- [ ] Has visible focus indicators
- [ ] Works on mobile (375px width)
- [ ] Follows spacing system (4px base)
- [ ] No console errors
- [ ] Passes accessibility audit

---

## 🔗 Related Documents

- **Full Audit:** `DESIGN_AUDIT_AND_IMPROVEMENTS_PLAN.md`
- **Quick Summary:** `DESIGN_IMPROVEMENTS_SUMMARY.md`
- **Tailwind Config:** `tailwind.config.ts`
- **Global Styles:** `app/globals.css`

---

**Last Updated:** January 21, 2026  
**Version:** 1.0

