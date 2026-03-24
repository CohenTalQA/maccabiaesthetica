import { Page, expect } from "@playwright/test";

export class ContactPage {
  private readonly page: Page;
  private readonly header;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: "צרו קשר" });
  }

  async verifyLoaded(): Promise<void> {
    await expect(this.header).toBeVisible();
  }
}
