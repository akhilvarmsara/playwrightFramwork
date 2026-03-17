import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';
import { TestConfig } from '../test.config';
import { DataProviders } from '../utils/dataprovider';

const path:string="testdata/logindata.json";
const jsonData:any=DataProviders.readDataFromKJSON(path);
let testconfig:TestConfig;
let loginPage:LoginPage;
let logoutPage:LogoutPage;
let username:any;
let password:any;

test.beforeEach('Before test', async({page})=>{
        const testcasename=jsonData[0].testcase_name;
        username=jsonData[0].username;
        password=jsonData[0].password;
        console.log(testcasename);

        testconfig=new TestConfig();
        await page.goto(testconfig.url)

        loginPage=new LoginPage(page);
        logoutPage=new LogoutPage(page);
})

test('Validate Logout', async({page})=>{
    
        await loginPage.loginToAccount(username, password);

        await logoutPage.clickLogoutLink();
        await loginPage.validateLoginLink();
})
