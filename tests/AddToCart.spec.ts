import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SearchProductsPage } from '../pages/SearchProductPage';
import { ShoppingCart } from '../pages/ShoppingCart';
import { TestConfig } from '../test.config';

let loginPage:LoginPage;
let searchProduct:SearchProductsPage;
let shoppingcart:ShoppingCart;
let testconfig:TestConfig;
let username:any;
let password:any;
let product:any;

test.beforeEach('Before Test', async({page}) =>{
    loginPage=new LoginPage(page);
    searchProduct=new SearchProductsPage(page);
    shoppingcart=new ShoppingCart(page);
    testconfig= new TestConfig();

    await page.goto(testconfig.url);

    username=testconfig.username;
    password=testconfig.password;
    product=testconfig.product;
})

test('Add Product to Cart',{tag:['@smoke','@regression','@sanity']}, async()=>{

    await loginPage.loginToAccount(username, password);

    await searchProduct.searchProduct(product);
    await searchProduct.selectProductFromResults();
    const expectedName=await searchProduct.getProductName();
    await searchProduct.clickAddToCart();

    await shoppingcart.clickCartLink();
    const actualName=await shoppingcart.getProductNameInCart();
    await shoppingcart.selectCountry();

    expect(actualName).toContain(expectedName);

})