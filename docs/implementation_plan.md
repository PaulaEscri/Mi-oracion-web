# Mi Oración — Landing Web Informativa

## Overview

Creating a calm, conversion-focused informative landing page for the Mi Oración app. This is **not** a corporate site, blog, or PWA—it's a trust-building funnel designed to convert cold traffic from Meta Ads into app downloads.

**Core Philosophy**: Sin presión. Sin culpa. Sin drama.

**Single Objective**: Get users to understand what Mi Oración is in 15-30 seconds and download the app.

---

## User Review Required

> [!IMPORTANT]
> **Technology Stack Decision**
> 
> Based on your brief, I recommend **Next.js 15 (App Router) + TailwindCSS** for this project:
> 
> **Why Next.js:**
> - Built-in SEO optimization (metadata API)
> - Excellent performance out of the box
> - Easy deployment to Vercel
> - i18n-ready for future multilingual support
> - Static export capability for ultra-fast loading
> 
> **Why TailwindCSS:**
> - Rapid development with utility classes
> - Easy to maintain design consistency
> - Built-in responsive design
> - Small bundle size with purging
> 
> **Alternative**: If you prefer vanilla CSS for maximum control, I can build with Next.js + custom CSS modules instead.

> [!IMPORTANT]
> **Ramadan Section**
> 
> The brief includes a conditional Ramadan section. Should this be:
> - **Always visible** (with "Este Ramadán" messaging)
> - **Date-conditional** (only shown during Ramadan period)
> - **Manually toggled** (you control visibility via config)
> 
> For the initial build, I'll make it **always visible** and easy to toggle via a simple config flag.

---

## Proposed Changes

### Project Initialization

#### [NEW] Next.js Project Structure

Initialize a new Next.js 15 project with:
- App Router architecture
- TailwindCSS configuration
- Custom fonts (Inter from Google Fonts)
- SEO metadata configuration
- Optimized for static export

**Key files to create:**
- `package.json` - Dependencies and scripts
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Design system tokens
- `tsconfig.json` - TypeScript configuration

---

### Design System & Styling

#### [NEW] [tailwind.config.js](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/tailwind.config.js)

Custom design tokens matching the brief:
- **Colors**: Calm neutrals with subtle blue accent
  - Background: `#F8FAFC` (slate-50)
  - Cards: `#FFFFFF`
  - Text: `#1E293B` (slate-800)
  - Accent: `#3B82F6` (blue-500)
- **Spacing**: Generous whitespace (custom scale)
- **Border Radius**: 16-20px for cards
- **Typography**: Inter font family
- **Animations**: Slow, gentle transitions

#### [NEW] [app/globals.css](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/app/globals.css)

Global styles including:
- Smooth scroll behavior
- Base typography
- Custom animation keyframes (fade-in, slide-up)
- Focus states for accessibility

---

### Page Structure & Components

#### [NEW] [app/layout.tsx](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/app/layout.tsx)

Root layout with:
- SEO metadata (title, description, Open Graph)
- Inter font loading
- Analytics preparation (Google Analytics ready)
- Structured data for search engines

#### [NEW] [app/page.tsx](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/app/page.tsx)

Main landing page with **exact structure** from brief:

1. **Hero Section**
   - Title: "Mi Oración"
   - Subtitle with philosophy
   - 3 micro-bullets (calm, diary, privacy)
   - Dual CTAs (App Store + Google Play)
   - Clean, immediate understanding

2. **Differentiation Block**
   - "No todas las apps espirituales se sienten igual"
   - Permission-based messaging
   - Emotional connection

3. **Features (4 Cards)**
   - 🧭 Qibla y horarios
   - 📓 Diario espiritual
   - 🌙 Retos suaves
   - 🤲 Duas y recordatorios
   - Minimal text, icon-focused

4. **Privacy Block**
   - "Tu espiritualidad es solo tuya"
   - 3 clear points (no accounts, no servers, local storage)
   - Trust-building emphasis

5. **Ramadan Section** (conditional)
   - "Este Ramadán, con más calma"
   - One-time payment note
   - CTA to download

6. **Final CTA**
   - Clear download message
   - Repeated store buttons

7. **Footer**
   - Privacy policy link
   - Support/contact
   - Legal disclaimer

