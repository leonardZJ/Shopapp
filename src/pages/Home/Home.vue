<template>
	<div>
		<!-- 头部导航条 -->
		<HeaderTop class="headerbar" title="广州xx大道xx街">
			<span slot="left" class="header-l iconfont icon-search"></span>
			<span slot="right" class="header-r">登陆注册</span>
		</HeaderTop>
		<!-- 轮播图 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="swiper-line">
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
					</div>
					<div class="swiper-line">
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="swiper-line">
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
					</div>
					<div class="swiper-line">
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
						<div>
							<span class="swiper-item">
								<img src="./images/9.png" alt=""><br>
								<span>甜品饮品</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<!-- 轮播图分页器 -->
			<div class="swiper-pagination">
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span>
			</div>
		</div>
		<div class="sliderLine"></div>
		<!-- 商家列表 -->
		<Shoplist></Shoplist>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import Shoplist from '../../components/Shoplist/Shoplist.vue'

	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'

	export default {
		mounted: function() {
			new Swiper ('.swiper-container', {
			    loop: true, 
			    pagination: {
			      el: '.swiper-pagination',
			    },
			})
		},
		components: {
			HeaderTop,
			Shoplist
		}
	}
</script>

<style>
	/* 头部 */
	.headerbar .header-l {
		font-size: 2rem;
		margin-left: -1.2rem;
	}
	.headerbar .header-r {
		font-size: 0.87rem;
		margin-right: -1.2rem;
	}
	/* 轮播图 */
	.swiper-container {
		margin-top: 3.06rem;
	}
	.sliderLine {
		height: 0.67rem;
		background-color: #eee;
	}
	.swiper-line {
		height: 6rem;
		display: flex;
	}
	.swiper-line div {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.swiper-item {
		display: inline-block;
		font-size: 0.67rem;
		text-align: center;
	}
	.swiper-item img {
		height: 3.5rem;
	}
	.swiper-pagination-bullet-active {
		background-color: #26b53e;
	}
	
</style>
