import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Button } from 'antd';

import 'antd/dist/antd.css';
import './navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const userSettings = (
      <Menu>
        <Menu.Item>My Account</Menu.Item>
        <Menu.Item>New Features</Menu.Item>
        <Menu.Item>Suggest an idea</Menu.Item>
        <Menu.Divider />
        <Menu.Item>Sign Out</Menu.Item>
      </Menu>
    );
    return (
      <Menu className="nav" mode="horizontal">
        <Menu className="nav__left">
          <Menu.Item>Projects</Menu.Item>
          <Menu.Item>Activity</Menu.Item>
          <Menu.Item>People</Menu.Item>
        </Menu>
        <Menu className="nav__center">
          <Menu.Item>Logo</Menu.Item>
        </Menu>
        <Menu className="nav__right">
          <Menu.Item><Icon type="heart" /></Menu.Item>
          <Menu.Item><Icon type="heart" /></Menu.Item>
          <Menu.Item><Icon type="heart" /></Menu.Item>
          <Button>Noureldean</Button>
          <Dropdown placement="bottomLeft" overlay={userSettings}>
            <Icon type="down" />
          </Dropdown>
        </Menu>
      </Menu>
    );
  }
}

export default Navbar;
