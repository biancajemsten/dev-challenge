import React from 'react';
import axios from 'axios';

class ProductIndex extends React.Component{

  constructor(props){
    super(props);
    this.unique = this.unique.bind(this);
    this.state = {
      products: []
    };
  }

  //function that creates a list of unique suppliers or products depending on input
  unique = (type) => {
    return type === 'supplier' ? this.state.products.map(product => product.supplier) : this.state.products.map(product => product.name);
  }

  componentDidMount() {
    axios({
      url: '/api/products',
      method: 'GET'
    })
      .then(res => this.setState({products: res.data}))
      .then(res => console.log(res));
  }


  render(){
    if(!this.state.products) return <h2 className="title">Loading...</h2>;
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 main">
            <h1 className="page-header">Product pricing</h1>

            <form>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="selSupplier">Supplier</label>
                  <select className="form-control" id="selSupplier">
                    {this.unique('supplier').map((supplier, i) =>
                      <option key={i}>{supplier}</option>
                    )}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="selProduct">Product</label>
                  <select className="form-control" id="selProduct">
                    {this.unique('product').map((product, i) =>
                      <option key={i}>{product}</option>
                    )}
                  </select>
                </div>
              </div>
            </form>

            <h2 className="sub-header">Product details</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Supplier</th>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.products.map(product =>
                    <tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.supplier}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductIndex;
