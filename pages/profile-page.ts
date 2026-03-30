import { expect } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProfilePage extends BasePage {
  private getValueByLabel(label: string) {
    return this.page
      .locator("li", { has: this.page.getByText(label) })
      .locator("div")
      .nth(1);
  }

  private get userName() {
    return this.getValueByLabel("שם פרטי");
  }

  private get userLastName() {
    return this.getValueByLabel("שם משפחה");
  }

  private get idNumber() {
    return this.getValueByLabel("ת.ז.");
  }

  private get phoneNumber() {
    return this.getValueByLabel("טלפון");
  }

  async verifyProfileDetails(data: {
    firstName: string;
    lastName: string;
    idNumber: string;
    phoneNumber: string;
  }): Promise<void> {
    await expect.soft(this.userName, `שם פרטי: צפוי "${data.firstName}"`).toHaveText(data.firstName);
    await expect.soft(this.userLastName, `שם משפחה: צפוי "${data.lastName}"`).toHaveText(data.lastName);
    await expect.soft(this.idNumber, `ת.ז.: צפוי "${data.idNumber}"`).toHaveText(data.idNumber);
    await expect.soft(this.phoneNumber, `טלפון: צפוי "${data.phoneNumber}"`).toHaveText(data.phoneNumber);
  }
}
