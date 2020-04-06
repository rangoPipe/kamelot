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
                <Col span = { 24 } sm = {24} md = {24}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.idInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => { return { input: state.typeDocumentInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.numberDocumentInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.firstNameInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.secondNameInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.firstLastnameInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.secondLastnameInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.emailInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.telephoneInputPerson };  }} >
                        <Input />
                    </SubspaceProvider>
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { input: state.birthdayInputPerson };  }} >
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