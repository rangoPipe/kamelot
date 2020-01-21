import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import { purchaseManager } from "../manager/purchaseManager";
import { Purchase } from "../../../model/purchase";
import ProductModel, { Product } from "../../../model/core/product";
import { productLogic } from "./core/productLogic";

class PurchaseLogic {

    public async getAllPurchases():Promise<any> {
        try {
            return await purchaseManager.getAllPurchases();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Purchase):Promise<any>  {
        try {
            return await purchaseManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Purchase):Promise<any> {
        try {
            let schemaProduct:Product = new ProductModel({
                _id: model.product
            })
            const objProduct = model.product = await productLogic.getOne(schemaProduct);
            let purchase = await purchaseManager.save(model); 
            
            if(!objProduct.purchase.includes(purchase._id)) {
                schemaProduct.purchase = objProduct.purchase;
                schemaProduct.purchase.push(purchase._id);
                await productLogic.save(schemaProduct);
            }
            return purchase;       
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Purchase): Promise<any>  {
        try {
            return await purchaseManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const purchaseLogic = new PurchaseLogic();