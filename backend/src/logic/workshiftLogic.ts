import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import { purchaseManager } from "../manager/purchaseManager";
import { Purchase } from "../../../model/purchase";
import { workshiftManager } from "../manager/workshiftManager";
import { Workshift } from "../../../model/workshift";

class WorkshiftLogic {

    public async getAllWorkshifts():Promise<any> {
        try {
            return await workshiftManager.getAllWorkshifts();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Workshift):Promise<any>  {
        try {
            return await workshiftManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Workshift):Promise<any> {

        try {
            return await workshiftManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Workshift): Promise<any>  {
        try {
            return await workshiftManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const workshiftLogic = new WorkshiftLogic();