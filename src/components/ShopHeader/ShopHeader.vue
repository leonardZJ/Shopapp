<template>
	<div>
		<!-- 头部背景条 -->
		<div class="headerTop">
			<span href="" class="iconfont icon-back" @click="$router.back()"></span>
		</div>
		<!-- 头部商家信息 -->
		<div class="header">
				<img src="./images/商标.jpg" alt="" class="businessSign">
				<p class="header-t">
					<span>品牌</span>
					<span>一品食客（保利水城）</span>
					<span class="iconfont icon-right" @click="showAlBox"></span>
				</p>
				<p class="header-c">
					月售90单
					<span>·</span>
					美运专送
					<span>·</span>
					约28分钟
					<span>·</span>
					距离1000m
				</p>
				<p class="header-b">
					<span>首单</span>
					<span>新用户下单立减17元(不与其他活动同时使用)</span>
					<span>8个优惠</span>
					<span class="iconfont icon-down" @click="showSupport"></span>
				</p>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			showAlBox: function() {
				this.$emit('showAlBox')
			},
			showSupport: function() {
				this.$emit('showSupport')
			}
		}
	}
</script>

<style>
	ul,li,p {
		margin: 0;
		padding: 0;
	}
	a {
		text-decoration: none;
		color: #000;
	}
	li {
		list-style: none;
	}
	/*头部背景条*/
	.headerTop{
		width: 100%;
		height: 3rem;
		background-image: url(./images/4.jpg);
	}
	.headerTop span {
		color: #fff;
		font-size: 2.5rem;
		line-height: 3rem;
		position: absolute;
		left: 0;
	}
	/* 头部商家信息 */
	.header {
		width: 100%;
		height: 6rem;
		padding-top: 2.2rem;
		text-align: center;
		font-size: 0.8rem;
		position: relative;
	}
	.businessSign {
		width: 4rem;
		height: 4rem;
		position: absolute;
		right: 50%;
		top: 0;
		transform: translate(50%,-50%);
		box-shadow: 0rem 0rem 0.5rem #888;
	}
	.header p:nth-of-type(2) {
		margin: 0.67rem 0;
	}
	.header-t span:nth-child(1) {
		font-size: 0.75rem;
		font-weight: 800;
		padding: 0 0.33rem;
		background-color: #f1da0d;
		border-radius: 1px;
	}
	.header-t span:nth-child(2) {
		margin: 0 0.67rem;
		font-size: 1.2rem;
		font-weight: 600;
	}
	.icon-right {
		font-size: 1.2rem;
	}
	.header-c span {
		margin: 0 0.33rem;
		color: #aaa;
	}
	.header-b {
		display: inline-block;
		border: 1px solid #ddd;
		padding: 0.33rem;
	}
	.header-b span:nth-child(1) {
		background: #26b53e;
		font-size: 0.67rem;
		color: #fff;
	}
	.header-b span:nth-child(2) {
		display: inline-block;
		width: 14rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		vertical-align: middle;
		margin: 0 0.33rem;
	}
</style>