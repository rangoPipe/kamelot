import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { Employee } from "../../model/core/employee";
import { empleoyeeManager } from "../../manager/core/empleoyeeManager";
import personModel, { Person } from "../../model/core/person";
import { personLogic } from "./personLogic";

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
            let schemaPerson:Person = new personModel ({
                _id: model.person
            });
            model.person = await personLogic.getOne(schemaPerson);
            console.log(model);
            
            
            const empleoyee = await empleoyeeManager.save(model);
            schemaPerson = model.person;
            schemaPerson.empleoyee = empleoyee._id;
            await personLogic.save(schemaPerson);
            return empleoyee;    
            
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