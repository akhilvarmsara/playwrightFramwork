import {Page, Locator} from '@playwright/test'

export class ShoppingCart{
    //variables
    private readonly page:Page;
    private readonly shoppingCartLink:Locator;
    private readonly productNameCart:Locator;
    private readonly countryDropdown:Locator;

    //constructor
    constructor(page:Page){
        this.page=page;
        this.countryDropdown=page.locator("[class='country-input valid']");
        this.shoppingCartLink=page.locator("[href='/cart'] span[class='cart-label']");
        this.productNameCart=page.locator('[class="product-name"]');
    }

    //methods
    async clickCartLink(){
        await this.shoppingCartLink.click()
    }

    async getProductNameInCart(){
        const productName=await this.productNameCart.textContent();
        return productName;
    }

    async selectCountry(){
        await this.countryDropdown.selectOption({index:5})
    }
}