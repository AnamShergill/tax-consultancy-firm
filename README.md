# Tax Consultant Website

A professional, modern tax consultant website built with Next.js 15, Bootstrap 5.3, and TypeScript. Features dark mode support and multilingual capabilities (English & Urdu).

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Bootstrap 5.3 with custom Sass
- ✅ Dark Mode toggle
- ✅ Multilingual support (English & Urdu) using next-intl
- ✅ Fully responsive design
- ✅ Professional corporate design
- ✅ Smooth animations and hover effects
- ✅ SEO friendly
- ✅ Floating WhatsApp button

## Sections

1. **Sticky Navbar** - Logo, menu, language switcher, theme toggle, and CTA button
2. **Hero Carousel** - 3 slides with gradient backgrounds and strong headlines
3. **About Us** - Company introduction with feature highlights
4. **Services** - 8 service cards (Income Tax, GST, Audit, TDS, Company Registration, ITR Filing, Accounting, Tax Planning)
5. **Testimonials** - Client reviews with ratings
6. **FAQ** - Accordion-style frequently asked questions
7. **Contact** - Contact form with Google Maps embed for Karachi
8. **Footer** - Multi-column footer with links and contact info

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Color Scheme

- Primary Blue: `#0d6efd`
- Success Green: `#198754`
- Professional corporate look with clean cards and hover effects

## Customization

### Change Colors

Edit `app/globals.scss` to modify the color scheme:

```scss
$primary: #0d6efd;
$success: #198754;
```

### Update Content

- Edit translation files in `messages/en.json` and `messages/ur.json`
- Modify components in the `components/` directory

### WhatsApp Number

Update the WhatsApp number in `components/WhatsAppButton.tsx`:

```tsx
href="https://wa.me/923001234567"
```

### Google Maps Location

Update the map embed URL in `components/Contact.tsx` to show your location.

## Project Structure

```
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── globals.scss
├── components/
│   ├── Navbar.tsx
│   ├── HeroCarousel.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── ThemeProvider.tsx
│   └── BootstrapClient.tsx
├── messages/
│   ├── en.json
│   └── ur.json
├── i18n.ts
├── middleware.ts
└── package.json
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Bootstrap 5.3** - UI framework
- **Sass** - CSS preprocessor
- **next-intl** - Internationalization
- **React Bootstrap** - Bootstrap components for React

## License

This project is created for professional use.
