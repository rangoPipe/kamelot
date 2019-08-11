import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import personModel, { Person } from "../../../../model/core/person";

class PersonManager {

    public async getAllPersons():Promise<any> {
        try {
            return await personModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Person):Promise<any>  {
        try {
            return await personModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Person):Promise<any> {

        try {
            let result = await personModel.findById(model.id);         
            return (!result) ? await personManager.savePerson(model) : await personManager.updatePerson(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async savePerson(model:Person):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updatePerson(model:Person): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return personModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Person): Promise<any>  {
        try {
            return await personModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const personManager = new PersonManager();