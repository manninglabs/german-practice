<template>
  <div id="exercises">
    <site-header />
    <h1>Exercises</h1>
    <div v-for="e in exercises">
      <router-link :to="{ name: 'exercise', params: { id: e.id, exercise: e }}">Exercise {{ e.id }}</router-link>
    </div>
    <site-footer />
  </div>
</template>

<script>
export default {
  name: 'Exercises',
  data () {
    return {
      exercises: [
        {
          id: 1,
          name: 'exercise1'
        },
        {
          id: 2,
          name: 'exercise2'
        },
        {
          id: 3,
          name: 'exercise3'
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #exercises a {
    font-size: 17px;
    letter-spacing: 1.2px;
    color: #4cb2d4;
    text-decoration: none;
    cursor: pointer;
    padding-left: 100px;
  }
  #exercises a:hover {
    color: #56b949;
  }
  #exercises h1 {
    font-size: 35px;
    color: #56b949;
    letter-spacing: 2px;
    padding-left: 100px;
    margin-top: 40px;
    font-weight: 100;
  }
</style>
