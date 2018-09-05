import React from 'react';
import axios from 'axios';

class ProductIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      products: [],
      supplier: '',
      product: ''
    };
  }

  componentDidMount() {
    axios({
      url: '/api/products',
      method: 'GET'
    })
      .then(res => this.setState({products: res.data}));
  }

  //function that creates a list of unique suppliers or products depending on input
  uniqueList = (type) => {
    return type === 'supplier' ? Array.from( new Set(this.state.products.map(product => product.supplier))) : Array.from( new Set(this.state.products.map(product => product.name)));
  }

  // sets supplier or product on state to the value of the drop down depending on which one changed
  handleChange = (e) => {
    e.target.id === 'selSupplier' ? this.setState({supplier: e.target.value}) : this.setState({product: e.target.value});
  }

  //returns a list of products filtered by the inputs of the supplier AND product drop downs
  sortedProducts = () => {
    return this.filterByProducts(this.filterBySuppliers(this.state.products));
  }

  //returns a list of products filtered by the selection in the drop down
  filterBySuppliers = (products) => {
    const filtered =  products.filter(product => {
      if (product.supplier === this.state.supplier) return product;
    });
    return filtered;
  }

  //returns a list of products filtered by the selection in the drop down and takes the return of filteredBySuppliers as an input
  filterByProducts = (products) => {
    return products.filter(product => {
      if (product.name === this.state.product) return product;
    });
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
                  <select defaultValue ='Please Select One' onChange={this.handleChange} className="form-control" id="selSupplier">
                    <option disabled>Please Select One</option>
                    {this.uniqueList('supplier').map((supplier, i) =>
                      <option key={i}>{supplier}</option>
                    )}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="selProduct">Product</label>
                  <select defaultValue ='Please Select One'onChange={this.handleChange} className="form-control" id="selProduct">
                    <option disabled>Please Select One</option>
                    {this.uniqueList('product').map((product, i) =>
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
                  {this.sortedProducts().map(product =>
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
