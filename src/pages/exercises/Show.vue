<template>
  <div>
    <site-header />
    <h1>{{ exercise.name }}</h1>
    <!-- TODO add a loop here to show your list of questions -->
    <site-footer />
  </div>
</template>

<script>
  export default {
    name: 'Exercise',
    props: ['exercise']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
