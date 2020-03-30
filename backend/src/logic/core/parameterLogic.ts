import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { parameterManager } from "../../manager/core/parameterManager";
import { Parameter } from "../../model/core/parameter";

class ParameterLogic {

    public async getAllParameters():Promise<any> {
        try {
            return await parameterManager.getAllParamters();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Parameter):Promise<any>  {
        try {
            return await parameterManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Parameter):Promise<any> {

        try {
            return await parameterManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Parameter): Promise<any>  {
        try {
            return await parameterManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const parameterLogic = new ParameterLogic();