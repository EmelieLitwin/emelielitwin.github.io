# Code Architecture Documentation

## Project Overview

This portfolio website is built with React 18, TypeScript, and Vite, following modern web development best practices with a strong emphasis on accessibility (WCAG 2.1 AAA compliance) and clean code architecture.

## Technology Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.6
- **Build Tool**: Vite 6.0
- **Styling**: CSS Custom Properties (CSS Variables)
- **Package Manager**: npm

## Project Structure

```
src/
├── components/          # React components (UI building blocks)
│   ├── Header.tsx      # Main navigation and logo
│   ├── Hero.tsx        # Landing section with unicorn
│   ├── Projects.tsx    # Work experience timeline
│   ├── Skills.tsx      # Skill categories
│   ├── Education.tsx   # Academic background
│   ├── About.tsx       # Personal story
│   ├── Contact.tsx     # Contact information
│   ├── Footer.tsx      # Copyright footer
│   ├── ThemeToggle.tsx # Dark/light mode switcher
│   ├── ScrollProgress.tsx # Scroll indicator
│   └── HudBackground.tsx  # Sci-fi HUD overlay
├── styles/
│   ├── themes.css      # Design tokens and CSS variables
│   └── themes/
│       └── light.css   # Light theme overrides
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and resets
```

## Design Patterns

### Component Architecture

All components follow a consistent pattern:

1. **Import statements** - Dependencies first, CSS last
2. **JSDoc documentation** - Component purpose and accessibility notes
3. **Type definitions** - TypeScript interfaces for props
4. **Component function** - Functional components with hooks
5. **JSX return** - Semantic HTML with proper ARIA attributes

Example structure:
```typescript
import { useState } from 'react'
import './ComponentName.css'

/**
 * ComponentName
 * 
 * Brief description of purpose
 * 
 * Accessibility notes
 */
export default function ComponentName() {
  // Hooks
  // Event handlers
  // Return JSX
}
```

### State Management

- **Local state**: `useState` for component-specific state
- **Side effects**: `useEffect` for lifecycle operations
- **Refs**: `useRef` for DOM access and mutable values
- No global state management needed (simple application)

### Styling Strategy

1. **CSS Modules per component** - Each component has its own `.css` file
2. **CSS Custom Properties** - Theme variables in `themes.css`
3. **Mobile-first responsive** - Progressive enhancement from 320px
4. **No CSS-in-JS** - Pure CSS for better performance

## Accessibility (WCAG 2.1 AAA)

### Implementation Checklist

✅ **Perceivable**
- Color contrast ratios exceed AAA requirements (7:1 for normal text)
- Text alternatives for images and icons (`alt`, `aria-label`)
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Focus indicators visible and high-contrast

✅ **Operable**
- Keyboard navigation for all interactive elements
- Skip link to main content (WCAG 2.4.1)
- No keyboard traps
- Sufficient target sizes (44x44px minimum)

✅ **Understandable**
- Clear headings hierarchy (h1 → h2 → h3)
- Consistent navigation structure
- aria-label describes button actions, not states
- Error prevention and validation

✅ **Robust**
- Valid semantic HTML
- ARIA attributes used correctly
- Works with screen readers (tested with VoiceOver)
- Progressive enhancement

### Key Accessibility Features

1. **Skip Link** (`Header.tsx`)
   - Hidden until focused
   - Jumps to `#main` content
   - First interactive element

2. **ARIA Labels** (throughout)
   - Buttons describe action: "Switch to light mode"
   - Icons marked `aria-hidden="true"`
   - Landmarks properly labeled

3. **Semantic HTML**
   - `<nav aria-label="Main navigation">`
   - `<main id="main">`
   - `<section>` with headings
   - `<article>` for timeline items

4. **Focus Management**
   - Modal dialog traps focus
   - Escape key closes dialogs
   - Focus returns to trigger

5. **Reduced Motion**
   - `@media (prefers-reduced-motion: reduce)`
   - Disables animations for users who need it

## Performance Optimizations

### Build Optimizations
- Vite's optimized bundling and code splitting
- Tree shaking to remove unused code
- Minification in production builds

### Runtime Optimizations
- `requestAnimationFrame` for scroll and animation updates
- Passive event listeners for scroll events
- Debouncing with RAF for expensive operations
- No unnecessary re-renders (proper React hooks usage)

### Loading Optimizations
- Google Fonts with `display=swap`
- SVG icons instead of icon fonts
- Minimal external dependencies
- Static assets served efficiently

## Code Quality Standards

### TypeScript
- Strict mode enabled
- No `any` types (use proper typing)
- Interfaces for component props
- Type inference where appropriate

### Naming Conventions
- **Components**: PascalCase (`Header.tsx`)
- **Functions**: camelCase (`toggleTheme()`)
- **CSS classes**: kebab-case (`theme-toggle`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_WIDTH`)

### File Organization
- One component per file
- Component and CSS file share same name
- Export default for components
- Named exports for utilities

### Comments and Documentation
- JSDoc for all components
- Inline comments for complex logic
- Accessibility notes in component docs
- README.md for project overview

## Browser Support

### Target Browsers
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari iOS (latest 2 versions)
- Chrome Mobile Android (latest 2 versions)

### Feature Support
- CSS Custom Properties (required)
- ES2020+ JavaScript features
- IntersectionObserver API
- localStorage API
- requestAnimationFrame

## Theme System

### Architecture
Two themes: `dark` (default) and `light`

**Dark Theme**:
- Background: Dark grays and blacks
- Text: Light grays and whites
- Accents: Blues and cyans
- HUD: Visible with subtle effects

**Light Theme**:
- Background: Whites and light grays
- Text: Dark grays and blacks
- Accents: Vibrant blues
- HUD: Hidden for cleaner look

### Implementation
1. CSS variables defined in `themes.css`
2. Light theme overrides in `themes/light.css`
3. `data-theme` attribute on `<html>`
4. Preference saved to localStorage

## Testing Strategy

### Manual Testing
- Keyboard navigation testing
- Screen reader testing (VoiceOver)
- Cross-browser testing
- Responsive design testing
- Color contrast verification

### Accessibility Testing
- WAVE browser extension
- axe DevTools
- Lighthouse accessibility audit
- Manual WCAG 2.1 checklist

## Deployment

### Build Process
```bash
npm run build
```

Outputs to `dist/` directory with:
- Optimized and minified JavaScript
- Inlined critical CSS
- Hashed filenames for cache busting

### Hosting
- Static site hosting (Vercel, Netlify, GitHub Pages)
- No server-side rendering needed
- No build-time data fetching

## Future Considerations

### Scalability
- Current structure suitable for portfolio scale
- For larger apps, consider:
  - Component library separation
  - Route-based code splitting
  - Centralized state management (if needed)
  - API layer abstraction

### Maintenance
- Update dependencies quarterly
- Review accessibility quarterly
- Test with new browser versions
- Keep documentation current

## Contributing Guidelines

### Before Committing
1. Run type check: `npm run type-check`
2. Run linter: `npm run lint`
3. Test in dev mode: `npm run dev`
4. Build successfully: `npm run build`
5. Manual accessibility check
6. Cross-browser smoke test

### Code Review Checklist
- [ ] Accessibility attributes present
- [ ] JSDoc documentation added
- [ ] TypeScript types defined
- [ ] No console errors/warnings
- [ ] Responsive design works
- [ ] Theme switching works
- [ ] Performance not degraded

---

**Last Updated**: February 2026  
**Maintained by**: Emelie Litwin
