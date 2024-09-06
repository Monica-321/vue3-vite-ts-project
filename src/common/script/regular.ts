// 常用正则表达式

// 名字 10字
const nameRegular = /^[\u4e00-\u9fa5a-zA-Z]{2,10}$/
// 名字 20字
const nameRegular20 = /^[\u4e00-\u9fa5a-zA-Z]{2,20}$/
// 名字 30字
const nameRegular30 = /^[\u4e00-\u9fa5a-zA-Z]{1,30}$/
// 手机号码
const mobileRegular = /^(1)\d{10}$/
// 身份证号码
const idNumberRegular = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

// 邮件地址
const emailAddressRegular = /^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
// 验证码
const verifyCodeRegular = /^[0-9]{6}$/

export {
  nameRegular,
  nameRegular20,
  nameRegular30,
  mobileRegular,
  idNumberRegular,
  emailAddressRegular,
  verifyCodeRegular
}
