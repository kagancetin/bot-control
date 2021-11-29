const mongoose = require("mongoose");

const productOptionSchema = new mongoose.Schema({
  productOptionName: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
    },
  ],
  order: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("productOption", productOptionSchema);
