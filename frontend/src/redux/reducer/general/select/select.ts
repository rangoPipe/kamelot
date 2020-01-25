import { createSelect } from "../../../action/general/select/_actionName";
import { ISelect } from "./ISelect";
import { IAction } from "../../../namespace";

const defaultState:ISelect = {
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
        default:
            return state;
    }
}

export default reducer;