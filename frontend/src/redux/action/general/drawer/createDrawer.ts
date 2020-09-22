import { createDrawer as type } from "./_actionName";
import { IAction } from "../../../namespace";

const createDrawer = (payload:string):IAction => {
    return {
      type,
      payload
    };
};

export default createDrawer