# Google Analytics & Search Console Setup Guide

## Google Analytics Setup

### Step 1: Create Google Analytics Account
1. Go to https://analytics.google.com/
2. Click "Start measuring"
3. Enter Account name: "TaxConsultant"
4. Configure data sharing settings
5. Click "Next"

### Step 2: Set Up Property
1. Property name: "TaxConsultant Website"
2. Reporting time zone: Pakistan (GMT+5)
3. Currency: Pakistani Rupee (PKR)
4. Click "Next"

### Step 3: Add Business Information
1. Industry: Financial Services
2. Business size: Small
3. How you plan to use Analytics: Select relevant options
4. Click "Create"

### Step 4: Get Tracking ID
1. Choose "Web" platform
2. Enter website URL: https://www.taxconsultant.com
3. Stream name: "TaxConsultant Web"
4. Copy your Measurement ID (format: G-XXXXXXXXXX)

### Step 5: Update Your Website
Replace `G-XXXXXXXXXX` in `app/[locale]/layout.tsx` with your actual Measurement ID

```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ACTUAL-ID');
</script>
```

---

## Google Search Console Setup

### Step 1: Add Property
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix" method
4. Enter: https://www.taxconsultant.com
5. Click "Continue"

### Step 2: Verify Ownership
Choose one of these methods:

**Method 1: HTML File Upload**
1. Download the verification file
2. Upload to `public/` folder in your project
3. Click "Verify"

**Method 2: HTML Tag**
1. Copy the meta tag provided
2. Add to `<head>` section in layout.tsx
3. Click "Verify"

**Method 3: Google Analytics**
1. If you're already using GA, verification is automatic
2. Click "Verify"

### Step 3: Submit Sitemap
1. After verification, go to "Sitemaps" in left menu
2. Enter: https://www.taxconsultant.com/sitemap.xml
3. Click "Submit"

### Step 4: Request Indexing
1. Go to "URL Inspection" tool
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for important pages

---

## Important Notes

### Update These Files:
1. **sitemap.xml** - Replace `https://www.taxconsultant.com` with your actual domain
2. **robots.txt** - Replace `https://www.taxconsultant.com` with your actual domain
3. **layout.tsx** - Replace `G-XXXXXXXXXX` with your actual GA Measurement ID

### Monitor These Metrics:
- Page views
- Bounce rate
- Average session duration
- Conversion rate (contact form submissions)
- Top performing pages
- Search queries bringing traffic
- Mobile vs Desktop traffic

### Regular Tasks:
- Check Search Console weekly for errors
- Monitor Analytics daily for traffic patterns
- Update sitemap when adding new pages
- Check Core Web Vitals monthly
- Review and respond to user behavior data

---

## Additional SEO Tools to Set Up

1. **Google Business Profile** (Essential for local SEO)
   - https://business.google.com
   - Add your business location in Karachi
   - Upload photos
   - Collect reviews

2. **Bing Webmaster Tools**
   - https://www.bing.com/webmasters
   - Import from Google Search Console
   - Submit sitemap

3. **Schema Markup Validator**
   - https://validator.schema.org
   - Test your structured data

4. **PageSpeed Insights**
   - https://pagespeed.web.dev
   - Test and optimize performance

---

## Contact Information to Update

Before going live, update these in your code:
- Phone: +92 300 1234567 → Your actual number
- Email: info@taxconsultant.com → Your actual email
- Address: Update with your actual office address
- Social media links in Footer.tsx
- WhatsApp number in WhatsAppButton.tsx
