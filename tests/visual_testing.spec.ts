import {test, expect} from '@playwright/test';

test('Visual Testing', async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    expect(await page.screenshot()).toMatchSnapshot("home_page.png");

})