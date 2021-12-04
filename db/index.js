const mongoose = require("mongoose")
const mongoURI = "mongodb://localhost:27017/cafeApp"

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