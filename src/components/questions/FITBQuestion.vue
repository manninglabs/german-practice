<template>
  <div class="question">
    <p>{{ question.text }}</p>
    <p v-if="exposeAnswer">Valid answers are {{ question.answers }}</p>
    <p class="input-text"><input type="text" value="" v-model="textValue"></p>

    <!-- <div class="question">
        <p class="question-text">2&nbsp;&nbsp;Question №2. What is 3 - 2?(text)</p>
        <p class="input-text"><input data-correct-answer="one" type="text" value=""></p>
      </div>
      <div class="question">
        <p class="question-text">3&nbsp;&nbsp;Question №3. What is 7 - 2?(text)</p>
        <p class="input-text"><input data-correct-answer="five" type="text" value=""></p>
      </div>
      <input class="submit" type="submit" value="CHECK">
      <input id="try-again" class="click-visible" type="button" value="TRY AGAIN">
      <input id="show-answers" class="click-visible" type="button" value="SHOW ANSWERS"> -->
  </div>
</template>

<script>
  export default {
    name: 'fitb-question',
    props: ['question'],
    data () {
      return {
        exposeAnswer: false,
        textValue: ''
      }
    },
    methods: {
      showAnswer () {
        this.exposeAnswer = false
      },
      clearField () {
        this.textValue = ''
      }
    },
    computed: {
      isCorrect () {
        return true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .question-text {
    font-size: 16px;
    font-style: normal;
    letter-spacing: 1.2px;
    color: #151f40;
    margin-top: 30px;
    margin-bottom: -5px;
    font-weight: 100;
  }
  .input-text input {
    margin-left: 0px;
    width: 400px;
    padding: 5px;
    text-align: left;
    outline-color: #4cb2d4;
    color: #bbbcbd;
    font-size: 15px;
    border: solid 0.5px #979797;
  }
  .question input.correctAns {
    color: #56b949 !important;
    background-image: url('../../assets/check-circle.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 380px;
  }
  .question input.incorrectAns {
    color: #f2341c !important;
    background-image: url('../../assets/x-circle.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 380px;
  }
  .question input.emptyAns {
    border: 3px solid #f2341c !important;
    background-image: url('../../assets/x-circle.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 380px;
  }
</style>
