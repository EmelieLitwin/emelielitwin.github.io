# Design System & Architecture# 🎨 Design System - Theme Architecture



Complete documentation for the portfolio's design system, component architecture, and token-based theming.A comprehensive design system with carefully curated themes that demonstrate technical precision, design maturity, and creative versatility. Each theme follows a consistent API structure with CSS variables that adapt every component seamlessly.



## Table of Contents## 🎯 Strategic Theme Lineup

1. [Project Architecture](#project-architecture)

2. [Design Tokens](#design-tokens)Our 5 themes cover the complete spectrum:

3. [Component Patterns](#component-patterns)- **Emotion** (Cyberpunk) - Motion & wow factor

4. [Theme System](#theme-system)- **Craft** (Pen & Paper) - Analog & handmade feel  

- **Personality** (Rainbow) - Playful & colorful

---- **System** (Blueprint) - Technical precision & architecture

- **Maturity** (Editorial) - Typography & sophistication

## Project Architecture

## 🌈 Available Themes

### Tech Stack

- **React 19** + **TypeScript 5.6** + **Vite 7.3**### 1. 🌆 Cyberpunk Neon

- **CSS Custom Properties** (CSS Variables)**Purpose**: Demonstrate motion design & visual impact

- **Feature-based Component Structure**

A futuristic neon-lit cyberpunk aesthetic with glowing effects.

### Project Structure- **Primary**: Cyan (`#00F0FF`)

- **Secondary**: Magenta (`#FF00FF`)

```- **Accent**: Blue (`#3B82F6`)

src/- **Vibe**: Dark backgrounds with neon accents and glow effects

├── components/- **Unicorn**: Glowing neon lines with dynamic colors

│   ├── layout/              # Site structure

│   │   ├── Header.tsx/css### 2. ✏️ Pen & Paper

│   │   └── Footer.tsx/css**Purpose**: Show craft & intentional imperfection

│   ├── sections/            # Main content sections

│   │   ├── Hero.tsx/cssHand-drawn sketch style reminiscent of pen on notebook paper.

│   │   ├── About.tsx/css- **Primary**: Ink Blue (`#1E3A8A`)

│   │   ├── Projects.tsx/css- **Secondary**: Pencil Gray (`#475569`)

│   │   ├── Education.tsx/css- **Accent**: Highlighter Yellow (`#FCD34D`)

│   │   ├── Skills.tsx/css- **Vibe**: Light paper backgrounds with sketch-like borders

│   │   └── Contact.tsx/css- **Unicorn**: Sketchy lines with subtle shadow offsets

│   └── ui/                  # Reusable UI components

│       ├── ThemeToggle.tsx/css### 3. 🌈 Rainbow Burst

│       ├── ScrollProgress.tsx/css**Purpose**: Express personality & playfulness

│       └── HudBackground.tsx/css

├── styles/Colorful and playful with vibrant rainbow colors.

│   ├── design-tokens.css    # Color, spacing, shadow tokens- **Primary**: Hot Pink (`#FF0080`)

│   ├── mixins.css           # 40+ reusable CSS patterns- **Secondary**: Cyan (`#00D9FF`)

│   ├── utilities.css        # Utility classes- **Accent**: Golden Yellow (`#FFD600`)

│   └── theme-variants/- **Vibe**: Bright and cheerful with multi-color gradients

│       └── light.css        # Light mode overrides- **Unicorn**: Multi-colored with rainbow glow effects

├── assets/                  # Images and static files

├── App.tsx                  # Main app component### 4. � Blueprint / Technical

├── App.css                  # App-level styles**Purpose**: Signal precision, system thinking & engineering mindset

├── main.tsx                 # Entry point

└── index.css                # Global resets and base stylesClassic blueprint aesthetic with technical precision.

```- **Primary**: Blueprint Blue (`#0EA5E9`)

- **Secondary**: Technical Gray (`#64748B`)

### Component Patterns- **Accent**: Highlight Yellow (`#FCD34D`)

- **Vibe**: Dark blue background with grid overlay, monospace details

All components follow a consistent structure:- **Unicorn**: Dashed technical lines, no glow, CAD-style

- **Special**: CSS grid overlay, measurement aesthetic

1. **Imports** - Dependencies first, CSS last

2. **JSDoc** - Component purpose and accessibility notes### 5. 📰 Editorial / Magazine

3. **TypeScript** - Interface definitions for props**Purpose**: Demonstrate typography mastery & design maturity

4. **Functional Components** - Using React hooks

5. **Semantic HTML** - Proper ARIA attributesHigh-end editorial inspired by The New York Times and premium magazines.

- **Primary**: Classic Black (`#18181B`)

**Example:**- **Secondary**: Refined Gray (`#71717A`)

```tsx- **Accent**: Accent Red (`#DC2626`)

/**- **Vibe**: Clean paper white with generous whitespace

 * Hero Section- **Unicorn**: Minimal clean lines, elegant shadows

 * Landing section with animated origami unicorn- **Special**: Serif + sans mix, baseline rhythm, subtle paper texture

 * WCAG: Proper heading hierarchy, alt text on SVG

 */## 📐 Design System Structure

export function Hero() {

  return (### Theme API

    <section id="hero" aria-labelledby="hero-heading">

      <h1 id="hero-heading">Emelie Litwin</h1>Each theme is structured as a complete design system API:

      {/* ... */}

    </section>```typescript

  );theme = {

}  colors: {

```    primary, secondary, accent,

    backgrounds, text, borders

---  },

  effects: {

## Design Tokens    glow, gradients, shadows

  },

### Token Philosophy  typography: {

    heading, body

> **No hard-coded values in components** - Everything consumes design tokens.  },

  spacing: {

Tokens are defined in CSS custom properties, organized in layers:    xs, sm, md, lg, xl, 2xl

  },

### Layer 1: Base Tokens (`design-tokens.css`)  motion: {

    transitions, animations

**Spacing (8px grid):**  },

```css  unicorn: {

--space-3xs: 0.125rem   /* 2px  */    colors: [color1, color2, color3],

--space-2xs: 0.25rem    /* 4px  */    filter, stroke, dasharray

--space-xs: 0.5rem      /* 8px  */  }

--space-sm: 0.75rem     /* 12px */}

--space-md: 1rem        /* 16px */```

--space-lg: 1.5rem      /* 24px */

--space-xl: 2rem        /* 32px */### Unicorn Adaptation System

--space-2xl: 3rem       /* 48px */

--space-3xl: 4rem       /* 64px */The origami unicorn adapts to each theme using CSS variables:

--space-4xl: 6rem       /* 96px */

``````css

--unicorn-color-1    /* Primary unicorn color */

**Border Radius:**--unicorn-color-2    /* Secondary unicorn color */

```css--unicorn-color-3    /* Tertiary unicorn color */

--radius-sm: 0.125rem   /* 2px  */--unicorn-filter     /* Drop shadow/glow effects */

--radius-md: 0.25rem    /* 4px  */--unicorn-stroke     /* Line thickness */

--radius-lg: 0.5rem     /* 8px  */--unicorn-stroke-dasharray  /* Dashed lines (blueprint) */

--radius-xl: 0.75rem    /* 12px */```

--radius-2xl: 1rem      /* 16px */

--radius-full: 9999px**Example behaviors:**

```- **Cyberpunk**: Glowing neon lines with color cycling

- **Paper**: Sketchy look with shadow offset

**Transitions:**- **Rainbow**: Multi-color with glow effects

```css- **Blueprint**: Thin dashed lines, no glow, technical

--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)- **Editorial**: Clean solid lines, minimal shadow

--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)

--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)### Color Variables

