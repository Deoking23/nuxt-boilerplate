<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Axios width Store</h1>

    <p v-for="item in sample">{{ item.name }}</p>
  </section>
</template>

<script>
  import { types, _types } from '~/store/modules/types'
  //  import axios from '~/plugins/axios'

  export default {
    async asyncData ({store}) {
      let data = await store.dispatch(_types('data', types.actions.COMMON_SAMPLE), {
        isTokenRequired: false
      }).then(resp => {
        console.debug(resp.data)
        return resp.data
      }).catch((err) => {
        console.log(err)
      })
      // let { data } = await axios.get('/users')
      return {
        sample: data
      }
    }
  }
</script>