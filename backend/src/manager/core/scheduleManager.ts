import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import scheduleModel, { Schedule } from "../../../../model/core/schedule";

class ScheduleManager {

    public async getAllSchedules():Promise<any> {
        try {
            return await scheduleModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Schedule):Promise<any>  {
        try {
            return await scheduleModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Schedule):Promise<any> {

        try {
            let result = await scheduleModel.findById(model.id);         
            return (!result) ? await scheduleManager.saveSchedule(model) : await scheduleManager.updateSchedule(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveSchedule(model:Schedule):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateSchedule(model:Schedule): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return scheduleModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Schedule): Promise<any>  {
        try {
            return await scheduleModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const scheduleManager = new ScheduleManager();