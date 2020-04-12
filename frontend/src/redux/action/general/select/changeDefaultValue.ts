import { changeDefaultValue as type } from "./_actionName";
import { IAction } from "../../../namespace";

const changeDefaultValue = (payload:string):IAction => {
    return {
      type,
      payload
    };
};

export default changeDefaultValue