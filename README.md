# MAZLABZ.AI - E-commerce Hub v2

Premium streaming device showcase and digital storefront featuring the "Neon Pigeon" aesthetic. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with neon accents and professional layout
- **Product Showcase**: Three-tier streaming device lineup (Basic, Premium, Elite)
- **Payment Integration**: Bitcoin payment modal with QR code support
- **Podcast Integration**: Direct links to MAZLABZ Spotify podcast
- **Responsive**: Fully optimized for desktop and mobile
- **Production Ready**: Optimized for Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Recommended)

## 🏃‍♂️ Getting Started

First, install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

Build for production:

```bash
npm run build
```

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main homepage
│   └── globals.css     # Global styles with neon effects
public/
├── images/             # Product and brand assets
└── videos/             # Promotional content
```

## 🎨 Design Philosophy

The "Neon Pigeon" aesthetic combines:
- **Dark backgrounds** for premium feel
- **Neon accents** (cyan, purple, pink) for modern appeal
- **Smooth animations** and hover effects
- **Professional typography** for readability

## 🔧 Configuration

The project includes:
- ESLint configuration for code quality
- TypeScript for type safety
- Tailwind CSS for rapid styling
- Vercel deployment configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js and configure build settings
3. Deploy with zero configuration

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `.next` folder to your hosting provider
3. Configure your server to serve the static files

## 📱 Features Breakdown

### Product Tiers
- **MZ-1312 Basic** ($199): Entry-level streaming
- **MZ-1312 Premium** ($399): Advanced features 
- **MZ-1312 Elite** ($699): Professional grade

### Payment Options
- **Bitcoin**: Functional modal with QR code
- **Card Payment**: Placeholder (Stripe integration pending)

### External Links
- **Spotify Podcast**: Direct integration with MAZLABZ podcast
- **Navigation**: Smooth scrolling to sections

## 🔮 Future Enhancements

- [ ] Stripe payment integration
- [ ] High-resolution product photography
- [ ] Shopping cart functionality
- [ ] User accounts and order tracking
- [ ] Blog/News section

## 📄 License

© 2024 MAZLABZ.AI. All rights reserved.

---

Built with ❤️ using Next.js and deployed on Vercel
