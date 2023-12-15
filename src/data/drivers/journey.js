const { generateUniqueId } = require("../../utils");

const journeyList = [];

function getJourneyList(journey) {
  return journeyList;
}

function createJourney(journey) {
  const uid = generateUniqueId();
  journeyList.push({ uid, ...journey });
  return journey;
}
function createManyJourney(journeys) {
  journeys.forEach((journey) => {
    const uid = generateUniqueId();
    journeyList.push({ uid, ...journey });
  });
  return journeys;
}

function getJourneyById(id) {
  return journeyList.find((journey) => journey.uid === id);
}

function updateJourneyById(id, updatedJourney) {
  const index = journeyList.findIndex((journey) => journey.uid === id);

  if (index !== -1) {
    journeyList[index] = { ...journeyList[index], ...updatedJourney };
    return journeyList[index];
  }

  return null;
}

function deleteJourneyById(id) {
  const index = journeyList.findIndex((journey) => journey.uid === id);

  if (index !== -1) {
    const deletedJourney = journeyList.splice(index, 1);
    return deletedJourney[0];
  }

  return null;
}

module.exports = {
  getJourneyList,
  createJourney,
  createManyJourney,
  getJourneyById,
  updateJourneyById,
  deleteJourneyById,
};
