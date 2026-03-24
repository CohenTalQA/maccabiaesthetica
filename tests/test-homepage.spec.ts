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
  await homePage.goToLogin()
  await loginPage.fillCredentials(loginData);
  await loginPage.requestOtp();
  await loginPage.waitForOtpValue();
  await loginPage.submitLogin();
  await loginPage.verifyLoginSuccess(loginData);
});
