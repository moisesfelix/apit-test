const dataOrder = require("../../data/shipping-manifest/order");

module.exports = Object.freeze({
  getAll(req, res) {
    const orders = dataOrder.getOrderList()
    .filter((order) => !order.hasOwnProperty('hasItinerary') || order.hasItinerary === false);
  
    console.log(orders)
        return res.status(200).json(orders);
  },
  getOne(req, res) {
    const { id } = req.params;
    console.log({ id });
    const data = dataOrder.getOrderById(id);

    return res.status(200).json(data);
  },
  createOne(req, res) {
    const input = req.body;
    dataOrder.createOrder(input);
    console.log(
      "dataOrder.itneraryList",
      JSON.stringify(dataOrder.orderList, null, 4)
    );
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
