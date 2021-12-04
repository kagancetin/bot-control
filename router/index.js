const express = require("express")
const path = require("path")
const fs = require("fs")
const router = express.Router()

router.route("/").get(async (req, res, next) => {
  res.render("pages/index")
})

router.route("/blank").get(async (req, res, next) => {
  res.render("pages/blank")
})

router.route("/dayoftheend").get(async (req, res, next) => {
  res.render("pages/dayoftheend")
})

router.route("/settings").get(async (req, res, next) => {
  res.render("pages/settings")
})

router.route("/tableSettings").get(async (req, res, next) => {
  res.render("pages/tableSettings")
})

router.route("/userSettings").get(async (req, res, next) => {
  res.render("pages/userSettings")
})

const RoutesPath = path.join(__dirname, "Routes")

fs.readdir(RoutesPath, (err, files) => {
  if (err) return console.log(err)
  files.forEach((file) => {
    router.use("/" + file.split(".")[0], require(RoutesPath + "/" + file))
  })
})

module.exports = router