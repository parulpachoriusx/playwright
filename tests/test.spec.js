import { test, expect } from '@playwright/test';

test('GeeksforGeeks page title test', async ({ page }) => {
  // Navigate to GeeksforGeeks website
  await page.goto('https://www.geeksforgeeks.org/');

  // Verify the page title
  const title = await page.title();
  expect(title).toBe('GeeksforGeeks | A computer science portal for geeks');
});
