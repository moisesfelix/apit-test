const { generateUniqueId } = require("../utils");

function createEntity(list, entity) {
  const uid = generateUniqueId();
  list.push({ uid, ...entity });
  return entity;
}

function createManyEntities(list, entities) {
  entities.forEach((entity) => {
    const uid = generateUniqueId();
    list.push({ uid, ...entity });
  });
  return entities;
}

function getEntityList(list) {
  return list;
}

function getEntityById(list, id) {
  return list.find((entity) => entity.uid === id);
}

function updateEntityById(list, id, updatedEntity) {
  const index = list.findIndex((entity) => entity.uid === id);

  if (index !== -1) {
    list[index] = { ...list[index], ...updatedEntity };
    return list[index];
  }

  return null;
}

function deleteEntityById(list, id) {
  const index = list.findIndex((entity) => entity.uid === id);

  if (index !== -1) {
    const deletedEntity = list.splice(index, 1);
    return deletedEntity[0];
  }

  return null;
}

module.exports = {
  createEntity,
  createManyEntities,
  getEntityList,
  getEntityById,
  updateEntityById,
  deleteEntityById,
};
