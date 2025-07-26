import { describe, it, expect } from 'vitest';

describe('Sanity Test', () => {
  it('should pass a basic assertion', () => {
    expect(true).toBe(true);
  });

  it('should perform basic math', () => {
    expect(2 + 2).toBe(4);
  });

  it('should handle string operations', () => {
    const greeting = 'Hello World';
    expect(greeting).toContain('Hello');
    expect(greeting.length).toBeGreaterThan(0);
  });
});

describe('Component Import Tests', () => {
  it('should be able to import section components', async () => {
    // Test that section components can be imported without errors
    const heroModule = await import('../components/sections/Hero.astro');
    const aboutModule = await import('../components/sections/About.astro');
    const projectsModule = await import('../components/sections/Projects.astro');
    const substackModule = await import('../components/sections/Substack.astro');
    const cvModule = await import('../components/sections/CV.astro');
    const contactModule = await import('../components/sections/Contact.astro');
    
    expect(heroModule).toBeDefined();
    expect(aboutModule).toBeDefined();
    expect(projectsModule).toBeDefined();
    expect(substackModule).toBeDefined();
    expect(cvModule).toBeDefined();
    expect(contactModule).toBeDefined();
  });

  it('should be able to import theme utilities', async () => {
    const themeModule = await import('../utils/theme');
    
    expect(themeModule.getInitialTheme).toBeDefined();
    expect(themeModule.applyTheme).toBeDefined();
    expect(themeModule.toggleTheme).toBeDefined();
    expect(typeof themeModule.getInitialTheme).toBe('function');
    expect(typeof themeModule.applyTheme).toBe('function');
    expect(typeof themeModule.toggleTheme).toBe('function');
  });

  it('should be able to import layout components', async () => {
    const baseLayoutModule = await import('../layouts/BaseLayout.astro');
    const themeToggleModule = await import('../components/ThemeToggle.astro');
    
    expect(baseLayoutModule).toBeDefined();
    expect(themeToggleModule).toBeDefined();
  });
}); 