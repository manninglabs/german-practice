webpackJsonp([1],{122:function(e,t){},123:function(e,t){},124:function(e,t){},125:function(e,t){},126:function(e,t){},127:function(e,t){},154:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(15),n=(r.n(o),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}()),i=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t=i([r.i(o.Component)({name:"site-footer"})],t)}(o.Vue);t.default=s},155:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(15),n=(r.n(o),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}()),i=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t=i([r.i(o.Component)({name:"site-header"})],t)}(o.Vue);t.default=s},156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(15),n=(r.n(o),r(22)),i=(r.n(n),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}()),s=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.showAnswer=!1,t.userAnswer="",t}return i(t,e),Object.defineProperty(t.prototype,"answerClass",{get:function(){return!1===this.showAnswer?"":!0===this.isCorrect()?"correct":"incorrect"},enumerable:!0,configurable:!0}),t.prototype.isCorrect=function(){return this.userAnswer.toLowerCase()===this.question.getAnswer().toLowerCase()},t.prototype.setShowAnswer=function(e){this.showAnswer=e},t.prototype.getShowAnswer=function(){this.userAnswer=this.question.getAnswer()},t.prototype.reset=function(){this.showAnswer=!1,this.userAnswer=""},t=s([r.i(o.Component)({name:"fitb-question",props:{question:n.Question,itemNumber:Number}})],t)}(o.Vue);t.default=a},157:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(15),n=(r.n(o),r(59)),i=(r.n(n),r(69)),s=r(22),a=(r.n(s),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}()),p=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.exercises=[],t}return a(t,e),t.prototype.mounted=function(){this.fetchData()},t.prototype.fetchData=function(){var e=this,t=new s.BlankQuery;n.grpc.invoke(i.a.ListExercises,{host:"http://localhost:8080",request:t,onMessage:function(t){e.exercises=t.getExercisesList(),console.log("successfully queried, ",e.exercises)},onEnd:function(e,t,r){console.log(e,t)}})},t=p([r.i(o.Component)({name:"home"})],t)}(o.Vue);t.default=u},158:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(15),n=(r.n(o),r(59)),i=(r.n(n),r(69)),s=r(22),a=(r.n(s),r(163)),p=r.n(a),u=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),c=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,r,s):n(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.exercise=new s.Exercise,t.answersSubmitted=!1,t.correct=0,t.numberOfQuestions=0,t.result="",t}return u(t,e),t.prototype.created=function(){this.fetchData()},t.prototype.fetchData=function(){var e=this,t=new s.IDQuery;t.setId(3),n.grpc.invoke(i.a.FetchExercise,{host:"http://localhost:8080",request:t,onMessage:function(t){e.exercise=t,console.log("successfully queried, ",e.exercise)},onEnd:function(e,t,r){console.log(e,t)}})},t.prototype.checkAnswers=function(){this.answersSubmitted=!0;for(var e=0;e<this.$refs.renderedQuestion.length;e++)this.$refs.renderedQuestion[e].setShowAnswer(!0);this.numberOfQuestions=this.$refs.renderedQuestion.length;for(var t=0;t<this.$refs.renderedQuestion.length;t++)this.$refs.renderedQuestion[t].isCorrect()&&this.correct++;var r=100/this.numberOfQuestions*this.correct;this.result=String(Math.floor(r))},t.prototype.seeAnswers=function(){for(var e=0;e<this.$refs.renderedQuestion.length;e++)this.$refs.renderedQuestion[e].getShowAnswer()},t.prototype.tryAgain=function(){for(var e=0;e<this.$refs.renderedQuestion.length;e++)this.$refs.renderedQuestion[e].reset();this.correct=0,this.fetchData()},t=c([r.i(o.Component)({name:"show-exercise",components:{"fitb-question":p.a}})],t)}(o.Vue);t.default=l},159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(21),n=r(72),i=r.n(n),s=r(71),a=r(44),p=r.n(a),u=r(43),c=r.n(u);o.default.config.productionTip=!1,o.default.component("site-header",p.a),o.default.component("site-footer",c.a),new o.default({el:"#app",router:s.a,render:function(e){return e(i.a)}})},163:function(e,t,r){function o(e){r(122)}var n=r(14)(r(156),r(166),o,"data-v-16ef268e",null);t.__esModule=!0,t.default=n.exports},164:function(e,t,r){function o(e){r(123)}var n=r(14)(r(157),r(167),o,"data-v-493d40c4",null);t.__esModule=!0,t.default=n.exports},165:function(e,t,r){function o(e){r(126)}var n=r(14)(r(158),r(170),o,"data-v-98916020",null);t.__esModule=!0,t.default=n.exports},166:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"question"},[r("p",[e._v(e._s(e.itemNumber)+":  "+e._s(e.question.getText()))]),e._v(" "),r("p",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.userAnswer,expression:"userAnswer"}],class:e.answerClass,attrs:{type:"text",value:""},domProps:{value:e.userAnswer},on:{input:function(t){t.target.composing||(e.userAnswer=t.target.value)}}})])])},staticRenderFns:[]}},167:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("a",{attrs:{name:"exercise-list"}}),e._v(" "),e._l(e.exercises,function(t){return r("div",[r("router-link",{staticClass:"exercise-list-item",attrs:{to:{name:"show-exercise",params:{id:t.getId()}}}},[e._v("\n      Exercise "+e._s(t.getId())+': "'+e._s(t.getTitle())+'"\n    ')])],1)})],2)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"main-banner"}},[r("h1",[e._v("Practice Grammar")]),e._v(" "),r("p",[e._v("Effective drill exercises to help you"),r("br"),e._v("master German grammar")]),e._v(" "),r("a",{attrs:{href:"#exercise-list"}},[e._v("Start Practicing")])])}]}},168:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"footer"}},[r("p",[e._v("For questions and information contact us at")]),e._v(" "),r("a",{attrs:{href:"mailto:hello@manninglabs.com"}},[e._v("hello@manninglabs.com")]),e._v(" "),r("p",{staticClass:"copyright"},[e._v("Copyright 2017 Manning Labs LLC")])])}]}},169:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"header"}},[r("p",[e._v("Practice Grammar")])])}]}},170:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("site-header"),e._v(" "),r("router-link",{attrs:{to:{name:"home"}}},[e._v("< List of German grammar topics")]),e._v(" "),e.exercise?r("div",{staticClass:"exercise-container"},[r("h2",[e._v(e._s(e.exercise.getTitle()))]),e._v(" "),r("h3",[e._v("Exersise "+e._s(e.exercise.getId()))]),e._v(" "),r("p",{staticClass:"exercise-description"},[e._v(e._s(e.exercise.getTopic()))]),e._v(" "),e._l(e.exercise.getQuestionsList(),function(e,t){return r("div",[r("fitb-question",{ref:"renderedQuestion",refInFor:!0,attrs:{question:e,itemNumber:t+1}})],1)}),e._v(" "),e.answersSubmitted?e._e():r("button",{on:{click:e.checkAnswers}},[e._v("Check")]),e._v(" "),e.answersSubmitted?r("div",{staticClass:"statistics"},[r("p",[r("b",{model:{value:e.correct,callback:function(t){e.correct=t},expression:"correct"}},[e._v(e._s(e.correct))]),e._v(" of "),r("b",{model:{value:e.numberOfQuestions,callback:function(t){e.numberOfQuestions=t},expression:"numberOfQuestions"}},[e._v(e._s(e.numberOfQuestions))]),e._v(" questions answered correctly. Your latest result: "),r("b",{model:{value:e.result,callback:function(t){e.result=t},expression:"result"}},[e._v(e._s(e.result))]),r("b",[e._v("%")]),e._v(".")])]):e._e(),e._v(" "),e.answersSubmitted?r("button",{staticClass:"neutral-button",on:{click:e.tryAgain}},[e._v("\n      Try Again\n    ")]):e._e(),e._v(" "),e.answersSubmitted?r("button",{on:{click:e.seeAnswers}},[e._v("\n      Show Answers\n    ")]):e._e(),e._v(" "),r("hr")],2):e._e()],1)},staticRenderFns:[]}},171:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),e._v(" "),r("site-footer")],1)},staticRenderFns:[]}},176:function(e,t){},22:function(e,t,r){var o=r(128),n=o,i=Function("return this")();n.exportSymbol("proto.proto.BlankQuery",null,i),n.exportSymbol("proto.proto.Exercise",null,i),n.exportSymbol("proto.proto.ExercisesList",null,i),n.exportSymbol("proto.proto.IDQuery",null,i),n.exportSymbol("proto.proto.Question",null,i),n.exportSymbol("proto.proto.StringMessage",null,i),proto.proto.StringMessage=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.proto.StringMessage,o.Message),n.DEBUG&&!COMPILED&&(proto.proto.StringMessage.displayName="proto.proto.StringMessage"),o.Message.GENERATE_TO_OBJECT&&(proto.proto.StringMessage.prototype.toObject=function(e){return proto.proto.StringMessage.toObject(e,this)},proto.proto.StringMessage.toObject=function(e,t){var r={body:o.Message.getFieldWithDefault(t,1,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.proto.StringMessage.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.proto.StringMessage;return proto.proto.StringMessage.deserializeBinaryFromReader(r,t)},proto.proto.StringMessage.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setBody(r);break;default:t.skipField()}}return e},proto.proto.StringMessage.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.proto.StringMessage.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.proto.StringMessage.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getBody(),r.length>0&&t.writeString(1,r)},proto.proto.StringMessage.prototype.getBody=function(){return o.Message.getFieldWithDefault(this,1,"")},proto.proto.StringMessage.prototype.setBody=function(e){o.Message.setField(this,1,e)},proto.proto.BlankQuery=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.proto.BlankQuery,o.Message),n.DEBUG&&!COMPILED&&(proto.proto.BlankQuery.displayName="proto.proto.BlankQuery"),o.Message.GENERATE_TO_OBJECT&&(proto.proto.BlankQuery.prototype.toObject=function(e){return proto.proto.BlankQuery.toObject(e,this)},proto.proto.BlankQuery.toObject=function(e,t){var r={};return e&&(r.$jspbMessageInstance=t),r}),proto.proto.BlankQuery.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.proto.BlankQuery;return proto.proto.BlankQuery.deserializeBinaryFromReader(r,t)},proto.proto.BlankQuery.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){t.getFieldNumber();t.skipField()}return e},proto.proto.BlankQuery.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.proto.BlankQuery.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.proto.BlankQuery.serializeBinaryToWriter=function(e,t){},proto.proto.IDQuery=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.proto.IDQuery,o.Message),n.DEBUG&&!COMPILED&&(proto.proto.IDQuery.displayName="proto.proto.IDQuery"),o.Message.GENERATE_TO_OBJECT&&(proto.proto.IDQuery.prototype.toObject=function(e){return proto.proto.IDQuery.toObject(e,this)},proto.proto.IDQuery.toObject=function(e,t){var r={id:o.Message.getFieldWithDefault(t,1,0)};return e&&(r.$jspbMessageInstance=t),r}),proto.proto.IDQuery.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.proto.IDQuery;return proto.proto.IDQuery.deserializeBinaryFromReader(r,t)},proto.proto.IDQuery.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readInt64();e.setId(r);break;default:t.skipField()}}return e},proto.proto.IDQuery.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.proto.IDQuery.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.proto.IDQuery.serializeBinaryToWriter=function(e,t){var r=void 0;0!==(r=e.getId())&&t.writeInt64(1,r)},proto.proto.IDQuery.prototype.getId=function(){return o.Message.getFieldWithDefault(this,1,0)},proto.proto.IDQuery.prototype.setId=function(e){o.Message.setField(this,1,e)},proto.proto.ExercisesList=function(e){o.Message.initialize(this,e,0,-1,proto.proto.ExercisesList.repeatedFields_,null)},n.inherits(proto.proto.ExercisesList,o.Message),n.DEBUG&&!COMPILED&&(proto.proto.ExercisesList.displayName="proto.proto.ExercisesList"),proto.proto.ExercisesList.repeatedFields_=[1],o.Message.GENERATE_TO_OBJECT&&(proto.proto.ExercisesList.prototype.toObject=function(e){return proto.proto.ExercisesList.toObject(e,this)},proto.proto.ExercisesList.toObject=function(e,t){var r={exercisesList:o.Message.toObjectList(t.getExercisesList(),proto.proto.Exercise.toObject,e)};return e&&(r.$jspbMessageInstance=t),r}),proto.proto.ExercisesList.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.proto.ExercisesList;return proto.proto.ExercisesList.deserializeBinaryFromReader(r,t)},proto.proto.ExercisesList.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=new proto.proto.Exercise;t.readMessage(r,proto.proto.Exercise.deserializeBinaryFromReader),e.addExercises(r);break;default:t.skipField()}}return e},proto.proto.ExercisesList.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.proto.ExercisesList.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.proto.ExercisesList.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getExercisesList(),r.length>0&&t.writeRepeatedMessage(1,r,proto.proto.Exercise.serializeBinaryToWriter)},proto.proto.ExercisesList.prototype.getExercisesList=function(){return o.Message.getRepeatedWrapperField(this,proto.proto.Exercise,1)},proto.proto.ExercisesList.prototype.setExercisesList=function(e){o.Message.setRepeatedWrapperField(this,1,e)},proto.proto.ExercisesList.prototype.addExercises=function(e,t){return o.Message.addToRepeatedWrapperField(this,1,e,proto.proto.Exercise,t)},proto.proto.ExercisesList.prototype.clearExercisesList=function(){this.setExercisesList([])},proto.proto.Exercise=function(e){o.Message.initialize(this,e,0,-1,proto.proto.Exercise.repeatedFields_,null)},n.inherits(proto.proto.Exercise,o.Message),n.DEBUG&&!COMPILED&&(proto.proto.Exercise.displayName="proto.proto.Exercise"),proto.proto.Exercise.repeatedFields_=[4],o.Message.GENERATE_TO_OBJECT&&(proto.proto.Exercise.prototype.toObject=function(e){return proto.proto.Exercise.toObject(e,this)},proto.proto.Exercise.toObject=function(e,t){var r={id:o.Message.getFieldWithDefault(t,1,0),title:o.Message.getFieldWithDefault(t,2,""),topic:o.Message.getFieldWithDefault(t,3,""),questionsList:o.Message.toObjectList(t.getQuestionsList(),proto.proto.Question.toObject,e)};return e&&(r.$jspbMessageInstance=t),r}),proto.proto.Exercise.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.proto.Exercise;return proto.proto.Exercise.deserializeBinaryFromReader(r,t)},proto.proto.Exercise.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readInt64();e.setId(r);break;case 2:var r=t.readString();e.setTitle(r);break;case 3:var r=t.readString();e.setTopic(r);break;case 4:var r=new proto.proto.Question;t.readMessage(r,proto.proto.Question.deserializeBinaryFromReader),e.addQuestions(r);break;default:t.skipField()}}return e},proto.proto.Exercise.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.proto.Exercise.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.proto.Exercise.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getId(),0!==r&&t.writeInt64(1,r),r=e.getTitle(),r.length>0&&t.writeString(2,r),r=e.getTopic(),r.length>0&&t.writeString(3,r),r=e.getQuestionsList(),r.length>0&&t.writeRepeatedMessage(4,r,proto.proto.Question.serializeBinaryToWriter)},proto.proto.Exercise.prototype.getId=function(){return o.Message.getFieldWithDefault(this,1,0)},proto.proto.Exercise.prototype.setId=function(e){o.Message.setField(this,1,e)},proto.proto.Exercise.prototype.getTitle=function(){return o.Message.getFieldWithDefault(this,2,"")},proto.proto.Exercise.prototype.setTitle=function(e){o.Message.setField(this,2,e)},proto.proto.Exercise.prototype.getTopic=function(){return o.Message.getFieldWithDefault(this,3,"")},proto.proto.Exercise.prototype.setTopic=function(e){o.Message.setField(this,3,e)},proto.proto.Exercise.prototype.getQuestionsList=function(){return o.Message.getRepeatedWrapperField(this,proto.proto.Question,4)},proto.proto.Exercise.prototype.setQuestionsList=function(e){o.Message.setRepeatedWrapperField(this,4,e)},proto.proto.Exercise.prototype.addQuestions=function(e,t){return o.Message.addToRepeatedWrapperField(this,4,e,proto.proto.Question,t)},proto.proto.Exercise.prototype.clearQuestionsList=function(){this.setQuestionsList([])},proto.proto.Question=function(e){o.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.proto.Question,o.Message),n.DEBUG&&!COMPILED&&(proto.proto.Question.displayName="proto.proto.Question"),o.Message.GENERATE_TO_OBJECT&&(proto.proto.Question.prototype.toObject=function(e){return proto.proto.Question.toObject(e,this)},proto.proto.Question.toObject=function(e,t){var r={id:o.Message.getFieldWithDefault(t,1,0),exerciseId:o.Message.getFieldWithDefault(t,2,0),text:o.Message.getFieldWithDefault(t,3,""),answer:o.Message.getFieldWithDefault(t,4,"")};return e&&(r.$jspbMessageInstance=t),r}),proto.proto.Question.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.proto.Question;return proto.proto.Question.deserializeBinaryFromReader(r,t)},proto.proto.Question.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readInt64();e.setId(r);break;case 2:var r=t.readInt64();e.setExerciseId(r);break;case 3:var r=t.readString();e.setText(r);break;case 4:var r=t.readString();e.setAnswer(r);break;default:t.skipField()}}return e},proto.proto.Question.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return proto.proto.Question.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.proto.Question.serializeBinaryToWriter=function(e,t){var r=void 0;r=e.getId(),0!==r&&t.writeInt64(1,r),r=e.getExerciseId(),0!==r&&t.writeInt64(2,r),r=e.getText(),r.length>0&&t.writeString(3,r),r=e.getAnswer(),r.length>0&&t.writeString(4,r)},proto.proto.Question.prototype.getId=function(){return o.Message.getFieldWithDefault(this,1,0)},proto.proto.Question.prototype.setId=function(e){o.Message.setField(this,1,e)},proto.proto.Question.prototype.getExerciseId=function(){return o.Message.getFieldWithDefault(this,2,0)},proto.proto.Question.prototype.setExerciseId=function(e){o.Message.setField(this,2,e)},proto.proto.Question.prototype.getText=function(){return o.Message.getFieldWithDefault(this,3,"")},proto.proto.Question.prototype.setText=function(e){o.Message.setField(this,3,e)},proto.proto.Question.prototype.getAnswer=function(){return o.Message.getFieldWithDefault(this,4,"")},proto.proto.Question.prototype.setAnswer=function(e){o.Message.setField(this,4,e)},n.object.extend(t,proto.proto)},43:function(e,t,r){function o(e){r(124)}var n=r(14)(r(154),r(168),o,"data-v-58cae677",null);t.__esModule=!0,t.default=n.exports},44:function(e,t,r){function o(e){r(125)}var n=r(14)(r(155),r(169),o,"data-v-79fd4a69",null);t.__esModule=!0,t.default=n.exports},69:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var o=r(22),n=(r.n(o),function(){function e(){}return e.serviceName="proto.Service",e}());!function(e){var t=function(){function t(){}return t.methodName="APIVersion",t.service=e,t.requestStream=!1,t.responseStream=!1,t.requestType=o.BlankQuery,t.responseType=o.StringMessage,t}();e.APIVersion=t;var r=function(){function t(){}return t.methodName="ListExercises",t.service=e,t.requestStream=!1,t.responseStream=!1,t.requestType=o.BlankQuery,t.responseType=o.ExercisesList,t}();e.ListExercises=r;var n=function(){function t(){}return t.methodName="FetchExercise",t.service=e,t.requestStream=!1,t.responseStream=!1,t.requestType=o.IDQuery,t.responseType=o.Exercise,t}();e.FetchExercise=n}(n||(n={}))},71:function(e,t,r){"use strict";var o=r(21),n=r(172),i=r(164),s=r.n(i),a=r(165),p=r.n(a);o.default.use(n.a),t.a=new n.a({mode:"history",routes:[{path:"/",name:"home",component:s.a},{path:"/exercise/:id",name:"show-exercise",component:p.a,props:!0}]})},72:function(e,t,r){function o(e){r(127)}var n=r(14)(r(73),r(171),o,null,null);t.__esModule=!0,t.default=n.exports},73:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return v});var o,n,i=r(75),s=r.n(i),a=r(79),p=r.n(a),u=r(81),c=r.n(u),l=r(80),f=r.n(l),d=r(15),y=(r.n(d),r(44)),h=r.n(y),g=r(43),_=r.n(g),v=(o=r.i(d.Component)({name:"app",components:{SiteHeader:h.a,SiteFooter:_.a}}))(n=function(e){function t(){return p()(this,t),c()(this,(t.__proto__||s()(t)).apply(this,arguments))}return f()(t,e),t}(d.Vue))||n}},[159]);
//# sourceMappingURL=app.fc1bfe6c764a87935f39.js.map