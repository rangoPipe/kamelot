import * as React from "react";
import { Layout } from "antd";
import { IMainProps } from "./IMain";
import Menu from "../menu";
import Header from "../header";
import './style.css';
import { collectioneName } from "../../common/enum/collectionName";


import Product from "../product";
import Employee from "../employee";
import Provider from "../provider";
import Person from "../person";

const { Content, Footer, Sider } = Layout;

function getContent(content:collectioneName | null | undefined) {
    switch(content) {
        case collectioneName.EMPLOYEE:
            return <Employee />;
        case collectioneName.PRODUCT:
            return <Product />;
        case collectioneName.PROVIDER:
                return <Provider />;
        case collectioneName.PERSON:
            return <Person />;
        default:
            return <div></div>;
    }
}

export default function Page(props:IMainProps) {

    const { onChange, content } = props;

    const styleSiderMenu:React.CSSProperties = {
        height: '100vh',
        left: 0,
    }

    return (
        <Layout>
            <Sider style = { styleSiderMenu } >
                <Menu onChange = {onChange } />
            </Sider>
            <Layout>
                <Header />
                <Content style={{ margin: '24px 16px 0' }}>
                    { getContent(content)}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Kamelot Bar ©{new Date().getFullYear()} Created by Cepilloman</Footer>
            </Layout>
        </Layout>
    );
}