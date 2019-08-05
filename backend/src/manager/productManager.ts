import productModel, { Product } from "../model/product";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
const translation = require('../translation/es.json');

class ProductManager {

    constructor() {

    }

    public allProducts() {
        try {
            let products:Product[] = [];

            return products;
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, )
        }    
    }

    public async save(product:Product):Promise<AppResponse> {

        try {
            let result = await productModel.findById(product.id);         
            return (!result) ? await productController.saveProduct(product) : await productController.updateProduct(product);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveProduct(product:Product):Promise<AppResponse> {
        try {
            const res = await product.save();
            return new AppResponse(true, translation.common.save, res );
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
            return new AppResponse(true, translation.common.save, res );
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, 'Error interno');
        }
    }
}

export const productController = new ProductController();