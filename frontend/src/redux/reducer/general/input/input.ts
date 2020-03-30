import { createInput, changeValue } from "../../../action/general/input/_actionName";
import { IInput } from "./IInput";
import { IAction } from "../../../namespace";

const defaultState:IInput = {
    type: undefined,
    placeholder: "",
    value: "",
    onChange: () => { },
    label: null
};

function reducer(state = defaultState, { type, payload }:IAction) : IInput {    
    switch(type) {
        case createInput: {                                  
            return {
                ...state,
                ...payload
            };
        }
        case changeValue: {                                  
            return {
                ...state,
                value: payload
            };
        }
        default:
            return state;
    }
}

export default reducer;