```Each theme defines the following color variables:



**Shadows:**```css

```css/* Primary Colors */

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)--color-primary

--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)--color-primary-dark

--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)--color-primary-light

--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)

```/* Secondary Colors */

--color-secondary

### Layer 2: Color Tokens--color-secondary-dark

--color-secondary-light

**Primary Colors:**

```css/* Accent Colors */

--color-primary: #3b82f6--color-accent

--color-primary-05: rgba(59, 130, 246, 0.05)--color-accent-alt

--color-primary-10: rgba(59, 130, 246, 0.1)--color-purple

--color-primary-20: rgba(59, 130, 246, 0.2)

--color-primary-40: rgba(59, 130, 246, 0.4)/* Background Colors */

--color-primary-60: rgba(59, 130, 246, 0.6)--color-bg

--color-primary-80: rgba(59, 130, 246, 0.8)--color-bg-secondary

```--color-bg-tertiary

--color-surface

**Secondary Colors:**--color-surface-hover

```css

--color-secondary: #8b5cf6/* Text Colors */

/* + alpha variants 05-80 */--color-text

```--color-text-secondary

--color-text-muted

**Accent Colors:**

```css/* Border Colors */

--color-accent: #06b6d4--color-border

/* + alpha variants 05-80 */--color-border-hover

```

