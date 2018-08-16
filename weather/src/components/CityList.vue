<template>
  <div id="app">
    <h3>City List</h3>
    <ul>
      <li v-for="city in cities"
        v-bind:key="city.en"
      >
        <router-link :to="{
           path: '/weather/' + city.en.toLowerCase(),
           params: {city: city}
        }">
          {{ `${city.name} (${city.en})` }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import cities from './cities.json'

export default {
  name: 'CityList',
  data: function() {
    return {
      cities: cities
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
