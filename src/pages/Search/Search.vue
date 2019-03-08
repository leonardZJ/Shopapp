<template>
	<div>
		<div class="search">
			<!-- 头部导航条 -->
			<HeaderTop title="搜索"></HeaderTop>
			<form @submit.prevent="search" class="searchContent">
				<input type="text" v-model="keyword" placeholder="请输入商家">
				<button>确定</button>
			</form>
			<!-- 搜索结果 -->
			<section>
				<ul>
					<router-link :to="{path: '/shop',query: {id: searchShop.id}}" tag="li" 
					v-for="searchShop in searchShops" :key="searchShop.id" class="storeItem" 
					v-if="!noSearchShops">
						<div class="storeItem-l">
							<img src="./images/购物篮.png" alt="">
						</div>
						<span href="" class="storeItem-c">
							<p class="storeItem-c-t">
								<span class="brand">品牌</span><span class="storeName">一品食客(保利水城)</span>
							</p>
							<p class="storeItem-c-m">
								<span class="star">
									<Star :score="3.8"></Star>
								</span>
								<span class="score">3.8</span>
								<span class="saleCount">月售106单</span>
							</p>
							<p class="storeItem-c-b">
								<span>￥20起送/配送费约￥5</span>
							</p>
						</span>
						<div class="storeItem-r">
							<a href="">
								<p class="proimse">
									<span>保</span>
									<span>准</span>
									<span>券</span>
								</p>
								<p class="deliver">美团专送</p>
							</a>
						</div>
						<div class="shopListLine" ></div>
					</router-link>
					<p class="noSearch" v-else>很抱歉！暂无搜索结果</p>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
	import Star from '../../components/Star/Star.vue'
	import {mapState} from 'vuex'
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

	export default {
		data() {
			return {
				keyword: '', //搜索关键字
				noSearchShops: false, //为false时不显示"无搜索结果div"，为true时显示
			}
		},
		computed: {
			...mapState(['searchShops'])
		},
		components: {
			HeaderTop,
			Star
		},
		methods: {
			search: function() {
				const keyword = this.keyword.trim()
				if(keyword) {
					console.log('暂无后台数据')
					//this.$store.dispatch('getSearchShops',keyword)
				}
			}
		},
		watch: {
			//监视searchShops获得其最新值value
			searchShops(value) {
				if(!value.length) { //当返回值为空时显示"无搜索结果div"
					this.noSearchShops = true
				} else { //当返回值不为空时不显示"无搜索结果div"
					this.noSearchShops = false
				}
			}
		}
	}
</script>

<style>
	/* 搜索 */
	.search {
		margin-top: 3rem;
		overflow: hidden;
	}
	.searchContent {
		display: flex;
		padding: 0.67rem 0.67rem 0.67rem 0;
	}
	.searchContent input {
		padding-left: 0.67rem;
		font-size: 1rem;
		border-radius: 0.2rem;
		border: 1px solid #aaa;
		flex: 1;
		margin-left: 1rem;
		outline: 0;
	}
	.searchContent button {
		outline: none;
		border: 1px solid #fff;
		color: #fff;
		margin-left: 0.67rem;
		display: block;
		padding: 0.5rem 1rem;
		background-color: #26b53e;
		border-radius: 0.2rem;
	}
	/* 搜素结果 */
	.storeItem {
		margin-top: 0.33rem;
		position: relative;
		font-size: 0.67rem;
	}
	.storeItem-l {
		height: 4.27rem;
		display: inline-block;
		margin-right: 0.6rem;
		margin-left: 1rem;
		float: left;
	}
	.storeItem-c {
		height: 4.27rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.storeItem-c-t .brand {
		margin-right: 0.33rem;
		background-color: #f1da0d;
		border-radius: 0.13rem;
	}
	.storeItem-c-t .storeName {
		color: #000;
		font-size: 1rem;
		font-weight: 800;
	}
	.storeItem-c-m .score {
		color: #f1a50d;
	}
	.storeItem-c-m .saleCount {
		margin-right: 0.5rem;
	}
	.storeItem-r {
		position: absolute;
		right: 1rem;
		top: 50%;
		transform: translateY(-50%);
	}
	.storeItem-r p {
		margin: 0.67rem 0;
	}
	.storeItem-r .proimse {
		width: 3rem;
		display: flex;
		justify-content: space-between;
	}
	.storeItem-r .proimse span {
		text-align: center;
		width: 0.8rem;
		color: #000;
		border: 1px solid #eee;
		border-radius: 0.06rem;
		font-size: 0.8rem;
	}
	.storeItem-r .deliver {
		font-size: 0.5rem;
		color: #1bb51e;
		text-align: center;
	}
	.shopListLine {
		margin: 0.33rem 0.33rem;
		height: 0.07rem;
		background-color: #ddd;
	}
	/* 无搜索结果 */
	.noSearch {
		text-align: center;	
	}
</style>
