<template>
    <div id="app">
        <el-container>
            <el-header>
                <HeaderBar></HeaderBar>
            </el-header>
    		

        	
        	<el-main>
        		<router-view></router-view>
        	</el-main>

        	<el-footer>
                <FooterBar></FooterBar>   
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
export default {
    name: 'App',
    components: {
        HeaderBar,
        FooterBar
    }
}
</script>

<style>
    body {
        margin: 0;
        font: 14px/1.5 "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
    }
    .el-header {
        background: #409EFF;
        padding: 0;
        line-height: 60px;
    }
</style>