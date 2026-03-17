import  {test, expect, chromium}  from    "@playwright/test";
import { log } from "node:console";
import { describe } from "node:test";

describe("Lunch", ()=>{

    test("Lunch browser", async()=>{

        const browser=await chromium.launch();
        await browser.newContext();
    })

})

test("Verify page title",async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    let title: string=await page.title()
    console.log("Title is: ",title)

    await expect(page).toHaveTitle("Practice Page");

})