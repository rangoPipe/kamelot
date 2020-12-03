import * as React from "react";
import { IPurchaseProps } from "./IPurchase";
import { Row, Col, PageHeader } from "antd";
import { SubspaceProvider } from "react-redux-subspace";
import { IStore } from "../../redux/namespace";

import Table from "../../general/table";
import Drawer from "../../general/drawer";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";


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
                        <Button key="1" variant="contained" color="primary" startIcon={<Add />} onClick={ showDrawer }> Agregar</Button>
                    ]}
                >
                </PageHeader>
                </Col>
            </Row>
            <Row>
                <Col span = { 24 }>
                    <SubspaceProvider mapState={(state: IStore) => {  return { table: state.tableProvider };  }} >
                        <Table />
                    </SubspaceProvider>
                </Col>
            </Row>
            <SubspaceProvider mapState={(state: IStore) => {
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