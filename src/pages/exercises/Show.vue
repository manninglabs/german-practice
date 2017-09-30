<template>
  <div>
    <site-header />
    <h1>{{ exercise.getTitle() }}</h1>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {grpc, BrowserHeaders, Code} from 'grpc-web-client'
import {Service} from '../../proto/services_pb_service'
import {IDQuery, Exercise} from '../../proto/services_pb'

@Component({
  name: 'show-exercise'
})
export default class ShowExercise extends Vue {
  exercise: Exercise = new Exercise();

  mounted () {
    this.fetchData()
  }

  fetchData () {
    const request = new IDQuery()
    request.setId(3)
    grpc.invoke(Service.FetchExercise, {
      host: 'http://localhost:8080',
      request: request,
      onMessage: (exercise: Exercise) => {
        this.exercise = exercise
        console.log('successfully queried, ', this.exercise)
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

</style>
