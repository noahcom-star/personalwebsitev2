import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loaded successfully
    await expect(page).toHaveURL('/');
  });

  test('should contain the title tag', async ({ page }) => {
    await page.goto('/');
    
    // Check that the title tag exists and has content
    await expect(page).toHaveTitle(/Welcome to My Personal Website/);
  });

  test('should display main heading', async ({ page }) => {
    await page.goto('/');
    
    // Check that the main heading is visible
    const heading = page.getByRole('heading', { name: /Welcome to My Personal Website/ });
    await expect(heading).toBeVisible();
  });

  test('should have proper page structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for main structural elements
    await expect(page.locator('main')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2 })).toBeVisible();
  });
}); 