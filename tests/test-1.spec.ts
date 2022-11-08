import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://miduconf.com/');

  await page.getByRole('heading', { name: '#miduConf' }).click();

  await page.locator('span:has-text("Debbie O\'Brien")').click();

  await page.locator('article:has-text("12:20 15 min. ✅ Tests E2E con Playwright Debbie O\'Brien")').getByRole('presentation').click();

  await page.locator('div:has-text("Speakers Guillermo Rauch CEO y Fundador, Vercel Freddy Vega CEO y Fundador, Plat")').getByRole('heading', { name: 'Debbie O\'Brien' }).click();

  await page.getByText('Senior Program Manager, Microsoft').click();

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('div:nth-child(3) > .space-y-2 > .relative > a').first().click()
  ]);

  await page.getByRole('link', { name: 'Agenda' }).click();
  await expect(page).toHaveURL('https://miduconf.com/#agenda');

  await page.getByRole('heading', { name: '10:00' }).click();

});