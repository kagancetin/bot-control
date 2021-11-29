const { TableGroupType, TableType } = require("../types");
const { TableGroup, Table } = require("../../models");
const { GraphQLString, GraphQLInt, GraphQLID } = require("graphql");

const addTableGroup = {
  type: TableGroupType,
  description: "Create a table group",
  args: {
    tableGroupName: { type: GraphQLString },
    order: { type: GraphQLInt },
  },
  async resolve(parent, args) {
    const { tableGroupName, order } = args;
    const tableGroup = new TableGroup({
      tableGroupName,
      order,
    });
    return tableGroup.save();
  },
};

const modifyTableGroup = {
  type: TableGroupType,
  description: "Modify a table group",
  args: {
    tableGroupId: { type: GraphQLID },
    tableGroupName: { type: GraphQLString },
    order: { type: GraphQLInt },
  },
  async resolve(parent, args) {
    const { tableGroupId, tableGroupName, order } = args;
    return TableGroup.findByIdAndUpdate(tableGroupId, { tableGroupName, order }, { new: true });
  },
};

const addTable = {
  type: TableType,
  description: "Create a table group",
  args: {
    tableName: { type: GraphQLString },
    order: { type: GraphQLInt },
    tableGroupId: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const { tableName, order, tableGroupId } = args;
    const table = new Table({
      tableName,
      order,
      tableGroupId,
    });
    return table.save();
  },
};

module.exports = {
  addTableGroup,
  modifyTableGroup,
  addTable,
};
