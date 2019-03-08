import ajax from './ajax'

//const BASE_URL = 'http://localhost:4000'，目前写在配置中
const BASE_URL = '/api'  //将其写入ajax函数的url参数中

//根据经纬度获取位置详情
export const reqAddress = function(geohash) {
	ajax(`${BASE_URL}/position/${geohash}`)
}

//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax(BASE_URL + '/shops',{longitude,latitude})
//用户名密码登陆
export const reqPwdLogin = ({name,pwd,captcha}) => ajax(BASE_URL + '/login_pwd',{name,pwd,captcha},'POST')
//发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode',{phone})
//手机号短信验证码登陆
export const reqSmsLogin = (phone,code) => ajax(BASE_URL + '/login_sms',{phone,code},'POST')
//获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
//用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')
//根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash,keyword) => ajax(BASE_URL + '/search_shops',{geohash,keyword})


//mock拦截的请求
//获取食品分类列表
export const reqFoodCategorys = () => ajax('/index_category')
//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
//获取商家评价信息
export const reqShopRatings = () => ajax('/ratings')
//获取商家信息
export const reqShopInfo = () => ajax('/info')