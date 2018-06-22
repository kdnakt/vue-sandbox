<template>
  <div id="app">
    <h3>City List</h3>
    <ul>
      <li v-for="city in cities">
        {{ city.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  data: function() {
    return {
      cities: [{
        id: 1,
        name: 'Tokyo'
      }, {
        id: 2,
        name: 'New York'
      }]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
