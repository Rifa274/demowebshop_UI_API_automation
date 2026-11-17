// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  
  fullyParallel: false,
  workers: 1,
  retries: 0,
  
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],
  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    
    screenshot: 'on',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});