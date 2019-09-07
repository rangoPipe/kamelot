import { Product } from "../../../../model/core/product";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { productManager } from "../../manager/core/productManager";
import { providerLogic } from "./providerLogic";
import providerModel, { Provider } from "../../../../model/core/provider";

class ProductLogic {

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
            return await productManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Product):Promise<any> {

        try {
            let proveedor:Provider = new providerModel({
                _id: model.provider
            });
            model.provider = await  providerLogic.getOne(proveedor);
            const product = await productManager.save(model);   
            proveedor.product.push(product._id);
            providerLogic.save(proveedor);
            return product;
            
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