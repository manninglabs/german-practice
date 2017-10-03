// package: proto
// file: services.proto

import * as services_pb from "./services_pb";
export class Service {
  static serviceName = "proto.Service";
}
export namespace Service {
  export class APIVersion {
    static readonly methodName = "APIVersion";
    static readonly service = Service;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = services_pb.BlankQuery;
    static readonly responseType = services_pb.StringMessage;
  }
  export class ListExercises {
    static readonly methodName = "ListExercises";
    static readonly service = Service;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = services_pb.BlankQuery;
    static readonly responseType = services_pb.ExercisesList;
  }
  export class FetchExercise {
    static readonly methodName = "FetchExercise";
    static readonly service = Service;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = services_pb.IDQuery;
    static readonly responseType = services_pb.Exercise;
  }
}
