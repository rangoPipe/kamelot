import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import hierarchyModel, { Hierarchy } from "../../model/core/hierarchy";


class HierarchyManager {
    public async getAllHierarchies():Promise<any> {
        try {
            return await hierarchyModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Hierarchy):Promise<any>  {
        try {
            return await hierarchyModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Hierarchy):Promise<any> {

        try {
            let result = await hierarchyModel.findById(model.id);         
            return (!result) ? await hierarchyManager.saveHierarchy(model) : await hierarchyManager.updateHieararchy(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveHierarchy(model:Hierarchy):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateHieararchy(model:Hierarchy): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return hierarchyModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Hierarchy): Promise<any>  {
        try {
            return await hierarchyModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const hierarchyManager = new HierarchyManager();