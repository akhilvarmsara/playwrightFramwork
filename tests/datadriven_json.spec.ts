import { test, expect } from '@playwright/test';
import fs from 'fs';

const filepath='testdata/testdata.json'
const jsondata:any=JSON.parse(fs.readFileSync(filepath, 'utf-8'))

test.describe('Validate test for data driven', async () => {

    for (const {email, password, validity} of jsondata) {

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
    }
})
