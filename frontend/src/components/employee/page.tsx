import * as React from "react";
import { IEmployeeProps } from "./IEmployee";
import { Row, Col, PageHeader, Button, Icon } from "antd";
import { SubspaceProvider } from "react-redux-subspace";
import { MainStore } from "../../redux/namespace";

import Table from "../../general/table";
import Drawer from "../../general/drawer";


export default function Page(props:IEmployeeProps) {

    const { showDrawer } = props;
    return (
        <div>
            <Row>
                <Col span = { 24 }>
                <PageHeader
                    ghost={false}
                    title="Empleados"
                    extra={[
                        <Button key="1" type="primary" onClick = { showDrawer }><Icon type="plus" /> Agregar </Button>,
                    ]}
                >
                </PageHeader>
                </Col>
            </Row>
            <Row>
                <Col span = { 24 }>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { table: state.tableEmployee };  }} >
                        <Table />
                    </SubspaceProvider>
                </Col>
            </Row>
            <SubspaceProvider mapState={(state: MainStore) => {  return { drawer: state.drawerEmployee, salaryInputEmployee: state.salaryInputEmployee, hierarchyInputEmployee : state.hierarchyInputEmployee };  }} >
                <Drawer />
            </SubspaceProvider>

        </div>
    );
}