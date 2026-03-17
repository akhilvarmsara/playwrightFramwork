import{test, expect} from '@playwright/test'


test('Test 1', async({page})=>{


})

test.skip('Test 2', async({page})=>{

    console.log('We use this annotation to skip test');
})


test.only('Test 3', async({page})=>{

    console.log('We use this annotation to run only test in file');
})

test.fail('Test 4', async({page})=>{

    console.log('We use this annotation for fail the test purposely');
})

test.fixme('Test 5', async({page})=>{
    console.log('We use this annotation for fixing the test in future');

})