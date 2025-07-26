import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
  });

  test('should display theme toggle button', async ({ page }) => {
    await page.goto('/');
    
    // Check that theme toggle exists
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('should toggle dark mode when clicked', async ({ page }) => {
    await page.goto('/');
    
    // Initially should be light mode (no dark class)
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);
    
    // Click the theme toggle
    const themeToggle = page.getByTestId('theme-toggle');
    await themeToggle.click();
    
    // Should now have dark class
    await expect(html).toHaveClass(/dark/);
    
    // Click again to toggle back
    await themeToggle.click();
    
    // Should remove dark class
    await expect(html).not.toHaveClass(/dark/);
  });

  test('should persist theme preference after page reload', async ({ page }) => {
    await page.goto('/');
    
    // Toggle to dark mode
    const themeToggle = page.getByTestId('theme-toggle');
    await themeToggle.click();
    
    // Verify dark mode is applied
    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);
    
    // Reload the page
    await page.reload();
    
    // Dark mode should persist
    await expect(html).toHaveClass(/dark/);
    
    // Toggle should still be visible
    await expect(themeToggle).toBeVisible();
  });

  test('should respect system preference on first visit', async ({ page, context }) => {
    // Set dark color scheme preference
    await context.addInitScript(() => {
      // Mock matchMedia to return dark preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
          matches: query === '(prefers-color-scheme: dark)',
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => {},
        }),
      });
    });
    
    await page.goto('/');
    
    // Should apply dark mode based on system preference
    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);
  });

  test('should show different icons for light and dark modes', async ({ page }) => {
    await page.goto('/');
    
    const themeToggle = page.getByTestId('theme-toggle');
    
    // Initially light mode should show smiley (path with specific d attribute for smiley)
    const smileyPath = page.locator('[data-icon="smiley"]');
    await expect(smileyPath).toBeVisible();
    
    // Click to switch to dark mode
    await themeToggle.click();
    
    // Dark mode should show frowny face
    const frownyPath = page.locator('[data-icon="frowny"]');
    await expect(frownyPath).toBeVisible();
    
    // Smiley should not be visible
    await expect(smileyPath).not.toBeVisible();
  });
}); 