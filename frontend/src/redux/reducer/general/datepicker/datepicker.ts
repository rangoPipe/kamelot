import { createDatepicker, changeValue } from "../../../action/general/datepicker/_actionName";
import { IDatepicker } from "./IDatepicker";
import { IAction } from "../../../namespace";

const defaultState:IDatepicker = {
    onChange: () => { },
    label: null,
    value: null,
    format: "DD/MM/YYYY"
};

function reducer(state = defaultState, { type, payload }:IAction) : IDatepicker {    
    switch(type) {
        case createDatepicker: {                                  
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