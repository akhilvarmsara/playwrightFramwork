import { Page, Locator, expect} from "@playwright/test";

export class RegisterPage{

    private readonly page:Page;
    private readonly genderMaleRadioButton:Locator;
    private readonly firstName:Locator;
    private readonly lastName:Locator;
    private readonly email:Locator;
    private readonly password:Locator;
    private readonly confirmPassword:Locator;
    private readonly registerButton:Locator;
    private readonly successMsg:Locator;

    constructor(page:Page){
        this.page=page;
        this.genderMaleRadioButton=page.locator("#gender-male");
        this.firstName=page.locator('#FirstName');
        this.lastName=page.locator('#LastName')
        this.email=page.locator('#Email');
        this.password=page.locator('#Password');
        this.confirmPassword=page.locator('#ConfirmPassword');
        this.registerButton=page.locator("[name='register-button']");
        this.successMsg=page.locator('.result').first();
    }

    async completeRegistrationForm(firstNameValue:string, lastNameValue:string, emailValue:string, passwordValue:string, confirmpasswordValue:string){
        await this.genderMaleRadioButton.check();
        await this.firstName.fill(firstNameValue);
        await this.lastName.fill(lastNameValue);
        await this.email.fill(emailValue);
        await this.password.fill(passwordValue);
        await this.confirmPassword.fill(confirmpasswordValue)
        await this.registerButton.click();
    }

    async validateSuccessMessage(){
        const actualValue=await this.successMsg.textContent();
        console.log(actualValue)
        expect(actualValue).toContain('Your registration completed')
    }
}

