<template>
  <div>
    <main-banner />
    <h1>Exercises</h1>
    <div v-for="e in exercises">
      <router-link class="exercise-list-item" :to="{ name: 'exercise', params: { id: e.id, exercise: e }}">Exercise {{ e.id }}</router-link>
    </div>
    <site-footer />
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        exercises: [
          {
            id: 1,
            name: 'exercise1',
            questions: [
              {
                text: "This is my question.",
                answer: "abc"
              },
              {
                text: "This is my question.",
                answer: "abc"
              },
              {
                text: "This is my question.",
                answer: "abc"
              }
            ]
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
  .exercise-list-item {
    font-size: 17px;
    letter-spacing: 1.2px;
    color: #4cb2d4;
    text-decoration: none;
    cursor: pointer;
    padding-left: 100px;
  }
  exercise-list-item a:hover {
    color: #56b949;
  }

</style>
