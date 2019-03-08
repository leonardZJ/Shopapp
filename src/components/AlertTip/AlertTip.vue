<template>
	<div class="AlertOut">
		<div class="alertBox">
			<img src="./images/感叹号.png" alt="" class="alertBox-t"><br>
			<span class="alertBox-m">{{ AlertText }}</span><br>
			<span class="alertBox-b" @click="closeTip">确认</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			AlertText: String,
		},
		methods: {
			closeTip: function() {
				this.$emit('closeTip')
			}
		}
	}
</script>

<style>
	.AlertOut {
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
	}
	.alertBox {
		width: 16rem;
		height: 12rem;
		background-color: #fff;
		text-align: center;
		border-radius: 0.3rem;
		margin: 50% auto 0 auto;
		position: relative;
	}
	.alertBox-t {
		margin-top: 1.5rem;
		height: 5rem;
	}
	.alertBox-m {
		font-size: 1.2rem;
	}
	.alertBox-b {
		color: #fff;
		font-size: 1.2rem;
		width: 100%;
		height: 3rem;
		line-height: 3rem;
		position: absolute;
		left: 0;
		bottom: 0;
		border-radius: 0 0 0.3rem 0.3rem;
		background-color: #17b029;
	}
</style>