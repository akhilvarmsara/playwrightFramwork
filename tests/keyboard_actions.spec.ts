import {test, expect} from '@playwright/test'

test('Keyboard Click', async({page})=>{

    await page.goto("https://www.google.com/");
    await page.getByLabel('Search').first().click();
    await page.getByLabel('Search').first().fill('Akhil Varma');
    await page.waitForTimeout(5000);
    await page.getByLabel('Search').first().press('Control+A');
    await page.waitForTimeout(5000);
    await page.getByLabel('Search').first().press('Enter');
    await page.waitForTimeout(5000);

})