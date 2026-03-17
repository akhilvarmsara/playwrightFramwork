import {test, expect} from '@playwright/test';
import { DataProviders } from '../utils/dataprovider';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';

let jsonpath="testdata/logindata.json"
let jsonData:any=DataProviders.readDataFromKJSON(jsonpath);

for (const data of jsonData){

    test(`Login of ${data.testcase_name} data`, {tag:['@master', '@regression', '@sanity']}, async({page})=>{
        const testconfig=new TestConfig();
        const url=testconfig.url;
        await page.goto(url);

        const loginpage=new LoginPage(page);
        await loginpage.loginToAccount(data.username, data.password)
        if(data.expected === 'success'){
            await loginpage.validateAccountEmailId(data.username)
        }
    })

}