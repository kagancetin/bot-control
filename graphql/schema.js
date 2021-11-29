const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const { allTableGroups, allTables } = require("./Table/queries");

const { addTableGroup, modifyTableGroup, addTable } = require("./Table/mutations");

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: {
    allTableGroups,
    allTables,
  },
});

// Define MutationType
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {
    addTableGroup,
    modifyTableGroup,
    addTable,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
