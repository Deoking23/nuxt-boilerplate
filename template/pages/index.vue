<template>
  <section class="container text-center">

    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo"/>
    <h1 class="title">Aart Nuxt Boilerplate</h1>

    <h3>Example</h3>
    <ul class="list-unstyled">
      <li>Vue</li>
      <li><nuxt-link :to="{name: 'sample-filter'}">Vue Filter</nuxt-link></li>
      <li>&nbsp;</li>
      <li>Library</li>
      <li><nuxt-link :to="{name: 'sample-authenticate'}">Authenticate</nuxt-link></li>
      <li><nuxt-link :to="{name: 'sample-validate'}">Validate</nuxt-link></li>
      <li><nuxt-link :to="{name: 'sample-localization'}">Localization</nuxt-link></li>
      <li><nuxt-link :to="{name: 'sample-axios'}">Axios with Store</nuxt-link></li>
      <li><nuxt-link :to="{name: 'sample-swiper'}">Vue Swiper</nuxt-link></li>
    </ul>

  </section>
</template>

<script>
  export default {
    async asyncData () {
      // let { data } = await axios.get('/api/users')
      return {users: 'Deokin'}
    },
    head () {
      return {
      }
    },
    data () {
      return {
        data: 'dummy'
      }
    }
  }
</script>