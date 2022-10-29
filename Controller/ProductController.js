const Cart = require("../Modal/Cart")
const Order = require("../Modal/Orders")
const Product = require("../Modal/Product")

exports.createProduct = async (req,res) => {
    try {
        const product = await Product.create({...req.body})
        return res.status(200).json({message:"Product created !",product})
    } catch (error) {
        res.status(400).json({message:"Something went wrong !",err:error.message})
    }
}

exports.getProducts = async (req,res) => {
    try {
        const products = await Product.find({})
        return res.status(200).json({message:"Product created !",data:products})
    } catch (error) {
        res.status(400).json({message:"Something went wrong !",err:error.message})
    }
}

exports.createCart = async (req,res) => {
    try {
        const cart = await Cart.findOneAndUpdate({},{$addToSet:{cartItems:req.body.id}},{upsert:true,new:true})
        return res.status(200).json({message:"Product added to cart !",data:cart})

    } catch (error) {
        res.status(400).json({message:"Something went wrong !",err:error.message})
    }
}

exports.getCart = async (req,res) => {
    try {
        const cart = await Cart.findOne({}).populate("cartItems")
        return res.status(200).json({message:"all products of cart !",data:cart.cartItems})

    } catch (error) {
        res.status(400).json({message:"Something went wrong !",err:error.message})
    }
}

exports.updateCart = async (req,res) => {
    try {
        
        const cart = await Cart.findOneAndUpdate({},{$pull:{cartItems:req.body.id}},{new:true}).populate("cartItems")
        return res.status(200).json({message:"all products of cart !",data:cart.cartItems})
    } catch (error) {
        res.status(400).json({message:"Something went wrong !",err:error.message})
    }
}

exports.createOrder = async (req,res) => {
    try {
        const order = await Order.findOne({});
        if (order) {
            const data = await Order.findOneAndUpdate({},{orderItems:[...order.orderItems,...req.body.items]},{new:true})
            return res.status(200).json({message:"Product added to cart !",data:data})
        }else{
            const data = await Order.create({orderItems:req.body.items})
            return res.status(200).json({message:"Product added to cart !",data:data})
        }


    } catch (error) {
        res.status(400).json({message:"Something went wrong !",err:error.message})
    }
}

exports.getOrders = async (req,res) => {
    try {
        const order = await Order.findOne({}).populate("orderItems")
        return res.status(200).json({message:"all order product !",data:order.orderItems})

    } catch (error) {
        res.status(400).json({message:"Something went wrong !",err:error.message})
    }
}