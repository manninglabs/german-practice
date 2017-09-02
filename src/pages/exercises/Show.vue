<template>
  <div id="exercises">
    <site-header />
    <router-link to="/">&lt; List of German grammar topics</router-link>
    <h1>{{ exercise.name }}</h1>
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
