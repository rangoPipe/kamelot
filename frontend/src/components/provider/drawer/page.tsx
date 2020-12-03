import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { IProviderProps } from "../IProvider";

import TextField from "../../../general/textField";
import Datepicker from "../../../general/datePicker";
import { IStore } from "../../../redux/namespace";

export default function Page(props:IProviderProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                    <SubspaceProvider mapState={(state: IStore) => {
                     return { textField: state.idInputProvider };  }} >
                        <TextField />
                    </SubspaceProvider>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.nameInputProvider };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { datePicker: state.dateContractDatepickerProvider };  }} >
                        <Datepicker />
                    </SubspaceProvider>
                </Col>
            </Row>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} style={ { "float":"right" } }>
                <Col span = { 24 } sm = {24} md = {24}>
                    <Button button = { { text: "Guardar", onClick: props.onAccept, color:"primary", variant:"text"  }} />
                    <Button button = { { text: "Cancelar", onClick: props.hideDrawer, color:"secondary" }} />
                </Col>
            </Row>
        </div>
    );
}