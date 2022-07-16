<template>
  <p>
    <button class="btn" @click="inc()">+</button>
    <button class="btn" @click="dec()">-</button>
    <button class="btn" @click="asyncInc()">async(+)</button>
    {{ state.loading?'loading...':state.count }} 
  </p>
</template>

<script>

import { Get } from 'ajwahjs';
import { useStream } from "../hooks";
import { CounterController } from "../controllers/counterController";
export default {
  name: "Counter",
  components: {
    
  },
  setup() {
    const controller = Get(CounterController);

    const state = useStream(controller.stream$, controller.state);

    function inc() {
      controller.increment();
    }
    function dec() {
      controller.decrement();
    }
    function asyncInc() {
      controller.asyncIncBy(10);
    }

    return { inc, dec, asyncInc, state };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
