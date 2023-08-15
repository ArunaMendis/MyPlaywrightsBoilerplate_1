import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/registration-form/');
  await expect (page.getByRole('heading', { name: 'CodenBox AutomationLab' })).toBeVisible();
  await page.getByRole('heading', { name: 'Training Registration Form' }).click();
  await page.getByLabel('First Name *').click();
  await page.getByLabel('First Name *').fill('Radeesha');
  await page.getByLabel('First Name *').press('Tab');
  await page.getByLabel('Last Name *').fill('Hansani');
  await page.getByLabel('Email *').click();
  await page.getByLabel('Email *').fill('asdsd@sdsd.com');
  await page.getByLabel('Email *').press('Tab');
  await page.getByLabel('Phone').fill('232356896');
  await page.getByLabel('Phone').press('Tab');
  await page.getByLabel('Select the Course you would like to book? *').selectOption('selenium-automation');
  await page.getByLabel('Select the Month of the Batch you would like to join?').selectOption('february');
  await page.getByText('Kijiji').click();
  await page.getByRole('button', { name: 'Register' }).click();
  await expect (page.getByRole('heading', { name: 'Training Registration Form' })).toBeVisible();
});