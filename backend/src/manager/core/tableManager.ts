import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import tableModel, { Table } from "../../model/core/table";

class TableManager {

    public async getAllTables():Promise<any> {
        try {
            return await tableModel.find();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Table):Promise<any>  {
        try {
            return await tableModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Table):Promise<any> {

        try {
            let result = await tableModel.findById(model.id);         
            return (!result) ? await tableManager.saveTable(model) : await tableManager.updateTable(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveTable(model:Table):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateTable(model:Table): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return tableModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Table): Promise<any>  {
        try {
            return await tableModel.findByIdAndUpdate(model.id, { $set: { activo:false }});
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const tableManager = new TableManager();