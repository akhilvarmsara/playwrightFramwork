import { Page, Locator } from '@playwright/test'

export class LoginPage {

    //Variables
    private readonly page: Page;
    private readonly Loginlink: Locator;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;


    //Constructor
    constructor(page: Page) {

        this.page = page;
        this.Loginlink = page.locator('#login2');
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.locator("[onclick='logIn()']");
    }


    //methods
    async clickLoginLink() {
        await this.Loginlink.click();
    }

    async enterUsername(username: string) {
        await this.usernameInput.clear();
        await this.usernameInput.fill(username)
    }

    async enterPassword(password: string) {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async performLogin(username: string, password: string) {
        await this.clickLoginLink();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}
