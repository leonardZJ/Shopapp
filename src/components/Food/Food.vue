<template>
	<div>
		<div class="backGr" @click="toggleShow" v-if="isShow"></div>
		<div class="card"  v-if="isShow">
			<div class="image">
				<div class="closeCard" @click="toggleShow">x</div>
				<img src="./images/水晶凤爪.jpg" alt="loading">
				<span>主、辅料：凤爪，青椒，红椒</span>
			</div>
			<p>{{ food.name }}</p>
			<p>
				<span>月售90份</span>
				<span>好评率100%</span>
			</p>
			<p>￥{{ food.price }}</p>
			<CartControl :food="food"/>
		</div>
	</div>
</template>

<script>
	import CartControl from '../CartControl/CartControl.vue'

	export default {
		data() {
			return {
				isShow: false
			}
		},
		props: {
			food: Object
		},
		components: {
			CartControl
		},
		methods: {
			//切换显示隐藏
			toggleShow: function() {
				this.isShow = !this.isShow
			}
			
		}
	}
</script>

<style>
	.closeCard {
		position: absolute;
		top: 0;
		right: 0.67rem;
		font-size: 1.5rem;
		color: #aaa;
		z-index: 999;
	}
	.backGr {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
	}
	.card {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #fff;
		z-index: 3;
	}
	.image {
		position: relative;
	}
	.image span {
		position: absolute;
		left: 0.67rem;
		bottom: 0.67rem;
		color: #fff;
		font-size: 0.8rem;
	}
	.card p {
		line-height: 2rem;
		margin-left: 0.67rem;
	}
	.card p:nth-of-type(1) {
		font-weight: 800;
	}
	.card p:nth-of-type(2) {
		font-size: 0.8rem;
		color: #aaa;
	}
	.card p:nth-of-type(3) {
		color: #ec1c24;
	}

</style>