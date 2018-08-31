const Product = require('../models/product');

function indexRoute(req, res, next){
  Product.find()
    .then(products => res.json(products))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
