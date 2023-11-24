const { generateUniqueId } = require("../../utils");

const shippingManifestList = [];

function getShippingManifestList(order) {
  return shippingManifestList;
}

function createShippingManifest(order) {
  const uid = generateUniqueId();
  shippingManifestList.push({ uid, ...order });
  return order;
}
function createManyShippingManifest(orders) {
  orders.forEach((order) => {
    const uid = generateUniqueId();
    shippingManifestList.push({ uid, ...order });
  });
  return orders;
}

function getShippingManifestById(id) {
  return shippingManifestList.find((order) => order.uid === id);
}

function updateShippingManifestById(id, updatedOrder) {
  const index = shippingManifestList.findIndex((order) => order.uid === id);

  if (index !== -1) {
    shippingManifestList[index] = { ...shippingManifestList[index], ...updatedOrder };
    return shippingManifestList[index];
  }

  return null;
}

function deleteShippingManifestById(id) {
  const index = shippingManifestList.findIndex((order) => order.uid === id);

  if (index !== -1) {
    const deletedOrder = shippingManifestList.splice(index, 1);
    return deletedOrder[0];
  }

  return null;
}

module.exports = {
  getShippingManifestList,
  createShippingManifest,
  createManyShippingManifest,
  getShippingManifestById,
  updateShippingManifestById,
  deleteShippingManifestById,
};
