import { ITable } from "../../redux/reducer/general/table/ITable";

export interface ITableState extends ITable {
    table:ITable
}

export interface ITableProps extends ITableState {
}