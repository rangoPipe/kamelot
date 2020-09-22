import { Request, Response } from "express";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import { workshiftLogic } from "../logic/workshiftLogic";
import workshiftModel, { Workshift } from "../model/workshift";

class WorkshiftController {

    public async allWorkshifts(req: Request, res: Response) {
        try {
            const result = await workshiftLogic.getAllWorkshifts();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
        
        return res.json({});
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const model:Workshift = this.createModel(req);
            let response = await workshiftLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = this.createModel(req);
            const result = await workshiftLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = this.createModel(req.body);
            const result = await workshiftLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Workshift {
        const { id, idEmpleado, idTurno } = req.body;

        const model:Workshift = new workshiftModel({
            _id : id,
            empleoyee : idEmpleado,
            schedule: idTurno,
            dateCreate : new Date()
        });
        return model;
    }
}

export const workshiftController = new WorkshiftController();