import productModel, { Product } from "../model/product";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";

class ProductManager {

    constructor() {

    }

    public async getAllProducts():Promise<any> {
        try {
            return await productModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Product):Promise<any>  {
        try {
            return await productModel.findOne(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(product:Product):Promise<any> {

        try {
            let result = await productModel.findById(product.id);         
            return (!result) ? await productManager.saveProduct(product) : await productManager.updateProduct(product);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveProduct(product:Product):Promise<any> {
        try {
            return await product.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateProduct(product:Product): Promise<any> {
        try {
            product.dateUpdate = new Date();
            return productModel.findByIdAndUpdate(product.id, product);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Product): Promise<any>  {
        try {
            return await productModel.findByIdAndUpdate(model.id, { $set: {activo:false}});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const productManager = new ProductManager();