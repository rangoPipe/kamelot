import { Request, Response } from "express";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import { parameterLogic } from "../../logic/core/parameterLogic";
import parameterModel, { Parameter } from "../../../../model/core/parameter";

class ParameterController {

    public async allParameters(req: Request, res: Response) {
        try {
            const result = await parameterLogic.getAllParameters();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
        
        return res.json({});
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {

            const model:Parameter = this.createModel(req);
            let response = await parameterLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = this.createModel(req);
            const result = await parameterLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = this.createModel(req.body);
            const result = await parameterLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Parameter {
        const { id, nombre, valor } = req.body;

        const model:Parameter = new parameterModel({
            _id: id,
            key : nombre,
            value: valor,
            dateCreate : new Date()
        });
        return model;
    }
}

export const parameterController = new ParameterController();