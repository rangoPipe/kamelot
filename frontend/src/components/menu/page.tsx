import * as React from 'react';
import { collectionName } from '../../common/enum/collectionName';
import { IMenuProps } from './IMenu';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import InboxIcon from '@material-ui/icons/MoveToInbox';

export default function Page(props:IMenuProps) {
    const { onChange } = props;
    return <div>
        <Divider />
        <List>
            <ListItem button key={collectionName.EMPLOYEE} onClick = {(e) => onChange(collectionName.EMPLOYEE) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.EMPLOYEE} />
            </ListItem>
            <ListItem button key={collectionName.PRODUCT} onClick = {(e) => onChange(collectionName.PRODUCT) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.PRODUCT} />
            </ListItem>
            <ListItem button key={collectionName.PERSON} onClick = {(e) => onChange(collectionName.PERSON) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.PERSON} />
            </ListItem>
            <ListItem button key={collectionName.PROVIDER} onClick = {(e) => onChange(collectionName.PROVIDER) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.PROVIDER} />
            </ListItem>
            <ListItem button key={collectionName.PURCHASE} onClick = {(e) => onChange(collectionName.PURCHASE) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.PURCHASE} />
            </ListItem>
            <ListItem button key={collectionName.SALE} onClick = {(e) => onChange(collectionName.SALE) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.SALE} />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key={collectionName.TABLE} onClick = {(e) => onChange(collectionName.TABLE) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.TABLE} />
            </ListItem>
            <ListItem button key={collectionName.WORKSHIFT} onClick = {(e) => onChange(collectionName.WORKSHIFT) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.WORKSHIFT} />
            </ListItem>            
            <ListItem button key={collectionName.BILL} onClick = {(e) => onChange(collectionName.BILL) }>
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary={collectionName.BILL} />
            </ListItem>
        </List>
    </div>
}