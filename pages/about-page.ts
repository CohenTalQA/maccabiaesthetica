import { Page, expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class AboutPage extends BasePage {
  private readonly header = this.page.getByText("בית / אודות");

  async verifyLoaded(): Promise<void> {
    await this.waitForUrl(/\/about/);
    await expect(this.header).toBeVisible();
  }
}
