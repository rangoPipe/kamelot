import { Router } from "express";
import { indexController } from "../controller/indexController";
import _rtsProduct from "./product";
import _rtsProvider from "./provider";
import _rtsTable from "./table";
import _rtsPurchase from "./purchase";

const main:Router = Router();


main.get('/', indexController.index);


export default [
    main, 
    _rtsProduct,
    _rtsProvider,
    _rtsTable,
    _rtsPurchase
];