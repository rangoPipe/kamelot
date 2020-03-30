import * as React from "react";
import { Row, Col } from "antd";
import { InputClass as Input} from "../../../general/input/index";
import { ButtonClass as Button} from "../../../general/button/index";

export default function Page(){

    return (
        <div>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <input type="hidden" id="idProduct" value="" /> 
                <Col span = { 24 } sm = {24} md = {12}>
                    <Input input = { { type : "text", placeholder : "Nombre" }} />
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <Input input = { { type : "text", placeholder : "Proveedor" }} />
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <Input input = { { type : "text", placeholder : "Tipo material" }} />
                </Col>
                <Col span = { 24 } sm = {24} md = {12}>
                    <Input input = { { type : "text", placeholder : "Código EAN" }} />
                </Col>
            </Row>
            <Row gutter = {[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                <Col span = { 24 } sm = {24} md = {12}>
                    <Button button = { { text: "Guardar", type: "primary" }} />
                </Col>
            </Row>
        </div>);
}


/*_id : id,
            name : nombre,
            provider : idProveedor,
            TypeMaterial : idType,
            ean,
            dateCreate : new Date()*/