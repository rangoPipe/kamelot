import * as React from "react";
import { IPurchaseProps } from "./IPurchase";
import { Row, Col, PageHeader, Button, Icon } from "antd";
import { SubspaceProvider } from "react-redux-subspace";
import { MainStore } from "../../redux/namespace";

import Table from "../../general/table";
import Drawer from "../../general/drawer";


export default function Page(props:IPurchaseProps) {

    const { showDrawer } = props;
    return (
        <div>
            <Row>
                <Col span = { 24 }>
                <PageHeader
                    ghost={false}
                    title="Compras"
                    extra={[
                        <Button key="1" type="primary" onClick = { showDrawer }><Icon type="plus" /> Agregar </Button>,
                    ]}
                >
                </PageHeader>
                </Col>
            </Row>
            <Row>
                <Col span = { 24 }>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { table: state.tableProvider };  }} >
                        <Table />
                    </SubspaceProvider>
                </Col>
            </Row>
            <SubspaceProvider mapState={(state: MainStore) => {
             return { 
                drawer: state.drawerProvider,
                idInputPurchase: state.idInputPurchase,
                costbuyInputPurchase: state.costbuyInputPurchase, 
                costsaleInputPurchase : state.costsaleInputPurchase, 
                quantityInputPurchase : state.quantityInputPurchase, 
                productSelectPurchase : state.productSelectPurchase,  };  }} >
                <Drawer />
            </SubspaceProvider>

        </div>
    );
}