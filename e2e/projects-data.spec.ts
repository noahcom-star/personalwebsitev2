import { test, expect } from '@playwright/test';

test.describe('Projects Data Rendering', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display all project titles from content data', async ({ page }) => {
    const projectsSection = page.locator('section[id="projects"]');
    
    // Known project titles from content.ts
    const expectedProjects = [
      'TaskFlow Pro',
      'EcoTracker', 
      'CodeMentor AI',
      'WeatherScope',
      'MindfulMoments',
      'LocalBites'
    ];
    
    for (const projectTitle of expectedProjects) {
      await expect(projectsSection).toContainText(projectTitle);
    }
  });

  test('should display project descriptions', async ({ page }) => {
    const projectsSection = page.locator('section[id="projects"]');
    
    // Check for partial description text from first few projects
    await expect(projectsSection).toContainText('comprehensive project management application');
    await expect(projectsSection).toContainText('tracking personal carbon footprint');
    await expect(projectsSection).toContainText('intelligent code review and mentoring platform');
  });

  test('should display technology tags for projects', async ({ page }) => {
    const projectsSection = page.locator('section[id="projects"]');
    
    // Check for some known technologies
    await expect(projectsSection).toContainText('React');
    await expect(projectsSection).toContainText('TypeScript');
    await expect(projectsSection).toContainText('Node.js');
    await expect(projectsSection).toContainText('React Native');
    await expect(projectsSection).toContainText('Next.js');
  });

  test('should have working project links', async ({ page }) => {
    const projectCards = page.locator('section[id="projects"] .bg-white');
    const firstCard = projectCards.first();
    
    // Check that project links have proper attributes
    const viewProjectLink = firstCard.getByRole('link', { name: 'View Project' });
    const githubLink = firstCard.getByRole('link', { name: 'GitHub' });
    
    await expect(viewProjectLink).toHaveAttribute('href', /^https?:\/\/.+/);
    await expect(viewProjectLink).toHaveAttribute('target', '_blank');
    await expect(viewProjectLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    await expect(githubLink).toHaveAttribute('href', /^https?:\/\/.+/);
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should display at least 6 project cards', async ({ page }) => {
    const projectCards = page.locator('section[id="projects"] .bg-white.dark\\:bg-gray-800');
    const count = await projectCards.count();
    expect(count).toBeGreaterThanOrEqual(6);
  });

  test('should have proper visual layout for projects', async ({ page }) => {
    const projectsGrid = page.locator('section[id="projects"] .grid');
    await expect(projectsGrid).toBeVisible();
    
    // Check that project cards have gradient backgrounds
    const firstCard = page.locator('section[id="projects"] .bg-white').first();
    const gradientDiv = firstCard.locator('.bg-gradient-to-br').first();
    await expect(gradientDiv).toBeVisible();
  });
});

test.describe('Substack Data Rendering', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display substack blurb from content data', async ({ page }) => {
    const substackSection = page.locator('section[id="substack"]');
    
    // Check for key phrases from the blurb
    await expect(substackSection).toContainText('intersection of technology and human creativity');
    await expect(substackSection).toContainText('modern web development');
    await expect(substackSection).toContainText('Join a community of developers');
  });

  test('should display correct subscriber statistics', async ({ page }) => {
    const substackSection = page.locator('section[id="substack"]');
    
    // Check specific stats from content.ts
    await expect(substackSection).toContainText('1,200+');
    await expect(substackSection).toContainText('47');
    await expect(substackSection).toContainText('Bi-weekly');
  });

  test('should have working substack links', async ({ page }) => {
    const substackSection = page.locator('section[id="substack"]');
    
    const subscribeLink = substackSection.getByRole('link', { name: /Subscribe to Newsletter/i });
    const readPostsLink = substackSection.getByRole('link', { name: /Read Latest Posts/i });
    
    await expect(subscribeLink).toHaveAttribute('href', 'https://noahdev.substack.com');
    await expect(subscribeLink).toHaveAttribute('target', '_blank');
    await expect(subscribeLink).toHaveAttribute('rel', 'noopener noreferrer');
    
    await expect(readPostsLink).toHaveAttribute('href', 'https://noahdev.substack.com');
    await expect(readPostsLink).toHaveAttribute('target', '_blank');
    await expect(readPostsLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should display stats grid layout', async ({ page }) => {
    const substackSection = page.locator('section[id="substack"]');
    const statsGrid = substackSection.locator('.grid.sm\\:grid-cols-3');
    
    await expect(statsGrid).toBeVisible();
    
    // Check that all three stat items are present
    await expect(statsGrid).toContainText('Subscribers');
    await expect(statsGrid).toContainText('Articles Published');
    await expect(statsGrid).toContainText('Publishing Schedule');
  });
}); 