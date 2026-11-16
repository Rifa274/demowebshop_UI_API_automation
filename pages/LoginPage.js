class LoginPage {
    constructor(page) {
        this.page = page;

        // locators
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.loginButton = page.locator('input.login-button');
        this.errorMessage = page.locator('span:has-text("Login was unsuccessful. Please correct the errors and try again.")');
        this.loginLink = page.getByRole('link', { name: 'Log in' });
    }
        //actions
    async gotoLoginPage() {
        await this.page.goto('/login');
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}

module.exports = LoginPage;