# 🦄 Emelie Litwin - Portfolio# 🦄 Emelie Litwin - Portfolio# 🦄 Emelie Litwin - Portfolio# 🦄 Emelie Litwin - Portfolio



A modern, accessible portfolio website built with React, TypeScript, and Vite. Features dual theme system (Dark sci-fi HUD / Light technical blueprint) with bilingual support (Swedish/English).



## ✨ FeaturesA modern, accessible portfolio website built with React, TypeScript, and Vite. Features a sci-fi HUD overlay system with real-time data panels.



- **Dual Theme System** - Dark sci-fi HUD theme with neon accents / Light monochrome technical blueprint theme

- **Bilingual Support** - Swedish/English with localStorage persistence

- **Fully Accessible** - WCAG 2.1 AA compliant (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))## ✨ FeaturesA modern, accessible portfolio website built with React, TypeScript, and Vite. Features a sci-fi HUD overlay system with real-time data panels.A modern, accessible portfolio website built with React, TypeScript, and Vite. Features a sci-fi HUD overlay system with real-time data panels.

- **Responsive Design** - Optimized for mobile to 4K displays

- **Design System** - Token-based architecture with CSS custom properties (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))

- **SEO Optimized** - Complete metadata, OG images, structured data

- **Sci-Fi HUD Overlay** - Animated HUD with 4 real-time data panels (target lock, scroll progress, sector tracking, mouse coordinates)

## 🛠️ Tech Stack

- **Theme Toggle** - Dark/light mode with localStorage persistence

- **React 19** + **TypeScript 5.6** + **Vite 7.3**

- **CSS Custom Properties** - Token-based design system- **Fully Accessible** - WCAG 2.1 AAA compliant (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))## ✨ Features## ✨ Features

- **Feature-based Architecture** - Components organized by purpose

- **i18n** - Custom translation system with language toggle- **Responsive Design** - Optimized for mobile to 4K displays



## 📁 Project Structure- **Design System** - Token-based architecture with CSS custom properties (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))



```- **PWA Ready** - Installable as a web app with manifest and icons

src/

├── components/- **SEO Optimized** - Complete metadata, OG images, structured data- **Sci-Fi HUD Overlay** - Animated HUD with 4 real-time data panels (target lock, scroll progress, sector tracking, mouse coordinates)- **Sci-Fi HUD Overlay** - Animated HUD with 4 real-time data panels (target lock, scroll progress, sector tracking, mouse coordinates)

│   ├── layout/          # Header, Footer

│   ├── sections/        # Hero, About, Projects, Education, Skills, Contact

│   └── ui/              # ThemeToggle, LanguageToggle, ScrollProgress, HudBackground

├── styles/## 🛠️ Tech Stack- **Theme Toggle** - Dark/light mode with localStorage persistence- **Theme Toggle** - Dark/light mode with localStorage persistence

│   ├── design-tokens.css    # Core design tokens (dark theme)

│   ├── mixins.css           # Reusable CSS patterns

│   ├── utilities.css        # Utility classes

│   └── theme-variants/- **React 19** + **TypeScript 5.6** + **Vite 7.3**- **Fully Accessible** - WCAG 2.1 AAA compliant (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))- **Fully Accessible** - WCAG 2.1 AAA compliant (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))

│       └── light.css        # Light mode theme overrides

├── translations/- **CSS Custom Properties** - Token-based design system

│   └── translations.ts      # Bilingual content (SV/EN)

├── App.tsx              # Main application- **Feature-based Architecture** - Components organized in `layout/`, `sections/`, `ui/`- **Responsive Design** - Optimized for mobile to 4K displays- **Responsive Design** - Optimized for mobile to 4K displays

└── main.tsx             # Entry point



public/

├── images/## 📁 Project Structure- **Design System** - Token-based architecture with CSS custom properties (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))- **Design System** - Token-based architecture with CSS custom properties (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))

│   ├── og-image.png         # 1200x630 social media preview

│   ├── favicon-16x16.png    # Browser favicons

│   ├── favicon-32x32.png

│   └── apple-touch-icon.png # iOS home screen (180x180)```- **PWA Ready** - Installable as a web app with manifest and icons

├── favicon.svg          # Modern SVG favicon

