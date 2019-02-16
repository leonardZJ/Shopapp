<template>
	<div>
		<div class="footerbarLine"></div>
		<div class="footerbar">
			<span href="#" @click="goTo('/home')">
				<div class="footerbarItem">
					<p class="iconfont icon-shouye" :class="{on: $route.path==='/home'}"></p>
					<span :class="{on: $route.path==='/home'}">首页</span>
				</div>
			</span>
			<span href="#" @click="goTo('/search')">
				<div class="footerbarItem">
					<p class="iconfont icon-search" :class="{on: $route.path==='/search'}"></p>
					<span :class="{on: $route.path==='/search'}">搜索</span>
				</div>
			</span>
			<span href="#" @click="goTo('/order')">
				<div class="footerbarItem">
					<p class="iconfont icon-danlieliebiao" :class="{on: $route.path==='/order'}"></p>
					<span :class="{on: $route.path==='/order'}">订单</span>
				</div>
			</span>
			<span href="#" @click="goTo('/profile')">
				<div class="footerbarItem">
					<p class="iconfont icon-account" :class="{on: $route.path==='/profile'}"></p>
					<span :class="{on: $route.path==='/profile'}">我的</span>
				</div>
			</span>
		</div>
	</div>
</template>

<script>

export default {
	methods: {
		goTo: function(path) {
			this.$router.replace(path)
		}
	}
}
</script>

<style>
.footerbar {
	width: 100%;
	height: 3rem;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	display: flex;
	z-index: 999;
}
.footerbar span {
	flex: 1;
	position: relative;
	color: #aaa;
	font-size: 0.8rem;
	font-weight: 800;
}
.footerbarItem {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
}
.footerbarLine {
	width: 100%;
	height: 1px;
	background-color: #eee;
	position: fixed;
	bottom: 3rem;
	z-index: 999;
}
.footerbarItem p {
	margin: 0;
	text-align: center;
	font-size: 1.5rem;
	color: #aaa;
}
/* 激活样式 */
.on {
	color: #26b53e!important;
}
</style>
