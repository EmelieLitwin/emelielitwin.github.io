# Design Token System Updates

## ✅ Implementation Complete

All token enhancements have been successfully added to `themes.css` with **100% backward compatibility**.

---

## 🆕 New Global Tokens (All Themes)

### Spacing Aliases
```css
--space-xs, --space-sm, --space-md, --space-lg, --space-xl
/* Aliases for --spacing-* tokens */
```

### Motion & Interaction
```css
--motion-hover-translate: -2px
--motion-hover-scale: 1.02
--motion-active-scale: 0.98
--motion-focus-ring-offset: 2px
```

### Opacity Helpers
```css
--opacity-disabled: 0.5
--opacity-muted: 0.7
--opacity-overlay: 0.9
```

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  /* All motion and transitions set to 0 */
}
```

---

## 🎨 New Per-Theme Tokens

### Typography System
```css
--font-ui           /* Explicit UI font */
--font-body-alt     /* Secondary body font */
--font-display      /* Large hero text */
--font-caption      /* Small metadata */

--font-weight-regular: 400
--font-weight-book: 450

--letter-spacing-base  /* Normalized alias */

--measure-readable: 65-75ch
--measure-wide: 80-95ch
--paragraph-spacing: 1.5-1.75em
```

### Color Roles
```css
--color-bg-base          /* Primary background */
--color-bg-subtle        /* Elevated surfaces */
--color-bg-muted         /* Subtle accents */
--color-bg-secondary     /* Alternative background */

--color-text-secondary   /* Alias for muted text */

--color-surface-accent     /* Subtle accent surface */
--color-surface-selected   /* Selected state */
--color-surface-disabled   /* Disabled state */

--color-text-on-primary    /* Text on primary color */
--color-text-on-accent     /* Text on accent color */
```

### Elevation (Shadows)
```css
--elevation-sm    /* Small shadow */
--elevation-md    /* Medium shadow */
--elevation-lg    /* Large shadow */
```

### Effects
```css
--effect-outline-focus     /* Focus ring style */
--effect-hover-lift        /* Hover transform */
--effect-active-press      /* Active state transform */
--effect-divider           /* Divider line */
```

### Unicorn Animation
```css
--unicorn-animation-duration: 0.4-0.8s
--unicorn-animation-timing: ease-in-out | cubic-bezier(...)
```

---

## 🎭 Theme-Specific Extensions

### Cyberpunk
```css
--cyberpunk-glow-idle
--cyberpunk-glow-active
--cyberpunk-glow-hover
```

### Paper
```css
--paper-font-body-primary
--paper-font-body-hand
--paper-baseline-jitter
--paper-letter-spacing-variance
--paper-line-height-variance
```

### Rainbow
```css
--rainbow-gradient-soft
--rainbow-gradient-strong
--rainbow-focus-ring
--rainbow-focus-ring-offset
```

### Blueprint
```css
--blueprint-grid-size
--blueprint-label-spacing
--blueprint-annotation-size
--blueprint-dimension-line
```

### Editorial
```css
--editorial-shadow-subtle
--editorial-accent-rule
--editorial-drop-cap-scale
--editorial-pull-quote-border
```

---

## 📊 Token Counts

- **Base tokens:** 15 (existing) + 8 new = 23
- **Per-theme tokens:** ~35 existing + ~25 new = ~60 per theme
- **Total tokens:** ~320 across 5 themes
- **New tokens added:** ~125
- **Breaking changes:** 0

---

## 🔄 Migration Guide

### Components Can Now Use:

**Instead of hardcoded values:**
```css
/* ❌ Old */
.card {
  box-shadow: 0 8px 24px rgba(0, 240, 255, 0.25);
  padding: 1.5rem;
  max-width: 70ch;
}

/* ✅ New */
.card {
  box-shadow: var(--elevation-md);
  padding: var(--space-lg);
  max-width: var(--measure-readable);
}
```

**Hover states:**
```css
/* ❌ Old */
.button:hover {
  transform: translateY(-4px) scale(1.03);
}

/* ✅ New */
.button:hover {
  transform: var(--effect-hover-lift);
}
```

**Focus rings:**
```css
/* ❌ Old */
.input:focus {
  outline: 3px solid #00F0FF;
  outline-offset: 2px;
}

/* ✅ New */
.input:focus {
  outline: var(--effect-outline-focus);
  outline-offset: var(--motion-focus-ring-offset);
}
```

---

## 🎯 Best Practices

1. **Always use semantic tokens** (`--color-primary`) not decorative (`--cyberpunk-glow-idle`)
2. **Use spacing aliases** (`--space-lg`) or original (`--spacing-lg`) - both work
3. **Respect motion preferences** - all motion tokens respond to `prefers-reduced-motion`
4. **Use elevation tokens** instead of hardcoded shadows
5. **Use measure tokens** for readable line lengths

---

## 🧪 Testing Checklist

- [x] All 5 themes compile without errors
- [x] No breaking changes to existing components
- [x] Backward compatibility maintained
- [x] Motion respects accessibility preferences
- [ ] Visual regression testing (manual)
- [ ] Cross-browser testing

---

## 📚 Documentation

See also:
- `TOKENS.md` - Complete token reference
- `DESIGN_SYSTEM.md` - Theme philosophy
- `THEME_ARCHITECTURE.md` - Architecture guide

---

**Last Updated:** February 7, 2026  
**Status:** ✅ Implementation Complete
