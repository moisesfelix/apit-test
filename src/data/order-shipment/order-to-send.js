const { generateUniqueId } = require("../../utils");

const orderToSendList = [];

function getOrderToSendList(order) {
  return orderToSendList;
}

function createOrderToSend(order) {
  const id = generateUniqueId();
  orderToSendList.push({ id, idOrder: order.id, ...order });
  return order;
}
function createManyOrderToSend(orders) {
  orders.forEach((order) => {
    const uid = generateUniqueId();
    orderToSendList.push({ uid, ...order });
  });
  return orders;
}

function getOrderToSendById(id) {
  return orderToSendList.find((order) => order.uid === id);
}

function updateOrderToSendById(id, updatedOrder) {
  const index = orderToSendList.findIndex((order) => order.uid === id);

  if (index !== -1) {
    orderToSendList[index] = { ...orderToSendList[index], ...updatedOrder };
    return orderToSendList[index];
  }

  return null;
}

function deleteOrderToSendById(id) {
  const index = orderToSendList.findIndex((order) => order.uid === id);

  if (index !== -1) {
    const deletedOrder = orderToSendList.splice(index, 1);
    return deletedOrder[0];
  }

  return null;
}

module.exports = {
  getOrderToSendList,
  createOrderToSend,
  createManyOrderToSend,
  getOrderToSendById,
  updateOrderToSendById,
  deleteOrderToSendById,
};
