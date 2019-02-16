<template>
	<div>
		<!-- 头部导航条 -->
		<HeaderTop title="订单列表"></HeaderTop>
		<!-- 订单 -->
		<div class="order">
			<div class="order-content">
				<img src="./images/空购物篮.png" alt="">
				<p>登陆后查看外卖订单~</p>
				<a href="">立即登陆</a>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

	export default {
		components: {
			HeaderTop
		}
	}
</script>

<style>
	/* 订单 */
	.order {
		width: 100%;
		margin-top: 3rem;
	}
	.order-content {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);		
	}
	.order-content img {
		width: 80%;
	}
	.order-content p {
		line-height: 2rem;
	}
	.order-content a {
		color: #fff;
		display: block;
		padding: 0.67rem;
		background-color: #26b53e;
		border-radius: 0.2rem;
	}
</style>
