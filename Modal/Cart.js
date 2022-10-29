const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    cartItems:[{type:mongoose.Types.ObjectId , ref:"Product"}]
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("Cart",CartSchema)