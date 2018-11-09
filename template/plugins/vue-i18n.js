/**
 * vue-i18n 설정에서
 * 서버렌더시의 store에 언어 설정도 함께 진행함.
 * 어차피 i18n 설정을 위해서 쿠키 또는 브라우저의 언어 설정을 확인해야하기 때문에
 * 이 과정에서 store도 저장하는 임수를 함께 수행하도록 함.
 */

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { Validator } from 'vee-validate'
import { types } from '~/store/modules/types'

Vue.use(VueI18n)

export default ({app, store, req}) => {
  let langSetting
  // 쿠키에 언어 설정 정보가 있으면 가져와서 store.state.language에 설정
  langSetting = getLanguageFromCookie(req)
  if (langSetting) {
    store.commit(types.mutations.ROOT_SET_LANG, langSetting)
  } else {
    // 쿠키에 없으면 브라우저 언어설정 가져와서 store.state.language에 설정
    langSetting = getLanguageFromBrowser(req)
    if (langSetting) {
      store.commit(types.mutations.ROOT_SET_LANG, langSetting)
    }
    // 못가져오면 아무 동작 안함.(store.state.language가 기본값이 ko-KR.)
  }

  // form validation을 위한 vee-validate의 언어 설정
  Validator.localize(getLanguageCodeForValidation(langSetting))

  app.i18n = new VueI18n({
    locale: langSetting,
    fallbackLocale: 'ko-KR',
    messages: {
      // 접두어
      // COMMON : 사이트 공통
      'ko-KR': require('~/locales/ko-KR.json'),
      'en': require('~/locales/en-US.json'),
      'en-US': require('~/locales/en-US.json'),
      'zh': require('~/locales/zh-CN.json'),
      'zh-CN': require('~/locales/zh-CN.json')
    }
  })
}

const getLanguageFromCookie = (req) => {
  if (process.server && !req.headers.cookie) return undefined

  const cookieSrc = process.server ? req.headers : document
  const cookies = cookieSrc.cookie.split(';').filter((item, index, array) => {
    return (item.trim().indexOf(process.env.LANGUAGE_COOKIE_NAME) !== -1)
  })
  if (cookies.length === 0) {
    return undefined
  } else {
    return getLanguageCountryCode(cookies[ 0 ].split('=')[ 1 ])
  }
}

const getLanguageFromBrowser = (req) => {
  if (process.server) {
    // console.log(req.acceptsLanguages()[0]) // ->> ko-KR
    let acceptLanguage = req.headers['accept-language'].split(',')
    if (acceptLanguage.length > 0) {
      return getLanguageCountryCode(acceptLanguage[ 0 ])
    } else {
      return undefined
    }
  } else {
    return getLanguageCountryCode(navigator.language || navigator.userLanguage)
  }
  // return 'ko-KR'
}

const getLanguageCountryCode = (value) => {
  let result

  if (value.indexOf('ko') !== -1) {
    result = 'ko-KR'
  } else if (value.indexOf('en') !== -1) {
    result = 'en-US'
  } else if (value.indexOf('zh') !== -1) {
    result = 'zh-CN'
  } else {
    result = 'en-US'
  }
  // console.log('input lang: ', value, ', output lang: ', result)
  return result
}

const getLanguageCodeForValidation = (value) => {
  let result
  switch (value) {
    case 'ko-KR':
      result = 'ko'
      break
    case 'en-US':
      result = 'en'
      break
    case 'zh-CN':
      result = 'zh_CN'
      break
    default:
      result = 'en'
  }
  return result
}
