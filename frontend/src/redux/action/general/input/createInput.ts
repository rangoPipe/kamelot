import { createInput as type } from "./_actionName";
import { IAction } from "../../../namespace";

const createInput = (payload:string):IAction => {
    return {
      type,
      payload
    };
};

export default createInput