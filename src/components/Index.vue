<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item>
        <div class="imgDiv first"></div>  
        <div class="fontDiv"><h3>101房间</h3></div>
    </el-carousel-item>

    <el-carousel-item>
        <div class="imgDiv second"></div>  
        <div class="fontDiv"><h3>202房间</h3></div>
    </el-carousel-item>

    <el-carousel-item>
        <div class="imgDiv three"></div>  
        <div class="fontDiv"><h3>303房间</h3></div>
    </el-carousel-item>

    <el-carousel-item>
        <div class="imgDiv fourth"></div>  
        <div class="fontDiv"><h3>404房间</h3></div>
    </el-carousel-item>

    <el-carousel-item>
        <div class="imgDiv five"></div>  
        <div class="fontDiv"><h3>505房间</h3></div>
    </el-carousel-item>

    <el-carousel-item>
        <div class="imgDiv six"></div>  
        <div class="fontDiv"><h3>606房间</h3></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

</script>

<style>
.el-carousel {
    margin-top: 40px;
}
.el-carousel__item {
    background-color: #ddd;
    text-align: center; 
}
.imgDiv {
    width: 90%;
    height: 80%;
    border: 5px solid #999;
    margin: 10px auto 0;
    /*background-size: 100%;*/
}
.fontDiv {
    width: 90%;
    height: 50px;
    text-align: center;
    margin: 0 auto;
}
.first { background: url(../../static/imgs/01.jpg) no-repeat center center ; background-size: cover; }
.second { background: url(../../static/imgs/02.jpg) no-repeat center center; background-size: cover;}
.three { background: url(../../static/imgs/03.jpg) no-repeat center center; background-size: cover; }
.fourth { background: url(../../static/imgs/04.jpg) no-repeat center center; background-size: cover;}
.five { background: url(../../static/imgs/05.jpg) no-repeat center center; background-size: cover;}
.six { background: url(../../static/imgs/06.jpg) no-repeat center center; background-size: cover;}


</style>