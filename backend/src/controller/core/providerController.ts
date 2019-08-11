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
        
        return res.json({});
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {

            const provider:Provider = this.createModel(req);
            let response = await providerLogic.save(provider);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = this.createModel(req);
            const result = await providerLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = this.createModel(req.body);
            const result = await providerLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Provider {
        const { id, nombre, fechaCreacion } = req.body;

        const provider:Provider = new providerModel({
            name : nombre,
            dateContract: fechaCreacion,
            dateCreate : new Date()
        });
        return provider;
    }
}

export const providerController = new ProviderController();