const dataOrderToPreview = require("../../data/order-shipment/order-to-preview");

module.exports = Object.freeze({
  getAll(req, res) {
    const orders = dataOrderToPreview.getOrderToPreviewList();
    console.log('all')
    return res.status(200).json(orders);
  },
  getOne(req, res) {
    const { id } = req.params;
    console.log({ id });
    const data = dataOrderToPreview.getOrderToPreviewById(id);
    console.log(dataOrderToPreview.orderToPreviewList)
    return res.status(200).json(data);
  },
  createOne(req, res) {
    const input = req.body;
    dataOrderToPreview.createOrderToPreview(input);
    return res.status(201).json({ msg: "create success" });
  },
  createMany(req, res) {
    const input = req.body;
    dataOrderToPreview.createManyOrderToPreview(input);
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
