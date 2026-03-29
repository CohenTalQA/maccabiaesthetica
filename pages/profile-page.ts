import { Page, expect } from "@playwright/test";


export class ProfilePage {
  constructor(private page: Page) {}

  private getValueByLabel(label: string) {
  return this.page
    .locator('li', { has: this.page.getByText(label) })
    .locator('div')
    .nth(1);
}

  private get userName() {
    return this.getValueByLabel('שם פרטי');
  }

private get userLastName() {
  return this.getValueByLabel('שם משפחה');
}

private get idNumber() {
  return this.getValueByLabel('ת.ז.');
}

private get phoneNumber() {
  return this.getValueByLabel('טלפון');
}

  async verifyProfileDetails(data: {
    firstName: string;
    lastName: string;
    idNumber: string;
    phoneNumber: string;
  }) {
    
    await this.page.pause();
    await expect(this.userName).toHaveText(data.firstName);
    await expect(this.userLastName).toHaveText(data.lastName);
    await expect(this.idNumber).toHaveText(data.idNumber);
    await expect(this.phoneNumber).toHaveText(data.phoneNumber);
  }
}