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

test.only("user profile flow - login and validate profile", async ({ homePage, loginData, loginPage, profilePage }) => {
  await homePage.navigate();
  await homePage.goToLogin();
  await loginPage.login(loginData);
  await homePage.goToProfile();
  await profilePage.verifyProfileDetails(loginData);
});
