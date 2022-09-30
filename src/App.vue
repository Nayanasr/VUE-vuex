<template>
   <my-counter />
   <second-counter />
   <button @click="addOne">INCREMENT with DELAY</button>
      <button @click="addWithoutDelay">INCREMENT without Delay</button>
      <button @click="subOne">DECREMENT</button>

</template>

<script>
import MyCounter from './components/MyCounter.vue'
import SecondCounter from './components/SecondCounter.vue';

export default {
  name: 'App',
  components: {
    MyCounter,
    SecondCounter
  },
   methods: {
        addOne(){
            // this.$store.commit("increment")

            //to pass some payload
            // this.$store.commit("increase", { value: 20 });

            //dispatching an action
            this.$store.dispatch({type:"increase", value: 20})
        },
        subOne(){
            // this.$store.commit("decrement")
            //to pass some payload
          this.$store.commit("decrease", { value: 5})
        },
        
        addWithoutDelay(){
          this.$store.dispatch("increment")
        }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
