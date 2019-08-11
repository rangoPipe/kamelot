import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { personManager } from "../../manager/core/personManager";
import { Person } from "../../../../model/core/person";

class PersonLogic {

    public async getAllPersons():Promise<any> {
        try {
            return await personManager.getAllPersons();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Person):Promise<any>  {
        try {
            return await personManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Person):Promise<any> {

        try {
            return await personManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Person): Promise<any>  {
        try {
            return await personManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const personLogic = new PersonLogic();