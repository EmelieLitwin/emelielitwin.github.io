# 🦄 Emelie Litwin - Portfolio 2026

A modern, accessible portfolio website showcasing my journey as a Design Technologist. Built with React, TypeScript, and featuring a sci-fi HUD overlay system.

![Portfolio Preview](https://img.shields.io/badge/Built%20with-React%2018-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite)
![WCAG AAA](https://img.shields.io/badge/WCAG-AAA-success?style=for-the-badge)

## ✨ Features

- **Sci-Fi HUD Overlay** - Global animated HUD system with live data panels and circuit animations
- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **Fully Accessible** - WCAG 2.1 AAA compliant with keyboard navigation and screen reader support
- **Responsive Design** - Optimized for all screen sizes from mobile to 4K displays
- **Smooth Animations** - Intersection Observer-based animations and interactive elements
- **Semantic HTML** - Clean, well-structured markup following best practices
- **Performance Optimized** - Fast loading times with Vite's optimized build

## 🎨 Design Highlights

- **HUD Background System** - Animated reticle circles, circuit traces, and scanline effects
- **Live Data Panels** - TARGET LOCK, SCROLL, and SECTOR panels with real-time updates
- **Origami Unicorn** - Custom SVG illustration with gradient animations
- **Interactive Timeline** - Experience section with hover detection
- **Dynamic Skill Cards** - Animated skill categories with IntersectionObserver
- **Theme System** - Dark and light modes with smooth transitions

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Custom Properties (CSS Variables)
- **Icons:** Custom SVG illustrations
- **Deployment:** Ready for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/EmelieLitwin/website2026.git

# Navigate to project directory
cd website2026

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Development server with HMR
npm run dev

# Type-check without emitting files
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## ♿ Accessibility Features

This portfolio achieves **WCAG 2.1 Level AAA** compliance. See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for detailed compliance documentation.

**Key Features:**
- **Skip to Main Content** - Keyboard shortcut for screen reader users (WCAG 2.4.1)
- **Semantic HTML** - Proper heading hierarchy and ARIA landmarks
- **Keyboard Navigation** - Full site navigable without mouse
- **Focus Management** - Clear focus indicators and modal focus trapping
- **Screen Reader Support** - ARIA labels, roles, and descriptions
- **Color Contrast** - WCAG AAA compliant (7:1 for normal text, 4.5:1 for large)
- **Reduced Motion** - Respects `prefers-reduced-motion` user preference
- **Target Sizes** - 44x44px minimum for all interactive elements

**Testing:**
- ✅ Lighthouse Accessibility: 100/100
- ✅ WAVE: 0 errors
- ✅ axe DevTools: 0 violations
- ✅ VoiceOver/NVDA/JAWS compatible

## 🎯 Sections

1. **Hero** - Introduction with origami unicorn illustration
2. **Experience** - Timeline of professional roles with detailed modals
3. **Skills** - Categorized skill cards (Design & UX, Development, Team & Process)
4. **Education** - Academic background with interactive cards
5. **About Me** - Personal story and career journey
6. **Contact** - Email and LinkedIn links

## 🎨 Design System

The portfolio uses a theme system with dark and light modes:

### Dark Theme (Default)
- **Background:** Dark with subtle gradients
- **Text:** Light gray and white
- **Accents:** Blue and cyan highlights
- **HUD Elements:** Subtle gray (#999) with controlled opacity

### Light Theme
- **Background:** Clean white/light gray
- **Text:** Dark charcoal and black
- **Accents:** Vibrant blues
- **HUD Elements:** Hidden for cleaner appearance

Design tokens are defined in `src/styles/themes.css` and `src/styles/themes/light.css` for easy customization.

## 📁 Project Structure

```
website2026/
├── public/
│   ├── favicon.svg          # Filled unicorn favicon
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── HudBackground.tsx    # Sci-fi HUD overlay
│   ├── styles/
│   │   ├── themes.css           # Design tokens and variables
│   │   └── themes/
│   │       └── light.css        # Light theme overrides
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── ARCHITECTURE.md              # Code architecture documentation
├── ACCESSIBILITY.md             # WCAG compliance documentation
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 📚 Documentation

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Code architecture, design patterns, and best practices
- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - WCAG 2.1 AAA compliance documentation
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Design tokens and theming system
- **[README.md](./README.md)** - This file (project overview)

## 🌟 Code Quality

- **TypeScript** - Full type safety across the codebase with strict mode
- **ESLint** - Code linting with React and TypeScript rules
- **JSDoc Comments** - All components documented with purpose and accessibility notes
- **Clean Architecture** - Consistent patterns and file organization
- **No Dead Code** - All unused components and files removed
- **Semantic HTML** - Proper use of HTML5 semantic elements
- **WCAG AAA** - Exceeds accessibility standards (see ACCESSIBILITY.md)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 Links

- **Live Site:** [emelielitwin.github.io](https://emelielitwin.github.io)
- **Repository:** [github.com/EmelieLitwin/emelielitwin.github.io](https://github.com/EmelieLitwin/emelielitwin.github.io)
- **LinkedIn:** [linkedin.com/in/emelielitwin](https://linkedin.com/in/emelielitwin)
- **Email:** emelielitwin@gmail.com

## 👩‍💻 About the Developer

I'm a Design Technologist bridging the gap between design and development. This portfolio showcases not just my work, but also my coding skills and attention to detail in creating accessible, performant web experiences.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Emelie Litwin**

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
