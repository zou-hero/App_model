<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goIndex = () => {
  router.push({ path: '/index' })
}
</script>

<template>
  <header>
    <div class="a">
      <el-icon @click="goIndex" style="cursor: pointer"><ArrowLeft /></el-icon>
    </div>
    <div class="b">
      我要举报
    </div>
    <div class="a">
    </div>
  </header>
  <div class="container">
    <div class="a">
      <p style="margin-left: 4vw">举报详情</p>
      <p style="color: gray">（选填项）</p>
    </div>
    <ul class="b">
      <li>
        <p>诈骗类型</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请选择</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <p>举报地</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请选择</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <p>举报描述</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请选择</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
    </ul>
    <div class="a">
      <p style="margin-left: 4vw">举报内容</p>
      <p style="color: gray">（请至少填写一项）</p>
    </div>
    <ul class="b" style="height: 77vw">
      <li>
        <p>诈骗电话</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请选择</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <p>诈骗短信</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请选择</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <p>APP应用程序</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请选择</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <p>图片</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请选择</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <p>诈骗网址</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请填写</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <p>诈骗社交账号</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请填写</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <p>诈骗交易账户</p>
        <div class="b1">
          <p style="color: gray; padding-right: 2vw">请填写</p>
          <el-icon style="color: gray; font-size: 4vw"><ArrowRight /></el-icon>
        </div>
      </li>
    </ul>
    <div class="d">
      <p>今日剩余可举报次数2次</p>
      <el-button type="primary" round style="width: 95%; height: 40%; font-size: 3.5vw; background-color: #4102fb">提交举报</el-button>
    </div>
  </div>
</template>

<style scoped>
header{
  position: fixed;
  width: 100%;
  height: 11vw;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2vw;
  box-sizing: border-box;
  border: solid 1px #f0f0f0;
}
header .a{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3vw;
  font-size: 5vw;
}
header .b{
  font-family: "微软雅黑";
  font-size: 4vw;
}
.container{
  width: 100%;
  height: calc(100vh - 11vw - 8px);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 11vw;
  background-color: #f0f0f0;
}
.container .a{
  height: 11vw;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 微软雅黑;
  font-size: 3.5vw;
}
.container .b{
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  height: 33vw;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  border-radius: 3px;
}
.container .b li{
  list-style: none;
  width: 100%;
  height: 11vw;
  display: flex;
  cursor: pointer;
  padding-left: 4vw;
  padding-right: 4vw;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  font-family: 微软雅黑;
  font-size: 3.5vw;
  border-bottom: solid 1px #f0f0f0;
}
.container .b li .b1{
  display: flex;
  align-items: center;
  justify-content: center;
}
.container .d{
  height: 20vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 4vw;
}
.container .d p{
  font-size: 3.2vw;
  color: gray;
  font-family: 微软雅黑;
  margin-bottom: 2vw;
}

</style>