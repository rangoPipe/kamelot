import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { IProviderProps } from "../IProvider";

import Input from "../../../general/input";
import Datepicker from "../../../general/datepicker";
import { MainStore } from "../../../redux/namespace";

export default function Page(props:IProviderProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: MainStore) => {
                     return { input: state.idInputProvider };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.nameInputProvider };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { datepicker: state.dateContractDatepickerProvider };  }} >
                        <Datepicker />
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