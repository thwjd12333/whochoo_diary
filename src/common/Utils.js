import moment from 'moment'

/**
 * 일반함수를 콜백함수로 변경.
 * 이벤트가 넘어오는 콜백시,
 * 이벤트는 제일 마지막 파라미터에 추가됨.
 *
 * by black
 **/
const cb = (func, ...params) => {
  return event => {
    if (func) func(...[...params, event])
  }
}

/**
 * Date의 포맷이 적용된 문자열 반환,
 * 포맷 형태없을시 YYYY.MM.DD가 기본값
 *
 * @default formatStr = 'YYYY.MM.DD'
 *
 * by black
 **/
const dFormat = (date = new Date(), formatStr = 'YYYY.MM.DD') =>
  moment(date).format(formatStr)

/**
 * 해당날짜가 몇 주 인지를 구한다.
 *
 * @param pDate
 * @param dowOffset
 * @returns {number}
 */
const getWeek = pDate => {
  const firstDate = new Date(pDate.getFullYear(), pDate.getMonth(), 1)
  const lastDate = new Date(pDate.getFullYear(), pDate.getMonth() + 1, 0)
  return Math.floor((firstDate.getDay() + lastDate.getDate() - 1) / 7) + 1
}

/**
 * min, max 사이의 랜덤함수를 반환한다.
 *
 * @default max = 1, min = 0
 *
 * by black
 **/
const randomNum = (max = 1, min = 0) => {
  if (min >= max) return max
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 배열의 중복을 제거해 새로운 배열을 반환한다.
 *
 * by black
 **/
const noDupArray = (target = []) => [...new Set(target)]

/**
 * 배열의 순서를 섞어서 새로운 배열을 반환한다.
 *
 * by black
 **/
const shuffleArray = (target = []) =>
  [...target].sort(() => Math.random() - 0.5)

/**
 * 숫자를 받아서 세자리마다 콤마가 찍힌 문자열을 반환한다.
 *
 * by black
 **/
const commaNum = (num = 0) => num.toLocaleString('ko-KR')

/**
 * 숫자를 받아서 통화형태의 문자열을 반환한다.
 *
 * by black
 **/
const currencyNum = (num = 0) =>
  num.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })

export {
  cb,
  dFormat,
  getWeek,
  randomNum,
  noDupArray,
  shuffleArray,
  commaNum,
  currencyNum,
}
