import { IAction, ActionNameEnum } from "../../../action";
import { ITableProps } from "./ITable";

const defaultState:ITableProps = {
    columns: [],
    dataSource: []
};

function reducer(state = defaultState, { type, payload }:IAction) : ITableProps {    
    switch(type) {
        case ActionNameEnum.createElemet: {                                  
            return {
                ...state,
                ...payload
            };
        }
        case ActionNameEnum.loadItems: {                                  
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