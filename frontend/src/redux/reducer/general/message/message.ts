import { createMessage } from "../../../action/general/message/_actionName";
import { IMessage } from "./IMessage";
import { IAction } from "../../../namespace";

const defaultState:IMessage = {
    text:""
};

function reducer(state = defaultState, { type, payload }:IAction) : IMessage {    
    switch(type) {
        case createMessage: {                                  
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