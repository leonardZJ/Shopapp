<template>
	<div class="outLogin">
		<div class="login">
			<div class="goBack iconfont icon-back" @click="$router.back()"></div>
			<p class="title">美添外卖</p>
			<p class="loginOption">
				<span :class="{onActive: loginWay}" @click="loginWay = !loginWay">短信登陆</span>
				<span :class="{onActive: !loginWay}" @click="loginWay = !loginWay">密码登陆</span>
			</p>
			<form @submit.prevent="login">
				<!-- 密码登陆 -->
				<div class="in" v-show="!loginWay">
					<input type="text"  placeholder="手机/邮箱/用户名" class="input-style" v-model="name">
					<div class="center-input">
						<input type="password" placeholder="密码" class="input-style" v-model="pwd" v-if="showPwd">
						<input type="text" placeholder="密码" class="input-style" v-model="pwd" v-else>
						<div class="pwdBtn pwdBtn-o" @click="showPwd=!showPwd" :class="{onAct: showPwd}">
							<div class="pwdBtn pwdBtn-i" :class="{right: !showPwd}"></div>
						</div> 
					</div>
					<div class="bottom-input">
						<input type="text" placeholder="验证码" class="input-style" v-model="captcha">
						<a href="">
							<img src="./images/验证码.jpg" alt="captcha" @click="getCaptcha" ref="captcha">
						</a>
					</div>
				</div>
				<!-- 短信登陆 -->
				<div class="in" v-show="loginWay">
					<div class="firstInput">
						<input type="text" class="input-style" placeholder="请输入手机号" v-model="phone">
						<button class="sendCodeBtn" :disabled="!rightPhone" :class="{onSend: rightPhone}" @click.prevent="sendCode">{{ computeTime ? `已发送(${computeTime}s)` : '获取验证码' }}</button>
					</div>
					<input type="text" class="input-style mg-top" placeholder="验证码" v-model="code">
				</div>
				<button class="btn">登陆</button>
			</form>
			<a href="" class="about">关于我们</a>
		</div>
		<AlertTip :AlertText="AlertText" v-show="showAlert" @closeTip="closeTip"></AlertTip>
	</div>
</template>

