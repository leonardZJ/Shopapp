<template>
	<div>
		<!-- 头部导航条 -->
		<HeaderTop title="我的"></HeaderTop>
		<!-- 个人资料 -->
		<div class="personal">
			<div class="myLogin" @click="goTo('/login')">
				<span>
					<img src="./images/头像.png" alt="">
				</span>
				<span>
					<div class="content">
						<p>登陆/注册</p>
						<p>暂无绑定手机号</p>
					</div>
					<div class="rigth iconfont icon-right"></div>
				</span>
			</div>
			<div class="count">
				<a href="">
					<div class="count-l">
						<p><span>0.00</span><span>元</span></p>
						<p>我的余额</p>
					</div>
				</a>
				<a href="">
					<div class="count-c">
						<p><span>0</span><span>个</span></p>
						<p>我的优惠</p>
					</div>
				</a>
				<a href="">
					<div class="count-r">
						<p><span>0</span><span>分</span></p>
						<p>我的积分</p>
					</div>
				</a>
			</div>
			<div class="line"></div>
			<div class="myOption">
				<div class="myOrder">
					<a href="">
						<span>我的订单</span>
						<div class="right iconfont icon-right"></div>
					</a>
				</div>
				<div class="market">
					<a href="">
						<span>积分商城</span>
						<div class="right iconfont icon-right"></div>
					</a>
				</div>
				<div class="member">
					<a href="">
						<span>会员中心</span>
						<div class="right iconfont icon-right"></div>
					</a>
				</div>
			</div>
			<div class="line"></div>
			<div class="myOption">
				<div class="service">
					<a href="">
						<span>服务中心</span>
						<div class="right iconfont icon-right"></div>
					</a>
				</div>
			</div>
		</div>
		<mt-button type="danger" size="large" v-if="!userInfo" class="logoutBtn" @click="logout">退出登陆</mt-button>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {MessageBox,Toast} from 'mint-ui'
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'

	export default {
		computed: {
			...mapState(['userInfo'])
		},
		components: {
			HeaderTop,
		},
		methods: {
			goTo: function(path) {
				this.$router.push(path)
			},
			logout: function() {
				MessageBox.confirm('确定退出吗?').then(action => {
					//调用actions行为进行异步登出
					//this.$store.dispatch('logout')
					//退出成功后提示Toast
					Toast('退出成功')
				});
			}
		}
	}
</script>

<style>
	/* 个人资料 */
	.personal {
		margin-top: 3.1rem;
		overflow: hidden;
	}
	.myLogin {
		background-color: #26b53e;
		padding: 0.67rem;
		display: flex;
	}
	.myLogin img {
		width: 4rem;
		height: 4rem;
		border-radius: 2rem;
		background-color: #ccc;
	}
	.myLogin span:nth-child(2) {
		margin-left: 0.67rem;
		flex: 1;
		position: relative;
	}
	.myLogin .content {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.myLogin .content p {
		line-height: 2rem;
		color: #fff;
	}
	.myLogin .content p:nth-child(1) {
		font-size: 1rem;
	}
	.myLogin .content p:nth-child(2) {
		font-size: 0.88rem;
	}
	.myLogin .rigth {
		color: #fff;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}
	.count {
		width: 100%;
		display: flex;
	}
	.count a {
		flex: 1;
		text-align: center;
	}
	.count div {
		padding: 1rem 0;
	}
	.count p {
		line-height: 1.5rem;
	}
	.count-c {
		border-left: 1px solid #eee;
		border-right: 1px solid #eee;
	}
	.count-l span:nth-child(1) {
		font-size: 2rem;
		color: #efbf21;
	}
	.count-c span:nth-child(1) {
		font-size: 2rem;
		color: #ef5c21;
	}
	.count-r span:nth-child(1) {
		font-size: 2rem;
		color: #99ef21;
	}
	.line {
		width: 100%;
		height: 0.75rem;
		background-color: #eee;
	}
	.myOption {
		overflow: hidden;
	}
	.myOption a {
		display: block;
		position: relative;
		padding: 0.67rem;
	}
	.myOption .right {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0.67rem;
		font-size: 2rem;
		color: #aaa;
	}
	.myOption .market {
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
	.service {
		border-bottom: 1px solid #eee;
	}
	.icon-right {
		font-size: 2.5rem;
	}
	/* 退出按钮 */
	.logoutBtn {
		width: 80%;
		margin: 1rem auto;
	}
</style>
