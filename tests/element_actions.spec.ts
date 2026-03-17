import {test,expect, Locator} from "@playwright/test"

test("Input Actions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const input_name:Locator=page.locator("#name");

    // Validate the element is visible
    await expect(input_name).toBeVisible();

    // Validate the element is enabled
    await expect(input_name).toBeEnabled();

    // To get the attribut value
    const   maxLenght:String | null =await input_name.getAttribute("maxlength");
    expect(maxLenght).toBe("15");

    // Enter Value in input box
    await input_name.fill("Akhil");

})

test("Radio Button actions", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const radioButton:Locator= page.locator("#male");

    // Validate radioButton is visible or enabled
    expect(radioButton).toBeVisible();
    expect(radioButton).toBeEnabled();

    // Validate radioButton is checked or not
    const status:Boolean=await radioButton.isChecked();
    expect(status).toBe(false);

    // this is alternate way
    expect(await radioButton.isChecked()).toBe(false);

    // Select radio button
    await radioButton.check();
    // uncheck is not working for radio button
    //  radioButton.uncheck(); 
    expect(await radioButton.isChecked()).toBe(true);

    //best practice
    await expect(radioButton).toBeChecked();

})

test.only("Checkbox Actions",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const saturdaycheckbox:Locator=page.getByLabel("Saturday");
    
    // Select checkbox
    // await saturdaycheckbox.check();

    //Verify checkbox is checked
    // await expect(saturdaycheckbox).toBeChecked();

    // Select all checkboxes
    const days:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkboxes:Locator[]= days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);

    for(const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(3000);

    // Uncheck specific checkboxes - unchecks the last 3 checkboxes
    for(const checkbox of checkboxes.slice(-3)) {
        await checkbox.uncheck();
        expect(checkbox).not.toBeChecked;
    }
    await page.waitForTimeout(3000);

    // uncheck the select checkboxes and check the unchecked boxes
    for(const checkbox of checkboxes){
        if(await checkbox.isChecked())
        {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else
        {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(3000);
    
})