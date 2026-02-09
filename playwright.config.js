const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  workers: 1,
  fullyParallel: false,

  timeout: 30 * 1000,
  retries: 0,

  reporter: [
    ['line'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  projects: [
    {
      name: 'smoke',
      testMatch: /.*smoke.*\.spec\.js/,
      use: {
        baseURL: undefined,
        storageState: undefined,
      },
    },
  ],
});
