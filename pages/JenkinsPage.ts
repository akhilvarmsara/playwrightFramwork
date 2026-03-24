import { Page, Locator } from "@playwright/test";

export class JenkinsPage{
    //variables
    private readonly page:Page;
    private readonly username_field:Locator;
    private readonly password_field:Locator;
    private readonly login_button:Locator;
    private readonly job_name:Locator;
    private readonly build_parameters:Locator;
    private readonly build_button:Locator;

    //constructor
    constructor(page:Page){
        this.page=page;
        this.username_field=page.locator('#j_username');
        this.password_field=page.locator('#j_password');
        this.login_button=page.locator('[name="Submit"]');
        this.job_name=page.locator('[href="job/playwright-pipeline/"]');
        this.build_parameters=page.getByText('Build with Parameters');
        this.build_button=page.locator('[class="jenkins-button jenkins-button--primary jenkins-!-build-color"]');
    }

    //methods
    async loginToJekins(username:string, password:string){
        await this.username_field.fill(username);
        await this.password_field.fill(password);
        await this.login_button.click();
    }

    async runJob(){
        await this.job_name.first().click();
        await this.build_parameters.click();
        await this.build_button.click();
    }
}