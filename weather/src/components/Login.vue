<template>
  <div>
    <h3>Enter your API key for OpenWeatherMap.org!</h3>
    <input type="text" id="api-key" v-model="apikey" />
    <button @click="saveApiKey">Save</button>
    <br>
    <span>{{this.$store.state.apikey.apikey}}</span>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      apikey: this.$store.state.apikey.apikey
    }
  },
  methods: {
    saveApiKey: function() {
      this.$store.commit("apikey/setApiKey", this.apikey)
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
