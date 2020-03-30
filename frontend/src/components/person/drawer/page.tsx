import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { IPersonProps } from "../IPerson";

import Input from "../../../general/input"
import { MainStore } from "../../../redux/namespace";

export default function Page(props:IPersonProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <input type="hidden" id="IdPersona" value="" /> 
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.hierarchyInputEmployee };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.salaryInputEmployee };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
            </Row>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col span = { 24 } sm = {24} md = {12}>
                    <Button button = { { text: "Guardar", type: "primary", onClick: props.onAccept }} />
                </Col>
            </Row>
        </div>
    );
}