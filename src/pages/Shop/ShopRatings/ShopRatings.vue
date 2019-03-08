<template>
	<div>
		<div class="ratingsWrapper">
			<div class="shopRatings">
				<!-- 头部 -->
				<div class="ratingsTop">
					<div class="ratingsTop-l">
						<p>{{ info.score }}</p>
						<p>综合评分</p>
						<p>高于周边商家69.2%</p>
					</div>
					<div class="ratingsTop-m"></div>
					<div class="ratingsTop-r">
						<p>
							<span>服务态度</span>
							<Star :score="4.1" :size="12"/>
							<span class="score">4.1</span>
						</p>
						<p>
							<span>商品评分</span>
							<Star :score="4.3" :size="12"/>
							<span class="score">4.3</span>
						</p>
						<p>
							<span>送达时间</span>
							<span class="arriveTime">28分钟</span>
						</p>
					</div>
				</div>
				<!-- 中部 -->
				<div class="ratingsMiddle">
					<div>
						<span class="ratingsBtn" :class="{ratingsBtnOn: selectType===2}" 
						@click="setSelectType(2)">
							全部
							<span>{{ ratings.length }}</span>
						</span>
						<span class="ratingsBtn" :class="{ratingsBtnOn: selectType===0}" 
						@click="setSelectType(0)">
							满意
							<span>{{ positiveSive }}</span>
						</span>
						<span class="ratingsBtn" :class="{ratingsBtnOn: selectType===1}" 
						@click="setSelectType(1)">
							不满意
							<span>{{ ratings.length - positiveSive }}</span>
						</span>
					</div>
					<div class="onlyText">
						<span class="onlyTextBtn" 
						:class="{TextBtnOn: onlyShowText}" 
						@click="toggleOnlyShowText">√</span>
						<span class="text">只看有内容的评价</span>
					</div>
				</div>
				<!-- 底部 -->
				<div class="ratingsBottom">
					<div class="ratingsItems">
						<div class="ratingsItem" v-for="(rating,index) in filterRatings" :key="index">
							<div class="userImg">
								<img src="./images/头像.png" alt="">
							</div>
							<div class="ratingsItem-r">
								<p>{{ rating.name }}</p>
								<p>
									<span>2019-01-23</span>
									<span>21:52:44</span>
								</p>
								<p>
									<star :score="rating.score" :size="12"/>
								</p>
								<p>{{ rating.text }}</p>
								<p>
									<img src="./images/点赞.jpg" alt="">
									<span v-for="(item,index) in 5" :key="index ">水晶凤爪</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters} from 'vuex'
	import Star from '../../../components/Star/Star.vue'
	import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				onlyShowText: true, //true代表只显示有文本内容的评价，false显示全部评价
				selectType: 2, //0代表选择满意类评价，1代表选择不满意评价，2代表选择全部评价

			}
		},
		computed: {
			//获取商家信息，用户评价
			...mapState(['info','ratings']),
			//获取用户评价中满意评价的数量
			...mapGetters(['positiveSive']),
			//过滤后得到的评价列表
			filterRatings: function() {
				//获得相关数据：原始评价数组，是否有文本内容评论变量，评论类型变量
				const {ratings,onlyShowText,selectType} = this
				//产生一个过滤新数组
				return ratings.filter(rating => {
					//条件1：
					//selectType 情况分为: 0/1/2
					//rating.rateType 情况分为： 0/1
					//当selectType为2时，即需要全部子元素，可以直接返回原数组(true)
					//当selectType不为2时，需要选择selectType===rating.rateType情况的子元素
					//合并两个条件即：selectType===2 || !selectType===2 && selectType===rating.rateType 时返回true
					//简化：如果selectType===2，该逻辑式不会继续进行，而如果进行则代表selectType不为2
					//简化：selectType===2 || selectType===rating.rateType 时返回true
					//条件2：
					//onlyShowText 情况分为: true和false
					//rating.text(是否有文本) 情况分为：有值和没值
					//当onlyShowText为false，即不要求text必须有值，即onlyShowText为false时返回true
					//当onlyShowText为true，即要求text必须有值，即text.length>0
					//合并两个条件即：!onlyShowText || onlyShowText==true && rating.text.length>0 时返回true
					//简化：如果!onlyShowText==true成立，该逻辑式不会继续进行，如果进行则代表!onlyShowText==true不成立，即onlyShowText==true成立
					//简化：!onlyShowText || rating.text>0 时返回true
					//最后合并条件1和条件2(同时符合两个条件，即求交集)：
					//(selectType===2 || selectType===rating.rateType) && (!onlyShowText || rating.text.length>0)时返回true
					return (selectType===2 || selectType===rating.rateType) && (!onlyShowText || rating.text.length>0)
				})
			} 
		},
		components: {
			Star
		},
		mounted: function() {
			//获取用户评价信息，并初始化滑动
			this.$store.dispatch('getratings',() => {
				this.$nextTick(() => {
					this.scroll = new BScroll('.ratingsWrapper',{
						click: true
					})
				})

			})
		},
		methods: {
			//切换显示 全部/满意/不满意评价
			setSelectType: function(selectType) {
				this.selectType = selectType
			},
			//切换是否显示无文本评价
			toggleOnlyShowText: function() {
				this.onlyShowText = !this.onlyShowText
			}
		}
	}
