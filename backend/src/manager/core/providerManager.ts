import BaseException from "../../common/baseException";
import AppResponse from "../../common/appResponse";
import providerModel, { Provider } from "../../model/core/provider";
import { collectioneName } from "../../common/enum/collectionName";

class ProviderManager {

    public async getAllProviders():Promise<any> {
        try {
            return await providerModel.find().populate(collectioneName.PRODUCT).exec();
            
        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }    
    }

    public async getOne(model:Provider):Promise<any>  {
        try {         
            return await providerModel.findById(model.id);

        } catch (error) {
            new BaseException(500, error);
            throw new AppResponse(false, error );
        }
    }

    public async save(model:Provider):Promise<any> {

        try {
            let result = await providerModel.findById(model.id);         
            return (!result) ? await providerManager.saveProvider(model) : await providerManager.updateProvider(model);
            
        } catch (error) {
            new BaseException(500, error); 
            return new AppResponse(false, error);
        }
    }

    private async saveProvider(model:Provider):Promise<any> {
        try {
            return await model.save();
        }
        catch(error){
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    private async updateProvider(model:Provider): Promise<any> {
        try {
            model.dateUpdate = new Date();
            return providerModel.findByIdAndUpdate(model.id, model);
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }

    public async disable(model:Provider): Promise<any>  {
        try {
            return await providerModel.findByIdAndUpdate(model.id, { active:false });
        } catch (error) {
            new BaseException(500, error);
            return new AppResponse(false, error);
        }
    }
}

export const providerManager = new ProviderManager();