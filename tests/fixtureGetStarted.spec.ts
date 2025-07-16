import { test } from '../utils/pages.fixtures.ts';

test('Verify Get Started form error message', async ({ page, menu, financialServicesPage }) => {
  await page.goto('https://3cloudsolutions.com ');
  await menu.hoverOnMenu();
  await menu.clickFinancialServicesOption();

  const getStartedPage = await financialServicesPage.clickLetsTalkButtonAndWaitForPopup();

  await getStartedPage.fillFirstNameField('John');
  await getStartedPage.fillLastNameField('Doe');
  await getStartedPage.fillCompanyNameField('3Cloud');
  await getStartedPage.fillEmailField('johndoe@3cloudsolutions.com');
  await getStartedPage.clickSubmitButton();
  await getStartedPage.verifyJobTitleErrorMessage('Please complete this required field.');
  await getStartedPage.verifyPhoneNumberErrorMessage('Please complete this required field.');
  await getStartedPage.verifyCommentsErrorMessage('Please complete this required field.');
});


