import React from 'react';
import { Button, Icon, Menu } from 'antd';

import './projectHeader.css';

const ProjectHeader = props => (
  <div>
    <div className="projectHeader">
      <div>
        <h2 style={{ color: '#20a0ff' }}>Test Project</h2>
        <p>{props.numberOfScreens} Screens</p>
      </div>
      <Button><Icon type="user-add" /></Button>
    </div>
    <Menu className="nav" mode="horizontal">
      <Menu className="nav__left" style={{ display: 'flex', width: '50%', justifyContent: 'flex-start' }}>
        <Menu.Item>Screens</Menu.Item>
        <Menu.Item>Boards</Menu.Item>
        <Menu.Item>Flow</Menu.Item>
      </Menu>
      <Menu className="nav__right" style={{ display: 'flex', width: '50%', justifyContent: 'flex-end' }}>
        <Menu.Item><Icon type="setting" /></Menu.Item>
        <Menu.Item><Icon type="caret-right" /></Menu.Item>
        <Menu.Item><Icon type="share-alt" alt="share" /></Menu.Item>
      </Menu>
    </Menu>
  </div>
);

export default ProjectHeader;
