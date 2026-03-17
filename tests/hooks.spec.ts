import {test, expect, Locator} from '@playwright/test'


test.beforeAll('beforeAll Test', async()=>{
    console.log("This is before all test........")
})

test.beforeEach('beforeEach Test', async({page})=>{
    console.log("This is before each test........")
    await page.goto('https://demoapps.qspiders.com/');
})

test.afterAll('This is after all test', async()=>{
    console.log("This is after all test.........")
})

test.afterEach('This is after each test', async()=>{
    console.log("This is after each test.........")
})

test('test1', async({page})=>{
    console.log("This is test1.........");
    // await page.goto('https://demoapps.qspiders.com/');
    const ele:Locator=page.getByText('Learn every testing');
    await expect(ele).toBeVisible();
})

test('test2', async({page})=>{
    console.log("This is test2.........")
    // await page.goto('https://demoapps.qspiders.com/');
    await expect(page.locator('#optionsBody')).toBeVisible();
})