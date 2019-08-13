import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { scheduleManager } from "../../manager/core/scheduleManager";
import { Schedule } from "../../../../model/core/schedule";

class ScheduleLogic {

    public async getAllSchedules():Promise<any> {
        try {
            return await scheduleManager.getAllSchedules();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Schedule):Promise<any>  {
        try {
            return await scheduleManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Schedule):Promise<any> {

        try {
            return await scheduleManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Schedule): Promise<any>  {
        try {
            return await scheduleManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const scheduleLogic = new ScheduleLogic();