const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  supplier: {type: String, required: 'Supplier is required'},
  name: {type: String, required: 'Product name is required'},
  price: {type: Number, required: 'Price is required'}
});

module.exports = mongoose.model('Product', productSchema);
