// Use command to get the csv libary
// npm install csv-parse

import { test, expect } from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

const csv_path='testdata/testdata.csv';
const fileContent=fs.readFileSync(csv_path, 'utf-8');
const records=parse(fileContent,{columns:true,skip_empty_lines:true});

test.describe('Validate test for data driven', async () => {

    for (const data of records) {

        test(`Validate test for ${data.email}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login');
            await page.locator('[href="/login"]').click();
            await page.locator('#Email').fill(data.email);
            await page.locator('#Password').fill(data.password);
            await page.locator('[value="Log in"]').click();
            if (data.validity === 'Valid') {
                await expect(page.locator('.ico-logout')).toBeVisible();
            }
            else {
                expect(page.locator('.validation-summary-errors')).toContainText('Login was unsuccessful');
            }

        })
    }
})