├── manifest.json        # PWA manifest (future use)src/

├── robots.txt          # SEO directives

└── sitemap.xml         # Search engine sitemap├── components/- **SEO Optimized** - Complete metadata, OG images, structured data## 🛠️ Tech Stack

```

│   ├── layout/          # Header, Footer

## 🚀 Getting Started

│   ├── sections/        # Hero, About, Projects, Education, Skills, Contact

```bash

# Install dependencies│   └── ui/              # ThemeToggle, ScrollProgress, HudBackground

npm install

├── styles/## 🛠️ Tech Stack- **React 19** + **TypeScript 5.6** + **Vite 7.3**

# Start dev server

npm run dev│   ├── design-tokens.css    # Color, spacing, shadow tokens



# Build for production│   ├── mixins.css           # 40+ reusable CSS patterns- **CSS Custom Properties** - Token-based design system

npm run build

│   ├── utilities.css        # Utility classes

# Preview production build

npm run preview│   └── theme-variants/- **React 19** + **TypeScript 5.6** + **Vite 7.3**- **Feature-based Architecture** - Components organized in `layout/`, `sections/`, `ui/`

```

│       └── light.css        # Light mode overrides

The site will be available at `http://localhost:5173`

├── assets/              # Images and static files- **CSS Custom Properties** - Token-based design system

## 📦 Available Scripts

├── App.tsx              # Main application

```bash

# Development server with HMR└── main.tsx             # Entry point- **Feature-based Architecture** - Components organized in `layout/`, `sections/`, `ui/`## � Project Structure

npm run dev



# Type-check without emitting files

npm run type-checkpublic/



# Build for production├── images/

npm run build

│   ├── og-image.png         # 1200x630 gradient preview## 📁 Project Structure```

# Preview production build

npm run preview│   ├── favicon-16x16.png    # Browser favicons

```

│   ├── favicon-32x32.pngsrc/

## 📚 Documentation

│   ├── apple-touch-icon.png # iOS home screen (180x180)

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Design tokens, theming system, and CSS architecture

- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - WCAG 2.1 compliance details│   ├── icon-192.png         # PWA icons```├── components/

- **[TRANSLATIONS.md](./TRANSLATIONS.md)** - Translation system and bilingual content management

│   └── icon-512.png

## 🎨 Design Tokens

├── favicon.svg          # Modern SVG faviconsrc/│   ├── layout/          # Header, Footer

The project uses a comprehensive token system for consistent styling:

├── manifest.json        # PWA manifest

### Dark Theme (Default)

