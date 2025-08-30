# MAZLABZ.AI Website

**FOR THE PEOPLE. NOT THE PIGEONS.**

The official website for MAZLABZ.AI - a digital collective focused on open-source solutions and anti-authoritarian sentiment. This website serves as an e-commerce platform and brand hub for de-googled, freedom-focused technology solutions.

## 🚀 Live Website

Visit the deployed website at: [https://thotsl4yer69.github.io/mz1312/](https://thotsl4yer69.github.io/mz1312/)

## 📋 Project Overview

### Brand Identity
- **Company:** MAZLABZ.AI
- **URL:** mz1312.xx.kg (redirects to GitHub Pages)
- **Tagline:** "FOR THE PEOPLE. NOT THE PIGEONS."
- **Team:** Maz, Nova, and Marcus Chen
- **Philosophy:** Anti-authoritarianism, open-source advocacy, digital freedom

### Design Philosophy
- **Theme:** Dark, minimalist, brutalist-inspired design
- **Colors:** 
  - Background: `#0d0d0d` (dark black/gray)
  - Text: `#f0f0f0` (soft white)
  - Accent: `#e51d3b` (rebellious red)
  - Secondary: `#1a1a1a` (card backgrounds)

## 🏗️ Website Structure

### Sections
1. **Header** - Logo, tagline, navigation
2. **Hero** - Main call-to-action and brand messaging
3. **Products** - Three main products:
   - The Liberated Firestick (AUD $99.00)
   - The Pious Raspberry Pi (AUD $159.00)
   - The Bootleg Cube (AUD $129.00)
4. **About** - Team information and podcast promotion
5. **Contact** - Contact form with validation
6. **Footer** - Copyright and 1312 branding

### Technical Stack
- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom properties, responsive grid, dark theme
- **Vanilla JavaScript** - Form handling, smooth scrolling, interactions
- **SVG Graphics** - Custom-created product and brand imagery

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

#### Setup Instructions:

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as the source
   - The workflow will automatically deploy on the next push to main

2. **Custom Domain (Optional):**
   - Add a `CNAME` file with your custom domain
   - Configure DNS to point to `thotsl4yer69.github.io`

### Alternative Deployment Options

#### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set environment variables:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify API token
   - `NETLIFY_SITE_ID`: Your Netlify site ID
3. Uncomment the Netlify deployment section in `.github/workflows/main.yml`

#### Cloudflare Pages Deployment
1. Create a Cloudflare Pages project
2. Set environment variables:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
3. Uncomment the Cloudflare deployment section in `.github/workflows/main.yml`

## 🛠️ Local Development

### Prerequisites
- Modern web browser
- Local web server (optional, for testing)

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/thotsl4yer69/mz1312.git
   cd mz1312
   ```

2. Serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server .
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser to `http://localhost:8000`

### File Structure
```
mz1312/
├── index.html              # Main HTML file
├── style.css              # Comprehensive CSS styles
├── script.js              # JavaScript functionality
├── assets/
│   └── images/            # SVG graphics and logos
│       ├── logo.svg
│       ├── pigeon-hero.svg
│       ├── firestick.svg
│       ├── rasp-pi.svg
│       ├── bootleg-cube.svg
│       └── podcast.svg
├── .github/
│   └── workflows/
│       └── main.yml       # GitHub Actions deployment
├── .lighthouserc.json     # Lighthouse CI configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## ✨ Features

### Functionality
- **Responsive Design** - Works on all device sizes
- **Accessibility** - WCAG compliant with ARIA labels and semantic HTML
- **Form Validation** - Real-time client-side validation
- **Smooth Scrolling** - Enhanced navigation experience
- **Performance Optimized** - Lighthouse CI monitoring
- **SEO Ready** - Proper meta tags and semantic structure

### Interactive Elements
- Product purchase simulation
- Contact form with validation feedback
- Smooth navigation between sections
- Hover effects and micro-interactions
- Keyboard navigation support

## 🧪 Testing

### Automated Testing
- **Lighthouse CI** - Performance, accessibility, and SEO monitoring
- **GitHub Actions** - Automated deployment and testing

### Manual Testing Checklist
- [ ] All navigation links work correctly
- [ ] Contact form validates input properly
- [ ] Product buttons show purchase simulation
- [ ] Website is responsive on all screen sizes
- [ ] Images load correctly with proper alt text
- [ ] Smooth scrolling works between sections

## 🎨 Customization

### Color Scheme
Update CSS custom properties in `style.css`:
```css
:root {
    --color-bg-primary: #0d0d0d;
    --color-bg-secondary: #1a1a1a;
    --color-text-primary: #f0f0f0;
    --color-accent: #e51d3b;
}
```

### Content Updates
- **Products**: Edit the product cards in `index.html`
- **Pricing**: Update prices in the product sections
- **Images**: Replace SVG files in `assets/images/`
- **Text**: Modify content directly in `index.html`

## 🤝 Contributing

This is a demonstration project, but if you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created as a demonstration. All rights reserved to MAZLABZ.AI.

## 🐦 The Pigeon Philosophy

*"The pigeons represent the surveillance apparatus, the corporate overlords, the digital authoritarians who seek to control and monitor our every digital breath. We stand against the pigeons. We code for freedom. We build for the people."*

**1312** - A symbol of resistance against digital authoritarianism.

---

**FOR THE PEOPLE. NOT THE PIGEONS.**

© 2025 MAZLABZ.AI. All Rights Reserved.
