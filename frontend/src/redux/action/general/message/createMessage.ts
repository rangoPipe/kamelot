import { createMessage as type } from "./_actionName";
import { IAction } from "../../../namespace";

const createMessage = (payload:string):IAction => {
    return {
      type,
      payload
    };
};

export default createMessage