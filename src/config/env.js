// 编译和线上环境切换
const env = process.env
let baseUrl = ''
// iconfont
let iconfontVersion = ['1133445_8v9hfm5wo48'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;

if (env.NODE_ENV == 'development') {
  // 开发环境地址
  baseUrl = ``;
} else if (env.NODE_ENV == 'production') {
  // 生产环境地址
  baseUrl = ``;
} else if (env.NODE_ENV == 'test') {
  // 测试环境地址
  baseUrl = ``;
}

export {
  env,
  baseUrl,
  iconfontUrl,
  iconfontVersion
}
