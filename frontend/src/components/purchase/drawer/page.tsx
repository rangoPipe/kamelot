import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { IPurchaseProps } from "../IPurchase";

import Input from "../../../general/input";
import Select from "../../../general/select";
import { MainStore } from "../../../redux/namespace";

export default function Page(props:IPurchaseProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: MainStore) => {
                     return { input: state.idInputPurchase };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { select: state.productSelectPurchase };  }} >
                        <Select />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.quantityInputPurchase };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.costbuyInputPurchase };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.costsaleInputPurchase };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
            </Row>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={ { "float":"right" } }>
                <Col span = { 24 } sm = {24} md = {24}>
                    <Button button = { { text: "Guardar", type: "primary", onClick: props.onAccept }} />
                    <Button button = { { text: "Cancelar", type: "ghost", onClick: props.hideDrawer }} />
                </Col>
            </Row>
        </div>
    );
}