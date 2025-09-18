# Claude Code Configuration

This file contains configuration and information for Claude Code to help with development tasks.

## Project Information

This is a Next.js website project converted from a static GitHub Pages site. The application includes:

- **Snowflake Animation**: Animated snowflakes falling in the background
- **Dynamic Background**: Background color that darkens as you scroll down
- **Project Portfolio**: Comprehensive showcase of development projects organized by category
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **TypeScript**: Full TypeScript support for type safety

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Playwright tests

## GitHub Pages Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages. The workflow:

1. **Triggers**: Runs on push to `main` branch
2. **Build Process**: Uses Node.js 18, installs dependencies, runs `npm run build`
3. **Static Export**: Next.js exports static files to `/out` directory
4. **Deployment**: Automatically deploys to GitHub Pages

### Repository Settings Required

To enable GitHub Pages deployment, ensure these settings in your GitHub repository:

1. Go to **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. The workflow will automatically deploy on push to main

### Build Configuration

- `next.config.mjs` is configured for static export
- `output: 'export'` generates static files
- `trailingSlash: true` ensures proper routing
- `images.unoptimized: true` for GitHub Pages compatibility

## Notes

- The site will look exactly the same as before but now runs on Next.js
- All original features preserved: snowflake animation, scroll effects, project sections
- Enhanced with TypeScript, React components, and Playwright testing