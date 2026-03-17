import{test, expect} from '@playwright/test'

// Approach 1
test('@smoke Test 1', async()=>{


})

// Approach 2
test('Test 2', {tag:'@sanity'}, async({page})=>{
        await page.goto('https://www.google.com/');
        await page.locator('textarea[id="APjFqb"]').first().fill('Playwright Automation');
        await page.locator('textarea[id="APjFqb"]').first().press('Enter')
        await expect(page.getByText('Short videos')).toHaveText('Short videos')
})

// Approach 3
test('Test 3', {tag:['@smoke', '@regression', '@sanity']}, async()=>{

    
})