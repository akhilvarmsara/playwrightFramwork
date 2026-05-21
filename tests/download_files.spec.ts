import {test, expect} from '@playwright/test';

test('Download files', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
    await page.locator('#generateTxt').first().click()

    const [download]=await Promise.all([page.waitForEvent('download'), page.locator("#txtDownloadLink").first().click()])

    const downloadPath="downloads/file.txt";
    await download.saveAs(downloadPath)
    


})