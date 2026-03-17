import  {test,expect}   from    "@playwright/test";

test("Verify page url",async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    let url:string=await page.url();
    console.log("Page url: ", url)
    await expect(page).toHaveURL(/AutomationPractice/);

})