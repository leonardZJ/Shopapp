<template>
	<div>
		<div class="goods">
			<div class="menu-Wrapper">
				<ul class="menu">
					<li v-for="(good,index) in goods" :key="index" 
					:class="{menuActive: index===currentIndex}" 
					@click="toMenuGroup(index)">{{ good.name }}</li>
				</ul>
			</div>
			<div class="foods-Wrapper">
				<ul>
					<li class="foods-menu" v-for="(good,index) in goods" :Key="index">
						<p class="foodsMenu">{{ good.name }}</p>
						<ul>
							<li class="foods" v-for="(food,index) in good.foods" :key="index" 
							@click="showFood(food)">
								<img src="./images/水晶凤爪.jpg" alt="">
								<div class="foodDesc">
									<p>{{ food.name }}</p>
									<p>
										<span>月售114份</span>
										<span>好评率85%</span>
									</p>
									<p>￥{{ food.price }}</p>
								</div>
								<CartControl :food="food"/>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<Food :food="food" ref="food"/>
		<!-- 底部购物车 -->
		<ShopCart/>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'
	import CartControl from '../../../components/CartControl/CartControl.vue'
	import ShopCart from '../../../components/ShopCart/ShopCart.vue'
	import Food from '../../../components/Food/Food.vue'

	export default {
		data() {
			return {
				scrollY: 0, //滑动时的top值
				tops: [], //每组分类的top值够成的集合
				food: {}, ////传递给Food组件的food的对象，这里写{}而不是null，写表达式不容易报错
				isShow: false
			}
		},
		mounted: function() {
			//获取商家食物列表
			this.$store.dispatch('getGoods',() => {
				this.$nextTick(function() {
					//初始化滑动和收集Tops值
					this._initScroll()
					this._initTops()
				})
			})
		},
		computed: {
			...mapState(['goods']),

			currentIndex: function() {
				const {scrollY,tops} = this
				//调用findIndex方法遍历tops
				let result = tops.findIndex((top,index) => {
					//当scrollY(y坐标值)大于top的值并小于下一个top值时，当前top值的下标会返回给currentIndex
					return scrollY >= top && scrollY < tops[index+1]
				})
				return result
			}
		},
		components: {
			ShopCart,
			CartControl,
			Food
		},
		methods: {
			//初始化滑动并收集scrollY值
			_initScroll: function() {
				//初始化左侧滑动
				new BScroll('.menu-Wrapper',{
					click: true
				}) 
				//初始化右侧滑动
				this.foodsBScroll = new BScroll('.foods-Wrapper',{
					probeType: 2,  //选择模式2
					click: true
				})
				//监听滑动行为，收集scrollY值
				this.foodsBScroll.on('scroll',({x,y}) => {
					this.scrollY = Math.abs(y)
				})
				//监听滑动停止行为，收集scrollY值
				this.foodsBScroll.on('scrollEnd',({x,y}) => {
					this.scrollY = Math.abs(y)
				})
			},
			//初始化tops
			_initTops: function() {
				//初始化一个数组用于储存top
				const tops = []
				//第一个分组的top值为0
				let top = 0
				tops.push(top)
				//匹配所有li
				const lis = document.getElementsByClassName('foods-menu')
				//转化为真数组并调用forEach方法
				Array.prototype.slice.call(lis).forEach(li => {
					top = top + li.clientHeight
					tops.push(top)
				})
				//添加到data中
				this.tops = tops
			},
			//点击左侧控制右侧滑动
			toMenuGroup: function(index) {
				const scrollY = this.tops[index]
				//顺便将scrollY值改为当前，让激活样式生效
				this.scrollY = scrollY
				//使右侧列表滑动到相应位置，并设置时间为300毫秒
				this.foodsBScroll.scrollTo(0,-scrollY,300)
			},
			//点击显示食物详情卡片
			showFood: function(food) {
				this.food = food
				this.$refs.food.toggleShow()
			}
		}
	}
</script>

<style>
	.menu .menuActive {
		background-color: #fff;
		color: #26b53e;
	}
	.goods {
		width: 100%;
		position: absolute;
		top: 14.3rem;
		bottom: 3rem;
		display: flex;
	}
	.menu-Wrapper {
		width: 5.5rem;
		overflow: hidden;
	}
	.menu li {
		color: #666;
		font-size: 0.9rem;
		font-weight: 600;
		height: 3.3rem;
		border-top: 1px solid #ddd;
		background-color: #eee;
		text-align: center;
		line-height: 3rem;
	}
	.foods-Wrapper {
		flex: 1;
		overflow: hidden;
	}
	.foods-menu {
		font-size: 0.8rem;
		color: #aaa;
		background-color: #eee;
	}
	.foods-menu .foodsMenu {
		padding-left: 0.33rem;
		font-size: 0.8rem;
		line-height: 1.5rem;
		border-left: 2px solid #ccc;
	}
	.foods {
		background-color: #fff;
		height: 5rem;
		margin-top: 1px;
		display: flex;
		align-items: center;
		position: relative;
	}
	.foods img {
		display: block;
		border: 1px solid #eee;
		height: 3.5rem;
		margin-left: 0.67rem;
	}
	.foods .foodDesc {
		font-size: 0.88rem;
		height: 3.5rem;
		margin-left: 0.67rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.foodDesc p:nth-child(1) {
		font-weight: 800;
	}
	.foodDesc p:nth-child(2) {
		font-size: 0.7rem;
	}
	.foodDesc p:nth-child(3) {
		color: #ec1c24;
		font-size: 0.7rem;
		font-weight: 800;
	}
	
</style>