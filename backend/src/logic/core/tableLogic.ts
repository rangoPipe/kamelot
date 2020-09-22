import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { tableManager } from "../../manager/core/tableManager";
import { Table } from "../../model/core/table";

class TableLogic {

    public async getAllTables():Promise<any> {
        try {
            return await tableManager.getAllTables();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Table):Promise<any>  {
        try {
            return await tableManager.getOne(model);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Table):Promise<any> {

        try {
            return await tableManager.save(model);        
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Table): Promise<any>  {
        try {
            return await tableManager.disable(model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const tableLogic = new TableLogic();