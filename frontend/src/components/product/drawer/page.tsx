import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { IProductProps } from "../IProduct";

import TextField from "../../../general/textField";
import Select from "../../../general/select";

import { IStore } from "../../../redux/namespace";

export default function Page(props:IProductProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <SubspaceProvider mapState={(state: IStore) => {
                    return { textField: state.idInputProduct };  }} >
                    <TextField />
                </SubspaceProvider>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.nameInputProduct };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.eanInputProduct };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.purchaseInputProduct };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.saleInputProduct };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.typeMaterialInputProduct };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { select: state.providerSelectProduct };  }} >
                        <Select />
                    </SubspaceProvider>
                </Col>
            </Row>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={ { "float":"right" } }>
                <Col span = { 24 } sm = {24} md = {24}>
                    <Button button = { { text: "Guardar", type: "primary", onClick: props.onAccept, color:"primary", variant:"text"  }} />
                    <Button button = { { text: "Cancelar", type: "ghost", onClick: props.hideDrawer, color:"secondary" }} />
                </Col>
            </Row>
        </div>
    );
}