<template>
	<div class="card">
		<div class="cardItem" v-for="i in 10">
			<h1>我是标题</h1>
			<p>你好 你在干什么</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			meets: [],
		}
	},
	created() {
		// this.$axios.get().then().catch();
	}
}
</script>

<style scoped>
	.card {
		width: 80%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
		margin: 0 auto;
	}
	.cardItem {
		border: 1px solid red;
		box-shadow: 
	}
</style>