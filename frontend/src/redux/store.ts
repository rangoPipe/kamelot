import { createStore, combineReducers } from "redux";
import { namespaced } from 'redux-subspace';

import button from "./reducer/general/button/button";
import input from "./reducer/general/input/input";
import select from "./reducer/general/select/select";
import table from "./reducer/general/table/table";
import message from "./reducer/general/message/message";
import card from "./reducer/general/card/card";

const reducer = combineReducers<any>({
    button: namespaced("namespace.contextNs")(button),
    input: namespaced("namespace.contextNs")(input),
    select: namespaced("namespace.contextNs")(select),
    table: namespaced("namespace.contextNs")(table),
    message: namespaced("namespace.contextNs")(message),
    card: namespaced("namespace.contextNs")(card),
});

export default createStore(reducer);