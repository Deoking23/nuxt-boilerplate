import Vue from 'vue'
import moment from 'moment'

/**
 * 문자열
 * */
// Upper Case
Vue.filter('toUpperCase', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

// Lower Case
Vue.filter('toLowerCase', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toLowerCase()
})

/**
 * 통화
 * */
Vue.filter('numberWithCommas', function (value) {
  if (!value) return ''
  var parts = value.toString().split('.')
  parts[ 0 ] = parts[ 0 ].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
})

/**
 * 날짜
 * */
Vue.filter('dateFormat', function (value, format) {
  if (!value && !format) return ''
  return moment(new Date(value)).format(format)
})
