import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  render(){
    return(
      <div className="container-fluid">
        <nav>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">Product List</Link>
            <Link className="nav-item nav-link" to="/new">Add New Product</Link>
          </div>
        </nav>

      </div>
    );
  }

}

export default withRouter(Navbar);
