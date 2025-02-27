import { expect, Locator, Page } from "@playwright/test";

export class DashboardPage {
    page: Page;
    url: string;
    searchBoxLocator: Locator;
    keyboardPressEnter: string;
    nextButtonLocator: Locator;
    prevButtonLocator: Locator;
    searchProductUrl: string;
    productNameLocator: Locator;
    productStatusLocator: Locator;
    productPriceLocator: Locator;
    productSalesLocator: Locator;
    productCreatedLocator: Locator;
    constructor(page:Page) {
        this.page = page;
        this.url = 'https://admin-dashboard-azure-psi.vercel.app/';
        this.searchBoxLocator = this.page.locator('input[name="q"]');
        this.keyboardPressEnter = 'Enter';
        this.nextButtonLocator = this.page.locator('//button[normalize-space()="Next"]');
        this.prevButtonLocator = this.page.locator('//button[normalize-space()="Prev"]');
        this.searchProductUrl = 'https://admin-dashboard-azure-psi.vercel.app/?q=';
        this.productNameLocator = this.page.locator('tbody tr td:nth-child(2)');
        this.productStatusLocator = this.page.locator('tbody tr td:nth-child(3) div');
        this.productPriceLocator = this.page.locator('tbody tr td:nth-child(4)');
        this.productSalesLocator = this.page.locator('tbody tr td:nth-child(5)');
        this.productCreatedLocator = this.page.locator('tbody tr td:nth-child(6)');
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
        await this.page.waitForURL(this.searchProductUrl+productName.split(' ').join('+'));
    }

    async getSearchResult(): Promise<string> {
        return (await this.productNameLocator.textContent()) || '';
    }

    async verifyProductData(product: any): Promise<void> {
        await this.searchProduct(product.name);
        expect(await this.productNameLocator.textContent()).toBe(product.name);
        expect(await this.productStatusLocator.textContent()).toBe(product.status);
        expect(await this.productPriceLocator.textContent()).toBe("$"+product.price);
        expect(await this.productSalesLocator.textContent()).toBe(product.sales.toString());
        expect(await this.productCreatedLocator.textContent()).toBe(product.createdAt);
    }
}
module.exports = { DashboardPage };