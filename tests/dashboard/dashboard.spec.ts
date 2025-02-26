import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../pages/dashboard/dashboardPage';

let dashboardPage: DashboardPage;

test.describe('Dashboard tests', () => {

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
  });

  test('Load Admin Dashboard page', async ({ page }) => {
    await dashboardPage.gotoDashboardPage();
  });

  test('Search for a product', async ({ page }) => {
    await dashboardPage.gotoDashboardPage();
    await dashboardPage.searchProduct('Gaming Laptop Pro');
    expect(await dashboardPage.getSearchResult()).toBe('Gaming Laptop Pro');
  });
});