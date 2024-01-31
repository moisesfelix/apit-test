const dataItinerary = require("../../data/shipping-manifest/itinerary");
function calculateLoadedTasksPercentage(tasks) {
  const totalTasks = tasks.length;
  let loadedTasks = 0;

  tasks.forEach((task) => {
    const loadedOrders = task.orders.filter(
      (order) => order.status === "loaded"
    );
    if (loadedOrders.length === task.orders.length) {
      loadedTasks++;
    }
  });

  return Math.round((loadedTasks / totalTasks) * 100);
}
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
  getOneTask(req, res) {
    const { id, taskId } = req.params;
    console.log({ id, taskId });
    const data = dataItinerary.getItineraryIdAndTaskById(id, taskId);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ message: "Task not found" });
    }
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
  startItinerary(req, res) {
    const input = req.body;
    const { id } = req.params;

    const data = dataItinerary.getItineraryById(id);
    const taksIsCompleted =
      calculateLoadedTasksPercentage(data.tasks) === 100 ? true : false;
    if (taksIsCompleted) {
      return res.status(200).json({ msg: "start itinerary" });
    } else {
      return res
        .status(200)
        .json({
          msg: "you are not authorized to start the itinerary, send a message to your manager for authorization",
          error: true,
        });
    }
    console.log({
      input,
      id,
      data,
      tasks: data.tasks,
      result: calculateLoadedTasksPercentage(data.tasks),
    });
  },
  delete(req, res) {
    //const { input } = req.body
    //console.log({input})

    return res.status(200).json({ msg: "method get" });
  },
});
