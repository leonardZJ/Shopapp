<template>
	<div>
		<!-- 头部 -->
		<ShopHeader @showAlBox="showAlBox" @showSupport="showSupport"></ShopHeader>
		<!-- 选项 -->
		<div class="option">
			<span><router-link to="/shop/goods" replace>点餐</router-link></span>
			<span><router-link to="/shop/ratings" replace>评价</router-link></span>
			<span><router-link to="/shop/info" replace>商家</router-link></span>
		</div>
		<!-- 中部内容 -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<!-- 弹出框1 -->
		<transition name="AlBoxShow">
			<div class="AlertOut" v-show="AlBoxShow">
				<div class="alertBox">
					<span class="AlBox-itemT">
						<span>品牌</span>
						<span>一品食客（保利水城）</span>
					</span>
					<div class="AlBox-itemM">
						<span>
							<p>3.5</p>
							<p>评分</p>	
						</span>
						<span>
							<p>106单</p>
							<p>月销量</p>
						</span>
						<span>
							<p>美运专送</p>
							<p>约30分钟</p>
						</span>
						<span>
							<p>4元</p>
							<p>配送费</p>
						</span>
						<span>
							<p>1000m</p>
							<p>距离</p>
						</span>
					</div>
					<div class="AlBox-itemB">
						<p>—— 公告 ——</p>
						<p>详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</p>
					</div>
				</div>
				<div class="closeAlBox" @click="closeAlBox">x</div>
			</div>
		</transition>
		<!-- 弹出框2 -->
		<transition name="supportShow">
			<div class="AlertOut" v-show="supportShow">
				<div class="BottomAlert">
					<div class="closeBtmAle" @click="closeSupport">x</div>
					<div class="support">
						<p>优惠活动</p>
						<div class="supportInfo">
							<p v-for="(p,index) in 13"><span>特价</span>详细详细详细详细详细</p>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
	

	export default {
		data() {
			return {
				AlBoxShow: false,
				supportShow: false
			}
		},
		mounted: function() {
			this.$store.dispatch('getInfo')
		},
		components: {
			ShopHeader,
		},
		methods: {
			showAlBox: function() {
				this.AlBoxShow = true
			},
			closeAlBox: function() {
				this.AlBoxShow = false
			},
			showSupport: function() {
				this.supportShow = true
			},
			closeSupport: function() {
				this.supportShow = false
			},
		}
	}
</script>

<style>
	.option {
		width: 100%;
		height: 3.1rem;
		display: flex;
		border-bottom: 1px solid #ccc;
	}
	.option span {
		color: #888;
		font-weight: 800;
		flex: 1;
		text-align: center;
		display: inline-block;
		height: 100%;
	}
	.option a {
		display: block;
		line-height: 3rem;
	}
	.router-link-active {
		color: #26b53e;
		border-bottom: 0.1rem solid #26b53e;
	}
	/* 弹出优惠框 */
	.AlertOut {
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
	}
	.alertBox {
		width: 80%;
		height: 13rem;
		background-color: #fff;
		text-align: center;
		border-radius: 0.3rem;
		margin: 50% auto 0 auto;
		position: relative;
		padding: 1rem;
	}
	.closeAlBox {
		color: #ddd;
		font-size: 1.5rem;
		width: 2rem;
		height: 2rem;
		margin: 2rem auto;
		text-align: center;
		border: 1px solid #ddd;
		border-radius: 1rem;
	}
	.AlBox-itemT span:nth-child(1) {
		font-size: 1rem;
		font-weight: 800;
		margin: 0 0.67rem;
		padding: 0 0.33rem;
		background-color: #f1da0d;
		border-radius: 1px;
	}
	.AlBox-itemT span:nth-child(2) {
		font-size: 1.5rem;
		font-weight: 600;
	}
	.AlBox-itemM {
		margin-top: 1rem;
		display: flex;
		justify-content: space-between;
	}
	.AlBox-itemM span p:nth-child(1) {
		font-weight: 800;
	}
	.AlBox-itemM span p:nth-child(2) {
		font-size: 0.86rem;
		color: #aaa;
	}
	.AlBox-itemB {
		margin-top: 1rem;
	}
	.AlBox-itemB p:nth-child(1) {
		color: #aaa;
		line-height: 2rem;
	}
	.AlBox-itemB p:nth-child(2) {
		font-size: 0.88rem;
		text-indent: 2rem;
		text-align: left;
	}
	/* 底部优惠框 */
	.BottomAlert {
		width: 100%;
		height: 16rem;
		background-color: #fff;
		text-align: center;
		border-radius: 0.3rem 0.3rem 0 0;
		position: fixed;
		bottom: 0;
	}
	.closeBtmAle {
		font-size: 1.8rem;
		font-weight: 800;
		position: absolute;
		right: 0.67rem;
		top: 0.4rem;
	}
	.support p {
		font-size: 1.2rem;
		font-weight: 800;
		margin: 0.67rem 0;
	}
	.supportInfo {
		height: 13rem;
		margin: 0 1.5rem;
		overflow: scroll;
	}
	.supportInfo p {
		text-align: left;
		font-size: 1rem;
		font-weight: 500;
	}
	.supportInfo p span {
		font-size: 0.88rem;
		color: #fff;
		background-color: #ee4545;
		margin-right: 0.67rem;
		border-radius: 2px;
	}
	/* 过渡动画 */
	.AlBoxShow-enter-active,.AlBoxShow-leave-active {
		transition: opacity .2s;
	}
	.AlBoxShow-enter,.AlBoxShow-leave-to {
		opacity: 0;
	}
	.supportShow-enter-active,.supportShow-leave-active {
		transition: opacity .2s;
	}
	.supportShow-enter,.supportShow-leave-to {
		opacity: 0;
	}
</style>