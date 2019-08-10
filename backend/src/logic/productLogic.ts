import { Product } from "../model/product";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import { productManager } from "../manager/productManager";

class ProductLogic {
    constructor() {
        
    }

    public async getAllProducts():Promise<any> {
        try {
            return await productManager.getAllProducts();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Product):Promise<any>  {
        try {
            return await productManager.getOne(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Product):Promise<any> {

        try {
            return await productManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Product): Promise<any>  {
        try {
            return await productManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const productLogic = new ProductLogic();