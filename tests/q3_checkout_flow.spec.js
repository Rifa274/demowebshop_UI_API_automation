const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Q3: Product Search, Quantity Increase, E2E Checkout and Order Verification', async ({ page }) => {
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

    
    const searchQuery = '14.1-inch Laptop';
    await page.fill('#small-searchterms', searchQuery);
    await page.click('input.search-box-button');

    
    await page.click('.product-item .product-title a');
    await page.waitForSelector('input.qty-input');

    
    const qtyInput = page.locator('input.qty-input');
    await qtyInput.clear();
    await qtyInput.fill('2');

    
    await page.click('input[value="Add to cart"]');
    await page.waitForSelector('.bar-notification.success', { state: 'visible' });

    
    await page.click('#topcartlink .ico-cart');
    await checkoutPage.proceedToCheckoutFromCart();
    await checkoutPage.fillBillingAddress('United States', 'Dhaka', '123 Test Street', '1200', '01711111111');

   
    await checkoutPage.completeShippingAndPaymentSteps();

   
    await checkoutPage.confirmOrder();

    const successTitle = await checkoutPage.getOrderSuccessMessage();
    expect(successTitle).toContain('Your order has been successfully processed!');

    const orderNumber = await checkoutPage.getOrderNumber();
    console.log(`Order Placed Successfully! ${orderNumber}`);
    expect(orderNumber).toContain('Order number');
});