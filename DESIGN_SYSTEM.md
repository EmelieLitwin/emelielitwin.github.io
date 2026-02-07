# 🎨 Design System - Theme Architecture

A comprehensive design system with carefully curated themes that demonstrate technical precision, design maturity, and creative versatility. Each theme follows a consistent API structure with CSS variables that adapt every component seamlessly.

## 🎯 Strategic Theme Lineup

Our 5 themes cover the complete spectrum:
- **Emotion** (Cyberpunk) - Motion & wow factor
- **Craft** (Pen & Paper) - Analog & handmade feel  
- **Personality** (Rainbow) - Playful & colorful
- **System** (Blueprint) - Technical precision & architecture
- **Maturity** (Editorial) - Typography & sophistication

## 🌈 Available Themes

### 1. 🌆 Cyberpunk Neon
**Purpose**: Demonstrate motion design & visual impact

A futuristic neon-lit cyberpunk aesthetic with glowing effects.
- **Primary**: Cyan (`#00F0FF`)
- **Secondary**: Magenta (`#FF00FF`)
- **Accent**: Blue (`#3B82F6`)
- **Vibe**: Dark backgrounds with neon accents and glow effects
- **Unicorn**: Glowing neon lines with dynamic colors

### 2. ✏️ Pen & Paper
**Purpose**: Show craft & intentional imperfection

Hand-drawn sketch style reminiscent of pen on notebook paper.
- **Primary**: Ink Blue (`#1E3A8A`)
- **Secondary**: Pencil Gray (`#475569`)
- **Accent**: Highlighter Yellow (`#FCD34D`)
- **Vibe**: Light paper backgrounds with sketch-like borders
- **Unicorn**: Sketchy lines with subtle shadow offsets

### 3. 🌈 Rainbow Burst
**Purpose**: Express personality & playfulness

Colorful and playful with vibrant rainbow colors.
- **Primary**: Hot Pink (`#FF0080`)
- **Secondary**: Cyan (`#00D9FF`)
- **Accent**: Golden Yellow (`#FFD600`)
- **Vibe**: Bright and cheerful with multi-color gradients
- **Unicorn**: Multi-colored with rainbow glow effects

### 4. � Blueprint / Technical
**Purpose**: Signal precision, system thinking & engineering mindset

Classic blueprint aesthetic with technical precision.
- **Primary**: Blueprint Blue (`#0EA5E9`)
- **Secondary**: Technical Gray (`#64748B`)
- **Accent**: Highlight Yellow (`#FCD34D`)
- **Vibe**: Dark blue background with grid overlay, monospace details
- **Unicorn**: Dashed technical lines, no glow, CAD-style
- **Special**: CSS grid overlay, measurement aesthetic

### 5. 📰 Editorial / Magazine
**Purpose**: Demonstrate typography mastery & design maturity

High-end editorial inspired by The New York Times and premium magazines.
- **Primary**: Classic Black (`#18181B`)
- **Secondary**: Refined Gray (`#71717A`)
- **Accent**: Accent Red (`#DC2626`)
- **Vibe**: Clean paper white with generous whitespace
- **Unicorn**: Minimal clean lines, elegant shadows
- **Special**: Serif + sans mix, baseline rhythm, subtle paper texture

## 📐 Design System Structure

### Theme API

Each theme is structured as a complete design system API:

```typescript
theme = {
  colors: {
    primary, secondary, accent,
    backgrounds, text, borders
  },
  effects: {
    glow, gradients, shadows
  },
  typography: {
    heading, body
  },
  spacing: {
    xs, sm, md, lg, xl, 2xl
  },
  motion: {
    transitions, animations
  },
  unicorn: {
    colors: [color1, color2, color3],
    filter, stroke, dasharray
  }
}
```

### Unicorn Adaptation System

The origami unicorn adapts to each theme using CSS variables:

```css
--unicorn-color-1    /* Primary unicorn color */
--unicorn-color-2    /* Secondary unicorn color */
--unicorn-color-3    /* Tertiary unicorn color */
--unicorn-filter     /* Drop shadow/glow effects */
--unicorn-stroke     /* Line thickness */
--unicorn-stroke-dasharray  /* Dashed lines (blueprint) */
```

