<template>
  <div>
    <h3>Enter your API key for OpenWeatherMap.org!</h3>
    <input type="password" id="api-key" v-model="apikey" />
    <button @click="saveApiKey" :disabled="!validApikey" >Save</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      apikey: ''
    }
  },
  computed: {
    validApikey: function() {
      return !!this.apikey
    }
  },
  methods: {
    saveApiKey: function() {
      // TODO: validate key via API
      this.$store.commit("apikey/setApiKey", this.apikey)
      this.$router.push({path:'/city'})
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
