<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Validate</h1>

    <form @submit="validateBeforeSubmit($event)">

      <!-- 브랜드/회사 -->
      <div class="form-group">
        <input type="text"
               name="sample"
               :class="[{'input-not-empty':!!formData.brand}, { 'is-danger': errors.has('sample') }]"
               v-model="formData.sample"
               v-validate="{ required: true }"
               data-vv-delay="1000"
        />
        <span v-show="errors.has('sample')" class="help is-danger">{{ errors.first('sample') }}</span>
      </div>

      <!-- 이름 -->
      <div class="form-group">
        <input type="text"
               name="fullname"
               :class="[{'input-not-empty':!!formData.fullname}, { 'is-danger': errors.has('fullname') }]"
               v-model="formData.fullname"
               v-validate="{ required: true }"
               data-vv-delay="1000"
        />
        <span v-show="errors.has('fullname')" class="help is-danger">{{ errors.first('fullname') }}</span>
      </div>

      <!-- 이메일 -->
      <div class="form-group">
        <input type="email"
               name="email"
               :class="[{'input-not-empty':!!formData.email}, { 'is-danger': errors.has('email') }]"
               v-model="formData.email"
               v-validate="{ required: true }"
               data-vv-delay="1000"
        />
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </div>

      <button type="submit">Submit</button>

    </form>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        formData: {
          sample: '',
          fullname: '',
          mobile: '',
          email: ''
        }
      }
    },
    methods: {
      validateBeforeSubmit (e) {
        e.preventDefault()
        this.$validator.validateAll().then((result) => {
          if (result) {
            // success process
            console.debug('success process')
            return false
          }
          // fail process
          console.debug('fail process')
          return false
        })
      }
    }
  }
</script>