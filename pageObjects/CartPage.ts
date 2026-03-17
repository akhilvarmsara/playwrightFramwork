import { Page,  Locator } from "@playwright/test";
import { fail } from "node:assert";
import test from "node:test";

export class CartPage{

    //Variables
    private readonly page:Page;
    private readonly allProducts:Promise<Locator[]>;

    //constructor
    constructor(page: Page){
        this.page=page;
        this.allProducts=page.locator(".success td:nth-child(2)").all();
    }

    //methods
    async validateProductInCart(MyProduct: string): Promise<boolean | undefined>{
        const productList= await this.allProducts;
        for (const product of  productList){
            const name= await product.first().textContent();
            console.log("Cart product: "+ name)
            if (name === MyProduct)
            {
                console.log("Prodct is added");
                return true;
            }
            else
            {
                return false; 
            }
        }
    }
}