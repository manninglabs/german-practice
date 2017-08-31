<template>
  <div id="exercise-2">
    <h2>Exercise 2</h2>
    <p>For this exercise, you will be given a paragraph consisting of 10-20 sentences with missing words. In order to complete the exercise, you must fill in each blank with the correct German adjective. All adjectives must have the correct endings to match the gender and case of the rest of the sentence.</p>
    <div>
      <p>1) Lorem Ipsum is simply dummy text. —></p>
      <p><input type="text"></p>
    </div>
    <div>
      <p>2) Lorem Ipsum has been the industry’s. —></p>
      <p><input type="text"></p>
    </div>
    <div>
      <p>3) It has survived not only five centuries. —></p>
      <p><input type="text"></p>
    </div>
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
  }
</style>