</script>

<style>
	.ratingsWrapper {
		width: 100%;
		position: absolute;
		top: 14.3rem;
		bottom: 0;
		overflow: hidden;
	}
	.shopRatings {
		background-color: #eee;
	}
	/* 头部 */
	.ratingsTop {
		overflow: hidden;
		padding: 0.67rem 1rem;
		margin-bottom: 0.67rem;
		background-color: #fff;
		border-top: 0.5px solid #eee;
	}
	.ratingsTop-l {
		width: 8.4rem;
		text-align: center;
		float: left;
		margin: 0.5rem;
	}
	.ratingsTop-l p:nth-child(1) {
		font-size: 1.33rem;
		color: #F6B65D;
	}
	.ratingsTop-l p:nth-child(2) {
		font-size: 0.88rem;
		margin: 0.5rem 0;
	}
	.ratingsTop-l p:nth-child(3) {
		font-size: 0.88rem;
		color: #aaa;
	}
	.ratingsTop-m {
		height: 4.09rem;
		width: 0;
		margin: 0.5rem 0;
		border: 0.5px solid #eee;
		float: left;
	}
	.ratingsTop-r {
		float: left;
		margin: 0.5rem 1rem;
		height: 4.09rem;
	}
	.ratingsTop-r p {
		line-height: 1.35rem;
	}
	.ratingsTop-r span {
		font-size: 0.88rem;
	}
	.ratingsTop-r .score {
		color: #F6B65D;
	}
	.ratingsTop-r p .arriveTime {
		color: #aaa;
	}
	/* 中部 */
	.ratingsMiddle {
		background-color: #fff;
		overflow: hidden;
		padding: 1rem;
	}
	.ratingsBtn {
		display: inline-block;
		width: 4rem;
		height: 2.27rem;
		background-color: #eee;
		text-align: center;
		line-height: 2.27rem;
		font-size: 0.88rem;
	}
	.ratingsBtnOn {
		color: #fff;
		background-color: #26b53e;
	}
	.onlyText {
		margin-top: 1.5rem;
	}
	.onlyTextBtn {
		font-weight: 900;
		display: inline-block;
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 0.7rem;
		color: #fff;
		background-color: #ddd;
		text-align: center;
		line-height: 1.4rem;
	}
	.TextBtnOn {
		background-color: #26b53e;
	}
	.onlyText .text {
		color: #666;
		font-size: 0.88rem;
	}
	/* 底部 */
	.ratingsBottom {
		background-color: #fff;
		margin-top: 1px;
	}
	.ratingsItem {
		padding: 0.88rem;
		border-bottom: 0.5px solid #eee;
		overflow: hidden;
	}
	.userImg {
		float: left;
		height: 2.4rem;
		width: 2.4rem;
		border-radius: 1.2rem;
		overflow: hidden;
		background-color: #aaa;
	}
	.userImg img {
		width: 2.4rem;
	}
	.ratingsItem-r {
		margin-left: 3rem;
	}
	.ratingsItem-r p {
		line-height: 1.5rem;
	}
	.ratingsItem-r p:nth-child(1) {
		float: left;
		font-size: 0.88rem;
	}
	.ratingsItem-r p:nth-child(2) {
		text-align: right;
		font-size: 0.88rem;
		color: #aaa;
	}
	.ratingsItem-r p:nth-child(3) {
		color: #aaa;
	}
	.ratingsItem-r p:nth-child(4) {
		font-size: 0.88rem;
	}
	.ratingsItem-r p:nth-child(5) img {
		float: left;
		height: 1rem;
		margin-right: 0.67rem;
	}
	.ratingsItem-r p:nth-child(5) span {
		float: left;
		margin: 0 0.33rem 0.33rem 0;
		padding: 0 0.5rem;
		font-size: 0.88rem;
		border: 0.5px solid #ddd;
	}
</style>