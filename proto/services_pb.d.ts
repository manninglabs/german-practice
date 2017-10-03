// package: proto
// file: services.proto

import * as jspb from "google-protobuf";

export class StringMessage extends jspb.Message {
  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringMessage.AsObject;
  static toObject(includeInstance: boolean, msg: StringMessage): StringMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringMessage;
  static deserializeBinaryFromReader(message: StringMessage, reader: jspb.BinaryReader): StringMessage;
}

export namespace StringMessage {
  export type AsObject = {
    body: string,
  }
}

export class BlankQuery extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlankQuery.AsObject;
  static toObject(includeInstance: boolean, msg: BlankQuery): BlankQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlankQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlankQuery;
  static deserializeBinaryFromReader(message: BlankQuery, reader: jspb.BinaryReader): BlankQuery;
}

export namespace BlankQuery {
  export type AsObject = {
  }
}

export class IDQuery extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDQuery.AsObject;
  static toObject(includeInstance: boolean, msg: IDQuery): IDQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IDQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDQuery;
  static deserializeBinaryFromReader(message: IDQuery, reader: jspb.BinaryReader): IDQuery;
}

export namespace IDQuery {
  export type AsObject = {
    id: number,
  }
}

export class ExercisesList extends jspb.Message {
  clearExercisesList(): void;
  getExercisesList(): Array<Exercise>;
  setExercisesList(value: Array<Exercise>): void;
  addExercises(value?: Exercise, index?: number): Exercise;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExercisesList.AsObject;
  static toObject(includeInstance: boolean, msg: ExercisesList): ExercisesList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExercisesList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExercisesList;
  static deserializeBinaryFromReader(message: ExercisesList, reader: jspb.BinaryReader): ExercisesList;
}

export namespace ExercisesList {
  export type AsObject = {
    exercisesList: Array<Exercise.AsObject>,
  }
}

export class Exercise extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getTopic(): string;
  setTopic(value: string): void;

  clearQuestionsList(): void;
  getQuestionsList(): Array<Question>;
  setQuestionsList(value: Array<Question>): void;
  addQuestions(value?: Question, index?: number): Question;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exercise.AsObject;
  static toObject(includeInstance: boolean, msg: Exercise): Exercise.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Exercise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exercise;
  static deserializeBinaryFromReader(message: Exercise, reader: jspb.BinaryReader): Exercise;
}

export namespace Exercise {
  export type AsObject = {
    id: number,
    title: string,
    topic: string,
    questionsList: Array<Question.AsObject>,
  }
}

export class Question extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getExerciseId(): number;
  setExerciseId(value: number): void;

  getText(): string;
  setText(value: string): void;

  getAnswer(): string;
  setAnswer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Question.AsObject;
  static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Question;
  static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
  export type AsObject = {
    id: number,
    exerciseId: number,
    text: string,
    answer: string,
  }
}

