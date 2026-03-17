import{test, expect} from '@playwright/test'


test.describe('Smoke Tests', ()=>{

    test('Test 1', async()=>{
        console.log('This is test 1 in smoke')
    })

    test('Test 2', async()=>{
        console.log('This is test 2 in smoke')
    })
})

test.describe('Regression Tests', ()=>{

    test('Test 1', async()=>{
        console.log('This is test 1 in Regression')
    })

    test('Test 2', async()=>{
        console.log('This is test 2 in Regression')
    })
})