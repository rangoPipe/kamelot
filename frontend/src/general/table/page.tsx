import * as React from "react";
import { Table } from 'antd';
import { ITableState } from "./ITable";

export default function Page(props:ITableState) {
    const { table } = props;    
    
    return (
        <Table columns = { table.columns } dataSource = { table.dataSource }  />
        );
}