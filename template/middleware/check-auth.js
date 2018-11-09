import { types, _types } from '~/store/modules/types'

export default async function (context) {
  /**
   * 목적 1. access_token이 없으면 mypage 등 접근 불가(홈페이지로 redirect)
   * 목적 2. access_token을 이용해서 REST API로 사용자 정보를 가져오고 store에 저장
   * 목적 3. access_token이 유효하지 않으면 mypage 등 접근 불가(홈페이지로 redirect)
   */
  let accessToken = getAccessTokenFromCookie(context.req)

  if (!accessToken) {
    // 목적 1 이행.
    if (disallowPathToNonMember(context.route.path)) {
      context.redirect('/member/login')
    }
  } else {
    // access token을 store에 담아야, store.actions 들에서 token을 사용하는 액션들이 store에 저장된 token을 사용 할 수 있다.
    context.store.commit(types.mutations.ROOT_SET_TOKEN, accessToken)
    try {
      // 목적 2 이행.
      let { data: userInfo } = await context.store.dispatch(_types('user', types.actions.USER_GET_INFO))
      context.store.dispatch(_types('user', types.actions.USER_STORE_USER_INFO), userInfo)
    } catch (err) {
      // 목적 3 이행.
      console.error(err)
      deleteAccessTokenInCookie(context.req, context.res)

      // 로그인 했던 사람이 웹사이트를 구경하다가, 토큰이 만료되서 /api/v1/me의 응답이 에러일때,
      // 로그인이 필요 없는 페이지로 이동하려고 하면 그냥 이동 시키고, 로그인이 필요한 페이지로 이동하려고 하면 로그인페이지로 이동함.
      if (disallowPathToNonMember(context.route.path)) {
        context.redirect('/member/login')
      }
    }
  }
}

const getAccessTokenFromCookie = (req) => {
  if (process.server && !req.headers.cookie) return undefined

  const cookieSrc = process.server ? req.headers : document
  const cookies = cookieSrc.cookie.split(';').filter((item, index, array) => {
    return (item.trim().indexOf(process.env.ACCESS_TOKEN_NAME) !== -1)
  })
  if (cookies.length === 0) {
    return undefined
  } else {
    return cookies[0].split('=')[1]
  }
}

const disallowPathToNonMember = (path) => {
  return (path.indexOf('/mypage') !== -1)
}

const deleteAccessTokenInCookie = (req, res) => {
  // TODO: access token 삭제 작업
  if (process.server) {
    res.clearCookie(process.env.ACCESS_TOKEN_NAME, { domain: req.hostname, path: '/' })
  } else {
    document.cookie = `${process.env.ACCESS_TOKEN_NAME}=;domain=${window.location.hostname};path=/;expires=${new Date(0)};`
  }
}
