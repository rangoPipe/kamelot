import { createCard } from "../../../action/general/card/_actionName";
import { ICard } from "./ICard";
import { IAction } from "../../../namespace";

const defaultState:ICard = {
    size: "default",
    title: "",
    loading:false
};

function reducer(state = defaultState, { type, payload }:IAction) : ICard {    
    switch(type) {
        case createCard: {                                  
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