import { Moment } from 'moment'
import moment from 'moment/min/moment.min'

type time = Moment | string | Date | number
type timeUnit = 'y' | 'Q' | 'M' | 'w' | 'd' | 'h' | 'm' | 's'

/**
 * 時間文字格式轉換
 *  {(String|Number|Date|moment)} time
 *  {String} formatOutput
 *  {String} formatInput
 */
const timeFormat = (
  time: time,
  opts: {
    formatOutput?: string
    formatInput?: string
  } = {},
): string => {
  // https://momentjs.com/docs/#/displaying/format/
  // 年YYYY、月:MM(01)M(1)、日:DD(01)D(1)、時HH(01)H(1)、分mm(01)m(1)、秒ss(01)s(1)
  return moment(time, opts.formatInput).format(opts.formatOutput)
}

/**
 * 加五天 timeAdd('2000-01-01',5,''d) === 2000-01-06
 *  {(String|Date|Number|moment)} time
 *  {Number} dur 間格時間
 *  {String} unit 單位
 *  {String} endUnit 結尾時間單位，不填則不使用； 'd' -> 2000-01-06 23:59:59
 *  {String} formatInput 輸入時間格式
 *  {String} formatOutput 輸出時間格式
 */
const timeAdd = (
  time: time,
  dur: number,
  opts: {
    unit?: timeUnit
    endUnit?: timeUnit
    startUnit?: timeUnit
    formatOutput?: string
    formatInput?: string
  } = {},
): string => {
  // https://momentjs.com/docs/#/manipulating/add/
  // years y、quarters Q、months M、weeks w、days d、hours h、minutes m、seconds s
  const momentTime = moment(time, opts.formatInput)
  if (!opts.unit) opts.unit = 'd'
  return momentTime
    .add(dur, opts.unit)
    .endOf(opts.endUnit)
    .startOf(opts.startUnit)
    .format(opts.formatOutput || momentTime._f)
}

/**
 * 時間間距
 *  {String} time1
 *  {String} time2
 *  {Boolean} floatResult 是否有小數點
 *  {String} unit 單位
 *  {String} formatInput 時間輸入格式
 */
const timeDiff = (
  time1: time,
  time2: time,
  opts: {
    floatResult?: boolean
    unit?: timeUnit
    formatInput?: string
  } = {},
): number => {
  if (!opts.unit) opts.unit = 'd'
  const time1_moment = moment(time1, opts.formatInput)
  const time2_moment = moment(time2, opts.formatInput)
  return time1_moment.diff(time2_moment, opts.unit, Boolean(opts.floatResult))
}
export { timeFormat, timeAdd, timeDiff }
