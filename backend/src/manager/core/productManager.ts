import productModel, { Product } from "../../../../model/core/product";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { collectioneName } from "../../common/enum/collectionName";

class ProductManager {

    public async getAllProducts():Promise<any> {
        try {
            return await productModel.find().populate(collectioneName.PROVIDER).exec();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Product):Promise<any>  {
        try {
            return await productModel.findOne({ _id: model.id}).populate(collectioneName.PROVIDER);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Product):Promise<any> {

        try {
            let result = await productModel.findById(model.id);         
            return (!result) ? await productManager.saveProduct(model) : await productManager.updateProduct(model);
            
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
            return await productModel.findByIdAndUpdate(model.id, { $set: { active:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const productManager = new ProductManager();