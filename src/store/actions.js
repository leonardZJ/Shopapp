import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS,
	RECEIVE_USER_INFO,
	RESET_USER_INFO,
	RECEIVE_GOODS,
	RECEIVE_RATINGS,
	RECEIVE_INFO,
	INCREMENT_FOOD_COUNT,
	DECREMENT_FOOD_COUNT,
	CLEAR_CART,
	RECEIVE_SEARCH_SHOPS
} from './mutation-types'

//引入API接口函数
import {
	reqAddress,
	reqFoodCategorys,
	reqShops,
	reqUserInfo,
	reqLogout,
	reqShopGoods,
	reqShopRatings,
	reqShopInfo,
	reqSearchShop
} from '../api'

export default {
	//发送异步ajax请求，获取地址
	getAddress: function({commit,state}) {
		const geohash = state.latitude + ',' + state.longitude
		reqAddress(geohash).then(function(result) {
			//提交给mutations并将address传递过去
			if(result.code===0) {  //接口文档中code: 0表示请求正常
				const address = result.data  //接口文档中的data是地址
				commit(RECEIVE_ADDRESS,{address})
			}
		})
	},
	//发送异步ajax请求，获取食品分类列表
	getFoodCategorys: function({commit},callback) {
		reqFoodCategorys().then((result) => {
			//提交给mutations并将categorys传递过去
			if(result.code===0) {  //接口文档中code: 0表示请求正常
				const categorys = result.data  //接口文档中的data是食品分类信息
				commit(RECEIVE_CATEGORYS,categorys)
			}
			callback && callback()
		})
	},
	//发送异步ajax请求，获取商家列表
	getShops: function({commit,state}) {
		const {longitude,latitude} = state
		reqShops(longitude,latitude).then(function(result) {
			//提交给mutations并将shops传递过去
			if(result.code===0) {  //接口文档中code: 0表示请求正常
				const shops = result.data  //接口文档中的data是商家列表信息
				commit(RECEIVE_SHOPS,shops)
			}
		})
	},
	//同步获取用户信息(组件中已经发请求登陆过了，从发请求的组件中获取用户信息)
	recordUser: function({commit,userInfo}) {
		commit(RECEIVE_USER_INFO,{userInfo})
	},
	//异步发送请求获取用户信息(初始化时使用)
	getUserInfo({commit}) {
		reqUserInfo().then((result) => {
			if(result.code===0) { //这里根据接口文档信息code代表数据是否存在
				const userInfo = result.data //data在接口文档中表示用户信息
				commit(RECEIVE_USER_INFO,{userInfo})
			}
		})
	},
	//异步发送请求退出登陆
	logout: function({commit}) {
		reqLogout().then((result) => {
			if(result.code===0) {  //当result.code为0时表示登出成功(根据文档)
				commit(RESET_USER_INFO) //reset_user_info重置用户信息
			}
		})
	},
	//异步发送请求获取商品列表
	getGoods({commit},callback) {
		reqShopGoods().then((result) => {
			if(result.code===0) {
				const goods = result.data
				commit(RECEIVE_GOODS,goods)
			}
			callback && callback()
		})

	},
	//异步发送请求获取用户评论
	getratings: function({commit},callback) {
		reqShopRatings().then((result) => {
			if(result.code===0) {
				const ratings = result.data
				commit(RECEIVE_RATINGS,ratings)
			}
			callback && callback()
		})
	},
	//异步发送请求获取商家详情
	getInfo: function({commit}) {
		reqShopInfo().then((result) => {
			if(result.code===0) {
				const Info = result.data
				commit(RECEIVE_INFO,Info)
			}
		})
	},
	//更新state中的foods
	updateFoodCount: function({commit},{isAdd,food}) {
		if(isAdd) {  //为真时调用增加mutations
			commit(INCREMENT_FOOD_COUNT,food)
		} else {  //为假时调用减少mutations
			commit(DECREMENT_FOOD_COUNT,food)
		}
	},
	//同步清空购物车
	clearCart: function({commit}) {
		commit(CLEAR_CART)
	},
	//异步搜索商家列表
	getSearchShops: function({commit,state},keyword) {
		//经纬度
		const geohash = state.latitude + ',' + state.longitude

		reqSearchShop(geohash,keyword).then((result) => {
			if(result.code===0) {
				const searchShops = result.data
				commit(RECEIVE_SEARCH_SHOPS,searchShops)
			}
		})
	}
}