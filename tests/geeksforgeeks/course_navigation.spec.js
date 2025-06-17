const { test, expect } = require('@playwright/test');

test('navigate to Machine Learning course page', async ({ page }) => {
  await page.goto('https://www.geeksforgeeks.org/');
  const acceptCookiesButton = page.getByRole('button', { name: 'Accept cookies' });
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }
  
  await page.getByRole('link', { name: 'Courses', exact: true }).click();
  await page.getByRole('link', { name: 'course thumbnail Interested Geeks 462k+ interested Geeks 4.7 Complete Machine' }).click();

  await expect(page.locator('[id="__next"]')).toMatchAriaSnapshot(`
    - paragraph:
      - text: The
      - strong: Complete Machine Learning & Data Science Program
      - text: /is a comprehensive live course designed to take you from beginner to expert in machine learning and data science\\. Explore a \\d+-degree learning experience designed for geeks who wish to get hands-on Data Science and ML\\. Mentored by industry experts; learn to apply DS methods and techniques, and acquire analytical skills\\. Join us to gain practical knowledge and/
      - strong: become proficient in Data Science
      - text: .
    `);
  await page.locator('video').click();
});

test('navigate to GATE Rank Booster course', async ({ page }) => {
  await page.goto('https://www.geeksforgeeks.org/');
  const acceptCookiesButton = page.getByRole('button', { name: 'Accept cookies' });
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }

  await page.getByRole('link', { name: 'Courses', exact: true }).click();
  await page.getByRole('link', { name: 'GATE Rank Booster (For' }).click();
  await expect(page.getByText('GATE Rank Booster', { exact: true })).toBeVisible();
});