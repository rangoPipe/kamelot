import { ITableProps as ITable } from "../../redux/reducers/general/table/ITable";

export interface ITableState extends ITable {
    table:ITable
}

export interface ITableProps extends ITableState {
}