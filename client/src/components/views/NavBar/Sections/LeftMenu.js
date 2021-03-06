import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/ngoregister">Register Your NGO</a>
    </Menu.Item>
    <Menu.Item key="clubs">
      <a href="/jobs">Jobs</a>
    </Menu.Item>
    <Menu.Item key="events">
      <a href="/vacancy">Add Vacancy</a>
    </Menu.Item>
    <Menu.Item key="events">
      <a href="/getngo">NGOs</a>
    </Menu.Item>
    <SubMenu title={<span>Help</span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">FAQ</Menu.Item>
        <Menu.Item key="setting:2">Submit query</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Contact Us</Menu.Item>
        <Menu.Item key="setting:4">Sugestions</Menu.Item>
      </MenuItemGroup>
    </SubMenu>   
  </Menu>
  )
}

export default LeftMenu