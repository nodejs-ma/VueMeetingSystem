<template>
	<el-form :rules="rules" ref="form" :model="form" label-width="80px">
		<el-form-item label="会议名称" prop="meetTheme">
			<el-input v-model="form.meetTheme"></el-input>
		</el-form-item>
		
		<el-form-item label="房间日期" required>
			<el-col :span="6">
				<el-form-item prop="meetRoom">
					<el-select placeholder="请选择会议室" v-model="form.meetRoom" style="width: 100%;">
						<el-option label="101" value="101">
							<span class="roomleft">101</span>
							<span class="roomright">容纳36人</span>
						</el-option>
						<el-option label="102" value="102">
							<span class="roomleft">102</span>
							<span class="roomright">容纳36人</span>
						</el-option>
						<el-option label="报告厅" value="报告厅">
							<span class="roomleft">报告厅</span>
							<span class="roomright">容纳848人</span>
						</el-option>
						<el-option label="202" value="202">
							<span class="roomleft">202</span>
							<span class="roomright">容纳54人</span>
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>

			<el-col class="line" :span="1">-</el-col>

			<el-col :span="6">
				<el-form-item prop="meetDate">
					<el-date-picker :picker-options="pickopt" type="date" placeholder="选择日期" v-model="form.meetDate" style="width: 100%;"></el-date-picker>
				</el-form-item>
			</el-col>

			<el-col class="line" :span="1">-</el-col>

			<el-col :span="10">
				<el-form-item prop="meetTime">
					<el-cascader placeholder="选择时间" expand-trigger="hover" :options="options" v-model="form.meetTime" style="width: 100%;"></el-cascader>
				</el-form-item>
			</el-col>
		</el-form-item>

		<el-form-item label="特殊说明">
			<el-checkbox-group v-model="form.meetCheckbox">
				<el-checkbox label="PPT"></el-checkbox>
				<el-checkbox label="视频播放"></el-checkbox>
				<el-checkbox label="电视电话会"></el-checkbox>
				<el-checkbox label="对下视频会"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>

		<el-form-item label="其它要求">
			<el-input type="textarea" v-model="form.meetArea" :rows="3"></el-input>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="onSubmit('form')">开始订会</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	data() {
		return {
			form: {
				meetTheme: '',
				meetRoom: '',
				meetDate: '',
				meetTime: [],
				meetCheckbox: [],
				meetArea: ''
			},
			pickopt: {
				disabledDate(time) {
					return time.getTime() < Date.now() - 3600 * 1000 * 24;
				},
				shortcuts: [{
					text: '今天',
					onClick(picker) {
						picker.$emit('pick', new Date());
					}
				}, {
					text: '明天',
					onClick(picker) {
						const date = new Date();
						date.setTime(date.getTime() + 3600 * 1000 * 24);
						picker.$emit('pick', date);
					}
				}, {
					text: '后台',
					onClick(picker) {
						const date = new Date();
						date.setTime(date.getTime() + 3600 * 1000 * 24 * 2);
						picker.$emit('pick', date);
					}
				}]
			},
			options: [
				{
					value: '上午',
					label: '上午',
					children: [
						{ value:'08:30', label:'08:30' },
						{ value:'09:00', label:'09:00' },
						{ value:'10:00', label:'10:00' },
						{ value:'11:00', label:'11:00' },
					]
				},
				{
					value: '下午',
					label: '下午',
					children: [
						{ value:'02:00', label:'02:00' },
						{ value:'02:30', label:'02:30' },
						{ value:'03:00', label:'03:00' },
						{ value:'05:00', label:'05:00' },
					]
				},
				{
					value: '晚上',
					label: '晚上',
					children: [
						{ value:'06:30', label:'06:30' },
						{ value:'07:00', label:'07:00' },
						{ value:'08:00', label:'08:00' },
						{ value:'08:30', label:'08:30' },
					]
				},
				{
					value: '全天',
					label: '全天',
					children: [
						{ value:'不含晚上', label:'不含晚上' },
						{ value:'含晚上', label:'含晚上' }
					]
				}
			],
			rules: {
				meetTheme: [
					{ required: true, message: '请输入会议名称', trigger: 'blur' }
				],
				meetRoom: [
					{ required: true, message: '请选择会议室', trigger: 'change' }
				],
				meetDate: [
					{ required: true, message: '请选择会议日期', trigger: 'change' }
				],
				meetTime: [
					{ required: true, message: '请选择会议时间', trigger: 'change' }
				]
			}
		}
	},
	methods: {
		onSubmit(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					this.$axios.get('http://jsonplaceholder.typicode.com/users')
						.then((response) => {
							console.log(response);
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
	.line {
		text-align: center;
	}
	.roomleft {
		float: left;
		font-size: 13px;
	}
	.roomright {
		float: right;
		color: #ccc;
		font-size: 13px;
		font-style: italic;
	}
</style>