<template>
	<div>
		<!-- 商家列表 -->
		<div class="storeItems">
			<span href="" class="near iconfont icon-danlieliebiao">附近商家</span>
			<div class="storeItem" v-for="(item,index) in 12" :key="index" @click="$router.push('/shop')">
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
			</div>
		</div>
	</div>
</template>

<script>
	import Star from '../Star/Star.vue'

	export default {
		components: {
			Star
		}
	}
</script>

<style>
	/* 商家列表 */
	.storeItems {
		margin-bottom: 3rem;
		padding-top: 0.67rem;
	}
	.near {
		margin-left: 0.67rem; 
		font-size: 0.9rem;
		color: #aaa;
	}
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
</style>