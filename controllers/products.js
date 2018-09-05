const Product = require('../models/product');

function indexRoute(req, res, next){
  Product.find()
    .then(products => res.json(products))
    .catch(next);
}

function createRoute(req, res, next){
  Product
    .create(req.body)
    .then(product => res.status(201).json(product))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute
};
