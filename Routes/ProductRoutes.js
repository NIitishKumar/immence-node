const { getProducts, createProduct, createCart, getCart, updateCart, createOrder, getOrders } = require("../Controller/ProductController")

const router = require("express").Router()


router.get("/",getProducts)
router.post("/",createProduct)
router.post("/cart",createCart)
router.get("/cart",getCart)
router.put("/cart",updateCart)
router.post("/order",createOrder)
router.get("/order",getOrders)

module.exports = router;