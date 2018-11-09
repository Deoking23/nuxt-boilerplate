// Public Type
export const types = {
  mutations: {
    // ROOT
    ROOT_SET_TOKEN: 'setToken', // 토큰 저장
    ROOT_SET_LANG: 'setLang', // 언어 저장
    ROOT_SET_USER_INFO: 'setUserInfo' // 사용자 정보 저장

    // UI
  },
  getters: {
    // ROOT
    ROOT_IS_AUTHENTICATED: 'isAuthenticated' // 로그인 확인
  },
  actions: {
    // COMMON
    COMMON_GET_LANGUAGE: 'getLanguageList', // 지원하는 언어 목록 가져오기
    COMMON_GET_COUNTRY_CODE: 'getCountryCode', // 국가코드-국가 정보 목록 가져오기

    // EXAMPLE
    COMMON_SAMPLE: 'commonSample', // 예시

    // USER
    USER_POST_REGISTER: 'postUserRegister', // 회원가입
    USER_POST_LOGIN: 'postUserLogin', // 로그인
    USER_GET_INFO: 'getUserInfo', // 사용자 정보 가져오기
    USER_PUT_CHANGE_PASSWORD: 'putUserChangePassword', // 비밀번호 변경
    USER_POST_CONFIRM_PASSWORD: 'postConfirmPassword', // 비밀번호 확인
    USER_PUT_CHANGE_USER: 'putChangeUser', // 회원정보수정
    USER_POST_CERTIFICATION: 'postUserCertification', // 사용자 인증코드 요청
    USER_POST_MOBILE_CERTIFICATION_CONFIRM: 'postUserMobileCertificationConfirm', // 사용자 인증코드 확인
    USER_POST_MOBILE_CERTIFICATION_CHANGE: 'postUserMobileCertificationChange', // 사용자 인증코드 확인/변경
    USER_POST_REQUEST_CODE_FOR_FIND_ID: 'postRequestCodeForFindId', // 아이디 찾기를 위한 인증번호 요청
    USER_POST_CONFIRM_CODE_FOR_FIND_ID: 'postConfirmCodeForFindId', // 아이디 찾기를 위해 요청한 인증번호를 확인하고 아이디를 응답으로 받음
    USER_POST_REQUEST_CODE_FOR_FIND_PASSWORD: 'postRequestCodeForFindPassword', // 비밀번호 재설정을 위한 인증번호 요청
    USER_POST_CONFIRM_CODE_FOR_FIND_PASSWORD: 'postConfirmCodeForFindPassword', // 비밀번호 재설정을 위한 인증번호 확인
    USER_POST_RESET_PASSWORD: 'postResetPassword', // 사용자 비밀번호 재설정
    USER_POST_LEAVE_USER: 'postLeaveUser', // 회원탈퇴
    USER_STORE_USER_INFO: 'storeUserInfo', // 사용자 정보를 store에 저장
    USER_POST_DUPLICATION_CHECK_EMAIL: 'postDuplicationCheckEmail' // 입력한 이메일이 이미 가입되어 있는지, 탈퇴한 계정인지 판별
  }
}

export const _types = (module, constant) => {
  return module + '/' + constant
}
