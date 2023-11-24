const { generateUniqueId } = require("../../utils");

const orderToPreviewList = [];

function getOrderToPreviewList(order) {
  return orderToPreviewList;
}

function createOrderToPreview(order) {
  const id = generateUniqueId();
  const createdAt = new Date().toISOString();
  orderToPreviewList.push({ id, ...order, createdAt });
  return order;
}
function createManyOrderToPreview(orders) {
  orders.forEach((order) => {
    createOrderToPreview(order);
  });
  return orders;
}

function getOrderToPreviewById(id) {
  return orderToPreviewList.find((order) => order.id === id);
}

function updateOrderToPreviewById(id, updatedOrder) {
  const index = orderToPreviewList.findIndex((order) => order.id === id);

  if (index !== -1) {
    orderToPreviewList[index] = {
      ...orderToPreviewList[index],
      ...updatedOrder,
    };
    return orderToPreviewList[index];
  }

  return null;
}

function deleteOrderToPreviewById(id) {
  const index = orderToPreviewList.findIndex((order) => order.id === id);

  if (index !== -1) {
    const deletedOrder = orderToPreviewList.splice(index, 1);
    return deletedOrder[0];
  }

  return null;
}

module.exports = {
  getOrderToPreviewList,
  createOrderToPreview,
  createManyOrderToPreview,
  getOrderToPreviewById,
  updateOrderToPreviewById,
  deleteOrderToPreviewById,
  orderToPreviewList
};
