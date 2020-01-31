import * as React from "react";
import { Drawer } from 'antd';
import { IDrawerProps } from "./IDrawer";

export default function Page(props:IDrawerProps) {
    const { drawer } = props;
    
    return (
        <Drawer
            title = { drawer.title }
            placement={ drawer.placement }
            closable={ drawer.closable }
            onClose={ drawer.onClose }
            visible = { drawer.visible }
        >
            { drawer.body }
        </Drawer>);
}