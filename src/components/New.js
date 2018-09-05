import React from 'react';
import axios from 'axios';

class ProductNew extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    };
  }

  //function that sets state to the of the field id to its value
  handleChange = ({ target: { id, value }}) => {
    this.setState({ [id]: value });
  }

  //function that creates new product and redirects to index page
  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: '/api/products',
      data: this.state
    })
      .then(() => this.props.history.push('/'));
  }


  render(){
    return(
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-sm-12 col-md-12 main">
            <h1 className="page-header">Add a new product</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="supplier">Supplier</label>
                  <input type="text" onChange={this.handleChange} className="form-control" id="supplier" placeholder="Supplier Name"></input>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Product</label>
                  <input type="text" onChange={this.handleChange} className="form-control" id="name" placeholder="Product Name"></input>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="price">Price</label>
                  <input type="text" onChange={this.handleChange} className="form-control" id="price" placeholder="Price"></input>
                </div>
                <button className="btn btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductNew;
