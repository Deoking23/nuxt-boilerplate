<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Authenticate</h1>

    <form @submit="validateLogin($event)">
      <div>
        <input type="email"
               name="email"
               :class="{ 'is-danger': errors.has('email') }"
               v-model="email"
               v-validate="{ required: true }"
               data-vv-delay="1000"
        />
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </div>
      <div>
        <input type="password"
               name="password"
               :class="{ 'is-danger': errors.has('password') }"
               v-model="password"
               v-validate="{ required: true }"
               data-vv-delay="1000"
        />
        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
      </div>

      <button class="btn btn-default" type="submit">Submit</button>
    </form>

    <br/>

    <button class="btn btn-default" @click="handleOnClickSnsLogin('naver')">Naver</button>
    <button class="btn btn-default" @click="handleOnClickSnsLogin('facebook')">Facebook</button>
    <button class="btn btn-default" @click="handleOnClickSnsLogin('kakao')">Kakao</button>
    <button class="btn btn-default" @click="handleOnClickSnsLogin('google')">Google</button>

  </section>
</template>

<script>
  import { types } from '~/store/modules/types'

  export default {
    data () {
      return {
        email: 'admin@aartkorea.com',
        password: '1234'
      }
    },
    methods: {
      validateLogin (e) {
        e.preventDefault()
        let $this = this
        // Validate
        this.$validator.validateAll().then((result) => {
          if (result) {
            // success process
            console.debug('success process')
            $this.login()
            return false
          }
          // fail process
          console.debug('fail process')
          return false
        })
      },
      login () {
        /**
         * 이메일 로그인
         * */
        let $this = this
        let email = this.email
        let password = this.password

        this.$auth.login({email, password}).then((resp) => {
          $this.$store.commit(types.mutations.ROOT_SET_TOKEN, resp.data.access_token)
          $this.$router.push({name: 'index'})
        }).catch(err => {
          console.error(err)
          if (err.response.status === 401) {
            alert('로그인 정보가 올바르지 않습니다.')
          } else if (err.response.status === 400 && err.response.data.message === 'LEAVED_USER') {
            alert('탈퇴한 계정입니다.')
          }
        })
      },
      handleOnClickSnsLogin (provider) {
        /**
         * SNS 로그인
         * */
        this.$auth.authenticate(provider).then((resp) => {
          // Execute application logic after successful social authentication
          if (resp.data.result === 'success') {
            console.debug('success', resp)
            this.$router.replace('/')
          } else if (resp.data.result === 'fail') {
            if (resp.data.message === 'LEAVED_ACCOUNT') {
              alert('탈퇴한 계정입니다.')
            } else if (resp.data.message === 'NOT_EXISTED_ACCOUNT') {
              alert('로그인 정보가 올바르지 않습니다.')
            }
          }
        }).catch(err => {
          console.error(err)
          alert('로그인에 실패했습니다.')
          // if (err.response.status === 400) {
          //   if (err.response.data.message === 'NON_EXISTENT_EMAIL') {
          //     console.log('이메일 정보가 없는 SNS 계정입니다.')
          //   }
          // }
        })
      }
    }
  }
</script>