const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Q1: Invalid Login - Verify error message and user is not logged in', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login('abc@test.com', '121212');

    await expect(loginPage.errorMessage).toBeVisible();
    
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Login was unsuccessful');

    await expect(loginPage.loginLink).toBeVisible();
});