import { createDatepicker as type } from "./_actionName";
import { IAction } from "../../../namespace";

const createDatepicker = (payload:string):IAction => {
    return {
      type,
      payload
    };
};

export default createDatepicker