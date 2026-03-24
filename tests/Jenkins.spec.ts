import {test, expect} from '@playwright/test';
import { TestConfig } from '../test.config';
import { JenkinsPage } from '../pages/JenkinsPage';

let jenkins:JenkinsPage;
let username:any;
let password:any;

test.beforeEach('Jenkins Test Before', async({page})=>{
    // Create object for test config class
    const testconfig=new TestConfig();
    const url=testconfig.jenkinsURL;
    username=testconfig.jenkinsUsername;
    password=testconfig.jenkinsPassword;
    await page.goto(url);
    await page.waitForTimeout(3000);

    // Create object for jenkins class
    jenkins=new JenkinsPage(page);

})

test('Jenkins Test', async({page})=>{
    await jenkins.loginToJekins(username, password);
    await jenkins.runJob();
    await page.waitForTimeout(3000);
})