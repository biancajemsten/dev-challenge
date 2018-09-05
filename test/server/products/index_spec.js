/* global api, expect, describe, it, beforeEach */

const Product = require('../../../models/product');

const productData = [{
  supplier: 'New Co Ltd',
  name: 'Small wongle',
  price: 5
}];

describe('GET /products', () => {

  beforeEach(done => {
    Product.remove({})
      .then(() => Product.create(productData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api.get('/api/products')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array', done => {
    api.get('/api/products')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });
  it('should return an array of objects', done => {
    api.get('/api/products')
      .end((err, res) => {
        res.body.forEach(product => expect(product).to.be.an('object'));
        done();
      });
  });
  it('should return the correct data', done => {
    api.get('/api/products')
      .end((err, res) => {
        res.body.forEach((product, index) => {
          expect(product.supplier).to.eq(productData[index].supplier);
          expect(product.name).to.eq(productData[index].name);
          expect(product.price).to.eq(productData[index].price);
        });
        done();
      });
  });

});
