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
});

const store = createStore(reducer);
export default store;