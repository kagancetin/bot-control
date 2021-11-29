const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productGroupId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      get: (val) => {
        return (val / 100).toFixed(2);
      },
      set: (val) => {
        return val * 100;
      },
    },
    order: {
      type: Number,
      default: 1,
    },
    productOptions: [{ type: String }],
  },
  {
    toJSON: {
      getters: true,
      setters: true,
    },
  },
);

module.exports = mongoose.model("product", productSchema);
