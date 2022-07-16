<template>
<!-- 3. finally needs to be defined here -->
	<Counter />  
</template>

<script>
//imports always at the top of the file
// import Counter from './components/Counter.vue' //1. using components needs import

export default {
  name: 'App',
  components: {
    //  Counter // 2. declare import inside the components object
  }
}
</script>