<template>
  <div>
    <site-header />
    <router-link :to="{ name: 'home' }">&lt; List of German grammar topics</router-link>
    <div class="exercise-container" v-if="exercise">
      <h2>{{ exercise.getTitle() }}</h2>
      <h3>Exersise {{ exercise.getId() }}</h3>
      <p class="exercise-description">{{ exercise.getTopic() }}</p>
      <div v-for="(q, index) in exercise.getQuestionsList()">
        <fitb-question :question="q" :itemNumber="index + 1" ref="renderedQuestion" />
      </div>
      <button v-on:click="checkAnswers" v-if="!answersSubmitted">Check</button>
      <div class="statistics" v-if="answersSubmitted">
        <p><b v-model="correct">{{ correct }}</b> of <b v-model="numberOfQuestions">{{ numberOfQuestions }}</b> questions answered correctly. Your latest result: <b v-model="result">{{ result }}</b><b>%</b>.</p>
      </div>
      <button v-on:click="tryAgain" v-if="answersSubmitted" class="neutral-button">
        Try Again
      </button>
      <button v-on:click="seeAnswers" v-if="answersSubmitted">
        Show Answers
      </button>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {grpc, BrowserHeaders, Code} from 'grpc-web-client'
import {Service} from '../../proto/services_pb_service'
import {IDQuery, Exercise} from '../../proto/services_pb'
import FITBQuestion from '../../components/questions/FITBQuestion.vue'

@Component({
  name: 'show-exercise',
  components: {
    'fitb-question': FITBQuestion
  }
})
export default class ShowExercise extends Vue {
  exercise: Exercise = new Exercise();
  answersSubmitted: boolean = false;
  correct: number = 0;
  numberOfQuestions: number = 0;
  result: string = '';

  $refs: {
    renderedQuestion: HTMLFormElement
  }

  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  }
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  }
  fetchData () {
    const grpcHost = (process.env.GRPC_HOST || '')
    var id: number = Number(this.$route.params['id'] || '')
    const request = new IDQuery()
    request.setId(id)

    grpc.invoke(Service.FetchExercise, {
      host: grpcHost,
      request: request,
      onMessage: (exercise: Exercise) => {
        this.exercise = exercise
        console.log('successfully queried, ', this.exercise)
      },
      onEnd: (code: Code, message: string, trailers: BrowserHeaders) => {
        console.log(code, message)
      }
    })
  }
  checkAnswers () {
    this.answersSubmitted = true
    for (var i = 0; i < this.$refs.renderedQuestion.length; i++) {
      this.$refs.renderedQuestion[i].setShowAnswer(true)
    }
    // get the number of questions
    this.numberOfQuestions = this.$refs.renderedQuestion.length
    // counts the number of correct answers
    for (var j = 0; j < this.$refs.renderedQuestion.length; j++) {
      if (this.$refs.renderedQuestion[j].isCorrect()) {
        this.correct++
      }
    }
    // considers the percentage of correct answers
    var calculationInterest = (100 / this.numberOfQuestions * this.correct)
    this.result = String(Math.floor(calculationInterest))
  }
  seeAnswers () {
    for (var i = 0; i < this.$refs.renderedQuestion.length; i++) {
      this.$refs.renderedQuestion[i].getShowAnswer()
    }
  }
  tryAgain () {
    // clears all fields input
    for (var i = 0; i < this.$refs.renderedQuestion.length; i++) {
      this.$refs.renderedQuestion[i].reset()
    }
    this.correct = 0
    // reload data, thus triggering reset of page state
    this.fetchData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-size: 20px;
  letter-spacing: 1.2px;
  color: #4cb2d4;
  text-decoration: none;
  cursor: pointer;
  padding-left: 100px;
}
a:hover {
  color: #56b949;
}
h2 {
  font-size: 35px;
  color: #56b949;
  letter-spacing: 2px;
  margin-top: 40px;
  font-weight: 500;
}
h3 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.2px;
  text-align: left;
  color: #151f40;
}
.exercise-container {
  padding-left: 100px;
  padding-right: 100px;
  font-family: 'Avenir';
}
.exercise-description {
  font-size: 16px;
  font-style: oblique;
  line-height: 1.67;
  letter-spacing: 1.2px;
  color: #151f40;
  margin-bottom: 50px;
}
.exercise-container button {
  background-color: #4cb2d4;
  font-size: 15px;
  letter-spacing: 1.2px;
  color: #ffffff;
  border: none;
  padding: 10px 80px;
  outline: none;
  margin-top: 10px;
  margin-left: 22px;
  margin-bottom: 25px;
  cursor: pointer;
  text-transform: uppercase;
}
.statistics {
  background-color: #4cb2d4;
  margin-left: 22px;
}
.statistics p {
  padding: 30px 20px;
  letter-spacing: 2px;
  color: #fff;
}
.exercise-container button.neutral-button {
  background-color: #a6aaab;
}
.exercise-container button:active {
  background-color: #56b949;
}
</style>
