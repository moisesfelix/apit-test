const dataOrder = require("../data/order");

module.exports = Object.freeze({
  getAll(req, res) {
    const orders = dataOrder.getOrderList();
    return res.status(200).json(orders);
  },
  getOne(req, res) {
    //const { input } = req.body
    //console.log({input})

    return res.status(200).json({ msg: "method get" });
  },
  createOne(req, res) {
    const input = req.body;
    dataOrder.createOrder(input);
    return res.status(201).json({ msg: "create success" });
  },
  createMany(req, res) {
    const input = req.body;
    dataOrder.createManyOrder(input);
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
