import { test, expect, Frame } from '@playwright/test';

test('Verify Get Started form error message', async ({ page }) => {
  //a) Navigate to https://3cloudsolutions.com 
  await page.goto('https://3cloudsolutions.com ');

  //b) Hover over Who We Serve header dropdown
  await page.getByRole('link', { name: 'Who We Serve' }).hover();

  //c) Click on Financial Services
  await page.getByRole('link', { name: 'Financial Services' }).click();

  //d) Click on the Let's Talk button (opens a new page)
  const getStartedPromise = page.waitForEvent('popup');
  await page.locator('section').filter({ hasText: 'How 3Cloud' }).getByRole('link').click();
  const getStartedPage = await getStartedPromise;

  //e) Enter text into the First, Last, Company, and Email fields, leaving one or more fields blank.
  await getStartedPage.locator('.hs-form-iframe').first().contentFrame().getByRole('textbox', { name: 'First Name*' }).fill('John');
  await getStartedPage.locator('.hs-form-iframe').first().contentFrame().getByRole('textbox', { name: 'Last name*' }).fill('Doe');
  await getStartedPage.locator('.hs-form-iframe').first().contentFrame().getByRole('textbox', { name: 'Company name*' }).fill('3Cloud');
  await getStartedPage.locator('.hs-form-iframe').first().contentFrame().getByRole('textbox', { name: 'Email*' }).fill('johndoe@3cloudsolutions.com');
  
  //f) Click Submit
  await getStartedPage.locator('.hs-form-iframe').first().contentFrame().getByRole('button', { name: 'SUBMIT' }).click();

  //g) Verify one or more Error Message is displayed, and verify the error message is correct.
  await expect(getStartedPage.locator('.hs-form-iframe').first().contentFrame().getByText('Please complete this required').first()).toHaveText('Please complete this required field.');
  await expect(getStartedPage.locator('.hs-form-iframe').first().contentFrame().getByText('Please complete this required').nth(1)).toHaveText('Please complete this required field.');
  await expect(getStartedPage.locator('.hs-form-iframe').first().contentFrame().getByText('Please complete this required').nth(2)).toHaveText('Please complete this required field.');
});
