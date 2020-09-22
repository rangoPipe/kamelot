import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import parameterModel, { Parameter } from "../../model/core/parameter";

class ParameterManager {

    public async getAllParamters():Promise<any> {
        try {
            return await parameterModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Parameter):Promise<any>  {
        try {
            return await parameterModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Parameter):Promise<any> {

        try {
            let result = await parameterModel.findById(model.id);         
            return (!result) ? await parameterManager.saveParameter(model) : await parameterManager.updateParameter(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveParameter(model:Parameter):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateParameter(model:Parameter): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return parameterModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Parameter): Promise<any>  {
        try {
            return await parameterModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const parameterManager = new ParameterManager();