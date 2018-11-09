import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'

let expireDate = new Date()
expireDate.setDate(expireDate.getDate() + 1)

Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: process.env.API_SERVER_ADDRESS, // 로그인 서버의 API domain
  loginUrl: '/api/v1/login', // login() 을 호출했을 때 요청되는 주소
  // tokenPrefix: 'pm', // 토큰을 저장될 때 key name에 붙는 prefix
  tokenName: process.env.ACCESS_TOKEN_NAME, // 토큰을 저장될 때의 key name
  storageType: 'cookieStorage', // 토큰을 저장할 저장소
  cookieStorage: {
    domain: window.location.hostname,
    path: '/',
    expires: expireDate,
    secure: false // process.env.NODE_ENV === 'production' // https지원하고, 배포일 때만 secure 설정
  },
  providers: {
    facebook: {
      clientId: '158756358975786', // ID
      url: '/api/v1/auth/facebook', // 성공 시 호출 될 url
      redirectUri: window.location.origin + '/', // Your client app URL
      authorizationEndpoint: 'https://www.facebook.com/v2.11/dialog/oauth',
      state: `aart-facebook-login-${Date.now()}`
    },
    google: {
      clientId: '98876232037-lvdhoopld10gru2epaum772eli6t5ln1.apps.googleusercontent.com',
      url: '/api/v1/auth/google',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      state: `aart-google-login-${Date.now()}`
    },
    naver: {
      name: 'naver',
      url: '/api/v1/auth/naver',
      clientId: 'ZcQwAEWkdkSDiRjzsSvHr',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://nid.naver.com/oauth2.0/authorize',
      requiredUrlParams: [ 'state' ],
      state: `aart-naver-login-${Date.now()}`,
      oauthType: '2.0',
      popupOptions: {width: 880, height: 500},
      responseParams: {
        code: 'code',
        clientId: 'clientId',
        redirectUri: 'redirectUri',
        state: 'state'
      }
    },
    kakao: {
      name: 'kakao',
      url: '/api/v1/auth/kakao',
      clientId: 'fabc706a1grw12702982ece07115932',
      redirectUri: window.location.origin + '/',
      authorizationEndpoint: 'https://kauth.kakao.com/oauth/authorize',
      requiredUrlParams: [ 'state' ],
      state: `aart-kakao-login-${Date.now()}`,
      oauthType: '2.0',
      popupOptions: {width: 580, height: 600},
      responseParams: {
        code: 'code',
        clientId: 'clientId',
        redirectUri: 'redirectUri',
        state: 'state'
      }
    }
  }
})