/* Special Effects */

**Usage in Components:**--glow-primary

```css--glow-secondary

.card {--glow-accent

  background: var(--color-primary-05);

  border: 1px solid var(--color-primary-20);/* Gradients */

  box-shadow: var(--shadow-md);--gradient-primary

  border-radius: var(--radius-lg);--gradient-surface

  padding: var(--space-lg);

}/* Shadows */

```--shadow-glow-sm

--shadow-glow-md

-----shadow-glow-lg

```

## Component Patterns

### Spacing Scale

### Mixins (`mixins.css`)```css

--space-xs: 0.5rem    /* 8px */

40+ reusable CSS patterns:--space-sm: 1rem      /* 16px */

--space-md: 1.5rem    /* 24px */

**Focus States:**--space-lg: 2rem      /* 32px */

```css--space-xl: 3rem      /* 48px */

.focus-ring {--space-2xl: 4rem     /* 64px */

  /* Accessible focus indicator */```

  outline: 2px solid var(--color-primary);

  outline-offset: 2px;### Border Radius

}```css

```--radius-sm: 0.25rem  /* 4px */

--radius-md: 0.5rem   /* 8px */

**Glows:**--radius-lg: 1rem     /* 16px */

```css--radius-xl: 2rem     /* 32px */

.glow-primary {```

  box-shadow: 0 0 20px var(--color-primary-40);

}### Typography

``````css

--font-heading: 'Space Grotesk', sans-serif

**Card Patterns:**--font-body: 'Poppins', sans-serif

```css```

