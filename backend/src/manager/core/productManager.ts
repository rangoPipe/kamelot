import productModel, { Product } from "../../../../model/core/product";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";

class ProductManager {

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
            return await productModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Product):Promise<any> {

        try {
            let result = await productModel.findById(model.id);         
            return (!result) ? await productManager.saveProduct(model) : await productManager.updateProduct(product);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveProduct(model:Product):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateProduct(model:Product): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return productModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Product): Promise<any>  {
        try {
            return await productModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const productManager = new ProductManager();