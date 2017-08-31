<template>
  <div id="exercise-2">
    <h2>Exercise 2</h2>
    <p class="exercise-description">For this exercise, you will be given a paragraph consisting of 10-20 sentences with missing words. In order to complete the exercise, you must fill in each blank with the correct German adjective. All adjectives must have the correct endings to match the gender and case of the rest of the sentence.</p>
    <p class="question">
      1&nbsp;&nbsp;Lorem Ipsum is simply dummy text of <input class="input-text" type="text" /> printing and typesetting industry.
    </p>
    <p class="question">
      2&nbsp;&nbsp;Lorem Ipsum has been the industry's <input class="input-text" type="text" /> dummy text ever since the 1500s.
    </p>
    <p class="question">
      3&nbsp;&nbsp;It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially <input class="input-text" type="text" />.
    </p>
    <p class="question">
      4&nbsp;&nbsp;It was popularised in the 1960s with the release of <input class="input-text" type="text" /> Ipsum.
    </p>
    <input type="submit" value="CHECK">
    <hr />
  </div>
</template>

<script>
  export default {
    name: 'Exercises2'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #exercise-2 {
    padding-left: 100px;
    padding-right: 100px;
    font-family: 'Avenir';
  }
  #exercise-2 h2 {
    font-size: 17px;
    color: #151f40;
    letter-spacing: 1.2px;
    font-weight: 600;
    margin-top: 40px;
  }
  #exercise-2 .exercise-description {
    font-size: 16px;
    font-style: oblique;
    line-height: 1.67;
    letter-spacing: 1.2px;
    color: #151f40;
  }
  #exercise-2 .question {
    font-size: 16px;
    font-style: normal;
    letter-spacing: 1.2px;
    color: #151f40;
    margin-top: 30px;
    margin-bottom: -5px;
    font-weight: 100;
  }
  #exercise-2 input.input-text {
    width: 100px;
    padding: 5px;
    text-align: left;
    outline-color: #4cb2d4;
    color: #bbbcbd;
    font-size: 15px;
    border: solid 0.5px #979797;
  }
  input[type="submit"] {
    background-color: #4cb2d4;
    font-size: 15px;
    letter-spacing: 1.2px;
    color: #ffffff;
    border: none;
    padding: 10px 80px;
    outline: none;
    margin-top: 35px;
    margin-bottom: 30px;
    margin-left: 22px;
    cursor: pointer;
  }
  input[type="submit"]:active {
    background-color: #56b949;
  }
  hr {
    height: 0.2px;
    background-color: #999999;
  }
</style>
