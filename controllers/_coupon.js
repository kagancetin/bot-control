const {Redeem} = require('../models/index')
const crypto = require("crypto")

module.exports = {
  getPage: async (req, res) => {
    let coupons = await Redeem.find().catch(err => {
      console.log(err)
    })
    console.log(coupons)
    res.render("pages/coupon", {coupons: coupons ? coupons.map(coupon => coupon.toJSON()) : []})
  },
  getAll: async (req, res) => {
    const coupons = await Redeem.find()
    res.send(coupons)
  },
  getOne: async (req, res) => {
    const coupon = await Redeem.findById(req.params.id)
    res.send(coupon)
  },
  create: async (req, res) => {
    const {time} = req.body
    console.log(req.body)
    const code = crypto.randomBytes(12).toString("hex")
    Redeem.create({code, time})
      .then(coupon => {
        res.redirect("/coupon")
      })
      .catch(error => {
        res.send({error})
      })

  }
}