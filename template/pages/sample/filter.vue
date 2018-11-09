<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Vue Filter</h1>

    <h4>Upper Case</h4>
    <input v-model="upperCase"/>

    <hr>

    <h4>Lower Case</h4>
    <input v-model="lowerCase"/>

    <hr>

    <h4>Number With Commas</h4>
    <input v-model="number"/>

    <hr>

    <h4>Date Format</h4>
    <input v-model="date"/>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        upperCase: 'upper case',
        lowerCase: 'LOWER CASE',
        number: '123456.123',
        date: '06/10/11'
      }
    }
  }
</script>