<template>
  <div>
    <div id="main-banner">
      <h1>Practice Grammar</h1>
      <p>Effective drill exercises to help you<br />master German grammar</p>
      <!-- <router-link :to="{ name: 'list-exercises' }">Start Practicing</router-link> -->
    </div>
    <h1>Our Exercises</h1>
    <div v-for="e in exercises">
      <router-link class="exercise-list-item" :to="{ name: 'show-exercise', params: { id: e.getId() }}">{{ e.getTitle() }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {grpc, BrowserHeaders, Code} from 'grpc-web-client'
import {Service} from '../proto/services_pb_service'
import {BlankQuery, Exercise, ExercisesList} from '../proto/services_pb'

/* eslint-disable no-new */
@Component({
  name: 'home'
})
export default class Home extends Vue {
  exercises: Array<Exercise> = [];

  mounted () {
    this.fetchData()
  }

  fetchData () {
    const request = new BlankQuery()
    grpc.invoke(Service.ListExercises, {
      host: 'http://localhost:8080',
      request: request,
      onMessage: (exercisesList: ExercisesList) => {
        this.exercises = exercisesList.getExercisesList()
        console.log('successfully queried, ', this.exercises)
      },
      onEnd: (code: Code, message: string, trailers: BrowserHeaders) => {
        console.log(code, message)
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main-banner {
    background-image: url('../assets/main-banner.png');
    background-size: cover;
    padding-left: 135px;
    padding-bottom: 120px;
    margin-bottom: 70px;
  }
  h1 {
    font-size: 400%;
    margin-top: 0px;
    font-weight: 500;
    letter-spacing: 1.2px;
    color: #4cb2d4;
    padding-top: 150px;
    margin-bottom: 20px;
  }
  #main-banner p {
    margin-bottom: 40px;
    margin-top: 0px;
  }
  #main-banner p,
  #main-banner a {
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 1.2px;
    color: #ffffff;
  }
  #main-banner a {
    text-decoration: none;
    border: 1px solid #56b949;
    padding: 10px 25px;
    background-color: #56b949;
  }
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
