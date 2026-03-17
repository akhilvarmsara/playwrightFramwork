import {test, expect} from '@playwright/test'

test('Screenshots test', async({page})=>{

    await page.goto("https://www.youtube.com/");

    // Element screenshot
    await page.locator('#primary').first().screenshot({path:'./screenshots/elementscreenshot.png'});

    //Page Screenshot
    await page.screenshot({path: './screenshots/pagescreenshot.png'})

    //Full page screenshot
    await page.screenshot({path: './screenshots/fullpagescreenshot.png', fullPage:true});


})