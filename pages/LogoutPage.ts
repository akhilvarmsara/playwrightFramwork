import {Page, Locator} from '@playwright/test';

export class LogoutPage{
    // Variables
    private readonly page:Page;
    private readonly logoutLink:Locator;

    //constructor
    constructor(page:Page){
        this.page=page;
        this.logoutLink=page.locator('[class="ico-logout"]');
    }

    //method
    async clickLogoutLink(){
        await this.logoutLink.click();
    }
}