<template>
	<div>
		<div class="shopCart">
			<transition name="move3">
				<div class="shopCartTop" v-show="listShow">
					<div class="shopCartTop-t">
						<span class="shopCartTop-t-text">购物车</span>
						<span class="shopCartTop-t-clearBtn" @click="clearCart">清空</span>
					</div>
					<div class="shopCartTop-content">
						<ul>
							<li class="shopCartTop-b" v-for="(food,index) in cartFoods" 
							:key="index">
								<span>{{ food.name }}</span>
								<span>￥{{ food.price*food.count }}</span>
								<CartControl :food="food"/>
							</li>
						</ul>
					</div>
				</div>
			</transition>
			<span class="shopCartBottom" @click="toggleShow">
				<div class="shopcartIcon iconfont icon-gouwuche-tianchong" 
				:class="{'shopcartIcon-active': totalCount}"></div>
				<div class="littleCount" v-if="totalCount">{{ totalCount }}</div>
				<div class="shopCartBottom-m">
					<p>￥{{ totalPrice }}</p>
					<p>配送费￥{{ info.deliverPrice }}元</p>
				</div>
				<div class="startprice" :class="payClass">{{ payText }}</div>
			</span>
		</div>
		<transition name="move4">
			<div class="shopCartBg" @click="toggleShow" v-if="listShow"></div>
		</transition>
	</div>
</template>

<script>
	import {MessageBox} from 'mint-ui'
	import BScroll from 'better-scroll'
	import {mapState,mapGetters} from 'vuex'
	import CartControl from '../CartControl/CartControl.vue'

	export default {
		data() {
			return {
				isShow: false,//true表示显示，false表示隐藏
			}
		},
		computed: {
			//cartFood写在state中
			...mapState(['cartFoods','info']),
			//总数量和总价格是通过cartFoods计算获得的，所以将他们写在getters中
			...mapGetters(['totalCount','totalPrice']),
			//右边样式动态变化
			payClass: function() {
				const {totalPrice} = this
				const {startDeliverPrice} = this.info
				//当条件达成时，返回类名enough
				return totalPrice >= startDeliverPrice? 'enough': 'not-enough'
			},
			//右边文字动态变化
			payText: function() {
				const {totalPrice} = this
				const {startDeliverPrice} = this.info
				//不同条件下显示不同文字
				if(totalPrice === 0) {
					return `￥${startDeliverPrice}元起送`
				} else if(totalPrice < startDeliverPrice) {
					return `还差￥${startDeliverPrice - totalPrice}元起送`
				} else {
					return '去结算'
				}
			},
			//购物车上半部分的显示隐藏
			listShow: function() {
				if(this.totalCount===0) {
					this.isShow = false
					return false
				}

				//当购物车内的列表变为显示的时候，初始化滚动
				if(this.isShow) {
					this.$nextTick(() => {
						//实现BScroll为单例
						if(!this.scroll) {
							this.scroll = new BScroll('.shopCartTop-content',{
								click: true
							})
						} else {
							//让滚动条刷新，重新统计内容的高度
							this.scroll.refresh()
						}
					})
				}
				//当总数量不为0时，listShow应该与当前isShow一致
				return this.isShow
			}
		},
		components: {
			CartControl
		},
		methods: {
			//切换显示隐藏
			toggleShow: function() {
				//当总数量大于0时，才修改this.isShow
				if(this.totalCount > 0) {
					this.isShow = !this.isShow
				}
			},
			//清空购物车
			clearCart: function() {
				MessageBox.confirm('确定清空吗？').then(action => {
					//点击确认时
					this.$store.dispatch('clearCart')
				},() => {
					//点击取消时
				})
			}
		}
	}
</script>

<style>
	/* 确认按钮 */
	.mint-msgbox-confirm{
		color: #26b53e;
	}
	/* 遮罩 */
	.shopCartBg {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
	}
	/* 购物车 */
	.shopCart {
		width: 100%;
		height: 3rem;
		position: absolute;
		bottom: 0;
	}
	/* 上半部分 */
	.shopCartTop {
		position: absolute;
		z-index: 1;
		width: 100%;
		transform: translateY(-100%);
		background-color: #fff;
	}
	.shopCartTop-content {
		max-height: 10.8rem;
		overflow: hidden;
	}
	.shopCartTop-t {
		width: 100%;
		background-color: #fff;
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.shopCartTop-t-text {
		font-size: 0.88rem;
		line-height: 2rem;
		margin-left: 0.67rem;
		flex: 1;
	}
	.shopCartTop-t-clearBtn {
		font-size: 0.88rem;
		margin-right: 1rem;
		width: 3rem;
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
		border-radius: 0.5px;
		box-shadow: .5px .5px 0px 1px #ccc;
		text-align: center;
		line-height: 2rem;
	}
	.shopCartTop-b {
		position: relative;
		background-color: #fff;
		display: flex;
		border-top: 1px solid #eee;
	}
	.shopCartTop-b span:nth-of-type(1) {
		line-height: 2.7rem;
		margin-left: 0.67rem;
		flex: 1;
	}
	.shopCartTop-b span:nth-of-type(2) {
		color: #ec1c24;
		text-align: center;
		width: 2.3rem;
		margin-right: 5rem;
		line-height: 2.7rem;
	}
	/* 下半部分 */
	.shopCartBottom {
		width: 100%;
		height: 3rem;
		position: absolute;
		background-color: #000;
		z-index: 1;
	}
	.shopcartIcon {
		width: 3.4rem;
		height: 3.4rem;
		border: 0.33rem solid #000;
		border-radius: 1.6rem;
		background-color: #555;
		position: absolute;
		bottom: 0;
		left: 1rem;
		box-sizing: border-box;
	}
	.icon-gouwuche-tianchong {
		text-align: center;
		line-height: 3rem;
		color: #fff;
		font-size: 1.6rem;
	}
	.shopcartIcon-active {
		background-color: #26b53e;
	}
	.littleCount {
		width: 1.2rem;
		height: 1rem;
		position: absolute;
		left: 3rem;
		top: -0.5rem;
		background-color: #ec1c24;
		color: #fff;
		border-radius: 0.5rem;
		text-align: center;
	}
	.shopCartBottom-m {
		color: #fff;
		position: absolute;
		top: 50%;
		left: 5rem;
		transform: translateY(-50%);
	}
	.shopCartBottom-m p:nth-of-type(1) {
		font-size: 1.3rem;
		font-weight: 800;
	}
	.shopCartBottom-m p:nth-of-type(2) {
		font-size: 0.67rem;
		color: #aaa;
		line-height: 1rem;
	}
	.startprice {
		width: 6rem;
		height: 100%;
		background-color: #333;
		position: absolute;
		right: 0;
		color: #fff;
		font-size: 0.88rem;
		font-weight: 800;
		text-align: center;
		line-height: 3rem;
	}
	.enough {
		background-color: #26b53e;
	}
	/* 过渡时的样式和时间 */
 	.move3-enter-active, .move3-leave-active {
 		transition: all .3s;
 	}
 	/* 进入前/消失后的样式 */
 	.move3-enter, .move3-leave-to {
 	 	transform: translateY(0);
 	}
 	/* 过渡时的样式和时间 */
 	.move4-enter-active, .move4-leave-active {
 		transition: all .3s;
 	}
 	/* 进入前/消失后的样式 */
 	.move4-enter, .move4-leave-to {
 		opacity: 0;
 	}
</style>