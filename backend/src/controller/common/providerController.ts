import { Request, Response } from "express";
import Model, { IProvider, createModel } from "../../model/common/provider";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import { mainController } from "../mainController";

class ProviderController {
    public async allActive(req: Request, res: Response) {
        try {
            const result:IProvider[] = await mainController.getAllActive(Model);
            let response = result.filter( x => x.active);
            res.send(response);

        } catch (error) {
            res.send(error)
        }
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const entity:IProvider = createModel(req);            
            let result = await mainController.save(Model, entity);            
            res.json(new AppResponse(true, result));
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try { 
            const result:IProvider | null = await mainController.getOne(Model, req.params.id);            
            res.json(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const entity = createModel(req);
            const result = await mainController.disable(Model, entity);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }
}

export const providerController = new ProviderController();