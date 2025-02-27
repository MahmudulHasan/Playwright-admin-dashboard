import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/dashboard/dashboardPage';
import productData from "../../data/products.json";

let dashboardPage: DashboardPage;

test.describe('Dashboard tests', () => {

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
  });

  test('Load Admin Dashboard page', async () => {
    await dashboardPage.gotoDashboardPage();
  });

  test('Search for a product', async () => {
    await dashboardPage.gotoDashboardPage();
    await dashboardPage.searchProduct(productData[0].name);
    expect(await dashboardPage.getSearchResult()).toBe(productData[0].name);
  });

  for(const product of productData) {
    test(`Verify ${product.name}'s data in the table`, async () => {
      await dashboardPage.gotoDashboardPage();
      await dashboardPage.verifyProductData(product);
    });
  }
});