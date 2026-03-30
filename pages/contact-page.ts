import { expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class ContactPage extends BasePage {
  private readonly header = this.page.getByRole("heading", { name: "צרו קשר" });

  async verifyLoaded(): Promise<void> {
    await expect(this.header).toBeVisible();
  }
}
