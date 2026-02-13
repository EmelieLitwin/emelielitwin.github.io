# 🦄 Emelie Litwin - Portfolio# 🦄 Emelie Litwin - Portfolio# 🦄 Emelie Litwin - Portfolio



A modern, accessible portfolio website built with React, TypeScript, and Vite. Features a sci-fi HUD overlay system with real-time data panels.



## ✨ FeaturesA modern, accessible portfolio website built with React, TypeScript, and Vite. Features a sci-fi HUD overlay system with real-time data panels.A modern, accessible portfolio website built with React, TypeScript, and Vite. Features a sci-fi HUD overlay system with real-time data panels.



- **Sci-Fi HUD Overlay** - Animated HUD with 4 real-time data panels (target lock, scroll progress, sector tracking, mouse coordinates)

- **Theme Toggle** - Dark/light mode with localStorage persistence

- **Fully Accessible** - WCAG 2.1 AAA compliant (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))## ✨ Features## ✨ Features

- **Responsive Design** - Optimized for mobile to 4K displays

- **Design System** - Token-based architecture with CSS custom properties (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))

- **PWA Ready** - Installable as a web app with manifest and icons

- **SEO Optimized** - Complete metadata, OG images, structured data- **Sci-Fi HUD Overlay** - Animated HUD with 4 real-time data panels (target lock, scroll progress, sector tracking, mouse coordinates)- **Sci-Fi HUD Overlay** - Animated HUD with 4 real-time data panels (target lock, scroll progress, sector tracking, mouse coordinates)



## 🛠️ Tech Stack- **Theme Toggle** - Dark/light mode with localStorage persistence- **Theme Toggle** - Dark/light mode with localStorage persistence



- **React 19** + **TypeScript 5.6** + **Vite 7.3**- **Fully Accessible** - WCAG 2.1 AAA compliant (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))- **Fully Accessible** - WCAG 2.1 AAA compliant (see [ACCESSIBILITY.md](./ACCESSIBILITY.md))

- **CSS Custom Properties** - Token-based design system

- **Feature-based Architecture** - Components organized in `layout/`, `sections/`, `ui/`- **Responsive Design** - Optimized for mobile to 4K displays- **Responsive Design** - Optimized for mobile to 4K displays



## 📁 Project Structure- **Design System** - Token-based architecture with CSS custom properties (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))- **Design System** - Token-based architecture with CSS custom properties (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))



```- **PWA Ready** - Installable as a web app with manifest and icons

src/

├── components/- **SEO Optimized** - Complete metadata, OG images, structured data## 🛠️ Tech Stack

│   ├── layout/          # Header, Footer

│   ├── sections/        # Hero, About, Projects, Education, Skills, Contact

│   └── ui/              # ThemeToggle, ScrollProgress, HudBackground

├── styles/## 🛠️ Tech Stack- **React 19** + **TypeScript 5.6** + **Vite 7.3**

│   ├── design-tokens.css    # Color, spacing, shadow tokens

│   ├── mixins.css           # 40+ reusable CSS patterns- **CSS Custom Properties** - Token-based design system

│   ├── utilities.css        # Utility classes

│   └── theme-variants/- **React 19** + **TypeScript 5.6** + **Vite 7.3**- **Feature-based Architecture** - Components organized in `layout/`, `sections/`, `ui/`

│       └── light.css        # Light mode overrides

├── assets/              # Images and static files- **CSS Custom Properties** - Token-based design system

├── App.tsx              # Main application

└── main.tsx             # Entry point- **Feature-based Architecture** - Components organized in `layout/`, `sections/`, `ui/`## � Project Structure



public/

├── images/

│   ├── og-image.png         # 1200x630 gradient preview## 📁 Project Structure```

│   ├── favicon-16x16.png    # Browser favicons

│   ├── favicon-32x32.pngsrc/

│   ├── apple-touch-icon.png # iOS home screen (180x180)

│   ├── icon-192.png         # PWA icons```├── components/

│   └── icon-512.png

├── favicon.svg          # Modern SVG faviconsrc/│   ├── layout/          # Header, Footer

├── manifest.json        # PWA manifest

├── robots.txt          # SEO directives├── components/│   ├── sections/        # Hero, About, Projects, Education, Skills, Contact

├── sitemap.xml         # Search engine sitemap

└── _headers            # Security & cache headers│   ├── layout/          # Header, Footer│   └── ui/              # ThemeToggle, ScrollProgress, HudBackground

```

│   ├── sections/        # Hero, About, Projects, Education, Skills, Contact├── styles/

## 🚀 Getting Started

│   └── ui/              # ThemeToggle, ScrollProgress, HudBackground│   ├── design-tokens.css    # Color, spacing, shadow tokens

```bash

# Install dependencies├── styles/│   ├── mixins.css           # 40+ reusable CSS patterns

npm install

│   ├── design-tokens.css    # Color, spacing, shadow tokens│   ├── utilities.css        # Utility classes

# Start dev server

npm run dev│   ├── mixins.css           # 40+ reusable CSS patterns│   └── theme-variants/



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
