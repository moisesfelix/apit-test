// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var event_pb = require('./event_pb.js');

function serialize_event_EventRequest(arg) {
  if (!(arg instanceof event_pb.EventRequest)) {
    throw new Error('Expected argument of type event.EventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_EventRequest(buffer_arg) {
  return event_pb.EventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_event_EventResponse(arg) {
  if (!(arg instanceof event_pb.EventResponse)) {
    throw new Error('Expected argument of type event.EventResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_event_EventResponse(buffer_arg) {
  return event_pb.EventResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var EventServiceService = exports.EventServiceService = {
  subscribe: {
    path: '/event.EventService/Subscribe',
    requestStream: true,
    responseStream: true,
    requestType: event_pb.EventRequest,
    responseType: event_pb.EventResponse,
    requestSerialize: serialize_event_EventRequest,
    requestDeserialize: deserialize_event_EventRequest,
    responseSerialize: serialize_event_EventResponse,
    responseDeserialize: deserialize_event_EventResponse,
  },
};

exports.EventServiceClient = grpc.makeGenericClientConstructor(EventServiceService);
