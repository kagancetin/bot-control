const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLFloat, GraphQLBoolean, GraphQLInt } = require("graphql");

const { TableGroup, ProductGroup, ProductOption } = require("../models");

const TableType = new GraphQLObjectType({
  name: "Table",
  description: "Table type",
  fields: () => ({
    _id: { type: GraphQLID },
    tableName: { type: GraphQLString },
    order: { type: GraphQLInt },
    tableGroup: {
      type: TableGroupType,
      resolve(parent) {
        return TableGroup.findById(parent.tableGroupId);
      },
    },
  }),
});

const TableGroupType = new GraphQLObjectType({
  name: "TableGroup",
  description: "Table Group type",
  fields: () => ({
    _id: { type: GraphQLID },
    tableGroupName: { type: GraphQLString },
    order: { type: GraphQLInt },
  }),
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  description: "Product type",
  fields: () => ({
    _id: { type: GraphQLID },
    productName: { type: GraphQLString },
    order: { type: GraphQLInt },
    price: { type: GraphQLFloat },
    productOptions: {
      type: ProductOptionType,
      resolve(parent) {
        return ProductGroup.findById(parent.productGroupId);
      },
    },
    productGroup: {
      type: { GraphQLList: { type: ProductGroupType } },
      resolve(parent) {
        return ProductGroup.findById(parent.productGroupId);
      },
    },
  }),
});

const ProductGroupType = new GraphQLObjectType({
  name: "ProductGroup",
  description: "Product Group type",
  fields: () => ({
    _id: { type: GraphQLID },
    productGroupName: { type: GraphQLString },
    order: { type: GraphQLInt },
  }),
});

const ProductOptionType = new GraphQLObjectType({
  name: "ProductOption",
  description: "Product Option type",
  fields: () => ({
    _id: { type: GraphQLID },
    productGroupName: { type: GraphQLString },
    order: { type: GraphQLInt },
  }),
});

module.exports = {
  TableType,
  TableGroupType,
  ProductType,
  ProductGroupType,
  ProductOptionType,
};
