<template>
  <div>
    <main-banner />
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
                text: 'This is my question1.',
                answer: 'Answer1'
              },
              {
                text: 'This is my question1.',
                answer: 'Answer1'
              },
              {
                text: 'This is my question1.',
                answer: 'Answer1'
              }
            ]
          },
          {
            id: 2,
            name: 'exercise2',
            questions: [
              {
                text: 'This is my question2.',
                answer: 'Answer2'
              },
              {
                text: 'This is my question2.',
                answer: 'Answer2'
              },
              {
                text: 'This is my question2.',
                answer: 'Answer2'
              }
            ]
          },
          {
            id: 3,
            name: 'exercise3',
            questions: [
              {
                text: 'This is my question3.',
                answer: 'Answer3'
              },
              {
                text: 'This is my question3.',
                answer: 'Answer3'
              },
              {
                text: 'This is my question3.',
                answer: 'Answer3'
              }
            ]
          },
          {
            id: 4,
            name: 'exercise4',
            questions: [
              {
                text: 'This is my question4.',
                answer: 'abc4'
              },
              {
                text: 'This is my question4.',
                answer: 'abc4'
              },
              {
                text: 'This is my question4.',
                answer: 'abc4'
              }
            ]
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
    padding-left: 135px;
  }
  .exercise-list-item a:hover {
    color: #56b949;
  }

</style>
