const { generateUniqueId } = require("../../utils");

const orderList = [];

function getOrderList(order) {
  return orderList;
}

function createOrder(order) {
  const uid = generateUniqueId();
  orderList.push({ uid, ...order });
  return order;
}
function createManyOrder(orders) {
  orders.forEach((order) => {
    const uid = generateUniqueId();
    orderList.push({ uid, ...order });
  });
  return orders;
}

function getOrderById(id) {
  return orderList.find((order) => order.uid === id);
}

function updateOrderById(id, updatedOrder) {
  const index = orderList.findIndex((order) => order.uid === id);

  if (index !== -1) {
    orderList[index] = { ...orderList[index], ...updatedOrder };
    return orderList[index];
  }

  return null;
}

function deleteOrderById(id) {
  const index = orderList.findIndex((order) => order.uid === id);

  if (index !== -1) {
    const deletedOrder = orderList.splice(index, 1);
    return deletedOrder[0];
  }

  return null;
}

module.exports = {
  getOrderList,
  createOrder,
  createManyOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};
