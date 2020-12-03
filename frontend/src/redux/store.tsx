import { createStore, combineReducers } from "redux";
import { namespaced } from 'redux-subspace';


//import button from "./reducers/general/button/button";
import control from "./reducers/general/control/control";
import textField from "./reducers/general/textField/textField";
import select from "./reducers/general/select/select";
//import check from "./reducers/general/check/check";
//import grid from "./reducers/general/grid/grid";
import table from "./reducers/general/table/table";
//import viewer from "./reducers/general/viewer/viewer";
//import snackbar from "./reducers/general/snackbar/snackbar";
import drawer from "./reducers/general/drawer/drawer";
import datepicker from "./reducers/general/datePicker/datePicker";

import { ProductNamespace } from "../common/enum/product/enumProduct";
import { EmployeeNamespace } from "../common/enum/employee/enumEmployee";
import { PersonNamespace } from "../common/enum/person/enumPerson";
import { ProviderNamespace } from "../common/enum/provider/enumProvider";
import { TableNamespace } from "../common/enum/table/enumTable";
import { PurchaseNamespace } from "../common/enum/purchase/enumPurchase";

const reducer = combineReducers<any>({
    
    //Product
    tableProduct: namespaced(ProductNamespace.table)(table),
    drawerProduct: namespaced(ProductNamespace.drawer)(drawer),
    idInputProduct: namespaced(ProductNamespace.id)(control),
    nameInputProduct: namespaced(ProductNamespace.name)(textField),
    purchaseInputProduct: namespaced(ProductNamespace.purchase)(textField),
    saleInputProduct: namespaced(ProductNamespace.sale)(textField),
    typeMaterialInputProduct: namespaced(ProductNamespace.typeMaterial)(textField),
    eanInputProduct: namespaced(ProductNamespace.ean)(textField),
    providerSelectProduct: namespaced(ProductNamespace.provider)(select),

    //Person
    tablePerson: namespaced(PersonNamespace.table)(table),
    drawerPerson: namespaced(PersonNamespace.drawer)(drawer),
    idInputPerson: namespaced(PersonNamespace.id)(control),
    typeDocumentInputPerson: namespaced(PersonNamespace.typeDocument)(textField),
    numberDocumentInputPerson: namespaced(PersonNamespace.numberDocument)(textField),
    firstNameInputPerson: namespaced(PersonNamespace.firstName)(textField),
    secondNameInputPerson: namespaced(PersonNamespace.secondName)(textField),
    firstLastnameInputPerson: namespaced(PersonNamespace.firstLastname)(textField),
    secondLastnameInputPerson: namespaced(PersonNamespace.secondLastname)(textField),
    telephoneInputPerson: namespaced(PersonNamespace.telephone)(textField),
    emailInputPerson: namespaced(PersonNamespace.email)(textField),
    birthdayDatepickerPerson: namespaced(PersonNamespace.birthday)(datepicker),
    clientInputPerson: namespaced(PersonNamespace.client)(textField),
    empleoyeeInputPerson: namespaced(PersonNamespace.empleoyee)(textField),

    //Provider
    tableProvider: namespaced(ProviderNamespace.table)(table),
    drawerProvider: namespaced(ProviderNamespace.drawer)(drawer),
    idInputProvider: namespaced(ProviderNamespace.id)(control),
    nameInputProvider: namespaced(ProviderNamespace.name)(textField),
    dateContractDatepickerProvider: namespaced(ProviderNamespace.dateContract)(datepicker),

    //Purchase
    tablePurchase: namespaced(PurchaseNamespace.table)(table),
    drawerPurchase: namespaced(PurchaseNamespace.drawer)(drawer),
    idInputPurchase: namespaced(PurchaseNamespace.id)(control),
    costbuyInputPurchase: namespaced(PurchaseNamespace.costBuy)(textField),
    costsaleInputPurchase: namespaced(PurchaseNamespace.costSale)(textField),
    quantityInputPurchase: namespaced(PurchaseNamespace.quantity)(textField),
    productSelectPurchase: namespaced(PurchaseNamespace.product)(select),

    //Table
    tableTable: namespaced(TableNamespace.table)(table),
    drawerTable: namespaced(TableNamespace.drawer)(drawer),
    idInputTable: namespaced(TableNamespace.id)(control),
    nameInputTable: namespaced(TableNamespace.name)(textField),
    capacityInputTable: namespaced(TableNamespace.capacity)(textField),

    //Employee
    tableEmployee: namespaced(EmployeeNamespace.table)(table),
    drawerEmployee: namespaced(EmployeeNamespace.drawer)(drawer),
    hierarchyInputEmployee: namespaced(EmployeeNamespace.hierarchy)(textField),
    salaryInputEmployee: namespaced(EmployeeNamespace.salary)(textField),
    
});

const store = createStore(reducer);

store.subscribe( () => {   
});

export default store;