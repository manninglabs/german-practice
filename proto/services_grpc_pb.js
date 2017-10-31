// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_pb = require('./services_pb.js');

function serialize_proto_BlankQuery(arg) {
  if (!(arg instanceof services_pb.BlankQuery)) {
    throw new Error('Expected argument of type proto.BlankQuery');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_BlankQuery(buffer_arg) {
  return services_pb.BlankQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_Exercise(arg) {
  if (!(arg instanceof services_pb.Exercise)) {
    throw new Error('Expected argument of type proto.Exercise');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_Exercise(buffer_arg) {
  return services_pb.Exercise.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_ExercisesList(arg) {
  if (!(arg instanceof services_pb.ExercisesList)) {
    throw new Error('Expected argument of type proto.ExercisesList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_ExercisesList(buffer_arg) {
  return services_pb.ExercisesList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_IDQuery(arg) {
  if (!(arg instanceof services_pb.IDQuery)) {
    throw new Error('Expected argument of type proto.IDQuery');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_IDQuery(buffer_arg) {
  return services_pb.IDQuery.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_proto_StringMessage(arg) {
  if (!(arg instanceof services_pb.StringMessage)) {
    throw new Error('Expected argument of type proto.StringMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_proto_StringMessage(buffer_arg) {
  return services_pb.StringMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServiceService = exports.ServiceService = {
  aPIVersion: {
    path: '/proto.Service/APIVersion',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.BlankQuery,
    responseType: services_pb.StringMessage,
    requestSerialize: serialize_proto_BlankQuery,
    requestDeserialize: deserialize_proto_BlankQuery,
    responseSerialize: serialize_proto_StringMessage,
    responseDeserialize: deserialize_proto_StringMessage,
  },
  listExercises: {
    path: '/proto.Service/ListExercises',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.BlankQuery,
    responseType: services_pb.ExercisesList,
    requestSerialize: serialize_proto_BlankQuery,
    requestDeserialize: deserialize_proto_BlankQuery,
    responseSerialize: serialize_proto_ExercisesList,
    responseDeserialize: deserialize_proto_ExercisesList,
  },
  fetchExercise: {
    path: '/proto.Service/FetchExercise',
    requestStream: false,
    responseStream: false,
    requestType: services_pb.IDQuery,
    responseType: services_pb.Exercise,
    requestSerialize: serialize_proto_IDQuery,
    requestDeserialize: deserialize_proto_IDQuery,
    responseSerialize: serialize_proto_Exercise,
    responseDeserialize: deserialize_proto_Exercise,
  },
};

exports.ServiceClient = grpc.makeGenericClientConstructor(ServiceService);
