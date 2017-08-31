<template>
  <div id="exercise-3">
    <h2>Exercise 3</h2>
    <p class="exercise-description">For this exercise, you will be given a paragraph consisting of 10-20 sentences with missing words. In order to complete the exercise, you must fill in each blank with the correct German adjective. All adjectives must have the correct endings to match the gender and case of the rest of the sentence.</p>
    <div class="question">
        <p>
          1&nbsp;&nbsp;Lorem Ipsum is simply dummy text of 
          <label>
            <select>
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>
          </label>
          printing and typesetting industry.
        </p>
    </div>
    <div class="question">
        <p>
          2&nbsp;&nbsp;Lorem Ipsum has been the industry's 
          <label>
            <select>
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select> 
          </label>
          dummy text ever since the 1500s.
        </p>
    </div>
    <div class="question">
        <p>
          3&nbsp;&nbsp;It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
          <label>
            <select>
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>.
          </label>
        </p>
    </div>
    <div class="question">
        <p>
          4&nbsp;&nbsp;It was popularised in the 1960s with the release of 
          <label>
            <select>
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select> 
          </label>
          Ipsum.
        </p>
    </div>
    <input type="submit" value="CHECK">

  </div>
</template>

<script>
  export default {
    name: 'Exercises3'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #exercise-3 {
    padding-left: 100px;
    padding-right: 100px;
    font-family: 'Avenir';
  }
  #exercise-3 h2 {
    font-size: 17px;
    color: #151f40;
    letter-spacing: 1.2px;
    font-weight: 600;
    margin-top: 40px;
  }
  #exercise-3 .exercise-description {
    font-size: 16px;
    font-style: oblique;
    line-height: 1.67;
    letter-spacing: 1.2px;
    color: #151f40;
  }
  #exercise-3 .question p {
    font-size: 16px;
    font-style: normal;
    letter-spacing: 1.2px;
    color: #151f40;
    margin-top: 30px;
    margin-bottom: -5px;
    font-weight: 100;
  }
  input[type="submit"] {
    background-color: #4cb2d4;
    font-size: 15px;
    letter-spacing: 1.2px;
    color: #ffffff;
    border: none;
    padding: 10px 80px;
    outline: none;
    margin-top: 40px;
    margin-bottom: -70px;
    margin-left: 22px;
    cursor: pointer;
  }
  input[type="submit"]:active {
    background-color: #56b949;
  }
  select {
    padding: 4px;
    color: #bbbcbd;
    border: 1px solid #979797;
    border-radius: 0px;
    background-color: #ffffff;
    display: inline-block;
    appearance: none;
    cursor: pointer;
    width: 100px;
    outline: none;
    padding-left: 40px;
}
  label {position:relative}
  label:after {
      content: '∨';
      font-size: 11px;
      color: #bbbcbd;
      right: 8px; 
      top: 4px;
      position: absolute;
      pointer-events: none;
  }
</style>
