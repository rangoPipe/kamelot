import { Request, Response } from "express";
import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import providerModel, { Provider } from "../../../../model/core/provider";
import { providerLogic } from "../../logic/core/providerLogic";

class ProviderController {

    public async allProviders(req: Request, res: Response) {
        try {
            const result = await providerLogic.getAllProviders();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const provider:Provider = providerController.createModel(req);
            let response = await providerLogic.save(provider);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = providerController.createModel(req);   
            const result = await providerLogic.getOne(model);
            
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = providerController.createModel(req);        
            const result = await providerLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Provider {
        const { id, nombre, fechaCreacion } = (Object.keys(req.body).length > 0) ? req.body : req.params;
        const model:Provider = new providerModel({
            _id : id,
            name : nombre,
            dateContract: fechaCreacion,
            dateCreate : new Date()
        });
        return model;
    }
}

export const providerController = new ProviderController();