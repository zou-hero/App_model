<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const handleFunctionClick = (path: string) => {
  router.push(path)
}

const goAnnouncement = () => {
  router.push('/announcement')
}

</script>

<template>
<header class="header">
  <div class="location">
    <el-icon><Location /></el-icon>
    <p>呈贡区</p>
  </div>
  <div class="logo">
    <img src="/public/反诈logo.png" alt="logo">
    <p>国家反诈中心</p>
  </div>
  <div class="chat-icon">
    <p>xxx</p>
    <el-icon @click="goAnnouncement"><ChatDotSquare /></el-icon>
  </div>
</header>
  <div class="container">
  <div class="carousel">
    <div class="block text-center">
      <el-carousel height="50vw">
        <!-- 第一张图片 -->
        <el-carousel-item>
          <img src="/public/波轮图1.png" class="carousel-image">
        </el-carousel-item>

        <!-- 第二张图片 -->
        <el-carousel-item>
          <img src="/public/波轮图2.png" class="carousel-image">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
  <div class="functions">
    <ul>
      <li @click="handleFunctionClick('/report')">
        <img src="/public/功能1.png" class="f-image">
        <p>我要举报</p>
      </li>
      <li @click="handleFunctionClick('/case')">
        <img src="/public/功能2.png" class="f-image">
        <p>报案助手</p>
      </li>
      <li @click="handleFunctionClick('/warning')">
        <img src="/public/功能3.png" class="f-image">
        <p>来电预警</p>
      </li>
      <li @click="handleFunctionClick('/check')">
        <img src="/public/功能4.png" class="f-image">
        <p>身份核实</p>
      </li>
    </ul>
    <div class="a">
    </div>
  </div>
    <div class="b">
      <h3>风险自查</h3>
    </div>
    <div class="app_test">
      <div class="text1">
        <p>APP自检</p>
      </div>
      <div class="text2">
        <p>手机自测可疑APP</p>
      </div>
    </div>
    <div class="b">
      <h3>最新动态</h3>
    </div>
      <ul class="news">
        <li>
          <div class="left">
            <p style="margin-top: 0; margin-bottom: 0">法制在线 | 留学生遇连环诈骗 竟被骗子要求当“反...</p>
            <p style="color: gray; font-size: 3vw;">国家反诈中心 2024-07-04</p>
          </div>
          <div class="right">
            <img src="/public/news1.png">
          </div>
        </li>
        <li>
          <div class="left">
            <p style="margin-top: 0; margin-bottom: 0">起底电诈 | 诈骗分子分饰多角？当心！“工作群”...</p>
            <p style="color: gray; font-size: 3vw;">国家反诈中心 2024-07-04</p>
          </div>
          <div class="right">
            <img src="/public/news2.png">
          </div>
        </li>
        <li>
          <div class="left">
            <p style="margin-top: 0; margin-bottom: 0">起底电诈 | 转给父母！ 500元投资“国家项目”获利...</p>
            <p style="color: gray; font-size: 3vw;">国家反诈中心 2024-07-04</p>
          </div>
          <div class="right">
            <img src="/public/news2.png">
          </div>
        </li>
      </ul>
    <div class="bot">
      <el-button round style="height: 8vw; color: black">更多内容</el-button>
    </div>
    </div>
</template>

<style scoped>
.container{
  margin-top: 14vw;
  background-color: #f0f0f0;
  margin-bottom: 16vw;
}
.header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 14vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  z-index: 100;
}
.location{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "微软雅黑";
  font-size: 5vw;
  margin-left: 2vw;
}
.location p{
  font-size: 3.5vw;
  margin-left: 0.5vw;
}
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "微软雅黑";
  font-size: 5vw;
  font-weight: bolder;
}
.logo img{
  width: 8vw;
  height: 8vw;
}
.chat-icon{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.chat-icon p{
  color: #f0f0f0;
}
.chat-icon .el-icon{
  font-size: 7vw;
  margin-right: 2vw;
}
.carousel{
  width: 100%;
  height: 50vw;
  border-radius: 8px;
}
.carousel-image{
  height:50vw;
  width: 100%;
  border-radius: 8px;
}
.functions{
  height: 30vw;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5vw;
  border-radius: 8px;
}
.functions ul{
  list-style: none;
  height: 25vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 0;
  background-color: #fff;
}
.functions ul li{
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.functions ul li .f-image{
  height: 10vw;
  width: 10vw;
  cursor: pointer;
}
.functions ul li p{
  margin-top: 2vw;
  font-size: 4vw;
  font-family: "微软雅黑";
  margin-bottom: 0;
}
.a{
  width: 35px;
  height: 6px;
  background-color: blue;
  border-radius: 3px;
  margin-bottom: 2vw;
}
.b h3{
  margin-top: 3vw;
  margin-bottom: 2vw;
  font-family: "微软雅黑";
  font-size: 5vw;
  font-weight: 500;
}
.app_test{
  width: 100%;
  height: 20vw;
  display: flex;
  flex-direction: column;
  padding: 3vw;
  box-sizing: border-box;
  font-family: "微软雅黑";
  background-color: #fff;
  border-radius: 8px;
}
.text1 p{
  margin-top: 2vw;
  margin-bottom: 0;
  font-size: 4vw;
}
.text2 p{
  margin-top: 0;
  color: gray;
  font-size: 3vw;
}
.news{
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  width: 100%;
  margin-top: 0;
  margin-bottom: 2vw;
  border-radius: 8px;
  background-color: white;
}
.news li{
  list-style: none;
  width: 100%;
  height: 25vw;
  display: flex;
  justify-content: space-between;
  margin-left: 0;
  padding: 3vw;
  box-sizing: border-box;
  border-bottom: solid 1px #f0f0f0;
  cursor: pointer;
}
.news li .left{
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  font-size: 4.5vw;
  font-weight: 500;
  font-family: "微软雅黑";
}
.news li .right{
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.news li .right img{
  height: 18vw;
  width: 32vw;
}
.bot{
  height: 13vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>