import React from 'react';
import ReactDOM from 'react-dom';
import './css/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductIndex from './components/Index';
class App extends React.Component {
  render() {
    return (
      <ProductIndex component={ProductIndex}/>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
