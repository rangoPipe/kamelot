import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { ITableProps } from "../ITable";

import Input from "../../../general/input";
import { MainStore } from "../../../redux/namespace";

export default function Page(props:ITableProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: MainStore) => {
                     return { input: state.idInputTable };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.nameInputTable };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.capacityInputTable };  }} >
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