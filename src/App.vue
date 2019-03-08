<template>
	<div>
		<router-view></router-view>
	  	<FooterGuide v-show="$route.meta.showFooter"/>
  	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'

	export default {
		components: {
			FooterGuide	
		},
/*		//初始化时请求一次用户信息，看是否已经登陆过
		mounted: function() {
			this.getUserInfo()
		},                               */
		methods: {
			...mapActions(['getUserInfo'])
		},
	}
</script>

<style>

</style>
