import {test, expect} from '@playwright/test';
import { TestConfig } from '../../test.config';
import fs from 'fs';

let baseURL:any;
let config:TestConfig;
let requestBody:any;

test.beforeAll('Before Test', async()=>{

    let json_path='testdata/api_post_request.json'
    requestBody=JSON.parse(fs.readFileSync(json_path,'utf-8'));

    config=new TestConfig();
    baseURL=config.apiBaseURL;

})

test('Post API Request', async({request})=>{

    let response=await request.post(`${baseURL}/booking`, {data:requestBody})

    //Extact response json
    let responseBody=await response.json();
    console.log(responseBody);

    // Validate the status code
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //Validate the booking id and booking fields from the response
    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody).toHaveProperty('booking');

    //Validate the json values
    const bookingDetails= responseBody.booking;
    expect(responseBody.booking.firstname).toBe(requestBody.firstname);
})