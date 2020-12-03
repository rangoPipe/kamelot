import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { IPurchaseProps } from "../IPurchase";

import TextField from "../../../general/textField";
import Select from "../../../general/select";
import { IStore } from "../../../redux/namespace";

export default function Page(props:IPurchaseProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <SubspaceProvider mapState={(state: IStore) => {
                    return { textField: state.idInputPurchase };  }} >
                    <TextField />
                </SubspaceProvider>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { select: state.productSelectPurchase };  }} >
                        <Select />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.quantityInputPurchase };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.costbuyInputPurchase };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.costsaleInputPurchase };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
            </Row>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={ { "float":"right" } }>
                <Col span = { 24 } sm = {24} md = {24}>
                    <Button button = { { text: "Guardar", color: "primary", variant:"contained", onClick: props.onAccept }} />
                    <Button button = { { text: "Cancelar", type: "ghost", onClick: props.hideDrawer }} />
                </Col>
            </Row>
        </div>
    );
}