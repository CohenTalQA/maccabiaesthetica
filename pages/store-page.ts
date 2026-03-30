import { expect } from "@playwright/test";
import { BasePage } from "./base-page";


export class StorePage extends BasePage {
    private readonly ourStore = this.page.getByText('החנות שלנו');
    private readonly moisturizerLink = this.page.getByRole("link", { name: "קרם לחות והזנה" });
    private readonly firstProductImage = this.page.locator('.card-img').first();
    private readonly addToCartLink = this.page.getByRole('link', { name: 'הוספה לסל' }).first();

    async verifyLoaded(): Promise<void> {
        await expect(this.ourStore).toBeVisible();
    }

// כניסה לקטגוריה קרם לחות והזנה 
    
     async goToMoisturizer(): Promise<void> {
        await this.moisturizerLink.click();
    }
   // check if the value contain numbers await this.page.getByText('279.30 ₪').click();

    async validatePrice(): Promise<void> {
        const priceText = await this.page.getByText('279.30 ₪').textContent();
        const priceMatch = priceText?.match(/[\d,.]+/);
        const priceValue = priceMatch ? parseFloat(priceMatch[0].replace(/,/g, '')) : null;
        expect(priceValue).toBe(279.30);
    }

    // הוספה לסל
    async addToCart(): Promise<void> {
        await this.firstProductImage.hover();
        await this.addToCartLink.click();
        await this.page.waitForTimeout(1000);
    }

    
}