<template>
	<div>
		<!-- 头部导航条 -->
		<HeaderTop class="headerbar" title="广州xx大道xx街">
			<router-link slot="left" class="header-l iconfont icon-search" to="/search"></router-link>
			<router-link slot="right" class="header-r" to="/login">登陆注册</router-link>
		</HeaderTop>
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
					<span class="swiper-item" v-for="(category,index) in categorys" :key="index">
						<img src="./images/9.png" alt=""><br>
						<span>{{ category.name }}</span>
					</span>
				</div>
			</div>
			<!-- 轮播图分页器 -->
			<div class="swiper-pagination">
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span>
			</div>
		</div>
		<div class="sliderLine"></div>
		<!-- 商家列表 -->
		<Shoplist></Shoplist>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import Shoplist from '../../components/Shoplist/Shoplist.vue'

/*	import 'swiper/dist/css/swiper.min.css'*/
	import Swiper from 'swiper'

	export default {
		computed: {
			...mapState(['categorys']),
			//将categorys转化为二维数组
			categorysArr: function() {
				const {categorys} = this
				//先准备一个空的2维数组，和一个内部子数组
				const arr = []
				let minArr = []
				//遍历categorys
				categorys.forEach((category) => {
					//当子数组个数达到8个时清空数组
					if(minArr.length===8) {
						minArr = []
					}
					//最后一个元素遍历完小数组个数可能还未达到8，所以可以设定为0的时候将小数组添加到大数组中
					if(minArr.length===0) {
						arr.push(minArr)
					}
					//将当前分类保存到小数组
					minArr.push(category)
				})
				return arr
			}
		},
		mounted() {
			this.$store.dispatch('getFoodCategorys',() => {
				this.$nextTick(() => {
					new Swiper ('.swiper-container', {
					    loop: true, 
					    pagination: {
					      el: '.swiper-pagination',
					    },
					    observer:true,//修改swiper自己或子元素时，自动初始化swiper
					    observeParents:true,//修改swiper的父元素时，自动初始化swiper
					})
				})
			})
		},
		components: {
			HeaderTop,
			Shoplist
		}
	}
</script>

<style>
	/* 头部 */
	.headerbar .header-l {
		color: #fff;
		font-size: 2rem;
		margin-left: -1.2rem;
	}
	.headerbar .header-r {
		color: #fff;
		font-size: 0.87rem;
		margin-right: -1.2rem;
	}
	/* 轮播图 */
	.swiper-container {
		margin-top: 3.06rem;
	}
	.swiper-slide {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: center;
	}
	.sliderLine {
		height: 0.67rem;
		background-color: #eee;
	}
	.swiper-item {
		width: 25%;
		font-size: 0.67rem;
		text-align: center;
		margin: 0.67rem 0;
	}
	.swiper-item img {
		height: 3.5rem;
	}
	.swiper-pagination-bullet-active {
		background-color: #26b53e;
	}
	
</style>