<script>
	import AlertTip from '../../components/AlertTip/AlertTip.vue'
	import {reqSendCode,reqSmsLogin,reqLogout} from '../../api/index.js'

	export default {
		data() {
			return {
				loginWay: true, //true代表短信登陆，false代表密码登陆
				computeTime: 0, //短信验证码倒计时
				showPwd: false, //是否显示密码
				phone: '', //手机号
				pwd: '', //密码
				name: '', //用户名
				captcha: '', //图片验证码
				code: '', //手机验证码
				AlertText: '', //警告框信息
				showAlert: false, //是否显示警告框，true为显示，false为不显示 
			}
		},
		components: {
			AlertTip
		},
		computed: {
			rightPhone: function() {  //手机号格式是否正确
				return /^1\d{10}$/.test(this.phone) 
			}
		},
		methods: {
			//向指定手机号发送验证码
			sendCode: function() {  
				//如果computeTime === 0时启动计时器(不等于0则不启动)
				if(!this.computeTime) {
					//启动倒计时
					this.computeTime = 30
					this.IntervalId = setInterval(() => {
						this.computeTime--
						if(this.computeTime <= 0) { //当computeTime小于0时停止计时器
							clearInterval(this.IntervalId)
						}
					},1000)
					//发送短信验证码
					reqSendCode().then(result => {
						//根据接口文档中的响应信息决定是否使用catch，这里当code为1表示请求失败，并传回msg
						if(result.code===1) {
							//复用showAlert可以弹出警示框
							this.AlertShow(result.msg)
							//如果还在倒计时则清除倒计时
							if(this.computeTime) {
								this.computeTime = 0
								//提前将IntervalId存到组件中(this.IntervalId)
								clearInterval(this.IntervalId)
								//清除变量
								this.IntervalId = undefined
							}
						}
					})
				}
			},
			//显示警告提示框
			AlertShow: function(AlertText) {
				this.AlertText = AlertText
				this.showAlert = true
			},
			//异步登陆
			login: function() {
				let result;  //储存登陆请求函数返回的结果
				//判断登陆方式
				if(this.loginWay) { //短信登陆
					const {rightPhone,phone,code} = this
					if(!rightPhone) {
						//手机号不正确
						this.AlertShow('手机号不正确')
						return
					} else if(!/^\d{6}$/.test(code)) {
						//验证码必须为6位数
						this.AlertShow('验证码必须为6位数')
						return
					}
					//表单验证码通过后执行登陆函数
					//result = reqSmsLogin(phone,code)
				} else { //密码登陆
					const {name,pwd,captcha} = this
					if(!name) {
						//用户名必须指定
						this.AlertShow('用户名必须指定')
						return
					} else if(!pwd) {
						//密码不能为空
						this.AlertShow('密码不能为空')
						return
					} else if (!captcha) {
						//验证码不能为空
						this.AlertShow('验证码不能为空')
						return
					}
					//表单验证码通过后执行登陆函数，并将返回结果储存到外部使用
					//result = reqSmsLogin(phone,code)
				}

				//无论成功失败都需要清除倒计时
				if(this.computeTime) {
					this.computeTime = 0
					//提前将IntervalId存到组件中(this.IntervalId)
					clearInterval(this.IntervalId)
					//清除IntervalId变量
					this.IntervalId = undefined
				}
				//后期删掉
				alert('登陆成功')
				//跳转到个人中心页面(后期删掉)
				this.$router.replace('/profile')

				
/*				//当登陆操作(函数)结果返回后执行相应操作
				result.then((result) => {
					//根据接口文档中的响应信息,当响应信息中的code为0时表示请求成功,data表示响应信息中的数据,code为1时表示请求失败,msg表示响应信息中的错误提示
					if(result.code===0) {
						const userInfo = result.data
						//将user保存到vuex中的store--state.js进行管理
						this.$store.dispatch('recordUser',userInfo)
						//跳转到个人中心页面
						this.$router.replace('/profile')
					} else {
						//失败时调用getCaptcha显示新的图片验证码
						this.getCaptcha()
						const msg = result.msg
						//调用警示框函数
						this.AlertShow(msg)
					}                                                            
				})                                                  */
			},
			//关闭警告框
			closeTip: function() {
				this.AlertText = ''
				this.showAlert = false
			},
			//刷新图片验证码
			getCaptcha: function() {
				alert('验证码刷新了')
				//路由相同不会重新发请求，所以在路径后加上当前时间作为假参数，让每次刷新路由都不同
				//this.$ref.captcha.src = 'http://localhost:4000/captcha?time =' +  Date.now()
			}
		}
	}
</script>

<style>
	/* 全局样式 */
	p {
		margin: 0;
	}
	.outLogin {
		width: 100%;
		height: 100%;
		text-align: center;
	}
	.login {
		width: 80%;
		text-align: center;
		margin: 8rem auto;

	}
	.goBack {
		position: fixed;
		color: #aaa;
		top: 1rem;
		left: 1rem;
		font-size: 2.5rem;
	}
	.title {
		color: #17b029;
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 2rem;
	}
	.loginOption span {
		display: inline-block;	
		margin: 0 1.3rem;
		line-height: 2rem;
	}
	.onActive {
		color: #17b029;
		border-bottom: 4px solid #17b029;
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
	.in {
		margin-top: 1rem;
	}
	/* 短信登陆 */
	.firstInput {
		position: relative;
	}
	.sendCodeBtn {
		outline: none;
		border: none;
		background-color: #fff;
		color: #bbb;
		position: absolute;
		top: 50%;
		right: 0.5rem;
		transform: translateY(-50%);
	}
	.onSend {
		color: #000;
	}
	.mg-top {
		margin-top: 0.67rem;
	}
	/* 密码登陆 */
	.center-input {
		position: relative;
		margin: 0.67rem 0;
	}
	.pwdBtn {
		height: 1rem;
		border-radius: 0.5rem;
	}
	.pwdBtn-o {
		width: 2rem;
		background-color: #eee;
		position: absolute;
		top: 50%;
		right: 0.67rem;
		border: 1px solid #ccc;
		transform: translateY(-50%);
		transition: all 0.3s;
	}
	.pwdBtn-i {
		width: 1rem;
		background-color: #fff;
		position: absolute;
		border: 1px solid #ccc;
		top: -1px;
		right: -1px;
		transition: all 0.2s;
	}
	.onAct {
		background-color: #17b029;
	}
	.right {
		transform: translateX(-1rem);
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
	/* 登陆按钮 */
	.btn {
		outline: none;
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