import {Page, expect, Locator} from '@playwright/test'

export class FaceBookPage{

    //variables
    private readonly page:Page;
    private readonly create_new_account_button:Locator;
    private readonly first_name_input:Locator;
    private readonly last_name_input:Locator;

    //constructor
    constructor(page:Page){
        this.page=page;
        this.create_new_account_button=page.getByText('Create new account').first();
        this.first_name_input=page.getByText('First name').first();
        this.last_name_input=page.getByText('Surname').first();
    }

    //methods
    async clickCreateNewAccountButton(){
        await this.create_new_account_button.click();
    }

    async fillRegistrationForm(firstname:string, lastname:string){
        await this.first_name_input.fill(firstname);
        await this.last_name_input.fill(lastname);
    }
    
}