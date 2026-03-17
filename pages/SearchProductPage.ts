import {Page, Locator} from '@playwright/test';

export class SearchProductsPage{
    //variables
    private readonly page:Page;
    private readonly searchBox:Locator;
    private readonly searchButton:Locator;
    private readonly selectProduct:Locator;
    private readonly addToCart:Locator;
    private readonly productName:Locator;

    //constructor
    constructor(page:Page){
        this.page=page;
        this.searchBox=page.locator("#small-searchterms").first();
        this.searchButton=page.locator("[value='Search']").first();
        this.selectProduct=page.locator("[value='Add to cart']").first()
        this.addToCart=page.locator("[value='Add to cart']").first();
        this.productName=page.locator("[class='product-name']");
    }

    //methods
    async searchProduct(product:string){
        await this.searchBox.fill(product);
        await this.searchButton.click();
    }

    async selectProductFromResults(){
        await this.selectProduct.click();
    }

    async clickAddToCart(){
        await this.addToCart.click();
    }

    async getProductName(){
        const productNameValue:string=await this.productName.innerText();
        return productNameValue;
    }
}