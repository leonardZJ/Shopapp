<template>
	<div>
		<!-- 头部导航条 -->
		<div class="headerbar">
			<slot name="left"></slot>
			<span class="header-c">{{ title }}</span>
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style>
	/* 全局样式 */
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
	/*头部导航条*/
	.headerbar{
		width: 100%;
		height: 3rem;
		background-color: #26b53e;
		position: fixed;
		top: 0;
		right: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		z-index: 999;
		color: #fff;
	}
	.headerbar .header-c {
		font-size: 1.2rem;
	}
</style>