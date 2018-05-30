import React, { Component } from 'react';
import ProjectHeader from '../projectHeader/projectHeader';
import Screens from '../screens/screens';

import './mainPage.css';

class mainPage extends Component {
  constructor() {
    super();
    this.state = { };
  }

  render() {
    return (
      <div>
        <ProjectHeader numberOfScreens={1} />
        <Screens />
      </div>
    );
  }
}

export default mainPage;
