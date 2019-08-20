import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { hierarchyManager } from "../../manager/core/hierarchyManager";
import { Hierarchy } from "../../../../model/core/hierarchy";

class HieararchyLogic {

    public async getAllHiearchies():Promise<any> {
        try {
            return await hierarchyManager.getAllHierarchies();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Hierarchy):Promise<any>  {
        try {
            return await hierarchyManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Hierarchy):Promise<any> {

        try {
            return await hierarchyManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Hierarchy): Promise<any>  {
        try {
            return await hierarchyManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const hieararchyLogic = new HieararchyLogic();