import { loadDataTable as type } from "./_actionName";
import { IAction } from "../../../namespace";

const loadDataTable = (payload:string):IAction => {
    return {
      type,
      payload
    };
};

export default loadDataTable