# Personal Website

A modern personal website built with **Astro** and **Tailwind CSS**, featuring a complete development setup with linting, testing, and CI/CD.

## 🚀 Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vitest](https://vitest.dev/)** - Unit testing
- **[Playwright](https://playwright.dev/)** - E2E testing
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers (for E2E tests):**
   ```bash
   npx playwright install
   ```

## 🛠️ Development

### Start Development Server

```bash
npm run dev
```

Your site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🧪 Testing

### Run All Tests

```bash
npm test
```

### Unit Tests (Vitest)

```bash
npm run test:unit
```

### E2E Tests (Playwright)

```bash
npm run test:e2e
```

## 🎨 Code Quality

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

### Type Checking

```bash
npx astro check
```

## 📁 Project Structure

```
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── pages/          # Astro pages
│   │   └── index.astro
│   ├── tests/          # Unit tests
│   │   └── sanity.test.ts
│   └── env.d.ts        # TypeScript environment types
├── e2e/                # E2E tests
│   └── homepage.spec.ts
├── .github/
│   └── workflows/
│       └── ci.yml      # GitHub Actions CI
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── vitest.config.ts    # Vitest configuration
├── playwright.config.ts # Playwright configuration
├── eslint.config.js    # ESLint configuration
├── .prettierrc         # Prettier configuration
└── package.json
```

## 🚀 Deployment

This project is configured to work seamlessly with various hosting platforms:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Deploy with zero configuration
- **GitHub Pages**: Use the included GitHub Actions workflow
- **Cloudflare Pages**: Deploy with build command `npm run build`

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and add tests**
4. **Ensure all tests pass:**
   ```bash
   npm test
   npm run lint
   ```
5. **Commit your changes:**
   ```bash
   git commit -m "Add your feature"
   ```
6. **Push to your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm test` | Run all tests |
| `npm run test:unit` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# Example environment variables
PUBLIC_SITE_URL=https://your-domain.com
```

### Customizing Tailwind

Edit `tailwind.config.mjs` to customize your design system:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      },
    },
  },
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `astro.config.mjs`
2. **TypeScript errors**: Run `npx astro check` for detailed type information
3. **E2E tests failing**: Ensure the dev server is running on the correct port

### Getting Help

- Check the [Astro documentation](https://docs.astro.build/)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Open an issue in this repository

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Happy coding!** 🎉 