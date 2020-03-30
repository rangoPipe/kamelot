import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import empleoyeeModel, { Employee } from "../../model/core/employee";

class EmpleoyeeManager {

    public async getAllEmpleoyees():Promise<any> {
        try {
            return await empleoyeeModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Employee):Promise<any>  {
        try {
            return await empleoyeeModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Employee):Promise<any> {

        try {
            let result = await empleoyeeModel.findById(model.id);         
            return (!result) ? await empleoyeeManager.saveEmpleoyee(model) : await empleoyeeManager.updateEmpleoyee(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveEmpleoyee(model:Employee):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateEmpleoyee(model:Employee): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return empleoyeeModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Employee): Promise<any>  {
        try {
            return await empleoyeeModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const empleoyeeManager = new EmpleoyeeManager();