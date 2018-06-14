<template>
	<div class="regForm">
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="手机号码" prop="telphone" required>
				<el-input v-model="ruleForm.telphone"></el-input>
			</el-form-item>

			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="ruleForm.password"></el-input>
			</el-form-item>

			<el-form-item label="确认密码" prop="repassword">
				<el-input type="password" v-model="ruleForm.repassword"></el-input>
			</el-form-item>

			<el-form-item label="姓名" prop="username">
				<el-input v-model="ruleForm.username"></el-input>
			</el-form-item>

			<el-form-item label="所属单位" prop="department">
				<el-select v-model="ruleForm.department" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</el-form-item>

			<el-form-item>
				<el-button @click="submitForm('ruleForm')" type="primary">注册</el-button>
			</el-form-item>
		</el-form>
	</div>

</template>

<script>
export default {
	data() {
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码MM'));
			} else {
				if (this.ruleForm.repassword !== '') {
					this.$refs.ruleForm.validateField('repassword');
				}
				callback();
			}
		}
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码MM'));
			} else if (value !== this.ruleForm.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		}
		var checkTel = (rule, value, callback) => {
			var pattern = /^[1]\d{10}$/;
			if(!pattern.test(value)) {
				callback(new Error('手机号输入不正确'));
			} else {
				callback();
			}
		}
		return {
			ruleForm: {
				telphone: '',
				password: '',
				repassword: '',
				username: '',
				department: ''
			},
			rules: {
				telphone: [
				{ validator: checkTel, trigger: 'blur'}
				],
				password: [
				{ required: true, message: '请输入密码', trigger: 'blur', },
				{ min: 6, max: 12, message: '长度为6-12个字符', trigger: 'blur' },
				{ validator: validatePass}
				],
				repassword: [
				{ required: true, message: '请再次输入密码', trigger: 'blur' },
				{ validator: validatePass2}
				],
				username: [
				{ required: true, message: '请输入姓名', trigger: 'blur' }
				],
				department: [
				{ required: true, message: '请选择单位', trigger: 'change' }
				]
			},
			options: []
		}
	},
	created() {
		this.$axios.get('/api/department')
			.then((response) => {
				this.options = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$axios.post('/api/users/regsave', {						
						telphone: this.ruleForm.telphone,
						password: this.ruleForm.password,
						username: this.ruleForm.username,
						department: this.ruleForm.department
					})
					.then((response) => {
						this.$message(response.data.msg);
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
	.regForm {
		width: 60%;
		margin: 0 auto;
	}
</style>