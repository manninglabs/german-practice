<template>
  <div id="list-exercises">
    <ul>
      <router-link to="/exercises"><li>Grammar Topic Number 1</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 2</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 3</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 4</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 5</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 6</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 7</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 8</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 9</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 10</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 11</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 12</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 13</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 14</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 15</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 16</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 17</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 18</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 19</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 20</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 21</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 22</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 23</li></router-link>
      <router-link to="/exercises"><li>Grammar Topic Number 24</li></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ListExercises'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #list-exercises {
    padding-left: 135px;
  }
  #list-exercises ul {
    list-style: none;
    padding-left: 0px;
    font-size: 25px;
    letter-spacing: 1.2px;
    color: #4cb2d4;
  }
  #list-exercises li {
    margin-top: 20px;
  }
  #list-exercises a {
    text-decoration: none;
    color: #4cb2d4;
    cursor: pointer;
  }
  #list-exercises a:hover {
    color: #56b949;
  }
</style>
