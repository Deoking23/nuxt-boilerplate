import { types } from './modules/types'
import common from './modules/common'
import user from './modules/user'
import data from './modules/data'

// 모듈
export const modules = {
  common,
  user,
  data
}

export const state = () => ({
  acToken: '',
  language: 'ko-KR',
  userInfo: {}
})

export const mutations = {
  [types.mutations.ROOT_SET_TOKEN] (state, at) {
    state.acToken = at
  },
  [types.mutations.ROOT_SET_LANG] (state, lang) {
    state.language = lang
  },
  [types.mutations.ROOT_SET_USER_INFO] (state, info) {
    state.userInfo = info
  }
}

export const actions = {
  requestGet (context, {requestUrl, isTokenRequired}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {}
      }
      config.headers['accept-language'] = context.state.language
      if (isTokenRequired) {
        // 토큰이 Authorization 헤더에 꼭 필요한 요청
        config.headers['Authorization'] = `Bearer ${context.state.acToken}`
      }

      this.$axios.get(
        requestUrl, config
      ).then(resp => {
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestPost (context, {requestUrl, isTokenRequired, bodyData}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {}
      }
      config.headers['accept-language'] = context.state.language
      if (isTokenRequired) {
        // 토큰이 Authorization 헤더에 꼭 필요한 요청
        config.headers['Authorization'] = `Bearer ${context.state.acToken}`
      }

      this.$axios.post(
        requestUrl, bodyData, config
      ).then(resp => {
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestPostFile (context, {requestUrl, isTokenRequired, bodyData}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {}
      }
      config.headers['accept-language'] = context.state.language
      config.contentType = 'multipart/form-data'
      if (isTokenRequired) {
        // 토큰이 Authorization 헤더에 꼭 필요한 요청
        config.headers['Authorization'] = `Bearer ${context.state.acToken}`
      }

      this.$axios.post(
        requestUrl, bodyData, config
      ).then(resp => {
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestPut (context, {requestUrl, isTokenRequired, bodyData}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {}
      }
      config.headers['accept-language'] = context.state.language
      if (isTokenRequired) {
        // 토큰이 Authorization 헤더에 꼭 필요한 요청
        config.headers['Authorization'] = `Bearer ${context.state.acToken}`
      }

      this.$axios.put(
        requestUrl, bodyData, config
      ).then(resp => {
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestPatch (context, {requestUrl, isTokenRequired, bodyData}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {}
      }
      config.headers['accept-language'] = context.state.language
      if (isTokenRequired) {
        // 토큰이 Authorization 헤더에 꼭 필요한 요청
        config.headers['Authorization'] = `Bearer ${context.state.acToken}`
      }

      this.$axios.patch(
        requestUrl, bodyData, config
      ).then(resp => {
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  requestDelete (context, {requestUrl, isTokenRequired}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {}
      }
      config.headers['accept-language'] = context.state.language
      if (isTokenRequired) {
        // 토큰이 Authorization 헤더에 꼭 필요한 요청
        config.headers['Authorization'] = `Bearer ${context.state.acToken}`
      }

      this.$axios.delete(
        requestUrl, config
      ).then(resp => {
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
