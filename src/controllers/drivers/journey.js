const dataJourney = require("../../data/drivers/journey");

module.exports = Object.freeze({
  getAll(req, res) {
    const journeys = dataJourney.getJourneyList();
    return res.status(200).json(journeys);
  },
  getOne(req, res) {
    //const { input } = req.body
    //console.log({input})

    return res.status(200).json({ msg: "method get" });
  },
  createOne(req, res) {
    const input = req.body;
    dataJourney.createJourney(input);
    return res.status(201).json({ msg: "create success" });
  },
  createMany(req, res) {
    const input = req.body;
    dataJourney.createManyJourney(input);
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
