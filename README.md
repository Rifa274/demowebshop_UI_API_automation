# Demo Web Shop UI & API Automation Testing

## Project Overview

This project contains UI automation tests for the Demo Web Shop website and API tests using Postman and Newman. The UI tests are written in JavaScript using Playwright and the Page Object Model (POM). They cover invalid login, customer registration, adding products to the cart, and completing the checkout process. The API tests use JSONPlaceholder to retrieve user information, store a user ID, and update user data. HTML and Allure reports are used to view test results.

## Website

- Demo Web Shop: https://demowebshop.tricentis.com/
- API: https://jsonplaceholder.typicode.com/users

## Technologies Used

- JavaScript
- Playwright
- Node.js
- Postman
- Newman
- Allure Report
- Git & GitHub
- Page Object Model (POM)

## Project Structure

```text
Module10_DemoWebShop_Automation/
│
├── pages/
│   ├── CheckoutPage.js
│   ├── LoginPage.js
│   └── RegisterPage.js
│
├── tests/
│   ├── q1_invalid_login.spec.js
│   ├── q2_register_and_cart.spec.js
│   └── q3_checkout_flow.spec.js
│
├── API_tests/
│   └── Module10_DemoWebShop_API_Tests.postman_collection.json
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## UI Automation Test Scenarios

### Q1: Invalid Login

- Attempt to log in using invalid credentials.
- Verify that the appropriate error message is displayed.
- Check that the user cannot log in successfully.

### Q2: Registration and Add to Cart

- Register a new customer.
- Log in to the website.
- Navigate to a product category.
- Select a product and add it to the cart.
- Verify the product and quantity in the cart.

### Q3: Search and Checkout

- Search for a product.
- Verify the search results.
- Open the product details page.
- Increase the product quantity.
- Add the product to the cart.
- Complete the checkout process.
- Verify the order confirmation details.

## Installation

Clone the repository:

```bash
git clone https://github.com/Rifa274/demowebshop_UI_API_automation.git
```

Go to the project folder:

```bash
cd demowebshop_UI_API_automation
```

Install dependencies:

```bash
npm install
```

Install Chromium:

```bash
npx playwright install chromium
```

## Running UI Tests

### Run All UI Tests

```bash
npx playwright test
```

### Run Q1: Invalid Login

```bash
npx playwright test tests/q1_invalid_login.spec.js
```

### Run Q2: Registration and Add to Cart

```bash
npx playwright test tests/q2_register_and_cart.spec.js
```

### Run Q3: Search and Checkout

```bash
npx playwright test tests/q3_checkout_flow.spec.js
```

### Run Tests with Browser Visible

```bash
npx playwright test --headed
```

## HTML Report

An HTML report is generated after each test execution.

To open the report:

```bash
npx playwright show-report
```

## Allure Report

Allure results are collected during test execution.

Generate the report:

```bash
npx allure generate allure-results --clean -o allure-report
```

Open the report:

```bash
npx allure open allure-report
```

## API Testing

The Postman collection is available inside the `API_tests` folder.

### API Test Scenarios

**1. GET All Users**

- Send a GET request to retrieve all users.
- Verify the status code is 200.
- Save the first user's ID as a collection variable.

**2. GET Single User**

- Retrieve a specific user using the saved user ID.

**3. Update User**

- Send a PUT request using the saved user ID.
- Use dynamic values for user information.
- Verify the status code is 200.
- Verify that the returned ID matches the saved ID.
- Verify that the phone field is not empty.
- Verify that the updated name matches the request.

## Running API Tests with Newman

Install Newman:

```bash
npm install -g newman
```

Run the collection:

```bash
newman run API_tests/Module10_DemoWebShop_API_Tests.postman_collection.json
```

## API Test Results

The collection was executed successfully using Newman.

- Total requests: 3
- Failed requests: 0
- Total assertions: 5
- Failed assertions: 0

## GitHub Workflow

Separate feature branches were created for each UI test scenario and merged into the main branch.

- `feature/q1_invalid_login`
- `feature/q2-register-and-cart`
- `feature/q3_checkout_flow`

The project includes commits for test implementation, configuration, and merging feature branches.

## Author

**Rifa Sanjida**

UI Automation & API Testing
