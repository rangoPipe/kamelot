import { Request, Response } from "express";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { scheduleLogic } from "../../logic/core/scheduleLogic";
import scheduleModel,{ Schedule } from "../../../../model/core/schedule";

class ScheduleController {

    public async allSchedules(req: Request, res: Response) {
        try {
            const result = await scheduleLogic.getAllSchedules();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
        
        return res.json({});
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {

            const model:Schedule = this.createModel(req);
            let response = await scheduleLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = this.createModel(req);
            const result = await scheduleLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = this.createModel(req.body);
            const result = await scheduleLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Schedule {
        const { id, nombre, fFinal, fInicial, dias } = req.body;

        const model:Schedule = new scheduleModel({
            _id: id,
            name : nombre,
            dateBegin: fFinal,
            dateEnd: fInicial,
            days: dias,
            dateCreate : new Date()
        });
        return model;
    }
}

export const scheduleController = new ScheduleController();