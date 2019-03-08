<template>
	<div class="cartBtn">
		<transition name="move1">
			<div class="reduceBtn circleBtn" v-if="food.count" @click.stop="updateFoodCount(false)">-</div>
		</transition>
		<transition name="move2">
			<div class="Num" v-if="food.count">{{ food.count }}</div>
		</transition>
		<div class="addBtn circleBtn" @click.stop="updateFoodCount(true)">+</div>
	</div>
</template>
<script>
	export default{
		props: {
			food: Object
		},
		methods: {
			updateFoodCount: function(isAdd) {
				this.$store.dispatch('updateFoodCount',{isAdd,food: this.food})
			}
		}
	}
</script>

<style>
	.cartBtn {
		display: flex;
		justify-content: space-between;
		position: absolute;
		right: 0.67rem;
		bottom: 0.67rem;
	}
	.circleBtn {
		height: 1rem;
		width: 1rem;
		text-align: center;
		line-height: 0.8rem;
		border: 2px solid #26b53e;
		border-radius: 0.6rem;
		font-size: 1.3rem;
	}
	.addBtn {
		color: #fff;
		background-color: #26b53e;
	}
	.reduceBtn {
		color: #26b53e;
	}
	.Num {
		height: 1.2rem;
		width: 1.2rem;
		text-align: center;
		line-height: 1.2rem;
	}
	/* 过渡的样式和时间 */
	.move1-enter-active,.move1-leave-active {
		transition: all .3s;
	}
	/* 消失后的样式 */
	.move1-enter,.move1-leave-to {
		opacity: 0;
		transform: translateX(2rem) rotate(180deg);
	}
	/* 过渡的样式和时间 */
	.move2-enter-active,.move2-leave-active {
		transition: all .2s;
	}
	/* 消失后的样式 */
	.move2-enter,.move2-leave-to {
		opacity: 0;
	}
	
</style>