<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Localization</h1>

    <p>$i18n : {{$i18n.locale}}</p>
    <p>$store : {{$store.state.language}}</p>
    <select @change="changeLang($event)">
      <option v-for="item in langList" :value="item.value" :selected="$store.state.language == item.value">
        {{item.label}}
      </option>
    </select>

    <h3 v-html="$t('TEST_TEXT')" :lang="$i18n.locale"></h3>

  </section>
</template>

<script>
  import Cookies from 'js-cookie'

  export default {
    data () {
      return {
        langList: [
          {
            label: 'KOR',
            value: 'ko-KR'
          },
          {
            label: 'CHN',
            value: 'zh-CN'
          },
          {
            label: 'ENG',
            value: 'en-US'
          }
        ]
      }
    },
    methods: {
      changeLang (e) {
        Cookies.set(process.env.LANGUAGE_COOKIE_NAME, e.target.value)
        location.reload()
      }
    }
  }
</script>