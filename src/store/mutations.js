import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS
} from './mutation-type'

export default {
	[RECEIVE_ADDRESS]: function(state,{address}) {
		state.address = address
	},
	[RECEIVE_CATEGORYS]: function(state,{categorys}) {
		state.categorys = categorys
	},
	[RECEIVE_SHOPS]: function(state,{shops}) {
		state.shops = shops
	},
}