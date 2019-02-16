<template>
	<div>
		<!-- 头部导航条 -->
		<HeaderTop title="搜索"></HeaderTop>
		<!-- 搜索结果 -->
		<div class="search">
			<div class="searchContent">
				<input type="text">
				<span>提交</span>
			</div>
			<p>搜索结果</p>
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
		font-size: 1.2rem;
		border-radius: 0.2rem;
		border: 1px solid #aaa;
		flex: 1;
		margin-left: 1rem;
		outline: 0;
	}
	.searchContent span {
		color: #fff;
		margin-left: 0.67rem;
		display: block;
		padding: 0.67rem 1.5rem;
		background-color: #26b53e;
		border-radius: 0.2rem;
	}
</style>
