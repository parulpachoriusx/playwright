const { test, expect } = require('@playwright/test');

test('navigate to Python practice problems', async ({ page }) => {
  await page.goto('https://www.geeksforgeeks.org/');
  const acceptCookiesButton = page.getByRole('button', { name: 'Accept cookies' });
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }

  await page.getByText('Practice', { exact: true }).dblclick();
  await page.getByRole('listitem').filter({ hasText: /^Practice Coding Problems$/ }).click();

  const page1Promise = page.waitForEvent('popup');
  await page.locator('#post-1324743').getByRole('link', { name: 'Python' }).click();
  const page1 = await page1Promise;

  await page1.waitForLoadState();
  await expect(page1).toHaveURL(/.*practice\.geeksforgeeks\.org\/explore\/.*/);
  await expect(page1.getByText('Python Programming')).toBeVisible();

  const page2Promise = page1.waitForEvent('popup');
  await page1.locator('div[data-tooltip="Solve"]').first().click();
  const page2 = await page2Promise;

  await page2.waitForLoadState();
  await expect(page2).toHaveURL(/.*auth\.geeksforgeeks\.org\/user\/login\/.*/);
});