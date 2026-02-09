const { test, expect } = require('@playwright/test');

test('smoke – proyecto vivo', async () => {
  expect(1 + 1).toBe(2);
});
