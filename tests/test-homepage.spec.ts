import { test, expect } from "../fixtures";

test("navigation_to_about", async ({ homePage, aboutPage }) => {
  await homePage.navigate();
  await homePage.goToAbout();
  await aboutPage.verifyLoaded();
});

test("navigation_to_contact", async ({ homePage, contactPage }) => {
  await homePage.navigate();
  await homePage.goToContact();
  await contactPage.verifyLoaded();
});

test("navigation_to_cart", async ({ homePage, cartPage }) => {
  await homePage.navigate();
  await homePage.goToCart();
  await cartPage.verifyLoaded();
});



test("navigation_to_store", async ({ homePage, storePage }) => {
  await homePage.navigate();
  await homePage.goToStore();
  await storePage.verifyLoaded();
});


test("user profile flow - login and validate profile", async ({ homePage, loginData, loginPage, profilePage }) => {
  test.setTimeout(240_000);
  await homePage.navigate();
  await homePage.goToLogin();
  await loginPage.login(loginData);
  await homePage.navigate();
  await homePage.goToProfile();
  await profilePage.verifyProfileDetails(loginData);
});

// Additional tests can be added here for other navigation flows, such as going to the store, adding items to the cart, etc.

test.only("navigation_to_store_and_add_item_to_cart", async ({ homePage, storePage }) => {
  await homePage.navigate();
  await homePage.goToStore();
  await storePage.verifyLoaded();
  await storePage.goToMoisturizer();
  await storePage.validatePrice();
  await storePage.addToCart();
});
