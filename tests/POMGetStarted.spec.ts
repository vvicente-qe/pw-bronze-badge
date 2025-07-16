import { test } from '@playwright/test';
import Menu from '../pages/menu';

test('Verify Get Started form error message', async ({ page }) => {
  const menu = new Menu(page);
 
  await page.goto('https://3cloudsolutions.com');
  const getStartedPage = await menu
    .hoverOnMenu()
    .then(menu => menu.clickFinancialServicesOption())
    .then(fsPage => fsPage.clickLetsTalkButtonAndWaitForPopup());

  await Promise.all([
    getStartedPage.fillFirstNameField('John'),
    getStartedPage.fillLastNameField('Doe'),
    getStartedPage.fillCompanyNameField('3Cloud'),
    getStartedPage.fillEmailField('johndoe@3cloudsolutions.com')
  ]);

  await getStartedPage.clickSubmitButton();
  
  await Promise.all([
    getStartedPage.verifyJobTitleErrorMessage('Please complete this required field.'),
    getStartedPage.verifyPhoneNumberErrorMessage('Please complete this required field.'),
    getStartedPage.verifyCommentsErrorMessage('Please complete this required field.')
  ]);
   
});
