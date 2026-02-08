# 🦄 Emelie Litwin - Portfolio 2026

A modern, accessible portfolio website showcasing my journey as a Design Technologist. Built with React, TypeScript, and a cyberpunk-inspired design system.

![Portfolio Preview](https://img.shields.io/badge/Built%20with-React%2018-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite)
![WCAG AAA](https://img.shields.io/badge/WCAG-AAA-success?style=for-the-badge)

## ✨ Features

- **Cyberpunk Design System** - Custom CSS variables and design tokens for consistent theming
- **Fully Accessible** - WCAG 2.1 AAA compliant with keyboard navigation and screen reader support
- **Responsive Design** - Optimized for all screen sizes from mobile to 4K displays
- **Smooth Animations** - Intersection Observer-based animations and interactive elements
- **Semantic HTML** - Clean, well-structured markup following best practices
- **Performance Optimized** - Fast loading times with Vite's optimized build

## 🎨 Design Highlights

- **Origami Unicorn** - Custom SVG illustration with gradient animations
- **Interactive Timeline** - Experience section with modal dialogs
- **Dynamic Skill Cards** - Animated skill categories with IntersectionObserver
- **Glow Effects** - Cyberpunk-inspired neon glow and hover states
- **Custom Animations** - Cyber glitch, pulse, and shine effects

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

- **Skip to Main Content** - Keyboard shortcut for screen reader users
- **Semantic HTML** - Proper heading hierarchy and ARIA landmarks
- **Keyboard Navigation** - Full site navigable without mouse
- **Focus Management** - Clear focus indicators and modal focus trapping
- **Screen Reader Support** - ARIA labels and descriptions where needed
- **Color Contrast** - WCAG AAA compliant color ratios
- **Reduced Motion** - Respects user's motion preferences

## 🎯 Sections

1. **Hero** - Introduction with origami unicorn illustration
2. **Experience** - Timeline of professional roles with detailed modals
3. **Skills** - Categorized skill cards (Design & UX, Development, Team & Process)
4. **Education** - Academic background with interactive cards
5. **About Me** - Personal story and career journey
6. **Contact** - Email and LinkedIn links

## 🎨 Design System

The portfolio uses a custom cyberpunk-inspired design system with:

- **Primary Color:** `#00F0FF` (Cyan)
- **Secondary Color:** `#FF00FF` (Magenta)
- **Accent Color:** `#3B82F6` (Blue)
- **Background:** `#0A0E1A` (Dark Navy)
- **Surface:** `#1E293B` (Slate)

Design tokens are defined in `src/styles/themes.css` for easy customization.

## 📁 Project Structure

```
website2026/
├── public/
│   └── favicon.svg          # Filled unicorn favicon
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
│   │   └── ScrollProgress.tsx
│   ├── styles/
│   │   └── themes.css       # Design tokens and variables
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🌟 Code Quality

- **TypeScript** - Full type safety across the codebase
- **ESLint** - Code linting with React and TypeScript rules
- **Clean Code** - Well-structured, maintainable, and documented
- **No Dead Code** - All unused components and files removed
- **Semantic HTML** - Proper use of HTML5 semantic elements

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔗 Links

- **Live Site:** [emelielitwin.github.io](https://emelielitwin.github.io)
- **Repository:** [github.com/EmelieLitwin/EmelieLitwin.github.io](https://github.com/EmelieLitwin/EmelieLitwin.github.io)
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