**Example behaviors:**
- **Cyberpunk**: Glowing neon lines with color cycling
- **Paper**: Sketchy look with shadow offset
- **Rainbow**: Multi-color with glow effects
- **Blueprint**: Thin dashed lines, no glow, technical
- **Editorial**: Clean solid lines, minimal shadow

### Color Variables
Each theme defines the following color variables:

```css
/* Primary Colors */
--color-primary
--color-primary-dark
--color-primary-light

/* Secondary Colors */
--color-secondary
--color-secondary-dark
--color-secondary-light

/* Accent Colors */
--color-accent
--color-accent-alt
--color-purple

/* Background Colors */
--color-bg
--color-bg-secondary
--color-bg-tertiary
--color-surface
--color-surface-hover

/* Text Colors */
--color-text
--color-text-secondary
--color-text-muted

/* Border Colors */
--color-border
--color-border-hover

/* Special Effects */
--glow-primary
--glow-secondary
--glow-accent

/* Gradients */
--gradient-primary
--gradient-surface

/* Shadows */
--shadow-glow-sm
--shadow-glow-md
--shadow-glow-lg
```

### Spacing Scale
```css
--space-xs: 0.5rem    /* 8px */
--space-sm: 1rem      /* 16px */
--space-md: 1.5rem    /* 24px */
--space-lg: 2rem      /* 32px */
--space-xl: 3rem      /* 48px */
--space-2xl: 4rem     /* 64px */
```

### Border Radius
```css
--radius-sm: 0.25rem  /* 4px */
--radius-md: 0.5rem   /* 8px */
--radius-lg: 1rem     /* 16px */
--radius-xl: 2rem     /* 32px */
```

### Typography
```css
--font-heading: 'Space Grotesk', sans-serif
--font-body: 'Poppins', sans-serif
```

### Transitions
```css
--transition-fast: 150ms ease
--transition-base: 300ms ease
--transition-slow: 500ms ease
```

## 🚀 Usage

### Setting a Theme
Themes are applied via the `data-theme` attribute on the HTML element:

```html
<html data-theme="cyberpunk">
```

### Using Variables in CSS
```css
.my-component {
  background: var(--color-surface);
  color: var(--color-text);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: var(--shadow-glow-md);
  transition: all var(--transition-base);
}

.my-component:hover {
  border-color: var(--color-primary);
  box-shadow: var(--glow-primary);
}
```

### Changing Themes Programmatically
```typescript
// Set theme
document.documentElement.setAttribute('data-theme', 'ocean')

// Save to localStorage
localStorage.setItem('theme', 'ocean')

// Load saved theme
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme)
}
```

## 🎯 Best Practices

1. **Always use CSS variables** instead of hard-coded colors
2. **Use semantic naming** - prefer `--color-surface` over specific color values
3. **Maintain consistency** - all themes follow the same variable structure
4. **Test across themes** - ensure components work with all color schemes
5. **Use appropriate spacing** - leverage the spacing scale for consistency

## ✨ Adding New Themes

To add a new theme:

1. Add a new theme block in `src/styles/themes.css`:
```css
[data-theme="my-theme"] {
  --color-primary: #YOUR_COLOR;
  /* ... define all required variables */
}
```

2. Add the theme to `src/components/ThemeToggle.tsx`:
```typescript
const themes: ThemeOption[] = [
  // ... existing themes
  {
    id: 'my-theme',
    name: 'My Theme',
    icon: '🎨',
    description: 'Your theme description'
  }
]
```

3. Add preview colors in `src/components/ThemeToggle.css`:
```css
[data-theme-preview="my-theme"]:hover {
  border-color: #YOUR_PRIMARY_COLOR;
  box-shadow: 0 0 15px rgba(YOUR_COLOR, 0.4);
}
```

## 🔧 File Structure

```
src/
├── styles/
│   └── themes.css          # All theme definitions
├── components/
│   ├── ThemeToggle.tsx     # Theme picker component
│   └── ThemeToggle.css     # Theme picker styles
└── index.css               # Global styles & theme imports
```

---

Built with ❤️ using CSS Variables and React
