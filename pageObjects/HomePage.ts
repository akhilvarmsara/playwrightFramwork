import { Page, Locator } from "@playwright/test";

export class HomePage{

    //Variables
    private readonly page:Page;
    private readonly productsList: Promise<Locator[]>;
    private readonly addToCard:Locator;
    private readonly cartLink:Locator;

    //constructor
    constructor(page: Page){
        this.page=page;
        this.productsList=page.locator('.card-title a').all();
        this.addToCard=page.locator("[class='btn btn-success btn-lg']");
        this.cartLink=page.locator('#cartur');
    }

    //methods
    async selectProductAndAddToCart(productName:string){
        const productsListAll=await this.productsList;
        for (const product of productsListAll){
            console.log("Product name locator: "+ product)
            const name =await product.textContent();
            console.log("Product name: "+ name)
            if (name?.trim() === productName)
            {
                await product.click();
                break;
            }
        }

        this.page.on('dialog', async (dialog) =>{
            await dialog.accept();
        })

        await this.addToCard.click();
    }

    async gotoCart(){
        await this.cartLink.click();
    }
}