# Neha's Homemades — Customer Storefront

A progressive web app (PWA) for browsing and purchasing handmade products with WhatsApp checkout.

## Setup

1. Clone this repo
2. Copy `neha_config.example.js` to `neha_config.js`
3. Fill in your Supabase credentials and WhatsApp number in `neha_config.js`
4. Open `nehas_homemades (2).html` in a browser (or deploy to Vercel/Netlify)

## Features

- Dynamic product catalog (reads from Supabase)
- Add to cart and manage order
- WhatsApp integration for checkout
- Installable PWA (works offline)
- Responsive design

## Deployment

### Vercel
1. Push repo to GitHub
2. Connect to Vercel
3. Add environment variables (or embed `neha_config.js` via build script)
4. Deploy

### Netlify
1. Push repo to GitHub
2. Connect to Netlify
3. Set root as deploy directory
4. Deploy

## Environment Variables

Copy `neha_config.js` with:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anon key (public-facing, safe)
- `WHATSAPP_NUMBER`: Your WhatsApp number for checkout

Keep `neha_config.js` out of version control (it's in `.gitignore`).

## Deployment to Vercel

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com), sign up, and import your GitHub repo
3. On the "Environment Variables" screen, add:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_ANON_KEY`: Your Supabase anon key
   - `WHATSAPP_NUMBER`: Your WhatsApp number
4. Click Deploy

The build script will auto-generate `neha_config.js` with your secrets.