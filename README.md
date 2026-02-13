# 🦄 Emelie Litwin - Portfolio

A modern, accessible portfolio website built with React, TypeScript, and Vite. Features a sci-fi HUD overlay system with real-time data panels.

## ✨ Features

- **Sci-Fi HUD Overlay** - Animated HUD with 4 real-time data panels (target lock, scroll progress, sector tracking, mouse coordinates)
- **Theme Toggle** - Dark/light mode with localStorage persistence
- **Fully Accessible** - WCAG 2.1 AAA compliant (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))
- **Responsive Design** - Optimized for mobile to 4K displays
- **Design System** - Token-based architecture with CSS custom properties (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))

## 🛠️ Tech Stack

- **React 19** + **TypeScript 5.6** + **Vite 7.3**
- **CSS Custom Properties** - Token-based design system
- **Feature-based Architecture** - Components organized in `layout/`, `sections/`, `ui/`

## � Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, About, Projects, Education, Skills, Contact
│   └── ui/              # ThemeToggle, ScrollProgress, HudBackground
├── styles/
│   ├── design-tokens.css    # Color, spacing, shadow tokens
│   ├── mixins.css           # 40+ reusable CSS patterns
│   ├── utilities.css        # Utility classes
│   └── theme-variants/
│       └── light.css        # Light mode overrides
├── assets/              # Images and static files
├── App.tsx              # Main application
└── main.tsx             # Entry point
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

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
```

## 📚 Documentation

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Architecture, design tokens, and theming
- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - WCAG 2.1 AAA compliance details

## 🔗 Links

- **Live:** [emelielitwin.github.io](https://emelielitwin.github.io)
- **LinkedIn:** [linkedin.com/in/emelielitwin](https://linkedin.com/in/emelielitwin)
- **Email:** emelielitwin@gmail.com

---

Built with ❤️ by Emelie Litwin

```
