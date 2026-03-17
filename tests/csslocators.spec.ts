// CSS = Cascading Style Sheets
// .className	element with class
// #idName	element with id
// button.primary	button with class primary
// div > span	direct child
// [type="submit"]	attribute selector

import {expect, Locator, test} from "@playwright/test"

test("Css locator test",async ({page})=>{

    // tag#idName here tag is optional
    await page.goto("https://demowebshop.tricentis.com/");
    let inputbox:Locator=page.locator("input#small-searchterms");
    // let inputbox:Locator=page.locator("#small-searchterms");   tag is optional
    await expect(inputbox).toBeVisible();
    await inputbox.fill("T-shirts");
    

    // tag.className here tag is optional
    // await page.locator(".search-box-button").click();   tag is optional
    await page.locator("input.search-box-button").click();


    //tag with any attribut here tag is optional
    // ex: tag[attribute=value]
    // await page.locator("[value='Search store']").fill("Jackets");   tag is optional
    await page.locator("input[value='Search store']").fill("Jackets");

    //tag with two attributes, for filerting the elements   here tag is optional
    await page.locator("input[value='Search store']#small-searchterms").fill("Jeans");

})