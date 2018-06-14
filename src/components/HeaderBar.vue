<template>

	<div class="headerBar">
		<ul class="headerLeft">
			<li style="margin-right:30px;"><router-link to="/">首&nbsp;&nbsp;&nbsp;&nbsp;页</router-link></li>
			<li><router-link to="/meetshow">会议预览</router-link></li>
			<li><router-link to="/meetreserve">会议预订</router-link></li>
			<li><router-link to="/meetreserve">联系我们</router-link></li>
		</ul>

		<ul v-if="this.$store.state.isLogin" class="headerRight">
			<li><router-link to='/ucenter'>个人中心</router-link></li>
			<li><a href="#" @click="loginOut()">退出登录</a></li>
		</ul>
		<ul v-else class="headerRight">
			<li><router-link to="/login">登录</router-link></li>
			<li><router-link to="/register">注册</router-link></li>
		</ul>

		
	</div>


</template>

<script>
export default {
	methods: {
		loginOut() {
			this.$store.commit('changeLogin');
		}
	}
}
</script>

<style scoped>
	a:link {color: #FFFFFF; text-decoration: none;}     /* 未访问的链接 */
	a:visited {color: #FFFFFF}  /* 已访问的链接 */
	a:hover {color: #FFFFFF; text-decoration: underline;}    /* 当有鼠标悬停在链接上 */
	a:active {color: #FFFFFF}   /* 被选择的链接 */

	.headerBar {
		width: 80%;
		margin: 0 auto;
		line-height: 60px;
		font-size: 16px;
	}
	.headerBar ul {
		list-style: none;
		margin: 0;
	}
	.headerBar ul li {
		float: left;
		margin: 0 10px;
		height: 60px;
		line-height: 60px;
	}
	.headerLeft {
		float: left;
	}
	.headerRight {
		float: right;
	}
</style>