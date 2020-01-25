import { createTable as type } from "./_actionName";
import { IAction } from "../../../namespace";

const createTable = (payload:string):IAction => {
    return {
      type,
      payload
    };
};

export default createTable