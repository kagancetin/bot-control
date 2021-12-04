const mongoose = require("mongoose")
const mongoURI = "mongodb://127.0.0.1:27017/evobot"

const connectDB = async () => {
  const conn = await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  console.log(`MongoDB connected`)
}

module.exports = {connectDB}