- **Colors**: Cyan (#00F0FF), Magenta (#FF00FF), Blue (#3B82F6)├── robots.txt          # SEO directives├── components/│   ├── sections/        # Hero, About, Projects, Education, Skills, Contact

- **Background**: Dark navy (#0A0E1A)

- **Typography**: Chakra Petch (display), JetBrains Mono (code), system fonts (body)├── sitemap.xml         # Search engine sitemap



### Light Theme└── _headers            # Security & cache headers│   ├── layout/          # Header, Footer│   └── ui/              # ThemeToggle, ScrollProgress, HudBackground

- **Colors**: Pure black/white with grayscale hierarchy

- **Background**: White (#FFFFFF)```

- **Typography**: Chakra Petch (display), Roboto Mono (body), Orbitron (UI)

│   ├── sections/        # Hero, About, Projects, Education, Skills, Contact├── styles/

## 🌐 SEO & Metadata

## 🚀 Getting Started

- ✅ Open Graph tags (Facebook, LinkedIn)

- ✅ Twitter Cards│   └── ui/              # ThemeToggle, ScrollProgress, HudBackground│   ├── design-tokens.css    # Color, spacing, shadow tokens

- ✅ JSON-LD structured data (Person + WebSite schema)

- ✅ Favicons for all platforms (16px, 32px, 180px)```bash

- ✅ robots.txt and sitemap.xml

# Install dependencies├── styles/│   ├── mixins.css           # 40+ reusable CSS patterns

## 🔗 Links

npm install

- **Live:** [emelielitwin.github.io](https://emelielitwin.github.io)

- **LinkedIn:** [linkedin.com/in/emelielitwin](https://linkedin.com/in/emelielitwin)│   ├── design-tokens.css    # Color, spacing, shadow tokens│   ├── utilities.css        # Utility classes

- **Email:** emelielitwin@gmail.com

# Start dev server

---

npm run dev│   ├── mixins.css           # 40+ reusable CSS patterns│   └── theme-variants/

Built with ❤️ by Emelie Litwin



# Build for production│   ├── utilities.css        # Utility classes│       └── light.css        # Light mode overrides

npm run build

│   └── theme-variants/├── assets/              # Images and static files

# Preview production build

npm run preview│       └── light.css        # Light mode overrides├── App.tsx              # Main application

```

├── assets/              # Images and static files└── main.tsx             # Entry point

## 📚 Documentation

├── App.tsx              # Main application```

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Architecture, design tokens, and theming

- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - WCAG 2.1 AAA compliance details└── main.tsx             # Entry point



## 🌐 SEO & Metadata## 🚀 Getting Started



- ✅ Open Graph tags (Facebook, LinkedIn)public/

- ✅ Twitter Cards

- ✅ JSON-LD structured data (Person + WebSite schema)├── images/```bash

- ✅ PWA manifest for installability

- ✅ Favicons for all platforms (16px, 32px, 180px, 192px, 512px)│   ├── og-image.png         # 1200x630 social media preview# Install dependencies

- ✅ Security headers (X-Frame-Options, CSP, etc.)

- ✅ robots.txt and sitemap.xml│   ├── favicon-16x16.png    # Browser faviconsnpm install



## 🔗 Links│   ├── favicon-32x32.png



- **Live:** [emelielitwin.github.io](https://emelielitwin.github.io)│   ├── apple-touch-icon.png # iOS home screen (180x180)# Start dev server

- **LinkedIn:** [linkedin.com/in/emelielitwin](https://linkedin.com/in/emelielitwin)

- **Email:** emelielitwin@gmail.com│   ├── icon-192.png         # PWA iconsnpm run dev



---│   └── icon-512.png



Built with ❤️ by Emelie Litwin├── favicon.svg          # Modern SVG favicon# Build for production


├── manifest.json        # PWA manifestnpm run build

├── robots.txt          # SEO directives

├── sitemap.xml         # Search engine sitemap# Navigate to project directory

└── _headers            # Security & cache headerscd website2026

```

# Install dependencies

## 🚀 Getting Startednpm install



```bash# Start development server

# Install dependenciesnpm run dev

npm install```



# Start dev serverThe site will be available at `http://localhost:5173`

npm run dev

## 📦 Available Scripts

# Build for production

npm run build```bash

# Development server with HMR

# Preview production buildnpm run dev

npm run preview

```# Type-check without emitting files

npm run type-check

## 🔧 Utility Scripts

# Build for production

Regenerate assets from source files:npm run build



```bash# Preview production build

# Regenerate favicons from favicon.svgnpm run preview

./generate-favicons.sh```



# Regenerate OG image## 📚 Documentation

./generate-og-image.sh

```- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Architecture, design tokens, and theming

- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - WCAG 2.1 AAA compliance details

## 📚 Documentation

## 🔗 Links

- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Architecture, design tokens, and theming

- **[ACCESSIBILITY.md](./ACCESSIBILITY.md)** - WCAG 2.1 AAA compliance details- **Live:** [emelielitwin.github.io](https://emelielitwin.github.io)

- **LinkedIn:** [linkedin.com/in/emelielitwin](https://linkedin.com/in/emelielitwin)

## 🌐 SEO & Metadata- **Email:** emelielitwin@gmail.com



- ✅ Open Graph tags (Facebook, LinkedIn)---

- ✅ Twitter Cards

- ✅ JSON-LD structured data (Person + WebSite schema)Built with ❤️ by Emelie Litwin

- ✅ PWA manifest for installability

- ✅ Favicons for all platforms (16px, 32px, 180px, 192px, 512px)```

- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ robots.txt and sitemap.xml

## 🔗 Links

- **Live:** [emelielitwin.github.io](https://emelielitwin.github.io)
- **LinkedIn:** [linkedin.com/in/emelielitwin](https://linkedin.com/in/emelielitwin)
- **Email:** emelielitwin@gmail.com

---

Built with ❤️ by Emelie Litwin
