import { test as baseTest } from '@playwright/test';
import Menu from '../pages/menu';
import FinancialServicesPage from '../pages/financialServices.page';

type MyPages = {
    menu: Menu;
    financialServicesPage: FinancialServicesPage;
}

export const test = baseTest.extend<MyPages>({
    menu: async ({ page }, use) => {
        await use(new Menu(page));
    },

    financialServicesPage: async ({ page }, use) => {
        await use(new FinancialServicesPage(page));
    }
});

export { expect } from '@playwright/test';