import * as React from "react";
import { IMainProps } from "./IMain";
import Menu from "../menu";
import './style.css';
import { collectionName } from "../../common/enum/collectionName";


import Product from "../product";
import Employee from "../employee";
import Provider from "../provider";
import Person from "../person";
import Table from "../table";
import Purchase from "../purchase";
import { AppBar, Drawer, IconButton, Toolbar } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';

function getContent(content:collectionName | null | undefined) {
    switch(content) {
        case collectionName.EMPLOYEE:
            return <Employee />;
        case collectionName.PRODUCT:
            return <Product />;
        case collectionName.PROVIDER:
            return <Provider />;
        case collectionName.PERSON:
            return <Person />;
        case collectionName.TABLE:
            return <Table />;
        case collectionName.PURCHASE:
            return <Purchase />;
        default:
            return <div></div>;
    }
}


export default function Page(props:IMainProps) {
    const { onChange, content } = props;
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <div >
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>        
        <Menu onChange = { onChange } />
      </Drawer>
      <main style={{ padding:"60pt 10pt 60pt 10pt" }}>
        { getContent(content)}
      </main>
    </div>
    );
}