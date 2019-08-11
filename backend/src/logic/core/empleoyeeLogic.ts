import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { Employee } from "../../../../model/core/employee";
import { empleoyeeManager } from "../../manager/core/empleoyeeManager";

class EmpleoyeeLogic {

    public async getAllEmpleoyees():Promise<any> {
        try {
            return await empleoyeeManager.getAllEmpleoyees();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Employee):Promise<any>  {
        try {
            return await empleoyeeManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Employee):Promise<any> {

        try {
            return await empleoyeeManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Employee): Promise<any>  {
        try {
            return await empleoyeeManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const empleoyeeLogic = new EmpleoyeeLogic();