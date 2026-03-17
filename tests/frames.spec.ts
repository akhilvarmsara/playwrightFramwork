import {test, expect} from '@playwright/test';

test('Frames Test 1', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // We have two ways to handle frames
    // Approach 1: using the page.frame(), this will only accept the url or name of the frame. Without if block this won't work

    const frame=page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    if(frame)
    {
        frame.locator("input[name='mytext1']").fill('Akhil');
    }
})


test('Frames Test 2', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Approach 2: Using the page.frameLocator(), this will accept any frame attribute.
    const input=page.frameLocator("[src='frame_3.html']").locator("input[name='mytext3']");
    await input.fill("Varma");

})