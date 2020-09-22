import { createSelect, loadItems, changeValue, changeDefaultValue } from "../../../action/general/select/_actionName";
import { ISelect } from "./ISelect";
import { IAction } from "../../../namespace";

const defaultState:ISelect = {
    label: null,
    value: null,
    defaultValue: undefined,
    placeholder: "Seleccione una opción",
    style: { width: "100%" }
};

function reducer(state = defaultState, { type, payload }:IAction) : ISelect {    
    switch(type) {
        case createSelect: {                                  
            return {
                ...state,
                ...payload
            };
        }
        case loadItems: {                                  
            return {
                ...state,
                option: payload
            };
        }
        case changeValue: {                                  
            return {
                ...state,
                value: payload
            };
        }
        case changeDefaultValue: {                                  
            return {
                ...state,
                defaultValue: payload
            };
        }
        default:
            return state;
    }
}

export default reducer;