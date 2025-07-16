import { type Locator, type Page } from "@playwright/test";
import FinancialServicesPage from "./financialServices.page";

export class Menu {
    //variables
    readonly page:Page;
    readonly whoWeServeMenu: Locator;
    readonly financialServicesOption: Locator;

    //constructors
    constructor (page: Page) {
        this.page = page;
        this.whoWeServeMenu = page.getByRole('link', { name: 'Who We Serve ' });
        this.financialServicesOption = page.getByRole('link', { name: 'Financial Services' });
    }

    //methods
    async hoverOnMenu () {
        await this.whoWeServeMenu.hover();
        return this;
    }

    async clickFinancialServicesOption () {
        await this.financialServicesOption.click();
        return new FinancialServicesPage(this.page);
    }
    
}

export default Menu