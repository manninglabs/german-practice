<template>
  <div id="exercise-1">
    <h2>Exercise 1</h2>
    <p>For this exercise, you will be given a paragraph consisting of 10-20 sentences with missing words. In order to complete the exercise, you must fill in each blank with the correct German adjective. All adjectives must have the correct endings to match the gender and case of the rest of the sentence.</p>
    <button type="button">the</button>
    <button type="button">standard</button>
    <button type="button">unchanged</button>
    <button type="button">Lorem</button>
    <p>
      1) Lorem Ipsum is simply dummy text of 
      <input type="text" /> 
      printing and typesetting industry.
    </p>
    <p>
      2) Lorem Ipsum has been the industry's 
      <input type="text" /> 
      dummy text ever since the 1500s.
    </p>
    <p>
      3) It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
      <input type="text" />.
    </p>
    <p>
      4) It was popularised in the 1960s with the release of 
      <input type="text" /> 
      Ipsum.
    </p>
    <input type="submit" value="CHECK">
    <hr />
  </div>
</template>

<script>
  export default {
    name: 'Exercises1'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #exercise-1 {
    padding-left: 100px;
    padding-right: 100px;
  }
</style>
