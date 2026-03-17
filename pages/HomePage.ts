import {Page, Locator, expect} from '@playwright/test'
import { log } from 'node:console';

export class HomePage{

    // Variables
    private readonly page:Page;
    private readonly registerlink:Locator;

    //Constructor
    constructor(page:Page)
    {
        this.page=page;
        this.registerlink=page.locator('.ico-register');
    }

    //methods
    async validatePageTitle(){
        const titlePage=await this.page.title();
        console.log(titlePage)
        expect(titlePage).toBe('Demo Web Shop')
    }

    async registerLink(){
        await this.registerlink.click();
    }

}