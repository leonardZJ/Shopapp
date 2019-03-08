import Vue from 'vue'

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

export default {
	[RECEIVE_ADDRESS]: function(state,address) {
		state.address = address
	},
	[RECEIVE_CATEGORYS]: function(state,categorys) {
		state.categorys = categorys
	},
	[RECEIVE_SHOPS]: function(state,shops) {
		state.shops = shops
	},
	[RECEIVE_USER_INFO]: function(state,userInfo) {
		state.userInfo = userInfo
	},
	[RESET_USER_INFO]: function(state) {
		state.userInfo = {}
	},
	[RECEIVE_GOODS]: function(state,goods) {
		state.goods = goods
	},
	[RECEIVE_RATINGS]: function(state,ratings) {
		state.ratings = ratings
	},
	[RECEIVE_INFO]: function(state,info) {
		state.info = info
	},
	[INCREMENT_FOOD_COUNT]: function(state,food) {
		if(!food.count) {  //当food中不存在count项时，添加一个count并加1
			//food.count = 1普通方法添加新属性，会造成数据无绑定
			//使用vue提供的方法，可以在添加新属性时同时绑定该数据
			//set(x,y,z)方法参数：x为要添加新数据的对象，y为属性名，z为属性值
			Vue.set(food,'count',1)
			//第一次添加count时，push()到cartFoods中
			state.cartFoods.push(food)
		} else {
			//count++会改变元数据，所有指向该元数据的food都会一起发生改变
			food.count++
		}
	},
	[DECREMENT_FOOD_COUNT]: function(state,food) {
		if(food.count) {  //当count===0时，不再进行减少(避免连续点击变成负数)
			food.count--
			//当count===0时，将food从cartFoods中移除
			if(food.count===0) {
				state.cartFoods.splice(state.cartFoods.indexOf(food),1)
			}
		}
	},
	[CLEAR_CART]: function (state) {
		//cartFoods中的元素引用的是food对象，所以还应该清空food中count的值
		state.cartFoods.forEach(food => food.count = 0)
		//最后清空购物车数组
		state.cartFoods = []
	},
	[RECEIVE_SEARCH_SHOPS]: function(state,searchShops) {
		state.searchShops = searchShops
	}
}