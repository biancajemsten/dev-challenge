import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/collapse';

import ProductIndex from './components/Index';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar/>
          <Route path='/' component={ProductIndex}/>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
