import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import mainPage from './mainPage/mainPage.jsx';
import Navbar from '../containers/navbar';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={mainPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
