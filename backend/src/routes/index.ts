import { Router } from "express";
import _rtsProduct from "./common/product";
import _rtsProvider from "./common/provider";
import _rtsTable from "./common/table";
import _rtsPurchase from "./core/purchase";
import _rtsPerson from './common/person';
import _rtsEmpleoyee from './common/empleoyee';
import _rtsHierarchy from './common/hierarchy';

const main:Router = Router();

export default [
    main, 
    _rtsProduct,
    _rtsProvider,
    _rtsTable,
    _rtsPurchase,
    _rtsPerson,
    _rtsEmpleoyee,
    _rtsHierarchy
];