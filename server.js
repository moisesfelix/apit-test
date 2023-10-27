const { Server, ServerCredentials } = require('@grpc/grpc-js');
const eventProto = require('./event_pb');
const eventGrpc = require('./event_grpc_pb');

const server = new Server();

const eventStream = {};

server.addService(eventGrpc.EventServiceService, {
  Subscribe: (call) => {
    const clientId = call.request.getClientId();
    eventStream[clientId] = call;

    call.on('cancelled', () => {
      delete eventStream[clientId];
    });
  },
});

server.bind('0.0.0.0:50051', ServerCredentials.createInsecure());
console.log('Server is running on 0.0.0.0:50051');
server.start();

setInterval(() => {
  const message = 'This is a real-time event update.';
  Object.values(eventStream).forEach((call) => {
    call.write(new eventProto.EventResponse().setMessage(message));
  });
}, 1000);
