import * as React from "react";
import { Row, Col } from "antd";
import { SubspaceProvider } from "react-redux-subspace";

import { ButtonClass as Button } from "../../../general/button";
import { IPersonProps } from "../IPerson";

import TextField from "../../../general/textField";
import Datepicker from "../../../general/datePicker";
import { IStore } from "../../../redux/namespace";

export default function Page(props:IPersonProps) {
    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.idInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => { return { textField: state.typeDocumentInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { textField: state.numberDocumentInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { textField: state.firstNameInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { textField: state.secondNameInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { textField: state.firstLastnameInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { textField: state.secondLastnameInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { textField: state.emailInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { textField: state.telephoneInputPerson };  }} >
                        <TextField />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: IStore) => {  return { datepicker: state.birthdayDatepickerPerson };  }} >
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