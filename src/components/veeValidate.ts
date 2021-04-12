import { required, integer, between, min } from '@vee-validate/rules'
import { App } from 'Vue'
import { defineRule, Form, Field, ErrorMessage, configure } from 'vee-validate'

type testRes = boolean | string | Promise<string | boolean>

interface ruleList {
  [key: string]: { msg: string; test: unknown }
}

const rules: ruleList = {
  email: {
    msg: '请输入正确邮箱',
    test: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  },
  account: {
    msg: '6-12个字符，使用数字和英文字母',
    test: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/,
  },
  password: {
    msg: '6-12个字符，使用数字或英文字母',
    test: /^[0-9a-zA-Z]{6,12}$/,
  },
  name: {
    msg: '真实姓名不符合格式',
    test: /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/,
  },
  phone: {
    msg: '手机号码格式错误（仅支持中国大陆手机号码）',
    test: /^[0-9]{11,11}$/,
  },
  agent: { msg: '代理码错误', test: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,7}$/ },
  qq: { msg: '请输入正确QQ号', test: /^[0-9]{5,13}$/ },
  wechat: { msg: '请输入正确微信号', test: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/ },
  chinese: {
    msg: '仅限定输入中文',
    test: /^[\u4E00-\u9FA5]+(·[\u4E00-\u9FA5]+)*$/,
  },
  card: { msg: '支付账号格式不符', test: /^[0-9]{13,19}$/ },
  pwdConfirm: {
    msg: '两次输入的密码必须一致',
    test: (value: string, [pwd]: [string]) => value === pwd,
  },
  required: { msg: '必填', test: required },
  integer: { msg: '请输入整数金额', test: integer },
  between: { msg: '输入金额已超出上下限', test: between },
  min: { msg: '输入内容未满 {{0}} 字元', test: min },
}

// 取代{{0}}
function replaceVar(msg: string, ary: Array<string>): string {
  try {
    const regex = /\{\{\d{1,}\}\}/g
    const msgAry = _.split(msg, regex)
    _.each(msg.match(regex), (i, index) => {
      const target_index = Number(i.replace(/\{|\}/g, ''))
      msgAry[index] += ary[target_index] || ''
    })
    return _.join(msgAry, '')
  } catch {
    return msg
  }
}

// 註冊規則
_.each(rules, ({ msg, test }, key) => {
  defineRule(key, (value: string, argAry: Array<string>) => {
    let res: testRes = false
    if (test instanceof RegExp) {
      res = test.test(value)
    } else if (test instanceof Function) {
      res = test(value, argAry)
    }
    return res || replaceVar(msg, argAry)
  })
})
configure({
  validateOnInput: true,
})

export default {
  install(app: App): void {
    app.component('VeeForm', Form)
    app.component('Field', Field)
    app.component('ErrorMsg', ErrorMessage)
  },
}
