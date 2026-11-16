const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Q3: Complete checkout flow and order placement', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);
    const checkoutPage = new CheckoutPage(page);

   
    const randomEmail = `testuser_${Date.now()}@test.com`;
    const password = 'Password123';

   
    await registerPage.gotoRegisterPage();
    await registerPage.registerUser('Rifa', 'Tasnia', randomEmail, password);
    expect(await registerPage.getSuccessMessage()).toContain('Your registration completed');

    
    const logoutLink = page.getByRole('link', { name: 'Log out' });
    if (await logoutLink.isVisible()) {
        await logoutLink.click();
    }

    await loginPage.gotoLoginPage();
    await loginPage.login(randomEmail, password);

    
    await page.locator('ul.top-menu').getByRole('link', { name: 'Books', exact: true }).click();
    
    
    await page.click('.product-item:first-child .product-title a');
    await page.click('input[value="Add to cart"]');

    
    await page.click('#topcartlink .ico-cart');
    await checkoutPage.proceedToCheckoutFromCart();

   
    await checkoutPage.fillBillingAddress('Bangladesh', 'Dhaka', 'Road-29', '1200', '01711111111');

    
    await checkoutPage.completeShippingAndPaymentSteps();

    
    await checkoutPage.confirmOrder();

    
    const successTitle = await checkoutPage.getOrderSuccessMessage();
    expect(successTitle).toContain('Your order has been successfully processed!');
});