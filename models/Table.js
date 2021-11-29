const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  tableName: {
    type: String,
    required: true,
  },
  tableGroupId: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("table", tableSchema);
