import { Locator } from "@playwright/test";

export class DashboardPage {
    page: any;
    url: string;
    searchBoxLocator: Locator;
    keyboardPressEnter: string;
    nextButtonLocator: Locator;
    prevButtonLocator: Locator;
    searchProductUrl: string;
    searchResultLocator: Locator;
    constructor(page) {
        this.page = page;
        this.url = 'https://admin-dashboard-azure-psi.vercel.app/';
        this.searchBoxLocator = this.page.locator('input[name="q"]');
        this.keyboardPressEnter = 'Enter';
        this.nextButtonLocator = this.page.locator('//button[normalize-space()="Next"]');
        this.prevButtonLocator = this.page.locator('//button[normalize-space()="Prev"]');
        this.searchProductUrl = 'https://admin-dashboard-azure-psi.vercel.app/?q=Gaming+Laptop+Pro';
        this.searchResultLocator = this.page.locator('tbody tr td:nth-child(2)');
    }

    async gotoDashboardPage(): Promise<void> {
        await this.page.goto(this.url);
        await this.searchBoxLocator.isVisible();
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchBoxLocator.fill(productName);
        await this.page.keyboard.press(this.keyboardPressEnter);
        await this.nextButtonLocator.isDisabled();
        await this.prevButtonLocator.isEnabled();
        await this.page.waitForURL(this.searchProductUrl);
    }

    async getSearchResult(): Promise<string> {
        console.log(await this.searchResultLocator.textContent());
        return (await this.searchResultLocator.textContent()) || '';
    }
}
module.exports = { DashboardPage };