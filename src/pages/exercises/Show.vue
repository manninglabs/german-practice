<template>
  <div>
    <site-header />
    <router-link to="/">&lt; List of German grammar topics</router-link>
    <div class="loading" v-if="loading">
      Loading...
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <div class="exercise-container" v-if="exercise">
      <h2>{{ exercise.name }}</h2>
      <h3>Exersise {{ exercise.id }}</h3>
      <p class="exercise-description">{{ exercise.description }}</p>
      <div v-for="(q, index) in exercise.questions">
        <fitb-question :question="q" ref="renderedQuestion" />
      </div>
      <button v-on:click="checkAnswers" v-if="!answersSubmitted">Check</button>
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

<script>
  export default {
    name: 'Exercise',
    data () {
      return {
        loading: false,
        error: null,
        exercise: null,
        answersSubmitted: false
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        // fetch the correct exercise by ID
        // NOTE: for now, we will simulate fetching the data via JSON file, as
        // later we will fetch via web service
        // background: https://router.vuejs.org/en/advanced/data-fetching.html
        this.error = this.exercise = null
        this.loading = true
        this.answersSubmitted = false
        var exerciseData = require('../../assets/exercises.json')
        // find the correct exercise from list of exercises we've fetched
        for (var i = 0; i < exerciseData.length; i++) {
          var e = exerciseData[i]
          if (e.id === parseInt(this.$route.params.id)) {
            this.exercise = e
            break
          }
        }
        // handle situation where we couldn't find the exercise
        if (!this.exercise) {
          this.loading = false
          this.error = "couldn't find exercise " + this.$route.params.id
          return
        }
        // success
        this.loading = false
        console.log('loaded exercise ' + this.exercise.id)
      },
      checkAnswers () {
        this.answersSubmitted = true
        for (var i = 0; i < this.$refs.renderedQuestion.length; i++) {
          this.$refs.renderedQuestion[i].setShowAnswer(true)
        }
      },
      seeAnswers () {
        for (var i = 0; i < this.$refs.renderedQuestion.length; i++) {
          this.$refs.renderedQuestion[i].getShowAnswer()
        }
      },
      tryAgain () {
        // clears all fields input
        for (var i = 0; i < this.$refs.renderedQuestion.length; i++) {
          this.$refs.renderedQuestion[i].reset()
        }
        // reload data, thus triggering reset of page state
        this.fetchData()
      }
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
  .exercise-container button.neutral-button {
    background-color: #a6aaab;
  }
  .exercise-container button:active {
    background-color: #56b949;
  }
</style>
