const mongoose = require("mongoose");

const tableGroupSchema = new mongoose.Schema(
  {
    tableGroupName: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      default: 1,
    },
  },
);

module.exports = mongoose.model("tableGroup", tableGroupSchema);