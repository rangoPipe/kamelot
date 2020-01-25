import * as React from "react";
import { Select, Table } from 'antd';
import { ITableState } from "./ITable";
import { IOption } from "../../redux/reducer/general/select/ISelect";

export default function Page(props:ITableState) {
    const { table } = props;    
    
    return (
        <Table columns = { table.columns } dataSource = { table.dataSource }  />
        );
}