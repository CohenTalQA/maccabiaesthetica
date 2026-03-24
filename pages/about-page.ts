import { Page, expect } from "@playwright/test";

export class AboutPage {
  private readonly page: Page;
  private readonly header;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByText("בית / אודות");
  }

  async verifyLoaded(): Promise<void> {
    expect(this.page.url()).toContain("/about");
    await expect(this.header).toBeVisible();
  }
}
