const dataOrderToSend = require("../../data/order-shipment/order-to-send");
const dataOrder = require("../../data/shipping-manifest/order");

module.exports = Object.freeze({
  getAll(req, res) {
    const orders = dataOrder.getOrderList()
    return res.status(200).json(orders);
  },
  getOne(req, res) {
    //const { input } = req.body
    //console.log({input})

    return res.status(200).json({ msg: "method get" });
  },
  createOne(req, res) {
    const input = req.body;
    console.log(input);
    dataOrderToSend.createOrderToSend(input);
    return res.status(201).json({ msg: "create success" });
  },
  createMany(req, res) {
    const input = req.body;
    dataOrderToSend.createManyOrderToSend(input);
    return res.status(201).json({ msg: "create success" });
  },
  update(req, res) {
    //const { input } = req.body
    //console.log({input})

    return res.status(200).json({ msg: "method get" });
  },
  delete(req, res) {
    //const { input } = req.body
    //console.log({input})

    return res.status(200).json({ msg: "method get" });
  },
});
