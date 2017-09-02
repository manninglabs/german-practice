<template>
  <div>
    <div id="main-banner">
      <h1>Practice Grammar</h1>
      <p>Effective drill exercises to help you<br />
         master German grammar</p>
      <!-- <a href="#list-exercises">Start Practicing</a> -->
      <router-link to="/exercises">Start Practicing</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainBanner'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main-banner {
    background-image: url('../../src/assets/main-banner.png');
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
</style>
