class RegisterPage {
    constructor(page) {
        this.page = page;

        this.genderFemale = page.locator('#gender-female'); 
        this.firstNameInput = page.locator('#FirstName');
        this.lastNameInput = page.locator('#LastName');
        this.emailInput = page.locator('#Email');
        this.passwordInput = page.locator('#Password');
        this.confirmPasswordInput = page.locator('#ConfirmPassword');
        this.registerButton = page.locator('#register-button');
        
        this.successMessage = page.locator('.result');
        this.continueButton = page.locator('input.register-continue-button');
    }

    async gotoRegisterPage() {
        await this.page.goto('/register');
    }

    async registerUser(firstName, lastName, email, password) {
        await this.genderFemale.click(); 
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.registerButton.click();
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent();
    }
}

module.exports = RegisterPage;