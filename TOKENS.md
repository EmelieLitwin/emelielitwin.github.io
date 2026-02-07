# 🎨 Design Tokens - Complete Reference

## Token Philosophy

> **"Typography is theme-scoped, not global."**

This design system treats tokens as a complete API where every theme defines its own personality through carefully chosen variables. No hard-coded values exist in components - everything consumes tokens.

## Token Architecture

### Layer 1: Base Scale Tokens
Foundation scales that all themes inherit:

```css
/* Spacing (8px base grid) */
--space-3xs: 0.125rem  /* 2px  */
--space-2xs: 0.25rem   /* 4px  */
--space-xs: 0.5rem     /* 8px  */
--space-sm: 0.75rem    /* 12px */
--space-md: 1rem       /* 16px */
--space-lg: 1.5rem     /* 24px */
--space-xl: 2rem       /* 32px */
--space-2xl: 3rem      /* 48px */
--space-3xl: 4rem      /* 64px */
--space-4xl: 6rem      /* 96px */

/* Border Radius */
--radius-sm: 0.125rem   /* 2px  */
--radius-md: 0.25rem    /* 4px  */
--radius-lg: 0.5rem     /* 8px  */
--radius-xl: 0.75rem    /* 12px */
--radius-2xl: 1rem      /* 16px */
--radius-3xl: 1.5rem    /* 24px */
--radius-full: 9999px

/* Transitions */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Layer 2: Theme-Specific Tokens

Each theme defines its complete token set:

#### Typography Tokens
```css
--font-heading       /* Display, titles */
--font-body          /* Body text, paragraphs */
--font-mono          /* Code, technical */
--font-accent        /* Special annotations (paper theme) */
--font-ui            /* UI elements (editorial theme) */

--font-weight-normal    /* 400 */
--font-weight-medium    /* 500 */
--font-weight-semibold  /* 600 */
--font-weight-bold      /* 700 */
--font-weight-black     /* 800-900 */

--line-height-tight     /* 1.2-1.4 */
--line-height-base      /* 1.6-1.7 */
--line-height-relaxed   /* 1.8-1.9 */

--letter-spacing-tight  /* -0.02em to -0.01em */
--letter-spacing-base   /* 0 */
--letter-spacing-wide   /* 0.01em to 0.05em */
```

#### Color Tokens (Semantic)
```css
/* Primary - Main brand color */
--color-primary
--color-primary-hover
--color-primary-active

/* Secondary - Supporting color */
--color-secondary
--color-secondary-hover
--color-secondary-active

/* Accent - Highlight color */
--color-accent
--color-accent-hover
--color-accent-active

/* Background Layers */
--color-bg            /* Base background */
--color-bg-subtle     /* Slightly elevated */
--color-bg-muted      /* Even more elevated */
--color-surface       /* Card/component surface */
--color-surface-hover /* Surface hover state */
--color-overlay       /* Modal/dropdown backdrop */

/* Text Hierarchy */
--color-text          /* Primary text (high contrast) */
--color-text-secondary /* Secondary text */
--color-text-muted    /* Tertiary text */
--color-text-disabled /* Disabled state */
--color-text-inverse  /* Text on dark/light opposite */

/* Borders */
--color-border
--color-border-hover
--color-border-focus

/* Interactive */
--color-link
--color-link-hover
--color-link-visited

/* Feedback */
--color-success
--color-warning
--color-error
--color-info
```

#### Effect Tokens
```css
/* Glow Effects (cyberpunk, rainbow) */
--glow-primary
--glow-secondary
--glow-accent

/* Gradients */
--gradient-primary
--gradient-secondary
--gradient-surface

/* Shadows */
--shadow-glow-sm
--shadow-glow-md
--shadow-glow-lg
```

#### Component-Specific Tokens
```css
/* Unicorn SVG */
--unicorn-color-1
--unicorn-color-2
--unicorn-color-3
--unicorn-filter
--unicorn-stroke
--unicorn-stroke-dasharray
```

## Theme Breakdown

### 🌆 Cyberpunk
**Fonts**: Space Grotesk (heading) + Inter (body)  
**Strategy**: Tech edge without gimmicks  
**Contrast**: High (WCAG AAA on backgrounds)

```css
Primary: #00F0FF (cyan)
Secondary: #FF00FF (magenta)
Accent: #3B82F6 (blue)
BG: #0A0E1A (deep dark)
Text: #F8FAFC (near white)
```

### ✏️ Pen & Paper
**Fonts**: IBM Plex Serif (all) + Caveat (accents)  
**Strategy**: Analog feel, serif-based  
**Contrast**: High (WCAG AAA)

```css
Primary: #1E40AF (ink blue)
Secondary: #475569 (pencil gray)
Accent: #EAB308 (highlighter yellow)
BG: #FFFEF7 (paper white)
Text: #0F172A (ink black)
```

### 🌈 Rainbow
**Fonts**: Poppins (heading) + DM Sans (body)  
**Strategy**: Playful but readable  
**Contrast**: High (WCAG AAA)

```css
Primary: #EC4899 (hot pink)
Secondary: #8B5CF6 (purple)
Accent: #F59E0B (amber)
BG: #FFFFFF (white)
Text: #18181B (black)
```

### 📐 Blueprint
**Fonts**: JetBrains Mono (heading) + IBM Plex Sans (body)  
**Strategy**: Engineering precision  
**Contrast**: Medium-High (WCAG AA+)

```css
Primary: #0EA5E9 (blueprint blue)
Secondary: #64748B (technical gray)
Accent: #FBBF24 (highlight yellow)
BG: #0C1222 (dark blueprint)
Text: #E0F2FE (light blue)
```

### 📰 Editorial
**Fonts**: Playfair Display (heading) + Source Serif 4 (body)  
**Strategy**: Typographic sophistication  
**Contrast**: High (WCAG AAA)

```css
Primary: #18181B (editorial black)
Secondary: #71717A (refined gray)
Accent: #DC2626 (accent red)
BG: #FAFAFA (paper white)
Text: #18181B (black)
```

## Usage Patterns

### In Components
```css
/* ✅ Good - Consume tokens */
.card {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  font-family: var(--font-body);
  box-shadow: var(--shadow-glow-md);
}

.card:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-border-hover);
}

.card h2 {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
}

/* ❌ Bad - Hard-coded values */
.card {
  background: #1E293B;
  color: #F8FAFC;
  font-family: 'Inter';
}
```

### In Typography
```css
h1 {
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--color-text);
}

body {
  font-family: var(--font-body);
  line-height: var(--line-height-base);
  letter-spacing: var(--letter-spacing-base);
  color: var(--color-text);
}

code {
  font-family: var(--font-mono);
}
```

## Contrast Requirements

All themes meet or exceed WCAG AA standards:

- **Cyberpunk**: AAA on backgrounds
- **Paper**: AAA throughout
- **Rainbow**: AAA on white
- **Blueprint**: AA+ (higher for code contexts)
- **Editorial**: AAA throughout

## Why This Matters

1. **Scalability**: Add new themes without touching component code
2. **Consistency**: Same semantic token = same meaning across themes
3. **Maintainability**: Change theme properties in one place
4. **Demonstration**: Shows system thinking, not just styling
5. **Professional**: This is how design systems work at scale

## Testing Token Swap

To verify tokens work correctly:

1. Switch themes via theme picker
2. All components should adapt automatically
3. Typography should change (fonts, weights, spacing)
4. Colors should maintain proper contrast
5. Effects (glow, shadows) should match theme personality

**No component should break when changing themes.**

---

**Key Insight**: Tokens are the API between design and code. Components consume tokens, themes define them.
