<template>
	<div class="login">
		<div class="goBack iconfont icon-back" @click="$router.back()"></div>
		<p class="title">好卖外卖</p>
		<p class="option">
			<span>短信登陆</span>
			<span>密码登陆</span>
		</p>
		<div class="in">
			<input type="text"  placeholder="手机/邮箱/用户名" class="input-style">
			<div class="center-input">
				<input type="password" placeholder="密码" class="input-style">
				<a href="">
					<div class="passwordbtn-o">
						<div class="passwordbtn-i"></div>
					</div>
				</a>
			</div>
			<div class="bottom-input">
				<input type="text" placeholder="验证码" class="input-style">
				<a href="">
					<img src="./images/验证码.jpg" alt="">
				</a>
			</div>
		</div>
		<a href="" class="btn">登陆</a>
		<a href="" class="about">关于我们</a>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	p {
		margin: 0;
	}
	/* 登陆信息 */
	.login {
		margin-top: 7rem;
		margin-left: 3rem;
		margin-right: 3rem;
		text-align: center;
	}
	.goBack {
		position: fixed;
		color: #aaa;
		top: 0;
		left: 0;
		font-size: 2.5rem;
	}
	.title {
		color: #17b029;
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 2rem;
	}
	.option span {
		display: inline-block;	
		margin: 0 1.8rem;
		line-height: 2rem;
/* 		border-bottom: 4px solid #17b029; */
	}
	.option span:hover {
		border-bottom: 4px solid #17b029;
	}
	.in {
		margin-top: 1rem;
	}
	.input-style {
		width: 100%;
		font-size: 1rem;
		line-height: 2.5rem;
		padding-left: 0.67rem;
		outline: 0;
		border:1px solid #c8cccf;
		border-radius: 0.33rem;
		box-sizing: border-box;
	}
	.center-input {
		position: relative;
		margin: 0.67rem 0;
	}
	.passwordbtn-o {
		width: 2rem;
		height: 1rem;
		border-radius: 0.5rem;
		position: absolute;
		right: 0.67rem;
		top: 50%;
		transform: translateY(-50%);
		background-color: #17b029;
	}
	.passwordbtn-i {
		width: 1rem;
		height: 1rem;
		border-radius: 0.5rem;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		border: 1px solid #aaa	;
		background-color: #fff;
	}
	.bottom-input {
		position: relative;
	}
	.bottom-input img {
		height: 2.3rem;
		position: absolute;
		right: 0.67rem;
		top: 50%;
		transform: translateY(-50%);

	}
	.btn {
		color: #fff;
		display: block;
		width: 100%;
		font-size: 1rem;
		line-height: 2.5rem;
		border: 1px solid #eee;
		border-radius: 0.33rem;
		background-color: #17b029;
		margin-top: 0.67rem;
	}
	.about {
		font-size: 0.88rem;
		line-height: 2rem;
	}
</style>