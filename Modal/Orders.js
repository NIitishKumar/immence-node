const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    orderItems:[{type:mongoose.Types.ObjectId , ref:"Product"}]
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("Order",OrderSchema)