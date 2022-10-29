require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const productRoutes = require("./Routes/ProductRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (result) => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

app.use("/api/product",productRoutes)


app.listen(4000,err => {
    if(err){
        console.log(err)
    }
    console.log("Server is running on port 4000 !")
})