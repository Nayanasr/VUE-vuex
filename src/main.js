import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

let store = createStore({
    state(){
        return{
            counter: 10,

        }
    },
    mutations: {
        //we should not write async code in mutations

        increment(state) {
            // console.log("increment mutation executed");
            state.counter += 1
        },

        // decrement(state) {
        //     state.counter -= 1
        // },
        

        //to pass some payload we are creating one increase function 
        increase(state, payload) {
            console.log("state", state);
            console.log("payload", payload);
            state.counter += payload.value  
        },
        decrease(state, payload) {
            state.counter -= payload.value
        },

    },
    getters: {
        //used to compute data and to do some calculations
        counterThreeTimes(state) {
            return state.counter*3
        },

        limitCounter(state, getters) {
            //instead of rewriting the logic, we can use the above getters
            //let counterThreeTimes = state.counter*3
            let counterThreeTimes = getters.counterThreeTimes
            if (counterThreeTimes < 0) {
                return 0
            }
            if(counterThreeTimes > 100) {
                return 100
            }
            return counterThreeTimes
        }
    },
    actions: {
        //we can use the same method name as in mutations
        //actions will come in between components and mutations
        //actions method will get context object as an argument
        increase(context, payload) {
            console.log("increase action executed");
            console.log("context", context);

            setTimeout(() => {
                context.commit("increase", payload)
            }, 2000)
        },

        increment(context) {
            console.log("increment action");

            //calling mutation function
            context.commit("increment")
        },

    }
})

let app=createApp(App)
app.use(store)
app.mount('#app')
