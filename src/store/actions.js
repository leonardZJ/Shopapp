import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS
} from './mutation-type'

//引入API接口函数
import {
	reqAddress,
	reqFoodCategorys,
	reqShops
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
	getFoodCategorys: function({commit}) {
		reqFoodCategorys().then(function(result) {
			//提交给mutations并将categorys传递过去
			if(result.code===0) {  //接口文档中code: 0表示请求正常
				const categorys = result.data  //接口文档中的data是食品分类信息
				commit(RECEIVE_CATEGORYS,{categorys})
			}
		})
	},
	//发送异步ajax请求，获取商家列表
	getShops: function({commit,state}) {
		const {longitude,latitude} = state
		reqShops(longitude,latitude).then(function(result) {
			//提交给mutations并将shops传递过去
			if(result.code===0) {  //接口文档中code: 0表示请求正常
				const shops = result.data  //接口文档中的data是商家列表信息
				commit(RECEIVE_SHOPS,{shops})
			}
		})
	}
}