import { Request, Response } from "express";
import Model, { IPurchase, createModel } from "../../model/core/purchase";
import BaseException from "../../lib/baseException";
import AppResponse from "../../lib/appResponse";
import { mainController } from "../mainController";
import { collectioneName } from "../../lib/enum/collectionName";
import ProductModel, { IProduct } from "../../model/common/product";

class PurchaseController {
  public async allActive(req: Request, res: Response) {
    try {
      const result: IPurchase[] = await Model.find()
        .populate(collectioneName.PRODUCT)
        .exec();
      let response = result.filter((x) => x.active);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    try {
      const result: IPurchase | null = await Model.findById(req.params.id)
        .populate(collectioneName.PRODUCT)
        .exec();
      res.json(result);
    } catch (error) {
      res.send(error);
    }
  }

  public async save(req: Request, res: Response) {
    try {
      const entity: IPurchase = createModel(req);
      const entityProduct = await mainController.getOne(
        ProductModel,
        req.body.product
      );      

      //entity.product = entityProduct;
      let purchase = await mainController.save(Model, entity);      
      

      if (!entityProduct.purchase.includes(purchase._id)) {
        entityProduct.purchase = entityProduct.purchase;
        await mainController.save(ProductModel, entityProduct);
      }

      res.json(new AppResponse(true, purchase));
    } catch (error) {
      new BaseException(500, error);
      res.json(new AppResponse(false, error));
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

export const purchaseController = new PurchaseController();
