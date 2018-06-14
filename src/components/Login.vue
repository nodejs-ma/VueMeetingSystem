<template>
	<div class="logform">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="手机号码" prop="telphone">
				<el-input v-model="ruleForm.telphone"></el-input>
			</el-form-item>

			<el-form-item label="密码" prop="password">
				<el-input v-model="ruleForm.password" type="password"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button @click="submitForm('ruleForm')" type="primary">登录</el-button>
			</el-form-item>
		</el-form>
	</div>

</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
				telphone: '',
				password: ''
			},
			rules: {
				telphone: [
					{ required: false, message: '请输入手机号码', trigger: 'blur' },
					{ min: 11, max: 11, message: '长度为11个字符', trigger: 'blur' }
				],
				password: [
					{ required: false, message: '请输入密码', trigger: 'blur' },
					{ min: 6, max: 12, message: '长度为6-12个字符', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$axios.post('/api/users/logcheck', {
						telphone: this.ruleForm.telphone,
						password: this.ruleForm.password
					})
					.then((response) => {
						this.$message(response.data.msg);
						if(response.data.code == 0) {
							this.$store.commit('changeLogin');
						}
					})
					.catch((error) => {
						console.log(error);
					});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		}
	}
}
</script>

<style scoped>
	.logform {
		width: 60%;
		margin: 0 auto;
	}
</style>