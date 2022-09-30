<template>
  <h3>COUNTER: {{ counter }}</h3>
  <!-- <button @click="addOne">INCREMENT</button>
  <button @click="subOne">DECREMENT</button> -->
</template>

<script>
export default {
    // data(){
    //     return {
    //         counter: 0,
    //     };
    // },
    computed: {
        counter(){
            //to access the store and get the data
            return this.$store.state.counter;
        },
    }
    // methods: {
    //     addOne(){
    //         this.$store.commit("increment")
    //     },
    //     subOne(){
    //         this.$store.commit("decrement")
    //     }
    // },
};
</script>

<style>

</style>