//提供校验规则
const mobileRules: FiledRule[] = [
  { required: true, message: '请输入手机号' },
  { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不对' },
]
const passwordRules: FiledRule[] = [
  { required: true, message: '请输入密码' },
  { pattern: /^\w{8,24}$/, message: '密码长度在8-24位之间' },
]
const codeRules = [
  { required: true, message: '请输入验证码' },
  { pattern: /^\d{6}$/, message: '验证码6个数字' },
]

export { mobileRules, passwordRules, codeRules }
