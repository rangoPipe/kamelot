import { createInput } from "../../../action/general/input/_actionName";
import { IInput } from "./IInput";
import { IAction } from "../../../namespace";

const defaultState:IInput = {
    type: undefined,
    placeholder:"",
    onChange: () => { }
};

function reducer(state = defaultState, { type, payload }:IAction) : IInput {    
    switch(type) {
        case createInput: {                                  
            return {
                ...state,
                ...payload
            };
        }
        default:
            return state;
    }
}

export default reducer;