const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Product = require('../models/product');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Product.create([{
      supplier: 'New Co Ltd',
      name: 'Small wongle',
      price: '5'
    }]))
    .then(products => console.log(`${products.length} product(s) created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