#### [NEW] [components/DownloadButtons.tsx](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/components/DownloadButtons.tsx)

Reusable component for App Store / Google Play buttons:
- Official store badge styling
- Hover animations
- Tracking-ready (for analytics)
- Accessible with proper ARIA labels

#### [NEW] [components/FeatureCard.tsx](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/components/FeatureCard.tsx)

Card component for features section:
- Icon + title + short description
- Rounded corners (20px)
- Subtle hover effect
- Consistent spacing

---

### Configuration & Assets

#### [NEW] [config/site.ts](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/config/site.ts)

Centralized configuration:
- App store URLs (placeholder for now)
- Feature flags (Ramadan visibility)
- Contact information
- SEO metadata
- Easy to update without touching code

#### [NEW] [public/app-icon.png](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/public/app-icon.png)

App icon for Open Graph and favicon (I'll generate a placeholder)

---

### Legal & Support Pages

#### [NEW] [app/privacidad/page.tsx](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/app/privacidad/page.tsx)

Privacy policy page:
- Clear, calm language
- Emphasis on no data collection
- Link back to home

#### [NEW] [app/soporte/page.tsx](file:///c:/Users/paula/Desktop/Visual_Code/mi-oracion-app/mi-oracion-web/app/soporte/page.tsx)

Support/contact page:
- Contact email
- FAQ (minimal)
- Link back to home

---

## Technical Details

### Performance Optimizations

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js Image component for any images
- **Font Optimization**: Inter font with `font-display: swap`
- **CSS Purging**: TailwindCSS removes unused styles
- **Minimal JavaScript**: No heavy client-side libraries

### SEO Configuration

```typescript
// Metadata in layout.tsx
export const metadata = {
  title: 'Mi Oración — App musulmana sin presión ni culpa',
  description: 'Una app espiritual para tu práctica musulmana. Calma, privacidad total y sin presión. Diario, Qibla, retos suaves y más.',
  openGraph: {
    title: 'Mi Oración',
    description: 'App musulmana sin presión ni culpa',
    type: 'website',
    locale: 'es_ES',
  },
}
```

### i18n Preparation

Structure ready for future internationalization:
- Content separated in `config/site.ts`
- Easy to add `next-intl` or similar
- Language detection ready

### Analytics Integration

Prepared for:
- Google Analytics 4
- Meta Pixel (for ad conversion tracking)
- Event tracking on CTA clicks

---

## Verification Plan

### Automated Tests

```bash
# Build verification
npm run build

# Type checking
npm run type-check

# Lighthouse CI (performance, SEO, accessibility)
npx lighthouse http://localhost:3000 --view
```

### Manual Verification

1. **Visual Review**
   - Check design matches calm, premium aesthetic
   - Verify all sections render correctly
   - Test responsive design (mobile, tablet, desktop)
   - Confirm animations are smooth and subtle

2. **Content Review**
   - Verify all copy matches brief exactly
   - Check tone is calm and permission-based
   - Ensure no aggressive sales language

3. **Conversion Flow**
   - Test all download buttons work
   - Verify CTAs are clear and prominent
   - Check page loads fast (< 2 seconds)

4. **SEO Check**
   - Verify meta tags are correct
   - Check Open Graph preview
   - Test structured data

5. **Cross-browser Testing**
   - Chrome, Safari, Firefox
   - iOS Safari, Android Chrome

### Success Criteria

✅ Page loads in under 2 seconds  
✅ User understands app purpose in 15-30 seconds  
✅ Clear path to download (multiple CTAs)  
✅ Calm, trustworthy aesthetic  
✅ No distractions or aggressive elements  
✅ Mobile-responsive  
✅ SEO-optimized  
✅ Ready for Meta Ads traffic  

---

## Deployment

**Recommended**: Vercel (zero-config deployment)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Alternative**: Netlify, Cloudflare Pages, or any static hosting

---

## Next Steps

1. ✅ Get approval on this plan
2. Initialize Next.js project
3. Setup design system (Tailwind config + globals.css)
4. Build components (DownloadButtons, FeatureCard)
5. Create main landing page
6. Add legal pages
7. Test and verify
8. Deploy to production
