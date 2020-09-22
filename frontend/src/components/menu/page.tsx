import * as React from 'react';
import { Menu, Icon } from 'antd';
import { collectioneName } from '../../common/enum/collectionName';
import { IMenuProps } from './IMenu';


export default function Page(props:IMenuProps) {
    const { onChange } = props;
    return <div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key={collectioneName.EMPLOYEE } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="user" />
                <span className="nav-text">{collectioneName.EMPLOYEE}</span>
            </Menu.Item>
            <Menu.Item key={collectioneName.PRODUCT } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="user" />
                <span className="nav-text">{collectioneName.PRODUCT}</span>
            </Menu.Item>
            <Menu.Item key={collectioneName.PERSON } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="video-camera" />
                <span className="nav-text">{collectioneName.PERSON}</span>
            </Menu.Item>
            <Menu.Item key={collectioneName.PROVIDER } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="upload" />
                <span className="nav-text">{collectioneName.PROVIDER}</span>
            </Menu.Item>
            <Menu.Item key={collectioneName.PURCHASE } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="bar-chart" />
                <span className="nav-text">{collectioneName.PURCHASE}</span>
            </Menu.Item>
            <Menu.Item key={collectioneName.SALE } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="cloud-o" />
                <span className="nav-text">{collectioneName.SALE}</span>
            </Menu.Item>
            <Menu.Item key={collectioneName.TABLE } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="appstore-o" />
                <span className="nav-text">{collectioneName.TABLE} </span>
            </Menu.Item>
            <Menu.Item key={collectioneName.WORKSHIFT } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="team" />
                <span className="nav-text">{collectioneName.WORKSHIFT}</span>
            </Menu.Item>
            <Menu.Item key={collectioneName.BILL } onClick = {(e) => { onChange(e.key);
             }}>
                <Icon type="team" />
                <span className="nav-text">{collectioneName.BILL}</span>
            </Menu.Item>
        </Menu>
    </div>
}