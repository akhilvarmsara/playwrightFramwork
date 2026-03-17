import {test, expect} from '@playwright/test'

test('Single Select dropdown', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Select option from drop down (4ways)
    await page.locator('#country').selectOption('India')  // select by visible text
    await page.locator('#country').selectOption({value:'canada'})  //select by value attribute in dom
    await page.locator('#country').selectOption('India')  // select by label
    await page.locator('#country').selectOption({index:5})

    await page.waitForTimeout(5000);
})