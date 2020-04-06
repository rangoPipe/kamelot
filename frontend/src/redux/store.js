import { createStore, combineReducers } from "redux";
import { namespaced } from 'redux-subspace';

import button from "./reducer/general/button/button";
import input from "./reducer/general/input/input";
import select from "./reducer/general/select/select";
import table from "./reducer/general/table/table";
import message from "./reducer/general/message/message";
import card from "./reducer/general/card/card";
import drawer from "./reducer/general/drawer/drawer";
import { ProductNamespace } from "../common/enum/product/enumProduct";
import { EmployeeNamespace } from "../common/enum/employee/enumEmployee";
import { PersonNamespace } from "../common/enum/person/enumPerson";

const reducer = combineReducers({
    button: namespaced("namespace.contextNs")(button),
    input: namespaced("namespace.contextNs")(input),
    select: namespaced("namespace.contextNs")(select),
    table: namespaced("namespace.contextNs")(table),
    message: namespaced("namespace.contextNs")(message),
    card: namespaced("namespace.contextNs")(card),
    drawer: namespaced("namespace.contextNs")(drawer),

    //Product
    tableProduct: namespaced(ProductNamespace.table)(table),
    drawerProduct: namespaced(ProductNamespace.drawer)(drawer),

    //Person
    tablePerson: namespaced(PersonNamespace.table)(table),
    drawerPerson: namespaced(PersonNamespace.drawer)(drawer),
    idInputPerson: namespaced(PersonNamespace.id)(input),
    typeDocumentInputPerson: namespaced(PersonNamespace.typeDocument)(input),
    numberDocumentInputPerson: namespaced(PersonNamespace.numberDocument)(input),
    firstNameInputPerson: namespaced(PersonNamespace.firstName)(input),
    secondNameInputPerson: namespaced(PersonNamespace.secondName)(input),
    firstLastnameInputPerson: namespaced(PersonNamespace.firstLastname)(input),
    secondLastnameInputPerson: namespaced(PersonNamespace.secondLastname)(input),
    telephoneInputPerson: namespaced(PersonNamespace.telephone)(input),
    emailInputPerson: namespaced(PersonNamespace.email)(input),
    birthdayInputPerson: namespaced(PersonNamespace.birthday)(input),
    clientInputPerson: namespaced(PersonNamespace.client)(input),
    empleoyeeInputPerson: namespaced(PersonNamespace.empleoyee)(input),

    //Employee
    tableEmployee: namespaced(EmployeeNamespace.table)(table),
    drawerEmployee: namespaced(EmployeeNamespace.drawer)(drawer),
    hierarchyInputEmployee: namespaced(EmployeeNamespace.hierarchy)(input),
    salaryInputEmployee: namespaced(EmployeeNamespace.salary)(input),
});

const store = createStore(reducer);
export default store;