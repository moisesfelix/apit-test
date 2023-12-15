const dataDriverOrder = require("../../data/drivers/order");
const dataItinerary = require("../../data/shipping-manifest/itinerary");

module.exports = Object.freeze({
  getAll(req, res) {
    const orders = dataDriverOrder.getOrderList();
    return res.status(200).json(orders);
  },
  getOne(req, res) {
    //const { input } = req.body
    //console.log({input})

    return res.status(200).json({ msg: "method get" });
  },
  loadOrderIntoDriver(req, res) {
    const input = req.body;
    dataDriverOrder.createOrder(input);
    const result = dataItinerary.updateItineraryByItineraryIdAndOrderId(
      input.itineraryId,
      input.taskId,
      input.orderId
    );
    if(result) {
      return res.status(201).json({ msg: "create success" });

    } else {
      return res.status(404).json({ msg: "Not found" });

    }
    console.log(input);
  },
  createMany(req, res) {
    const input = req.body;
    dataDriverOrder.createManyOrder(input);
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
