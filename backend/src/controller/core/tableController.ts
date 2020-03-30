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

    public async save(req: Request, res:Response):Promise<void> {
        try {

            const model:Table = this.createModel(req);
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
            const model = this.createModel(req.body);
            const result = await tableLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Table {
        const { id, nombre, capacity } = req.body;

        const model:Table = new tableModel({
            _id: id,
            name : nombre,
            capacity: capacity,
            dateCreate : new Date()
        });
        return model;
    }
}

export const tableController = new TableController();