import { Request, Response } from "express";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { tableLogic } from "../../logic/core/tableLogic";
import tableModel, { Table } from "../../model/core/table";

class TableController {

    public async allTables(req: Request, res: Response) {
        try {
            const result = await tableLogic.getAllTables();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
        
        return res.json({});
    }

    public async allPersonsActive(req: Request, res: Response) {
        try {
            const result:Table[] = await tableLogic.getAllTables();
            let response = result.filter( x => x.active);
            res.send(response);

        } catch (error) {
            res.send(error)
        }    
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const model:Table = tableController.createModel(req);
            let response = await tableLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = this.createModel(req);
            const result = await tableLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = tableController.createModel(req);
            const result = await tableLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Table {
        const params = (Object.keys(req.body).length > 0) ? req.body : req.params;
        const model:Table = new tableModel({
            _id : params.id,
            ...params,
            dateCreate : new Date()
        });
        return model;
    }
}

export const tableController = new TableController();