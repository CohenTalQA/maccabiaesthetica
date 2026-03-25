import { Page, expect } from "@playwright/test";

export class BasePage {
  constructor(protected readonly page: Page) {}

  async navigate(path: string = "/"): Promise<void> {
    await this.page.goto(path);
  }

  async waitForUrl(path: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(path);
  }
}