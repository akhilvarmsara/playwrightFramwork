import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { TestConfig } from '../test.config';

// Initialize the variable at global level to access at other tests
let loginpage:LoginPage;
let testconfig:TestConfig;
let username:any;
let password:any;

test.beforeEach('Before Test', async({page})=>{
    // Get url from test.config.ts file and navigate to url
    testconfig= new TestConfig();
    const url= testconfig.url;
    await page.goto(url);
    
    // Get values from testconfig file
    username= testconfig.username;
    password= testconfig.password;

    // create object for loginpage
    loginpage=new LoginPage(page);
})

test('Login Test', {tag:['@master', '@regression', '@sanity']}, async({page})=>{
    await loginpage.loginToAccount(username, password);
    await loginpage.validateAccountEmailId(username);

})