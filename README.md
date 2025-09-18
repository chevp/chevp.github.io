# 🐧 chevp.github.io - Arctic Code Adventures

A modern **Next.js** portfolio website showcasing personal DevOps and development projects with an arctic theme. Features dynamic snowflake animations, scroll-based background effects, and a comprehensive project showcase.

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Development

```bash
# Clone the repository
git clone https://github.com/chevp/chevp.github.io.git
cd chevp.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Production Build

```bash
# Build for production
npm run build

# Start production server (optional)
npm start
```

### Testing

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all tests
npm run test

# Run tests in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/initial-view.spec.ts
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production-ready static files |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run test` | Run Playwright tests |

## 🎯 Features

- **🌨️ Snowflake Animation**: Dynamic falling snowflakes with randomized properties
- **🌈 Dynamic Background**: Color-shifting gradient based on scroll position
- **📱 Responsive Design**: Mobile-first design using Tailwind CSS
- **⚡ Fast Performance**: Static site generation with Next.js
- **🔍 Type Safety**: Full TypeScript implementation
- **🧪 Comprehensive Testing**: Playwright tests for UI and interactions
- **🚀 Auto Deployment**: GitHub Actions workflow for GitHub Pages

## 📁 Project Structure

```
📦 chevp.github.io
├── 📁 .github/workflows/    # GitHub Actions for deployment
├── 📁 src/
│   ├── 📁 app/             # Next.js app directory
│   │   ├── 📄 layout.tsx   # Root layout with metadata
│   │   ├── 📄 page.tsx     # Main homepage
│   │   └── 📄 globals.css  # Global styles
│   ├── 📁 components/      # React components
│   │   ├── 📄 Header.tsx   # Site header with profile
│   │   ├── 📄 Footer.tsx   # Site footer
│   │   ├── 📄 Project.tsx  # Individual project cards
│   │   ├── 📄 ProjectSection.tsx # Project category sections
│   │   ├── 📄 Snowflakes.tsx     # Snowflake animation
│   │   └── 📄 ScrollEffect.tsx   # Dynamic background
│   └── 📁 data/
│       └── 📄 projects.ts  # Project data and types
├── 📁 tests/               # Playwright test suites
├── 📁 public/              # Static assets
└── 📄 README.md           # This file
```

## 🌐 Deployment

This site automatically deploys to GitHub Pages using GitHub Actions:

1. **Automatic**: Push to `main` branch triggers deployment
2. **Manual**: Go to **Settings** → **Pages** → Set source to "GitHub Actions"
3. **URL**: [https://chevp.github.io](https://chevp.github.io)

The workflow builds the Next.js app and exports static files optimized for GitHub Pages.

## 🧪 Testing Strategy

### Initial View Tests
- Header components and profile information
- Project section rendering
- Snowflake animation presence
- Footer links and copyright
- Page metadata and SEO

### Scroll Behavior Tests
- Background color changes at 50% scroll position
- Progressive color darkening during scroll
- Content visibility and layout at different scroll positions

## 🔧 Configuration

### Next.js Configuration
- **Static Export**: Configured for GitHub Pages deployment
- **Image Optimization**: Disabled for compatibility
- **Trailing Slash**: Enabled for proper routing

### Tailwind CSS
- Custom color palette matching the arctic theme
- Responsive breakpoints for mobile-first design
- Custom animations and effects

## 📊 Featured Projects

Showcases various development categories:

- **Projects**: Main featured works (ECS Configurator, Vulkan Playground, etc.)
- **Development**: SDKs, tools, and frameworks
- **Graphics**: Rendering engines and visual experiments
- **Gaming**: Game development projects
- **Web**: Web applications and sites
- **And more**: Assets, data processing, engines, platforms, tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm run test`
5. Build: `npm run build`
6. Commit changes: `git commit -m 'Add feature'`
7. Push to branch: `git push origin feature-name`
8. Submit a pull request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

Made with ❄️ by [chevp](https://github.com/chevp)