.card-glass {

  background: var(--color-primary-05);### Transitions

  backdrop-filter: blur(10px);```css

  border: 1px solid var(--color-primary-10);--transition-fast: 150ms ease

}--transition-base: 300ms ease

```--transition-slow: 500ms ease

```

**Gradients:**

```css## 🚀 Usage

.gradient-primary {

  background: linear-gradient(### Setting a Theme

    135deg,Themes are applied via the `data-theme` attribute on the HTML element:

    var(--color-primary) 0%,

    var(--color-secondary) 100%```html

  );<html data-theme="cyberpunk">

}```

```

### Using Variables in CSS

### Utilities (`utilities.css`)```css

.my-component {

Utility classes with vendor prefixes:  background: var(--color-surface);

  color: var(--color-text);

```css  border: 2px solid var(--color-border);

.backdrop-blur-sm { backdrop-filter: blur(4px); }  border-radius: var(--radius-md);

.backdrop-blur-md { backdrop-filter: blur(8px); }  padding: var(--space-md);

.backdrop-blur-lg { backdrop-filter: blur(16px); }  box-shadow: var(--shadow-glow-md);

  transition: all var(--transition-base);

.transform-gpu { transform: translateZ(0); }}

```

.my-component:hover {

---  border-color: var(--color-primary);

  box-shadow: var(--glow-primary);

## Theme System}

```

### Dark Theme (Default)

### Changing Themes Programmatically

Defined in `:root` of `design-tokens.css`:```typescript

// Set theme

```cssdocument.documentElement.setAttribute('data-theme', 'ocean')

:root {

  --bg-primary: #0a0a0a;// Save to localStorage

  --bg-secondary: #1a1a1a;localStorage.setItem('theme', 'ocean')

  --text-primary: #ffffff;

  --text-secondary: #a0a0a0;// Load saved theme

}const savedTheme = localStorage.getItem('theme')

```if (savedTheme) {

  document.documentElement.setAttribute('data-theme', savedTheme)

**Characteristics:**}

- Dark backgrounds with subtle gradients```

- Light text (white/gray)

- Blue/cyan accents with glow effects## 🎯 Best Practices

- HUD overlay visible with opacity

1. **Always use CSS variables** instead of hard-coded colors

### Light Theme2. **Use semantic naming** - prefer `--color-surface` over specific color values

3. **Maintain consistency** - all themes follow the same variable structure

Defined in `theme-variants/light.css`:4. **Test across themes** - ensure components work with all color schemes

5. **Use appropriate spacing** - leverage the spacing scale for consistency

```css

[data-theme="light"] {## ✨ Adding New Themes

  --bg-primary: #ffffff;

  --bg-secondary: #f5f5f5;To add a new theme:

  --text-primary: #1a1a1a;

  --text-secondary: #666666;1. Add a new theme block in `src/styles/themes.css`:

}```css

```[data-theme="my-theme"] {

  --color-primary: #YOUR_COLOR;

**Characteristics:**  /* ... define all required variables */

- Clean white/light gray backgrounds}

- Dark text for readability```

- Vibrant blue accents

- HUD overlay hidden for minimal design2. Add the theme to `src/components/ThemeToggle.tsx`:

```typescript

### Theme Toggle Implementationconst themes: ThemeOption[] = [

  // ... existing themes

```tsx  {

// ThemeToggle.tsx    id: 'my-theme',

const [theme, setTheme] = useState(() =>     name: 'My Theme',

  localStorage.getItem('theme') || 'dark'    icon: '🎨',

);    description: 'Your theme description'

  }

useEffect(() => {]

  document.documentElement.setAttribute('data-theme', theme);```

  localStorage.setItem('theme', theme);

}, [theme]);3. Add preview colors in `src/components/ThemeToggle.css`:

``````css

[data-theme-preview="my-theme"]:hover {

### Accessibility Considerations  border-color: #YOUR_PRIMARY_COLOR;

  box-shadow: 0 0 15px rgba(YOUR_COLOR, 0.4);

**Reduced Motion:**}

```css```

@media (prefers-reduced-motion: reduce) {

  * {## 🔧 File Structure

    animation-duration: 0.01ms !important;

    transition-duration: 0.01ms !important;```

  }src/

}├── styles/

```│   └── themes.css          # All theme definitions

├── components/

**Color Contrast:**│   ├── ThemeToggle.tsx     # Theme picker component

- Dark theme: WCAG AAA compliant (7:1+ ratio)│   └── ThemeToggle.css     # Theme picker styles

- Light theme: WCAG AAA compliant (7:1+ ratio)└── index.css               # Global styles & theme imports

```

---

---

## HUD System

Built with ❤️ using CSS Variables and React

### Architecture

4-panel overlay with real-time updates:

1. **Top-Left (Target Lock)** - Section targeting indicator
2. **Top-Right (Scroll)** - Scroll progress percentage
3. **Bottom-Left (Sector)** - Current section name
4. **Bottom-Right (Coordinates)** - Mouse X/Y position

### Implementation

```tsx
// HudBackground.tsx
const sections = [
  { id: 'hero', label: 'HERO' },
  { id: 'work', label: 'WORK' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'about-me', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' }
];

// Real-time updates via refs and Intersection Observer
```

### Visual Design

```css
.hud-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 8px 12px;
}

.panel-label {
  font-family: 'Courier New', monospace;
  font-size: 0.625rem;
  font-weight: 700;
  opacity: 1;
  color: #1a1a1a;
}
```

---

## Best Practices

### CSS Organization
1. **design-tokens.css** - Define all tokens
2. **mixins.css** - Reusable patterns
3. **utilities.css** - Single-purpose classes
4. **Component CSS** - Component-specific styles only

### Token Usage
```css
/* ❌ Don't hard-code values */
.card { padding: 16px; }

/* ✅ Use tokens */
.card { padding: var(--space-md); }
```

### Responsive Design
```css
/* Mobile-first approach */
.container {
  padding: var(--space-md);
}

@media (min-width: 768px) {
  .container {
    padding: var(--space-xl);
  }
}
```

### Performance
- Use `transform` instead of `top/left` for animations
- Apply `will-change` sparingly
- Use `backdrop-filter` with vendor prefixes
- Optimize with `.transform-gpu` utility

---

## File Naming Conventions

- **Components**: PascalCase - `HudBackground.tsx`
- **Styles**: Match component - `HudBackground.css`
- **Utilities**: kebab-case - `design-tokens.css`
- **Assets**: kebab-case - `profile-cyberpunk.png`

## Code Quality

- **TypeScript strict mode** enabled
- **JSDoc comments** on all components
- **ESLint** with React + TypeScript rules
- **No dead code** - Unused files removed
- **Semantic HTML** throughout
- **WCAG AAA** compliance (see ACCESSIBILITY.md)
