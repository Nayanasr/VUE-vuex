<template>
  <h3>COUNTER TWO: {{ counter }}</h3>
</template>

<script>
export default {
    computed: {
        counter(){

            // return this.$store.state.counter*3  //referred this type of code only for single line execution of code
            // return this.$store.getters.counterThreeTimes

            return this.$store.getters.limitCounter
        }
    }

}
</script>

<style>

</style>