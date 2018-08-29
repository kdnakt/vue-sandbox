<template>
  <div id="app">
    <h3>Weather of {{ this.name }}</h3>
    <h3>date: {{ date }}</h3>
    <h3>temperature: {{ this.temperature }}</h3>
    <h3>humidity: {{ this.humidity }}</h3>
    <h3>description: {{ this.description }}</h3>
    <h3><img :src="this.iconURL" /></h3>
    <ul>
      <li v-for="forecast in forecasts">
        {{ forecast }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  props: ['name'],
  data: function() {
    const w = this.$store.state.weather
    return {
      current: w.current,
      forecasts: w.forecasts
    }
  },
  computed: {
    date: function() {
      const { dt } = this.current
      return new Date(dt * 1000)
    },
    temperature: function() {
      const { main } = this.current
      return Math.round(main.temp - 273.15)
    },
    humidity: function() {
      const { main } = this.current
      return main.humidity
    },
    description: function() {
      return this.current.weather[0].description
    },
    iconURL: function() {
      return `https://openweathermap.org/img/w/${this.current.weather[0].icon}.png`
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
