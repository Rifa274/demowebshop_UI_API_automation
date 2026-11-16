class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.termsCheckbox = page.locator('#termsofservice');
        this.checkoutButton = page.locator('#checkout');

        this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
        this.cityInput = page.locator('#BillingNewAddress_City');
        this.address1Input = page.locator('#BillingNewAddress_Address1');
        this.zipCodeInput = page.locator('#BillingNewAddress_ZipPostalCode');
        this.phoneInput = page.locator('#BillingNewAddress_PhoneNumber');
        this.billingContinueBtn = page.locator('#billing-buttons-container input[value="Continue"]');

        this.shippingContinueBtn = page.locator('#shipping-buttons-container input[value="Continue"]');

        this.shippingMethodContinueBtn = page.locator('#shipping-method-buttons-container input[value="Continue"]');

        this.paymentMethodContinueBtn = page.locator('#payment-method-buttons-container input[value="Continue"]');

        this.paymentInfoContinueBtn = page.locator('#payment-info-buttons-container input[value="Continue"]');

        this.confirmOrderBtn = page.locator('#confirm-order-buttons-container input[value="Confirm"]');

        this.orderSuccessTitle = page.locator('.section.order-completed .title');
        this.orderNumberText = page.locator('.section.order-completed .details li').first();
    }

    async proceedToCheckoutFromCart() {
        await this.termsCheckbox.check();
        await this.checkoutButton.click();
    }

    async fillBillingAddress(country, city, address, zip, phone) {
        await this.countryDropdown.selectOption({ label: country });
        await this.cityInput.fill(city);
        await this.address1Input.fill(address);
        await this.zipCodeInput.fill(zip);
        await this.phoneInput.fill(phone);
        await this.billingContinueBtn.click();
    }

    async completeShippingAndPaymentSteps() {
        await this.shippingContinueBtn.click();
        await this.shippingMethodContinueBtn.click();
        await this.paymentMethodContinueBtn.click();
        await this.paymentInfoContinueBtn.click();
    }

    async confirmOrder() {
        await this.confirmOrderBtn.click();
    }

    async getOrderSuccessMessage() {
        return await this.orderSuccessTitle.textContent();
    }
 feature/q3_checkout_flow
    async getOrderNumber() {
        const detailsText = await this.orderNumberText.textContent();
        return detailsText;
    }
  main
}

module.exports = CheckoutPage;