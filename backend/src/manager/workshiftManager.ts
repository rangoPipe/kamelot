import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import workshiftModel, { Workshift } from "../../../model/workshift";

class WorkshiftManager {

    public async getAllWorkshifts():Promise<any> {
        try {
            return await workshiftModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Workshift):Promise<any>  {
        try {
            return await workshiftModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Workshift):Promise<any> {

        try {
            let result = await workshiftModel.findById(model.id);         
            return (!result) ? await workshiftManager.saveWorkshift(model) : await workshiftManager.updateWorkshift(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveWorkshift(model:Workshift):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateWorkshift(model:Workshift): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return workshiftModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Workshift): Promise<any>  {
        try {
            return await workshiftModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const workshiftManager = new WorkshiftManager();