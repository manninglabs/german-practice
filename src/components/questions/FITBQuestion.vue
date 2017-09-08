<template>
  <div class="question">
    <p>{{ question.text }}</p>
    <p>
      <input type="text" value="" v-model="userAnswer" :class="answerClass">
    </p>
 </div>
</template>

<script>
  export default {
    name: 'fitb-question',
    props: ['question'],
    data () {
      return {
        showAnswer: false,
        userAnswer: ''
      }
    },
    computed: {
      answerClass () {
        // TODO return the CSS class name to use, either '', 'correct', or 'incorrect'
        // if we're not showing the answer, return ''
        // else if are showing the answer, return 'correct' or 'incorrect' based on
        // the result of this.isCorrect()
      }
    },
    methods: {
      isCorrect () {
        // TODO return true or false based on whether the questions's answer matches
        // (case insenstitive) to the user's answer
      },
      setShowAnswer (show) {
        this.showAnswer = show
      },
      reset () {
        // TODO reset this form so showAnswer is false and user's text field is cleared
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .question {
    font-size: 16px;
    font-style: normal;
    letter-spacing: 1.2px;
    color: #151f40;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 100;
  }
  .question input {
    width: 400px;
    padding: 5px;
    text-align: left;
    outline-color: #4cb2d4;
    color: #000;
    font-size: 16px;
    border: solid 0.5px #979797;
  }
  .question input.correct {
    color: #56b949 !important;
    background-image: url('../../assets/check-circle.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 380px;
  }
  .question input.incorrect {
    color: #f2341c !important;
    background-image: url('../../assets/x-circle.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 380px;
  }
</style>
