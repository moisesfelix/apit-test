const { generateUniqueId } = require("../../utils");
const { updateOrderById } = require("./order");

const itineraryList = [];

function getItineraryList(itinerary) {
  return itineraryList;
}

function createItinerary(itinerary) {
  const id = generateUniqueId();
  const createdAt = new Date().toISOString();
  itineraryList.push({ id, ...itinerary, createdAt });

  return true;
}
function createManyItinerary({ itineraries }) {
  itineraries.forEach((itinerary) => {
    const result = createItinerary(itinerary);
    if (result) {
      itinerary.tasks.forEach((task) => {
        updateOrderById(task.id, { hasItinerary: true });
      });
    }
  });
  return itineraries;
}

function getItineraryById(id) {
  return itineraryList.find((itinerary) => itinerary.id === id);
}

function updateItineraryById(id, updatedItinerary) {
  const index = itineraryList.findIndex((itinerary) => itinerary.id === id);

  if (index !== -1) {
    itineraryList[index] = {
      ...itineraryList[index],
      ...updatedItinerary,
    };
    return itineraryList[index];
  }

  return null;
}

function deleteItineraryById(id) {
  const index = itineraryList.findIndex((itinerary) => itinerary.id === id);

  if (index !== -1) {
    const deletedItinerary = itineraryList.splice(index, 1);
    return deletedItinerary[0];
  }

  return null;
}
function updateItineraryByItineraryIdAndOrderId(itineraryId, taskId, orderId) {
  console.log({ itineraryId, taskId, orderId });
  const itinerary = itineraryList.find((obj) => obj.id === itineraryId);

  if (itinerary) {
    const task = itinerary.tasks.find((task) => task.id === taskId);

    if (task) {
      const order = task.orders.find((order) => order.id === orderId);
      if (order) {
        order.status = "loaded";

        console.log("Objeto atualizado:", task);
        return true;
      } else {
        console.log("Pedido não encontrado pelo ID:", taskId);
        return false;
      }
    } else {
      console.log("Tarefa não encontrada pelo ID:", taskId);
      return false;
    }
  } else {
    console.log("Itinerário não encontrado pelo ID:", itineraryId);
    return false;
  }
}
function getItineraryIdAndTaskById(itineraryId, taskId) {
  const itineraries = itineraryList;
  const itinerary = itineraries.find((it) => it.id === itineraryId);

  if (!itinerary) {
    return false;
  }

  const task = itinerary.tasks.find((t) => t.id === taskId);

  return task || false;
}

module.exports = {
  getItineraryList,
  createItinerary,
  createManyItinerary,
  getItineraryById,
  updateItineraryById,
  deleteItineraryById,
  itineraryList,
  getItineraryIdAndTaskById,
  updateItineraryByItineraryIdAndOrderId,
};
