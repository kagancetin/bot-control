const express = require("express");
const router = express.Router();

//*** graphql ***//
const { graphqlHTTP } = require("express-graphql");
const schema = require("../graphql/schema");
const { graphql } = require("graphql");


router.route("/").get(async (req, res, next) => {
    res.render("pages/index");
});

router.route("/blank").get(async (req, res, next) => {
    res.render("pages/blank");
});

router.route("/tables").get(async (req, res, next) => {
    res.render("pages/tables");
});

router.route("/dayoftheend").get(async (req, res, next) => {
    res.render("pages/dayoftheend");
});

router.route("/settings").get(async (req, res, next) => {
    res.render("pages/settings");
});

router.route("/tableSettings").get(async (req, res, next) => {
    res.render("pages/tableSettings");
});

router.route("/userSettings").get(async (req, res, next) => {
    res.render("pages/userSettings");
});

router.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

module.exports = router;