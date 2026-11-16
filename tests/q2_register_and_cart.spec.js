const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');

test('Q2: Register new user, login, add product to cart and verify quantity', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

    
    const randomEmail = `testuser_${Date.now()}@test.com`;
    const password = 'Password123';

    
    await registerPage.gotoRegisterPage();
    await registerPage.registerUser('Rifa', 'Tasnia', randomEmail, password);

    
    const successMsg = await registerPage.getSuccessMessage();
    expect(successMsg).toContain('Your registration completed');

   
    const logoutLink = page.getByRole('link', { name: 'Log out' });
    if (await logoutLink.isVisible()) {
        await logoutLink.click();
    }

    
    await loginPage.gotoLoginPage();
    await loginPage.login(randomEmail, password);

    
    await page.locator('ul.top-menu').getByRole('link', { name: 'Computers', exact: true }).hover();
    await page.getByRole('list').getByRole('link', { name: 'Desktops' }).first().click();

    
    await page.click('.product-item:first-child .product-title a');
    await page.click('input[value="Add to cart"]');

    
    await page.click('#topcartlink .ico-cart');
    const cartQuantityInput = page.locator('.cart-item-row .qty-input');
    await expect(cartQuantityInput).toHaveValue('1');
});