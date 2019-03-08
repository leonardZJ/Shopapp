export default {
	//购物车中总商品数量
	totalCount(state) {
		return state.cartFoods.reduce((preTotal,food) => preTotal + food.count,0)
	},
	//购物车中总商品价格
	totalPrice(state) {
		return state.cartFoods.reduce((preTotal,food) => preTotal + food.count*food.price,0)
	},
	//用户评价中rateType为0(表示满意评价)的数量
	positiveSive(state) {
		return state.ratings.reduce((preTotal,rating) => preTotal + (rating.rateType === 0? 1 : 0),0)
	}
}