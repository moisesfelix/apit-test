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

module.exports = {
  getItineraryList,
  createItinerary,
  createManyItinerary,
  getItineraryById,
  updateItineraryById,
  deleteItineraryById,
  itineraryList,
};
