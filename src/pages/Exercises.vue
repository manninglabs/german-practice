<template>
  <div id="exercises">
    <nav-bar />
    <router-link to="/">&lt; List of German grammar topics</router-link>
    <h1>Grammar Topic Number 1</h1>
    <exercises-1 />
    <exercises-2 />
    <exercises-3 />
    <exercises-4 />
    <site-footer />
  </div>
</template>

<script>
export default {
  name: 'Exercises'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #exercises a {
    font-size: 18px;
    letter-spacing: 1.2px;
    color: #4cb2d4;
    text-decoration: none;
    cursor: pointer;
  }
  #exercises a,
  #exercises h1 {
    padding-left: 100px;
  }
</style>
