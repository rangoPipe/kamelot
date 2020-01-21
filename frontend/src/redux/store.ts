import { createStore, combineReducers } from "redux";
import { namespaced } from 'redux-subspace';

import button from "./reducer/general/button/button";

const reducer = combineReducers<any>({
    button: namespaced("namespace.contextNs")(button),
});

export default createStore(reducer);