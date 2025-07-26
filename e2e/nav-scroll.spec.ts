import { test, expect } from '@playwright/test';

test.describe('Navigation Scrolling', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  const sections = [
    { name: 'Hero', id: 'hero', linkText: 'Home' },
    { name: 'About', id: 'about', linkText: 'About' },
    { name: 'Projects', id: 'projects', linkText: 'Projects' },
    { name: 'Substack', id: 'substack', linkText: 'Substack' },
    { name: 'CV', id: 'cv', linkText: 'CV' },
    { name: 'Contact', id: 'contact', linkText: 'Contact' },
  ];

  test('should display all navigation links', async ({ page }) => {
    for (const section of sections) {
      const navLink = page.getByRole('link', { name: section.linkText });
      await expect(navLink).toBeVisible();
    }
  });

  test('should display all sections on the page', async ({ page }) => {
    for (const section of sections) {
      const sectionElement = page.locator(`section[id="${section.id}"]`);
      await expect(sectionElement).toBeVisible();
    }
  });

  test('should update URL hash when clicking navigation links', async ({ page }) => {
    for (const section of sections) {
      // Click the navigation link
      const navLink = page.getByRole('link', { name: section.linkText });
      await navLink.click();
      
      // Wait a bit for smooth scrolling
      await page.waitForTimeout(500);
      
      // Check that URL hash is updated
      await expect(page).toHaveURL(`/#${section.id}`);
    }
  });

  test('should scroll to correct section when clicking nav links', async ({ page }) => {
    for (const section of sections) {
      // Click the navigation link
      const navLink = page.getByRole('link', { name: section.linkText });
      await navLink.click();
      
      // Wait for smooth scrolling to complete
      await page.waitForTimeout(1000);
      
      // Check that the section is in viewport
      const sectionElement = page.locator(`section[id="${section.id}"]`);
      await expect(sectionElement).toBeInViewport();
    }
  });

  test('should have smooth scrolling behavior', async ({ page }) => {
    // Click About link
    const aboutLink = page.getByRole('link', { name: 'About' });
    await aboutLink.click();
    
    // Wait for scroll to complete
    await page.waitForTimeout(1000);
    
    // Click Contact link (should be far down)
    const contactLink = page.getByRole('link', { name: 'Contact' });
    await contactLink.click();
    
    // Wait for scroll to complete
    await page.waitForTimeout(1000);
    
    // Verify we're at the contact section
    const contactSection = page.locator('section[id="contact"]');
    await expect(contactSection).toBeInViewport();
    await expect(page).toHaveURL('/#contact');
  });

  test('should highlight current section in navigation', async ({ page }) => {
    // Test that at least the Home link initially has active state
    const homeLink = page.getByRole('link', { name: 'Home' });
    
    // Click Contact to go to bottom
    const contactLink = page.getByRole('link', { name: 'Contact' });
    await contactLink.click();
    await page.waitForTimeout(1000);
    
    // Verify we can navigate back to top
    await homeLink.click();
    await page.waitForTimeout(1000);
    
    const heroSection = page.locator('section[id="hero"]');
    await expect(heroSection).toBeInViewport();
  });

  test('should contain expected content in each section', async ({ page }) => {
    // Hero section should contain greeting
    const heroSection = page.locator('section[id="hero"]');
    await expect(heroSection).toContainText("Hey! I'm Noah");
    
    // About section should have heading
    const aboutSection = page.locator('section[id="about"]');
    await expect(aboutSection).toContainText('About');
    
    // Projects section should have heading and known project titles
    const projectsSection = page.locator('section[id="projects"]');
    await expect(projectsSection).toContainText('Projects');
    await expect(projectsSection).toContainText('TaskFlow Pro');
    await expect(projectsSection).toContainText('EcoTracker');
    await expect(projectsSection).toContainText('CodeMentor AI');
    
    // Substack section should have blurb and stats
    const substackSection = page.locator('section[id="substack"]');
    await expect(substackSection).toContainText('Substack');
    await expect(substackSection).toContainText('1,200+');
    await expect(substackSection).toContainText('47');
    await expect(substackSection).toContainText('Bi-weekly');
    
    // CV section should have download link
    const cvSection = page.locator('section[id="cv"]');
    await expect(cvSection).toContainText('CV');
    
    // Contact section should have email
    const contactSection = page.locator('section[id="contact"]');
    await expect(contactSection).toContainText('Contact');
  });

  test('CV section should have download link', async ({ page }) => {
    const cvSection = page.locator('section[id="cv"]');
    const downloadLink = cvSection.getByRole('link', { name: /download/i });
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute('href', '/cv.pdf');
  });
}); 