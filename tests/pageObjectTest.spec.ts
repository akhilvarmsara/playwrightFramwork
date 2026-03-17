import {test, expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { HomePage } from '../pageObjects/HomePage';
import { CartPage } from '../pageObjects/CartPage';

test('Page Obejct Test', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    // Login
    const login=new LoginPage(page);
    await login.performLogin('akhil0108', 'akhil')

    //Add to cart
    const home=new HomePage(page);
    await home.selectProductAndAddToCart('Nexus 6');
    await home.gotoCart();

    //validate cart
    const cart=new CartPage(page);
    const productStatus= await cart.validateProductInCart('Nexus 6');
    expect(productStatus).toBe(true)

})