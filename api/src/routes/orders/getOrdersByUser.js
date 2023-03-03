const { Router } = require("express");
const router = Router();
const { getOrders } = require("../../controllers/orders/getOrdersByUser.js");

router.get("/orderbyuser/:id", getOrders);

module.exports = router;
