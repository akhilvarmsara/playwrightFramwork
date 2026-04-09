import {test, Page, expect } from "@playwright/test";
import { FaceBookPage } from "../pages/FacebookPage";
import { TestConfig } from "../test.config";
import { FakerData } from "../utils/fakergenerator";

let faceBookPage:FaceBookPage;
let configFile:TestConfig;

test.beforeEach('Before Test', async({page})=>{
    faceBookPage= new FaceBookPage(page);
    configFile= new TestConfig();
    const url=configFile.facebookURL;
    await page.goto(url);
})


test('FaceBook Test', async()=>{
    await faceBookPage.clickCreateNewAccountButton();
    await faceBookPage.fillRegistrationForm(FakerData.getFirstName(), FakerData.getLastName());

})