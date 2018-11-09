import { types } from './types'

const actions = {
  [types.actions.USER_POST_REGISTER] (context, { userData }) {
    /**
     * Argument
     *    - userData    : Object    > 회원가입을 위한 사용자 정보
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/signup',
      isTokenRequired: false,
      bodyData: userData
    }, { root: true })
  },
  [types.actions.USER_POST_LOGIN] (context, { id, password }) {
    /**
     * Argument
     *    - id          : String    > 로그인 아이디
     *    - password    : String    > 로그인 비밀번호
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/login',
      isTokenRequired: false,
      bodyData: {
        email: id,
        password: password
      }
    }, { root: true })
  },
  [types.actions.USER_GET_INFO] (context) {
    /**
     * Argument
     *    - isTokenRequired : Boolean   > 토큰의 필요 여부
     */
    return context.dispatch('requestGet', {
      requestUrl: '/api/v1/me',
      isTokenRequired: true
    }, { root: true })
  },
  [types.actions.USER_PUT_CHANGE_PASSWORD] (context, { id, password, newPassword }) {
    /**
     * Argument
     *    - id            : String    > 사용자 아이디
     *    - password      : String    > 기존 비밀번호
     *    - newPassword   : String    > 새로운 비밀번호
     */
    return context.dispatch('requestPut', {
      requestUrl: '/api/v1/change-password',
      isTokenRequired: true,
      bodyData: {
        email: id,
        password: password,
        newPassword: newPassword
      }
    }, { root: true })
  },
  [types.actions.USER_PUT_CHANGE_USER] (context, { postalCode, address1, address2, smsRcv, emailRcv, birth }) {
    /**
     * Argument
     *    - id            : String    > 사용자 아이디
     *    - password      : String    > 비밀번호
     */
    return context.dispatch('requestPut', {
      requestUrl: '/api/v1/change-user',
      isTokenRequired: true,
      bodyData: {
        postalCode: postalCode,
        address1: address1,
        address2: address2,
        smsRcv: smsRcv,
        emailRcv: emailRcv,
        birth: birth
      }
    }, { root: true })
  },
  [types.actions.USER_POST_CONFIRM_PASSWORD] (context, { id, password }) {
    /**
     * Argument
     *    - id            : String    > 사용자 아이디
     *    - password      : String    > 비밀번호
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/match-password',
      isTokenRequired: false,
      bodyData: {
        email: id,
        password: password
      }
    }, { root: true })
  },
  [types.actions.USER_POST_CERTIFICATION] (context, { mode, target }) {
    /**
     * Argument
     *    - mode         : String    > 인증 수단
     *    - target       : String    > 인증 타겟(휴대폰 번호 또는 이메일 주소)
     */
    let payload = {
      mode: mode
    }
    if (mode === 'CERT_MOBILE') {
      payload.mobile = target
    } else if (mode === 'CERT_EMAIL') {
      payload.email = target
    }

    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/cert',
      isTokenRequired: false,
      bodyData: payload
    }, { root: true })
  },
  [types.actions.USER_POST_MOBILE_CERTIFICATION_CONFIRM] (context, { mobile, code }) {
    /**
     * Argument
     *    - mobile    : String    > 인증번호를 받은 휴대폰 번호
     *    - code      : String    > 휴대폰으로 받은 인증코드
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/cert/confirm',
      isTokenRequired: false,
      bodyData: {
        mode: 'CERT_MOBILE',
        mobile: mobile,
        code: code
      }
    }, { root: true })
  },
  [types.actions.USER_POST_MOBILE_CERTIFICATION_CHANGE] (context, { mobile, code }) {
    /**
     * Argument
     *    - mobile    : String    > 인증번호를 받은 휴대폰 번호
     *    - code      : String    > 휴대폰으로 받은 인증코드
     */
    return context.dispatch('requestPut', {
      requestUrl: '/api/v1/change-mobile',
      isTokenRequired: true,
      bodyData: {
        mode: 'CERT_MOBILE',
        mobile: mobile,
        code: code
      }
    }, { root: true })
  },
  [types.actions.USER_POST_REQUEST_CODE_FOR_FIND_ID] (context, { fullname, mobile }) {
    /**
     * Argument
     *    - fullname  : String    > 사용자 이름
     *    - mobile    : String    > 인증번호를 받을 휴대폰 번호
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/find/account/mobile',
      isTokenRequired: false,
      bodyData: {
        fullname: fullname,
        mobile: mobile
      }
    }, { root: true })
  },
  [types.actions.USER_POST_CONFIRM_CODE_FOR_FIND_ID] (context, { fullname, mobile, code }) {
    /**
     * Argument
     *    - fullname  : String    > 사용자 이름
     *    - mobile    : String    > 인증번호를 받은 휴대폰 번호
     *    - code      : String    > 휴대폰으로 받은 인증코드
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/find/account/mobile/confirm',
      isTokenRequired: false,
      bodyData: {
        fullname: fullname,
        mobile: mobile,
        code: code
      }
    }, { root: true })
  },
  [types.actions.USER_POST_REQUEST_CODE_FOR_FIND_PASSWORD] (context, { email, fullname, mobile }) {
    /**
     * Argument
     *    - email     : String    > 가입한 이메일
     *    - fullname  : String    > 사용자 이름
     *    - mobile    : String    > 인증번호를 받을 휴대폰 번호
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/find/password/mobile',
      isTokenRequired: false,
      bodyData: {
        email: email,
        fullname: fullname,
        mobile: mobile
      }
    }, { root: true })
  },
  [types.actions.USER_POST_CONFIRM_CODE_FOR_FIND_PASSWORD] (context, { mobile, code }) {
    /**
     * Argument
     *    - mobile    : String    > 인증번호를 받을 휴대폰 번호
     *    - code      : String    > 휴대폰으로 받은 인증코드
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/find/password/mobile/confirm',
      isTokenRequired: false,
      bodyData: {
        mobile: mobile,
        code: code
      }
    }, { root: true })
  },
  [types.actions.USER_POST_RESET_PASSWORD] (context, { email, mobile, code, password }) {
    /**
     * Argument
     *    - email     : String    > 가입한 이메일
     *    - mobile    : String    > 인증번호를 받은 휴대폰 번호
     *    - code      : String    > 휴대폰으로 받은 인증코드
     *    - password  : String    > 새로 설정 할 비밀번호
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/reset/password/mobile',
      isTokenRequired: false,
      bodyData: {
        email: email,
        mobile: mobile,
        code: code,
        password: password
      }
    }, { root: true })
  },
  [types.actions.USER_POST_LEAVE_USER] (context, { leaveTerms, password, leaveReason }) {
    /**
     * Argument
     *    - leaveTerms     : String    > 회원탈퇴 약관
     *    - password       : String    > 비밀번호
     *    - leaveReason    : String    > 회원탈퇴 사유
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/leave-user',
      isTokenRequired: true,
      bodyData: {
        leaveTerms: leaveTerms,
        password: password,
        leaveReason: leaveReason
      }
    }, { root: true })
  },
  [types.actions.USER_STORE_USER_INFO] (context, info) {
    // context.rootState.userInfo = info
    context.commit(types.mutations.ROOT_SET_USER_INFO, info, { root: true })
  },
  [types.actions.USER_POST_DUPLICATION_CHECK_EMAIL] (context, { email }) {
    /**
     * Argument
     *    - email     : String    > 판별할 이메일
     */
    return context.dispatch('requestPost', {
      requestUrl: '/api/v1/valid-email',
      isTokenRequired: false,
      bodyData: {
        email: email
      }
    }, { root: true })
  }
}

export default {
  actions
}
