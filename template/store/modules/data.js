import { types } from './types'

const actions = {
  [types.actions.COMMON_SAMPLE] (context, {isTokenRequired} = {}) {
    /**
     * Argument
     *    - isTokenRequired : Boolean   > 토큰의 필요 여부
     */
    return context.dispatch('requestGet', {
      requestUrl: '/users',
      isTokenRequired: isTokenRequired
    }, {root: true})
  }
}

export default {
  actions
}
