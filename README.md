# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases my professional experience, projects, education, and achievements.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Multiple Sections**:
  - Home/Welcome page with overview
  - About Me with education and personal information
  - Work Experience with detailed career history
  - Coursework showcasing academic projects and presentations
  - Personal Projects portfolio
  - Organizations & Leadership experience
  - Certifications & Professional development
  - Contact page with form and social links

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mangatts/Personal-Website.git
cd Personal-Website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Update the following files with your personal information:

- `src/app/about/page.tsx` - Personal introduction, education, skills
- `src/app/work/page.tsx` - Work experience and career history
- `src/app/coursework/page.tsx` - Academic projects and coursework
- `src/app/projects/page.tsx` - Personal projects and portfolio
- `src/app/organizations/page.tsx` - Leadership roles and volunteer work
- `src/app/certifications/page.tsx` - Professional certifications
- `src/app/contact/page.tsx` - Contact information and social links

### Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual page files

### Images

Add your images to the `public` folder and reference them in your components.

## Deployment

### GitHub Pages

1. Update `next.config.ts` for GitHub Pages:
```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

2. Add deployment script to `package.json`:
```json
{
  "scripts": {
    "deploy": "next build && next export"
  }
}
```

3. Set up GitHub Actions for automatic deployment (optional)

### Other Platforms

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── certifications/
│   ├── contact/
│   ├── coursework/
│   ├── organizations/
│   ├── projects/
│   ├── work/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navigation.tsx
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please contact me through the contact page or open an issue on GitHub.
