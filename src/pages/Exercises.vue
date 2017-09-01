<template>
  <div id="exercises">
    <site-header />
    <router-link to="/">&lt; List of German grammar topics</router-link>
    <h1>Grammar Topic Number 1</h1>
    <exercises-1 />
    <exercises-2 />
    <exercises-3 />
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
