const mongoose = require("mongoose");

//Schema to product model
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  locationId: {
    type: Number,
    default: 0,
  },
  familyId: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;