const dataItinerary = require("../../data/shipping-manifest/itinerary");

module.exports = Object.freeze({
  getAll(req, res) {
    const orders = dataItinerary.getItineraryList();
    return res.status(200).json(orders);
  },
  getOne(req, res) {
    const { id } = req.params;
    console.log({ id });
    const data = dataItinerary.getItineraryById(id);

    return res.status(200).json(data);
  },
  createOne(req, res) {
    const input = req.body;
    dataItinerary.createItinerary(input);
    console.log(
      "dataItinerary.itneraryList",
      JSON.stringify(dataItinerary.itineraryList, null, 4)
    );
    return res.status(201).json({ msg: "create success" });
  },
  createMany(req, res) {
    const input = req.body;
    dataItinerary.createManyItinerary(input);
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
