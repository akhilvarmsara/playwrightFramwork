import {test, expect} from '@playwright/test'

test('Keyboard Click', async({page})=>{

    //with page element keyboard actions
    await page.goto("https://www.google.com/");
    await page.getByLabel('Search').first().click();
    await page.getByLabel('Search').first().fill('Akhil Varma');
    await page.waitForTimeout(5000);
    await page.getByLabel('Search').first().press('Control+A');
    await page.waitForTimeout(5000);
    await page.getByLabel('Search').first().press('Enter');
    await page.waitForTimeout(5000);

    //direct keyword actions
    await page.keyboard.press('Control');
    await page.keyboard.press('A');

    await page.keyboard.press('Control+A');

})