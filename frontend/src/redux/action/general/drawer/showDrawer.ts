import { showDrawer as type } from "./_actionName";
import { IAction } from "../../../namespace";

const showDrawer = (payload:string):IAction => {
    return {
      type,
      payload
    };
};

export default showDrawer