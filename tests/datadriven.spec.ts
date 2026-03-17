import { test, expect } from '@playwright/test';

const testdataset: string[][] = [["laura.taylor1234@example.com", "test123", "Valid"],
["laura.taylor12345@example.com", "test", "invalid"]]


for (const [email, password, validity] of testdataset) {
    test.describe('Validate test for data driven', async () => {
        test(`Validate test for ${email}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login');
            await page.locator('[href="/login"]').click();
            await page.locator('#Email').fill(email);
            await page.locator('#Password').fill(password);
            await page.locator('[value="Log in"]').click();
            if (validity === 'Valid') {
                await expect(page.locator('.ico-logout')).toBeVisible();
            }
            else {
                expect(page.locator('.validation-summary-errors')).toContainText('Login was unsuccessful');
            }

        })
    })
}