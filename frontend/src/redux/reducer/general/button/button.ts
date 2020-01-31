import { createButton } from "../../../action/general/button/_actionName";
import { IButton } from "./IButton";
import { IAction } from "../../../namespace";

const defaultState:IButton = {
    text: "Probando",
    disable: false,
    type: "primary",
    onChange: () => { }
};

function reducer(state = defaultState, { type = "", payload = { } }:IAction) : IButton {    
    switch(type) {
        case createButton: {                                  
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