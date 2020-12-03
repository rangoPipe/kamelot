import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { IEmployeeProps } from "../IEmployee";

import TextField from "../../../general/textField"
import { IStore } from "../../../redux/namespace";

export default function Page(props:IEmployeeProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <input type="hidden" id="IdPersona" value="" /> 
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.hierarchyInputEmployee };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { textField: state.salaryInputEmployee };  }} >
                        <TextField />
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