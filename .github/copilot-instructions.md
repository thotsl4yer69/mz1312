# MAZLABZ.AI Development Guide

This is a static website for MAZLABZ.AI - a dark, brutalist-inspired e-commerce site built with vanilla HTML, CSS, and JavaScript.

## Project Architecture

**Core Pattern**: Pure static site with no build step - files are deployed directly to GitHub Pages
- `index.html` - Single-page application with semantic sections
- `style.css` - CSS custom properties-based theming with responsive grid layouts
- `script.js` - Vanilla JS with modular function organization
- `assets/images/` - Custom SVG graphics for products and branding

**Design System**: 
- Theme variables defined in `:root` of `style.css`
- Dark theme: `#0d0d0d` background, `#e51d3b` accent red, `#f0f0f0` text
- Mobile-first responsive design using CSS Grid and Flexbox

## Key Development Patterns

### CSS Architecture
Use CSS custom properties extensively - all colors, spacing, and typography defined in `:root`:
```css
:root {
    --color-bg-primary: #0d0d0d;
    --color-accent: #e51d3b;
    --spacing-md: 1.5rem;
}
```

### JavaScript Organization
Functions are modularly organized and initialized in `DOMContentLoaded`:
- Form validation uses real-time blur events + submission validation
- Product buttons show demo alerts (not real e-commerce)
- Smooth scrolling accounts for sticky header offset
- Accessibility features include skip links and focus management

### Form Validation Pattern
```javascript
function validateField(fieldName) {
    // Individual field validation with aria-invalid attributes
    // Error messages displayed in dedicated spans with aria-live
}
```

## Development Workflow

### Local Development
No build process - serve files directly:
```bash
python -m http.server 8000  # Python 3
# OR
npx http-server .           # Node.js
```

### Deployment
Automatic via GitHub Actions to Pages on `main` branch push:
- `.github/workflows/main.yml` handles deployment
- Includes optional Lighthouse CI performance monitoring
- Alternative deployment configs for Netlify/Cloudflare commented out

### Testing Approach
- Lighthouse CI runs automatically (config in `.lighthouserc.json`)
- Performance target: 80%, Accessibility: 90%, SEO: 80%
- Manual testing focuses on form validation and responsive breakpoints

## Content Guidelines

### Brand Voice
- Anti-authoritarian, rebellious tone focused on digital freedom
- "FOR THE PEOPLE. NOT THE PIGEONS." tagline (pigeons = surveillance apparatus/corporate overlords)
- Products liberate users from standard streaming ecosystems
- Team: Maz, Nova, Marcus Chen
- Reference "1312" branding in footer
- Sales-focused: emphasize the value proposition of each tier

### Product Structure
Three-tier product lineup with consistent card layout:

**Tier 1: The Pigeon (AUD $180.00)**
- Device: Amazon Fire TV Stick 4K Max
- Core MAZLABZ experience: debloated, Kodi + Red Wizard build
- Target: Entry-point workhorse for plug-and-play freedom

**Tier 2: The Technician (AUD $250.00)**
- Device: Amazon Fire TV Cube  
- Same software treatment as Tier 1, superior hardware (octa-core, more storage, Ethernet)
- Target: Power users demanding speed and responsiveness

**Tier 3: The Sovereign (AUD $320.00)**
- Device: Raspberry Pi 5
- Open-platform pinnacle offering, optimized for Pi architecture, Debrid-ready
- Target: Enthusiasts wanting maximum performance and end-to-end ownership

Each product card has: image, title, description, price, buy button

## Technical Constraints

- **No frameworks** - vanilla HTML/CSS/JS only
- **No build step** - files deployed as-is
- **Single page** - all sections in one HTML file
- **Responsive breakpoints**: 768px, 1024px
- **Accessibility**: WCAG compliant, proper ARIA labels, keyboard navigation

## File Modification Patterns

**Adding new products**: Clone `.product-card` structure in `index.html`, add corresponding SVG in `assets/images/`
- Current products: The Pigeon ($180), The Technician ($250), The Sovereign ($320)
- Each tier targets different user segments from entry-level to enthusiast
**Theme changes**: Modify CSS custom properties in `:root` 
**New sections**: Add between existing `<section>` elements, update navigation in header
**JavaScript features**: Add new init function and call in `DOMContentLoaded` event

The site prioritizes simplicity, accessibility, and direct deployment without build complexity.
