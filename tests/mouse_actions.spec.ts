import {test, expect} from '@playwright/test'

test('Left Click', async({page})=>{

    await page.goto("https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM");
    await page.getByRole('link', {name:'#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial'}).click({button:'left'});
    await page.waitForTimeout(5000);

})

test('Right Click', async({page})=>{

    await page.goto("https://www.youtube.com/playlist?list=PLUeDIlio4THEgPRVJRqZRS8uw8hhVNQCM");
    await page.getByRole('link', {name:'#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial'}).click({button:'right'});
    await page.waitForTimeout(5000);

})

test('Double Click', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame1=page.frameLocator("[src='frame_3.html']")
    const frame2=frame1.frameLocator("[src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']");
    frame2.getByText('Form Filling Demo Page').dblclick()
    await page.waitForTimeout(5000);

})


test.only('Mouse Hover', async({page})=>{

    await page.goto("https://www.google.com/");
    await page.getByLabel('Search by voice').hover();
    await page.waitForTimeout(5000);
})