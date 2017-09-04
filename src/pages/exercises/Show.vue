<template>
  <div>
    <site-header />
    <h1>{{ exercise.name }}</h1>
    <p v-for="p in exercise.questions">{{ p.text }} {{ p.answer }}</p>
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
