import { test, expect } from '@playwright/test';

test.describe('404 Page and Hidden Obsessions', () => {
  test('should display custom 404 page for non-existent routes', async ({ page }) => {
    // Navigate to a non-existent route
    await page.goto('/asdf');
    
    // Should show custom 404 page
    await expect(page).toHaveTitle(/404|Not Found/i);
    
    // Should contain playful 404 content
    await expect(page.locator('h1')).toContainText(/404|lost/i);
    await expect(page.getByText(/lost in my head/i)).toBeVisible();
    
    // Should still have the theme toggle visible
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
    
    // Should have navigation sidebar
    const navigation = page.getByRole('link', { name: 'Home' });
    await expect(navigation).toBeVisible();
  });

  test('should have hidden mechanism to reveal obsessions link', async ({ page }) => {
    await page.goto('/asdf');
    
    // Look for the hidden trigger element (a specific word to click)
    const hiddenTrigger = page.getByText('curious', { exact: false });
    await expect(hiddenTrigger).toBeVisible();
    
    // Initially, obsessions link should not be visible
    const obsessionsLink = page.getByRole('link', { name: /obsessions/i });
    await expect(obsessionsLink).not.toBeVisible();
    
    // Click the hidden trigger
    await hiddenTrigger.click();
    
    // Now obsessions link should appear
    await expect(obsessionsLink).toBeVisible();
    await expect(obsessionsLink).toHaveAttribute('href', '/obsessions');
  });

  test('should navigate to obsessions page via hidden link', async ({ page }) => {
    await page.goto('/asdf');
    
    // Trigger the hidden link
    const hiddenTrigger = page.getByText('curious', { exact: false });
    await hiddenTrigger.click();
    
    // Click the revealed obsessions link
    const obsessionsLink = page.getByRole('link', { name: /obsessions/i });
    await obsessionsLink.click();
    
    // Should navigate to obsessions page
    await expect(page).toHaveURL('/obsessions');
    await expect(page).toHaveTitle(/obsessions/i);
  });

  test('should display obsessions content correctly', async ({ page }) => {
    await page.goto('/obsessions');
    
    // Should use BaseLayout (theme toggle should be visible)
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
    
    // Should have navigation sidebar
    const navigation = page.getByRole('link', { name: 'Home' });
    await expect(navigation).toBeVisible();
    
    // Should display obsessions heading
    await expect(page.locator('h1')).toContainText(/obsessions/i);
    
    // Should display books section
    const booksSection = page.getByText('Books', { exact: false });
    await expect(booksSection).toBeVisible();
    
    // Should display people section  
    const peopleSection = page.getByText('People', { exact: false });
    await expect(peopleSection).toBeVisible();
    
    // Should display rabbit holes section
    const rabbitHolesSection = page.getByText('Rabbit Holes', { exact: false });
    await expect(rabbitHolesSection).toBeVisible();
    
    // Should have doodle image/link
    const doodleElement = page.locator('[data-testid="doodle"]');
    await expect(doodleElement).toBeVisible();
  });

  test('should display specific obsessions content from data', async ({ page }) => {
    await page.goto('/obsessions');
    
    // Check for expected book titles (from content data)
    await expect(page.locator('body')).toContainText('Sapiens');
    await expect(page.locator('body')).toContainText('The Design of Everyday Things');
    await expect(page.locator('body')).toContainText('Atomic Habits');
    
    // Check for expected people (from content data)
    await expect(page.locator('body')).toContainText('Paul Graham');
    await expect(page.locator('body')).toContainText('Dieter Rams');
    await expect(page.locator('body')).toContainText('John Carmack');
    
    // Check for expected rabbit holes (from content data)
    await expect(page.locator('body')).toContainText('mechanical keyboards');
    await expect(page.locator('body')).toContainText('typography');
    await expect(page.locator('body')).toContainText('vim workflows');
  });

  test('should have working doodle link', async ({ page }) => {
    await page.goto('/obsessions');
    
    const doodleLink = page.locator('[data-testid="doodle"]');
    await expect(doodleLink).toHaveAttribute('href', /^https?:\/\/.+/);
    await expect(doodleLink).toHaveAttribute('target', '_blank');
    await expect(doodleLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should handle direct navigation to obsessions page', async ({ page }) => {
    // Direct navigation should work (no need to go through 404)
    await page.goto('/obsessions');
    
    await expect(page).toHaveTitle(/obsessions/i);
    await expect(page.locator('h1')).toContainText(/obsessions/i);
    
    // All content should be visible
    const bodyContent = page.locator('body');
    await expect(bodyContent).toContainText('Books');
    await expect(bodyContent).toContainText('People');
    await expect(bodyContent).toContainText('Rabbit Holes');
  });

  test('should maintain theme consistency on 404 and obsessions pages', async ({ page }) => {
    // Test dark mode on 404 page
    await page.goto('/asdf');
    
    const themeToggle = page.getByTestId('theme-toggle');
    await themeToggle.click();
    
    // Should apply dark mode
    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);
    
    // Navigate to obsessions and theme should persist
    const hiddenTrigger = page.getByText('curious', { exact: false });
    await hiddenTrigger.click();
    const obsessionsLink = page.getByRole('link', { name: /obsessions/i });
    await obsessionsLink.click();
    
    // Dark mode should persist
    await expect(html).toHaveClass(/dark/);
  });
}); 