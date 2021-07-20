<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name:'About' }">About</router-link> |
    <router-link :to="{ name:'developers' }">Developers</router-link><br>
    <div class="btns">
    <button class="btn" style="float: left;" v-on:click="back">Back</button>
    <button class="btn" v-on:click="redirect">Redirect</button>
    <button class="btn" style="float: right;" v-on:click="forword">Forword</button>
    </div>
  </div>
  <router-view/>
</template>
<script>
export default {
  methods:{
    back(){this.$router.go(-1)},
    redirect(){
      this.$router.push({name: 'Home'})
    },
    forword(){this.$router.go(1)}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.btns{
 margin-top: 20px ;
}
.btn{
  background-color: #2c3e50;
  color: aliceblue;
  border-end-end-radius: 20px ;
}
</style>
