const mongoose = require("mongoose");

const productGroupSchema = new mongoose.Schema({
  productGroupName: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("productGroup", productGroupSchema);
