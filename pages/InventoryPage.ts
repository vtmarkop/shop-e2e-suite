import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  }

  async addItemToCart(itemName: string) {
    // Dynamic locator based on item name (Advanced technique)
    const itemLocator = this.page.locator(`[data-test="add-to-cart-${itemName}"]`);
    await itemLocator.click();
  }
}
