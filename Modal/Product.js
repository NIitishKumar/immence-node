const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{type:String},
    price:Number,
    description:String,
    image:{type:String,default:"https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"}
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("Product",productSchema)