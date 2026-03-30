import { expect } from "@playwright/test";
import { BasePage } from "./base-page";


export class CartPage extends BasePage {
  private readonly header = this.page.getByRole("heading", { name: "עגלת קניות" });

    async verifyLoaded(): Promise<void> {
    await expect(this.header).toBeVisible();
  }
}
