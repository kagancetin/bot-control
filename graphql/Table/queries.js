const { TableGroupType, TableType } = require("../types");
const { TableGroup, Table } = require("../../models");
const { GraphQLString, GraphQLInt, GraphQLList } = require("graphql");

const allTableGroups = {
  type: new GraphQLList(TableGroupType),
  description: "Retrieves list of table groups",
  resolve(parent, args) {
    return TableGroup.find().sort("order");
  },
};

const allTables = {
  type: new GraphQLList(TableType),
  description: "Retrieves list of tables",
  resolve(parent, args) {
    return Table.find().sort("order");
  },
};

module.exports = { allTableGroups, allTables };
