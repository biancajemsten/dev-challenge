/* global api, expect, describe, it, beforeEach */

const Product = require('../../../models/product');

const productData = [{
  supplier: 'New Co Ltd',
  name: 'Small wongle',
  price: 5
}];

describe('POST /api/products', () => {

  beforeEach(done => {
    Product.remove({})
      .then(() => done());
  });

  it('should return a 201 response', done => {
    api.post('/api/products')
      .send(productData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });


  it('should return the correct data', done => {
    api.post('/api/products')
      .send(productData)
      .end((err, res) => {
        expect(res.body.supplier).to.eq(productData.supplier);
        expect(res.body.name).to.eq(productData.name);
        expect(res.body.price).to.eq(productData.price);
        done();
      });
  });

});
