import {test, expect} from '@playwright/test';

test('File Uploads', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").focus();
    await page.locator("#singleFileInput").setInputFiles("test_samples/Rajyam_Divya_Resume11.pdf");
})