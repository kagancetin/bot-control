const express = require("express")
const router = express.Router()
const {CouponController} = require("../../controllers")

router.route("/").get(CouponController.getPage)
router.route("/create").post(CouponController.create)
router.route("/getOne").get(CouponController.getOne)
router.route("/getAll").get(CouponController.getAll)

module.exports = router