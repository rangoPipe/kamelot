import * as React from "react";
import { Row, Col, PageHeader, Button, Icon } from "antd";
import { SubspaceProvider } from "react-redux-subspace";
import { MainStore } from "../../redux/namespace";

import Table from "../../general/table";
import Drawer from "../../general/drawer";
import { IProductProps } from "./IProduct";

export default function Page(props:IProductProps){

    const { showDrawer } = props;
    return (
    <div>
        <Row>
            <Col span = { 24 }>
            <PageHeader
                ghost={false}
                title="Productos"
                extra={[
                    <Button key="1" type="primary" onClick = { showDrawer }><Icon type="plus" /> Agregar </Button>,
                ]}
            >
            </PageHeader>
            </Col>
        </Row>
        <Row>
            <Col span = { 24 }>
                <SubspaceProvider mapState={(state: MainStore) => {  return { table: state.tableProduct };  }} >
                    <Table />
                </SubspaceProvider>
            </Col>
        </Row>
        <SubspaceProvider mapState={(state: MainStore) => {  return { drawer: state.drawerProduct };  }} >
            <Drawer />
        </SubspaceProvider>

    </div>);
}