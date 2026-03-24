import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { RegisterPage } from '../pages/RegisterPage'
import { FakerData } from '../utils/fakergenerator'
import { TestConfig } from '../test.config'

// Initialize the variable at global level to access at other tests
let homepage: HomePage;
let registerPage: RegisterPage;
let password:any;

test.beforeEach('Navigate to Url', async ({ page }) => {

    // Get url from test.config.ts file and navigate to url
    const testconfig = new TestConfig();
    const url = testconfig.url;
    await page.goto(url);

    password = FakerData.getPassword();

    // Create object for HomePage
    homepage = new HomePage(page);
    // Create object for RegisterPage
    registerPage = new RegisterPage(page);
})

test('Complete Registration From',{tag:['@master', '@regression', '@sanity']}, async () => {

    await homepage.validatePageTitle();
    await homepage.registerLink();

    // We can directly use FakerData w/o creating object as they are static method. Static methods can be access directly with class name
    
    await registerPage.completeRegistrationForm(FakerData.getFirstName(), FakerData.getLastName(), FakerData.getEmail(), password, password);
    await registerPage.validateSuccessMessage()
})