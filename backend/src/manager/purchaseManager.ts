import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import purchaseModel, { Purchase } from "../../../model/purchase";
import { collectioneName } from "../common/enum/collectionName";

class PurchaseManager {

    public async getAllPurchases():Promise<any> {
        try {
            return await purchaseModel.find().populate(collectioneName.PRODUCT).exec();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Purchase):Promise<any>  {
        try {
            return await purchaseModel.findById(model.id).populate(collectioneName.PRODUCT).exec();

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Purchase):Promise<any> {

        try {
            let result = await purchaseModel.findById(model.id);         
            return (!result) ? await purchaseManager.savePurchase(model) : await purchaseManager.updatePurchase(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async savePurchase(model:Purchase):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updatePurchase(model:Purchase): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return purchaseModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Purchase): Promise<any>  {
        try {
            return await purchaseModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const purchaseManager = new PurchaseManager();