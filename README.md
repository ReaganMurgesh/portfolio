# Reagan's Portfolio

A **professional, motion-rich** personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS
- **Professional Animations**: Smooth, elegant Framer Motion animations and interactions
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Dark Theme Friendly**: Professional dark-theme design with clean aesthetics
- **Performance Optimized**: Static generation with Next.js for fast loading
- **Accessible**: Semantic HTML and ARIA labels for screen readers
- **Clean Architecture**: Reusable components and data-driven approach
- **Interactive Elements**: Hover effects, scroll-triggered animations, and micro-interactions

## ✨ **What Makes This Portfolio Special**

- **Cinematic Hero Section**: Typewriter effects and staggered animations
- **Scroll-Triggered Animations**: Content appears smoothly as you scroll
- **Interactive Project Cards**: 3D hover effects and gradient accents
- **Animated Skills Grid**: Dynamic skill level indicators and category animations
- **Elegant Quote Section**: Word-by-word animation with floating elements
- **Professional Footer**: Sophisticated social link animations with tooltips

## 📋 Sections

1. **Hero Section**: Animated name reveal with color-coded tagline
2. **About Section**: Scroll-triggered content with animated side bars
3. **Projects Section**: Interactive cards with 3D hover effects and GitHub links
4. **Skills Section**: Animated grid with skill level indicators and category colors
5. **Beyond Code Section**: Cinematic quote with word-by-word animation
6. **Footer**: Professional social links with hover effects and call-to-action

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── BeyondCode.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── data/
    ├── projects.ts
    └── skills.ts
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: Edit the name and tagline in `src/components/Hero.tsx`
- **About Section**: Update content in `src/components/About.tsx`
- **Projects**: Modify projects data in `src/data/projects.ts`
- **Skills**: Update skills categories in `src/data/skills.ts`
- **Contact**: Change social links in `src/components/Footer.tsx`

### Styling

The project uses Tailwind CSS for styling. You can:

- Modify the color scheme in `tailwind.config.ts`
- Update global styles in `src/app/globals.css`
- Customize component styles directly in the component files

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## 🚀 Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and import your project
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy and enjoy your live portfolio!

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.