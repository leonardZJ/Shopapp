<template>
	<div>
		<div class="ShopInfoWapper">
			<div class="ShopInfo">
				<!-- 头部 -->
				<div class="ShopInfoHead">
					<p class="ShopInfoHead-t">配送信息</p>
					<p class="ShopInfoHead-m">
						<span>专送</span>
						<span>由商家提供配送，约28分钟送达，距离1000m</span>
					</p>
					<p class="ShopInfoHead-b">配送费￥4元</p>
				</div>
				<!-- 活动信息 -->
				<div class="ShopInfoSupport">
					<p class="supportHead">活动与服务</p>
					<p class="supportText" v-for="(item,index) in 5" :key="index">
						<span>首单</span>
						<span>新用户下单活动活动活动活动活动活动</span>
					</p>
				</div>
				<!-- 商家图片 -->
				<div class="ShopInfoPicture">
					<p>商家图册</p>
					<div class="picWapper">
						<ul>
							<li v-for="(item,index) in 5" :key="index" class="shopPict">
								<img :src="require(`./images/${index+1}.jpg`)" alt="">
							</li>
						</ul>
					</div>
				</div>
				<!-- 商家相关信息 -->
				<div class="ShopInfos">
					<p class="ShopInfosHead">商家信息</p>
					<div class="ShopInfosBody">
						<p><span>品类</span><span>茶楼，聚餐</span></p>
						<p><span>商家电话</span><span>15333333333</span></p>
						<p><span>地址</span><span>广州市XX区XX路XXX</span></p>
						<p><span>营业时间</span><span>10：00-24：00</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'

	export default {
		computed: {
			...mapState(['info'])
		},
		mounted() {
			this.$nextTick(() => {
				if(this.info.数据) {
					//如果数据还没有获取到，则return结束掉
					return
				}
				//初始化滑动
				this._initScroll()
			})
		},
		methods: {
			_initScroll: function() {
				//初始化垂直滑动
				new BScroll('.ShopInfoWapper',{
					click: true
				})
				//初始化水平滑动
				new BScroll('.picWapper',{
					scrollX: true,
					scrollY: false,
					click: true
				})
			}
		},
		watch: {
			//监视info数据，发生变化时初始化滑动
			info() {
				this.$nextTick(() => {
					this._initScroll()
				})
			}
		}
	}
</script>

<style>
	.ShopInfoWapper {
		width: 100%;
		position: absolute;
		top: 14.3rem;
		bottom: 0;
		overflow: hidden;
	}
	.ShopInfo {
		background-color: #eee;
	}
	.ShopInfoHead,.ShopInfoSupport,.ShopInfos {
		background-color: #fff;
		padding: 0.67rem;
		margin-bottom: 1rem;
	}
	/* 头部 */
	.ShopInfoHead p {
		margin-bottom: 0.88rem;
	}
	.ShopInfoHead-t {
		font-weight: 800;
	}
	.ShopInfoHead-m span:nth-child(1) {
		background-color: #26b53e;
		border-radius: 2px;
		color: #fff;
		font-size: 0.88rem;
	}
	.ShopInfoHead-m,.ShopInfoHead-b {
		font-size: 0.9rem;
		color: #666;
	}
	/* 活动 */
	.ShopInfoSupport {
		font-size: 0.9rem;
		color: #666;
	}
	.supportHead {
		font-size: 1rem;
		font-weight: 800;
		color: #000;
		margin-bottom: 0.67rem;
	}
	.supportText {
		margin-bottom: 0.67rem;
	}
	.supportText span:nth-child(1) {
		background-color: #26b53e;
		border-radius: 2px;
		color: #fff;
		font-size: 0.88rem;
	}
	/* 商家图册 */
	.ShopInfoPicture {
		background-color: #fff;
		padding: 0.67rem 0;
		margin-bottom: 1rem;
	}
	.ShopInfoPicture p:nth-child(1) {
		font-weight: 800;
		margin: 0 0 0.67rem 0.67rem;
	}
	.picWapper {
		width: 100%;
		overflow: hidden;
	}
	.picWapper ul {
		white-space: nowrap;
		display: inline-flex;
	}
	.shopPict img {
		height: 6rem;
		margin-left: 0.67rem;
	}
	/* 商家相关信息 */
	.ShopInfosHead {
		font-weight: 800;
		margin-bottom: 0.67rem;
	}
	.ShopInfosBody p {
		color: #666;
		display: flex;
		width: 100%;
		justify-content: space-between;
		line-height: 2.5rem;
		border-bottom: 0.5px solid #ccc;
	}
</style>