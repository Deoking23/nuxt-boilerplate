import Vue from 'vue'
import ko from 'vee-validate/dist/locale/ko'
import zhCN from 'vee-validate/dist/locale/zh_CN'
import en from 'vee-validate/dist/locale/en'
import VeeValidate, { Validator } from 'vee-validate'

const customKo = {
  custom: {
    sample: {
      required: '브랜드명 또는 회사명을 입력하세요.'
    }
  }
}

const customZhCn = {
  custom: {
    sample: {
      required: '请输入品牌名称或公司名称。'
    }
  }
}

const customEn = {
  custom: {
    sample: {
      required: 'Please enter a brand name or company name.'
    }
  }
}

// ko의 원래 dic을 먼저 불러오고 그 다음에 custom을 merge 시켜야 컴포넌트에서 extend를 사용할 수 있다.
Validator.localize('ko', ko)
Validator.localize('ko', customKo)
Validator.localize('zh_CN', zhCN)
Validator.localize('zh_CN', customZhCn)
Validator.localize('en', en)
Validator.localize('en', customEn)

Vue.use(VeeValidate, {
  locale: 'ko'
})

/* eslint-disable eol-last */