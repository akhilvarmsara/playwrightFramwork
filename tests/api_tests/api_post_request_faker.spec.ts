/*
Test: create booking
Request type: Post
Request body: randome/dynamic data(faker)

Pre-requistes: 
----------------
Install faker-js library for generating dynamic data
  npm install @faker-js/faker

Install Luxon is a library for working with dates and times in JavaScript.
  npm install luxon

Add url to playwright.config.ts file
	baseURL: 'https://restful-booker.herokuapp.com'
*/

import {test, expect} from '@playwright/test';
import { TestConfig } from '../../test.config';
import {faker} from '@faker-js/faker';

let baseURL:any;
let config:TestConfig;
let requestBody:any;

test.beforeAll('Before Test', async()=>{

    let firstname=faker.person.firstName();
    let lastname=faker.person.lastName();
    let totalprice=faker.number.int({min:100, max:200});
    let depositpaid=faker.datatype.boolean();
    let additionalneeds=faker.food.fruit();

    requestBody={
            firstname : firstname,
            lastname : lastname,
            totalprice : totalprice,
            depositpaid : depositpaid,
            bookingdates : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            additionalneeds : additionalneeds
        }
    
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