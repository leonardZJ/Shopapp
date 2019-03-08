<template>
	<div class="star">
		<span class="star-item" v-for="(star,index) in StarArr" :key="index">
			<img :src="require(`./images/${star}.png`)" alt="">
		</span>
	</div>
</template>
<script>
	//定义类名常量
	const ClASS_ON = '全星'
	const ClASS_HALF = '半星'
	const ClASS_OFF = '零星'

	export default {
		props: {
			score: Number,
			size: Number
		},
		computed: {
			StarArr: function() {
				//先获取score
				const {score} = this
				//准备一个空数组
				const scs = []
				//对score进行下舍入--Math.floor()，获取score的整数部分
				const scoreInterger = Math.floor(score)
				//向scs中遍历添加全星样式CLASS_ON，添加几次由score的整数部分决定
				for (let i = 0; i < scoreInterger; i++) {
					scs.push(ClASS_ON)
				}
				//当score的小数部分>=0.5时向scs中添加半星样式CLASS_HALF，小数的加减不太精确，所以整体*10
				if(score*10 - scoreInterger*10 >= 5) {
					scs.push(ClASS_HALF)
				}
				//最后遍历添加零星样式CLASS_OFF，总个数为5个，剩下的位数就是零星的添加次数
				while(scs.length < 5) { //0到5是6个，所以不加等于
					scs.push(ClASS_OFF)
				}
				//最后返回出去一个数组
				return scs
			}
		}
	}
</script>

<style>
	.star {
		display: inline-block;
	}
	.star img {
		height: 0.67rem;
	}
</style>