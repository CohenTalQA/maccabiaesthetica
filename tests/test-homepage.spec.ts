import { test, expect } from "../fixtures";


test("navigation_to_about", async ({ homePage, aboutPage }) => {


  await homePage.goToAbout();
  await aboutPage.verifyLoaded();
});

test("navigation_to_contact", async ({ homePage, contactPage }) => {
  await homePage.goToContact();
  await contactPage.verifyLoaded();
});

test("login_account_success", async ({ homePage, loginData, loginPage }) => {
  await homePage.navigate();

  await homePage.goToLogin();

  await loginPage.login(loginData);
});
