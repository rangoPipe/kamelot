import { IAction, ActionNameEnum } from "../../../action";
import { IDrawerProps } from "./IDrawer";

const defaultState:IDrawerProps = {
    title: "",
    placement: "right",
    closable: true,
    onClose: undefined,
    visible: false,
    width: '100%'
};

function reducer(state = defaultState, { type, payload }:IAction) : IDrawerProps {
    switch(type) {
        case ActionNameEnum.createElemet: {                                  
            return {
                ...state,
                ...payload
            };
        }
        case ActionNameEnum.showElement: {                                  
            return {
                ...state,
                visible : payload
            };
        }
        case ActionNameEnum.changeText: {                                  
            return {
                ...state,
                title : payload
            };
        }
        
        default:
            return state;
    }
}

export default reducer;