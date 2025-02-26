export class DashboardPage {
    page: any;
    constructor(page) {
        this.page = page;

    }

    async gotoDashboardPage(): Promise<void> {
        await this.page.goto('https://admin-dashboard-azure-psi.vercel.app/');
        await this.page.locator('input[name="q"]').isVisible();
    }

    async searchProduct(productName: string): Promise<void> {
        await this.page.waitForSelector('input[name="q"]');
        await this.page.fill('input[name="q"]', productName);
        await this.page.keyboard.press('Enter');
        await this.page.locator('//button[normalize-space()="Next"]').isDisabled();
        await this.page.locator('//button[normalize-space()="Prev"]').isEnabled();
        await this.page.waitForURL('https://admin-dashboard-azure-psi.vercel.app/?q=Gaming+Laptop+Pro');
    }

    async getSearchResult(): Promise<string> {
        return await this.page.locator('tbody tr td:nth-child(2)').first().textContent();
    }
}
module.exports = { DashboardPage };