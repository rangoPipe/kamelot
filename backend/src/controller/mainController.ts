import { Model, Schema } from "mongoose";

export default class MainController {

  public async getAll(model: Model<any, {}>) {
    return await model.find();
  }

  public async getAllActive(model: Model<any, {}>) {
      const result = await model.find();
      return result.filter((x) => x.active);
  }

  public async save(model: Model<any, {}>, entity:any) {
    let item = await this.getOne(model, entity._id);

    if(item){
        return await model.updateOne({_id:item._id}, entity);
    }
    else {      
        return await model.create(entity);
    }
  }

  public async getOne(model:Model<any, {}>, _id: string | number | Schema.Types.ObjectId) {
      const result = await model.findOne({ _id });
      return result;
  }

  public async disable(model: Model<any, {}>, entity:any) {
      entity.active = false;      
      return await model.updateOne({_id:entity._id}, { active: false });
  }
}

export const mainController = new MainController();
