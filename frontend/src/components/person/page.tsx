import * as React from "react";
import { IPersonProps } from "./IPerson";
import { Row, Col, PageHeader, Button, Icon } from "antd";
import { SubspaceProvider } from "react-redux-subspace";
import { MainStore } from "../../redux/namespace";

import Table from "../../general/table";
import Drawer from "../../general/drawer";


export default function Page(props:IPersonProps) {

    const { showDrawer } = props;
    return (
        <div>
            <Row>
                <Col span = { 24 }>
                <PageHeader
                    ghost={false}
                    title="Personas"
                    extra={[
                        <Button key="1" type="primary" onClick = { showDrawer }><Icon type="plus" /> Agregar </Button>,
                    ]}
                >
                </PageHeader>
                </Col>
            </Row>
            <Row>
                <Col span = { 24 }>
                    <SubspaceProvider mapState={(state: MainStore) => {  return { table: state.tablePerson };  }} >
                        <Table />
                    </SubspaceProvider>
                </Col>
            </Row>
            <SubspaceProvider mapState={(state: MainStore) => {  return { 
                drawer: state.drawerPerson,
                idInputPerson: state.idInputPerson,
                typeDocumentInputPerson: state.typeDocumentInputPerson, 
                numberDocumentInputPerson : state.numberDocumentInputPerson, 
                firstNameInputPerson : state.firstNameInputPerson, 
                secondNameInputPerson : state.secondNameInputPerson, 
                firstLastnameInputPerson : state.firstLastnameInputPerson, 
                secondLastnameInputPerson : state.secondLastnameInputPerson, 
                birthdayInputPerson : state.birthdayInputPerson, 
                telephoneInputPerson : state.telephoneInputPerson, 
                emailInputPerson : state.emailInputPerson,  };  }} >
                <Drawer />
            </SubspaceProvider>

        </div>
    );
}