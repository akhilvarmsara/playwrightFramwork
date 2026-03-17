import { Page,Locator, expect } from "@playwright/test";

export class LoginPage{

    //variable
    private readonly page:Page;
    private readonly loginLink:Locator;
    private readonly usernameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator
    private readonly validateAccountEmail:Locator;

    //constructor
    constructor(page:Page){
        this.page=page;
        this.loginLink=page.locator('.ico-login');
        this.usernameInput=page.locator('#Email');
        this.passwordInput=page.locator('#Password');
        this.loginButton=page.locator("[value='Log in']");
        this.validateAccountEmail=page.locator("[href='/customer/info']").first();
    }

    //methods
    async validateLoginLink(){
       const status:any= await this.loginLink.isVisible();
       expect(status).toBe(true);
    }

    async clickLoginLink(){
        await this.loginLink.click();
    }

    async enterUsername(username:string){
        await this.usernameInput.fill(username);
    }

    async enterPassword(password:string){
        await this.passwordInput.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async loginToAccount(username:string, password:string){
        await this.clickLoginLink();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
        
    }

    async validateAccountEmailId(emailvalue:string){
        const email=await this.validateAccountEmail.innerText();
        expect(email).toContain(emailvalue)
    }
}