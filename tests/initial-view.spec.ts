import { test, expect } from '@playwright/test';

test.describe('Initial Page View', () => {
  test('should display header with profile information', async ({ page }) => {
    await page.goto('/');

    // Check if header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check profile image
    const profileImage = page.locator('header img[alt="chevp profile pic"]');
    await expect(profileImage).toBeVisible();
    await expect(profileImage).toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/78725490?v=4');

    // Check main heading
    const heading = page.locator('header h1');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('chevp');

    // Check subtitle
    const subtitle = page.locator('header p');
    await expect(subtitle).toBeVisible();
    await expect(subtitle).toHaveText('Personal DevOps Projects | Arctic Code Adventures 🐧');
  });

  test('should display main projects section', async ({ page }) => {
    await page.goto('/');

    // Check if Projects section exists
    const projectsHeading = page.locator('h2', { hasText: 'Projects' });
    await expect(projectsHeading).toBeVisible();

    // Check if project cards are visible
    const projectCards = page.locator('.projects > div').first();
    await expect(projectCards).toBeVisible();

    // Check if ECS Configurator project is present
    const ecsProject = page.locator('text=ECS Configurator');
    await expect(ecsProject).toBeVisible();
  });

  test('should display snowflake animation', async ({ page }) => {
    await page.goto('/');

    // Wait for snowflakes to be created
    await page.waitForTimeout(1000);

    // Check if snowflakes are present
    const snowflakes = page.locator('.snowflake');
    await expect(snowflakes.first()).toBeVisible();

    // Check if there are multiple snowflakes
    const snowflakeCount = await snowflakes.count();
    expect(snowflakeCount).toBeGreaterThan(0);
  });

  test('should display footer with copyright and GitHub link', async ({ page }) => {
    await page.goto('/');

    // Check footer visibility
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check copyright text
    await expect(footer).toContainText('© 2025 chevp – All rights reserved');

    // Check GitHub link
    const githubLink = page.locator('footer a[href="https://github.com/chevp"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveText('GitHub Profile');
  });

  test('should have correct page title and meta information', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle('chevp – Penguin Projects');

    // Check meta description (if accessible)
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', 'Personal DevOps Projects | Arctic Code Adventures 🐧');
  });
});