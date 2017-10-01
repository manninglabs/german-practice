<template>
  <div class="question">
    <p>{{ itemNumber }}: &nbsp;{{ question.getText() }}</p>
    <p>
      <input type="text" value="" v-model="userAnswer" :class="answerClass">
    </p>
 </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {Question} from '../../proto/services_pb'

/* eslint-disable no-new */
@Component({
  name: 'fitb-question',
  props: {
    question: Question,
    itemNumber: Number
  }
})
export default class FITBQuestion extends Vue {
  question: Question;
  itemNumber: number;
  showAnswer: boolean = false;
  userAnswer: string = '';

  get answerClass () {
    if (this.showAnswer === false) {
      return ''
    } else {
      return (this.isCorrect() === true ? 'correct' : 'incorrect')
    }
  }

  isCorrect () {
    return (this.userAnswer.toLowerCase() === this.question.getAnswer().toLowerCase())
  }
  setShowAnswer (show) {
    this.showAnswer = show
  }
  getShowAnswer () {
    this.userAnswer = this.question.getAnswer()
  }
  reset () {
    this.showAnswer = false
    this.userAnswer = ''
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
    color: #979797;
    text-align: left;
    margin-left: 22px;
    padding-left: 15px;
    outline-color: #4cb2d4;
    font-size: 16px;
    border: solid 0.5px #979797;
    margin-bottom: 15px;
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
