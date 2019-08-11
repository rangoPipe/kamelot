import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import { purchaseManager } from "../manager/purchaseManager";
import { Purchase } from "../../../model/purchase";

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
            return await purchaseManager.save(model);        
            
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