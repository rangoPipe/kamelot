import { createDrawer, showDrawer } from "../../../action/general/drawer/_actionName";
import { IDrawer } from "./IDrawer";
import { IAction } from "../../../namespace";

const defaultState:IDrawer = {
    body: null,
    title: undefined,
    width:'100%',
    placement: "right",
    closable: true,
    onClose: () => {},
    visible: false
};

function reducer(state = defaultState, { type = "", payload = { } }:IAction) : IDrawer {    
    switch(type) {
        case createDrawer: {                                  
            return {
                ...state,
                ...payload
            };
        }
        case showDrawer: {                                  
            return {
                ...state,
                visible: payload
            };
        }
        default:
            return state;
    }
}

export default reducer;