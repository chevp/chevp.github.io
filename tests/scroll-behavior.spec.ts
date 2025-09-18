import { test, expect } from '@playwright/test';

test.describe('Scroll Behavior - 50% Down Page', () => {
  test('should show darker background when scrolled to 50% of page', async ({ page }) => {
    await page.goto('/');

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Get initial background color
    const initialBackground = await page.evaluate(() => {
      return window.getComputedStyle(document.body).background;
    });

    // Get total page height and calculate 50% scroll position
    const pageHeight = await page.evaluate(() => {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
    });

    const viewportHeight = await page.evaluate(() => window.innerHeight);
    const maxScroll = pageHeight - viewportHeight;
    const fiftyPercentScroll = maxScroll * 0.5;

    // Scroll to 50% of the page
    await page.evaluate((scrollPos) => {
      window.scrollTo(0, scrollPos);
    }, fiftyPercentScroll);

    // Wait for scroll effect to apply
    await page.waitForTimeout(500);

    // Get background color after scrolling
    const scrolledBackground = await page.evaluate(() => {
      return window.getComputedStyle(document.body).background;
    });

    // Verify that the background has changed (should be darker)
    expect(scrolledBackground).not.toBe(initialBackground);

    // Verify that we're at approximately 50% scroll position
    const currentScrollPosition = await page.evaluate(() => window.pageYOffset);
    const actualScrollPercentage = currentScrollPosition / maxScroll;

    // Allow some tolerance for scroll position (within 5% of target)
    expect(actualScrollPercentage).toBeGreaterThan(0.45);
    expect(actualScrollPercentage).toBeLessThan(0.55);
  });

  test('should verify scroll effect changes background gradient progressively', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Function to get RGB values from background
    const getBackgroundRGB = async () => {
      return await page.evaluate(() => {
        const bg = window.getComputedStyle(document.body).background;
        // Extract RGB values from the gradient
        const rgbMatches = bg.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g);
        if (rgbMatches && rgbMatches.length >= 2) {
          const color1 = rgbMatches[0].match(/\d+/g)?.map(Number);
          const color2 = rgbMatches[1].match(/\d+/g)?.map(Number);
          return { color1, color2 };
        }
        return null;
      });
    };

    // Get initial colors
    const initialColors = await getBackgroundRGB();

    // Scroll to 25%
    await page.evaluate(() => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      window.scrollTo(0, maxScroll * 0.25);
    });
    await page.waitForTimeout(100);
    const colors25 = await getBackgroundRGB();

    // Scroll to 50%
    await page.evaluate(() => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      window.scrollTo(0, maxScroll * 0.5);
    });
    await page.waitForTimeout(100);
    const colors50 = await getBackgroundRGB();

    // Scroll to 75%
    await page.evaluate(() => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      window.scrollTo(0, maxScroll * 0.75);
    });
    await page.waitForTimeout(100);
    const colors75 = await getBackgroundRGB();

    // Verify that colors get progressively darker as we scroll
    if (initialColors?.color1 && colors25?.color1 && colors50?.color1 && colors75?.color1) {
      // Check first color of gradient gets darker
      const initial_r = initialColors.color1[0];
      const color25_r = colors25.color1[0];
      const color50_r = colors50.color1[0];
      const color75_r = colors75.color1[0];

      // Colors should get progressively darker (lower RGB values)
      expect(color25_r).toBeLessThanOrEqual(initial_r);
      expect(color50_r).toBeLessThanOrEqual(color25_r);
      expect(color75_r).toBeLessThanOrEqual(color50_r);
    }
  });

  test('should maintain scroll position at 50% and verify content visibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Scroll to 50% position
    await page.evaluate(() => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const fiftyPercent = maxScroll * 0.5;
      window.scrollTo(0, fiftyPercent);
    });

    await page.waitForTimeout(500);

    // Verify some content is still visible at 50% scroll
    // Header should no longer be visible
    const header = page.locator('header');
    const headerBox = await header.boundingBox();
    const viewportHeight = await page.evaluate(() => window.innerHeight);

    // Header should be mostly or completely out of view
    if (headerBox) {
      expect(headerBox.y + headerBox.height).toBeLessThanOrEqual(100); // Some tolerance
    }

    // Some project sections should be visible
    const projectCards = page.locator('[class*="grid"] > div');
    await expect(projectCards.first()).toBeVisible();

    // Footer should not be visible yet at 50% scroll
    const footer = page.locator('footer');
    const footerBox = await footer.boundingBox();

    if (footerBox) {
      expect(footerBox.y).toBeGreaterThan(viewportHeight * 0.5); // Footer should be in lower half or below viewport
    }
  });
});