import {test,expect, Locator} from "@playwright/test"



test("Playwright builtin locators",async({page},Locator)=>{

    await   page.goto("https://www.nopcommerce.com/en");

    // page.getByAltText() to locate an element, usually image, by its text alternative.
    const   logo:Locator=page.getByAltText("nopCommerce");
    await   logo.click();
    expect(logo).toBeVisible;

    // page.getByText() to locate by text content. non interactive elements.
    // We can direct pass the locator in expect function as shown below
    await expect(page.getByText("Free and open-source eCommerce")).toBeVisible();

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    page.getByRole("link",{name:'Get started'}).click();

    // page.getByLabel() to locate a form control by associated label's text.
    await   page.goto("https://www.nopcommerce.com/en/register?returnUrl=%2Fen%2Fget-started");
    await   page.getByLabel("First name:").fill("Akhil");

    // page.getByPlaceholder() to locate an input by placeholder.
    await   page.getByPlaceholder("Last name:").fill("Akhil");

})