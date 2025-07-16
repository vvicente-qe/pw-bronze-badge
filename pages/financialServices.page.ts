import { type Locator, type Page } from "@playwright/test";
import GetStartedPage from "./getStarted.page";

export class FinancialServicesPage {
    //variables
    readonly page:Page;
    readonly letsTalkButton: Locator;

    //constructors
    constructor (page: Page) {
        this.page = page;
        this.letsTalkButton = page.locator('section').filter({ hasText: 'How 3Cloud' }).getByRole('link');
    }

    //methods

    async clickLetsTalkButtonAndWaitForPopup(): Promise<GetStartedPage> {
        const [newTab] = await Promise.all([this.page.context().waitForEvent('page'),
            this.letsTalkButton.click()
        ]);

        await newTab.waitForLoadState();
        return new GetStartedPage(newTab);
    }
    
}

export default FinancialServicesPage