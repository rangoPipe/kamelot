import { Request, Response } from "express";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { empleoyeeLogic } from "../../logic/core/empleoyeeLogic";
import empleoyeeModel, { Employee } from "../../../../model/core/employee";

class EmpleoyeeController {

    public async allEmpleoyees(req: Request, res: Response) {
        try {
            const result = await empleoyeeLogic.getAllEmpleoyees();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
        
        return res.json({});
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const model:Employee = this.createModel(req);
            let response = await empleoyeeLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = this.createModel(req);
            const result = await empleoyeeLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = this.createModel(req.body);
            const result = await empleoyeeLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Employee {
        const { id, idCargo, salario } = req.body;

        const model:Employee = new empleoyeeModel({
            _id: id,
            hierarchy : idCargo,
            salary      : salario,
            dateCreate  : new Date()
        });
        return model;
    }
}

export const empleoyeeController = new EmpleoyeeController();