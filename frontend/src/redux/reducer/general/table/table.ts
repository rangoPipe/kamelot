import { createTable, loadDataTable } from "../../../action/general/table/_actionName";
import { ITable } from "./ITable";
import { IAction } from "../../../namespace";

const defaultState:ITable = {
    columns: [],
    dataSource: []
};

function reducer(state = defaultState, { type, payload }:IAction) : ITable {    
    switch(type) {
        case createTable: {                                  
            return {
                ...state,
                ...payload
            };
        }
        case loadDataTable: {                                  
            return {
                ...state,
                dataSource: payload
            };
        }
        default:
            return state;
    }
}

export default reducer;