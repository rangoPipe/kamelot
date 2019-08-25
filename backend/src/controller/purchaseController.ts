import { Request, Response } from "express";
import BaseException from "../common/baseException";
import AppResponse from "../common/appResponse";
import purchaseModel, { Purchase } from "../../../model/purchase";
import { purchaseLogic } from "../logic/purchaseLogic";

class PurchaseController {

    public async allPurchases(req: Request, res: Response) {
        try {
            const result = await purchaseLogic.getAllPurchases();
            res.send(result);

        } catch (error) {
            res.send(error)
        }    
        
        return res.json({});
    }

    public async save(req: Request, res:Response):Promise<void> {
        try {
            const model:Purchase = this.createModel(req);
            let response = await purchaseLogic.save(model);
            res.json(response);
            
        } catch (error) {
            new BaseException(500, error); 
            res.json( new AppResponse(false, error));
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const model = this.createModel(req);
            const result = await purchaseLogic.getOne(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    public async disable(req: Request, res: Response) {
        try {
            const model = this.createModel(req.body);
            const result = await purchaseLogic.disable(model);
            res.send(result);

        } catch (error) {
            res.send(error);
        }
    }

    private createModel(req: Request): Purchase {
        const { id, compra, venta, idProducto, cantidad } = req.body;

        const model:Purchase = new purchaseModel({
            _id : id,
            product : idProducto,
            costBuy: compra,
            costSale: venta,
            quantity: cantidad,
            dateCreate : new Date()
        });
        return model;
    }
}

export const purchaseController = new PurchaseController();