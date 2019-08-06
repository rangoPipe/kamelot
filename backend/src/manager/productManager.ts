import productModel, { Product } from "../model/product";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";

class ProductManager {

    constructor() {

    }

    public async getAllProducts():Promise<AppResponse> {
        try {
            const products:Product[] = await productModel.find();
            return new AppResponse(true, products);
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Product):Promise<AppResponse>  {
        try {
            const product:Product|null =  await productModel.findOne(model.id);
            return new AppResponse(true, product);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(product:Product):Promise<AppResponse> {

        try {
            let result = await productModel.findById(product.id);         
            return (!result) ? await productManager.saveProduct(product) : await productManager.updateProduct(product);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveProduct(product:Product):Promise<AppResponse> {
        try {
            const res = await product.save();
            return new AppResponse(true, res );
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateProduct(product:Product): Promise<AppResponse> {
        try {
            product.dateUpdate = new Date();
            const res = productModel.findByIdAndUpdate(product.id, product);
            return new AppResponse(true, res );
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async disable(model:Product): Promise<AppResponse>  {
        try {
            const product:Product|null = await productModel.findByIdAndUpdate(model.id, { $set: {activo:false}});
            return new AppResponse(true, product );
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const productManager = new ProductManager();