import { test, expect } from '@playwright/test';
import { testData } from '../Utils/testdata';
import { LoginPage } from '../Pages/LoginPage';

test('Valid Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(testData.username, testData.password);

  await expect(page).toHaveURL(/logged-in-successfully/);
});