import {test, expect} from '@playwright/test'

// By default PW will dismiss the dialogs

test('Simple Dialog Accept', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    // this will register a dialog handler
    page.on('dialog',async (dialog)=>{
        await dialog.accept();
        expect(dialog.message()).toContain('alert box');  // validates the message on dialog
        expect(dialog.type()).toBe('alert');    // Validate the type of dialog
    })

    await page.locator('#alertBtn').click();
    await page.waitForTimeout(5000);
})

test('Confirm Dialog', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async(dialog)=>{
        await dialog.dismiss();
        expect(dialog.message()).toBe('Press a button!');
        expect(dialog.type()).toBe('confirm');
    })

    await page.locator('#confirmBtn').click();
    expect(await page.locator('#demo').textContent()).toBe('You pressed Cancel!');
})

test.only('prompt Dialog', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog)=>{
        expect(dialog.type()).toBe('prompt');
        await dialog.accept('Akhil');
    })

    await page.locator('#promptBtn').click();
    expect(await page.locator('#demo').textContent()).toBe('Hello Akhil! How are you today?');
})