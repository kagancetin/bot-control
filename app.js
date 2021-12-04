const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const helpers = require("handlebars-helpers")()
const flash = require("connect-flash")
const session = require("express-session")
const path = require("path")
const {connectDB} = require("./db")
const clientPromise = connectDB()
const morgan = require("morgan")
const handlebarsHelpers = require("./helpers/handlebarsHelpers")
const fs = require("fs")
const allHelpers = {...helpers, ...handlebarsHelpers}

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json()).use(
  express.urlencoded({
    extended: true
  })
)

app.use(morgan("dev"))
// Template Engine
const hbs = exphbs.create({
  extname: "handlebars",
  defaultLayout: "main",
  helpers: allHelpers
})
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname, "views"))

app.use("/", require("./router/index"))

const server = app.listen(3000, () =>
  console.log(`Express server listening on port 3000`)
)