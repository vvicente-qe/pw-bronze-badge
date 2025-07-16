import { type Locator, type Page, expect } from "@playwright/test";

export class GetStartedPage {
    //variables
    readonly page:Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly companyNameField: Locator;
    readonly emailField: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    //constructors
    constructor (page: Page) {
        page = page;
        this.firstNameField = page.locator('.hs-form-iframe').first().contentFrame().getByRole('textbox', { name: 'First Name*' });
        this.lastNameField = page.locator('.hs-form-iframe').first().contentFrame().getByRole('textbox', { name: 'Last name*' });
        this.companyNameField = page.locator('.hs-form-iframe').first().contentFrame().getByRole('textbox', { name: 'Company name*' });
        this.emailField = page.locator('.hs-form-iframe').first().contentFrame().getByRole('textbox', { name: 'Email*' });
        this.submitButton = page.locator('.hs-form-iframe').first().contentFrame().getByRole('button', { name: 'SUBMIT' });
        this.errorMessage = page.locator('.hs-form-iframe').first().contentFrame().getByText('Please complete this required');
    }

    //methods
    async fillFirstNameField ( firstName: string ) {
        await this.firstNameField.fill(firstName);
    }

    async fillLastNameField ( lastName: string ) {
        await this.lastNameField.fill(lastName);
        return this;
    }

    async fillCompanyNameField ( companyName: string ) {
        await this.companyNameField.fill(companyName);
        return this;
    }

    async fillEmailField ( email: string ) {
        await this.emailField.fill(email);
        return this;
    }

    async clickSubmitButton () {
        await this.submitButton.click();
        return this;
    }

    async verifyJobTitleErrorMessage ( errorMsg: string ) {
        await expect(this.errorMessage.first()).toHaveText(errorMsg);
        return this;
    }

    async verifyPhoneNumberErrorMessage ( errorMsg: string ) {
        await expect(this.errorMessage.nth(1)).toHaveText(errorMsg);
        return this;
    }

    async verifyCommentsErrorMessage ( errorMsg: string) {
        await expect(this.errorMessage.nth(2)).toHaveText(errorMsg);
        return this;
    }

}

export default GetStartedPage