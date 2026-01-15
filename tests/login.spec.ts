import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('eCommerce Critical Paths', () => {
  
  test('Successful Login and Verification', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    // Assertion: Verify we are on the inventory page
    await expect(inventoryPage.pageTitle).toHaveText('Products');
  });

  test('Locked Out User Validation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    // Assertion: Check error message
    await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out.');
  });
});
