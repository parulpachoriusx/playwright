// Remove the type import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test'); // Or use ES Module import if configured

test('navigate to GeeksforGeeks homepage and accept cookies', async ({ page }) => {
  await page.goto('https://www.geeksforgeeks.org/');
  // It's good practice to wait for elements to be visible/enabled before interacting
  await expect(page.getByRole('link', { name: 'Courses', exact: true })).toBeVisible();

  const acceptCookiesButton = page.getByRole('button', { name: 'Accept cookies' });
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }

  await expect(acceptCookiesButton).not.toBeVisible();
});

test('verify top main header content', async ({ page }) => {
  await page.goto('https://www.geeksforgeeks.org/');
  const acceptCookiesButton = page.getByRole('button', { name: 'Accept cookies' });
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }
  
  await expect(page.locator('#topMainHeader')).toMatchAriaSnapshot(`
    - button "Toggle GFG Theme"
    - text: Switch to Dark Mode
    `);
  await page.locator('.gfg-icon.gfg-icon-grey-cancel').click();
});