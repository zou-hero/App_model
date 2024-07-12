<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()

const goIndex = () => {
  router.push({ path: '/index' })
}

const value2 = ref(true)

</script>

<template>
  <header>
    <div class="a">
      <el-icon @click="goIndex" style="cursor: pointer"><ArrowLeft /></el-icon>
    </div>
    <div class="b">
      来电预警
    </div>
    <div class="a">
      <el-icon style="color: white; margin-right: 4vw"><Setting /></el-icon>
    </div>
  </header>
  <div class="container">
  <div class="d">
    <img src="/public/功能3.1.png">
    <p style="margin-top: 4vw; margin-bottom: 1vw; font-size: 6vw">来电预警守护中</p>
    <p style="margin-top: 0">准确识别电信诈骗</p>
  </div>
    <div class="e">
      <div class="e1">
        <img src="/public/功能3.2.png">
      </div>
      <div class="e2">
        <p style="margin-bottom: 0.5vw; margin-top: 2vw; font-size: 4.5vw">来电预警</p>
        <p style="margin-top: 0.5vw; font-size: 3vw; color: gray">准确识别并预警诈骗来电</p>
      </div>
      <div class="e3">
        <el-switch
            v-model="value2"
            class="ml-2"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: gray"
        />
      </div>
    </div>
    <div class="e" style="margin-top: 3vw">
      <div class="e1">
        <img src="/public/功能3.3.png">
      </div>
      <div class="e2">
        <p style="margin-bottom: 0.5vw; margin-top: 2vw; font-size: 4.5vw">短信预警</p>
        <p style="margin-top: 0.5vw; font-size: 3vw; color: gray">准确识别并预警诈骗短信</p>
      </div>
      <div class="e3">
        <el-switch
            v-model="value2"
            class="ml-2"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: gray"
        />
      </div>
    </div>
    <p style="margin-top: 55vw; color: #4102fb; font-size: 4vw; font-family: 微软雅黑">错误上报</p>
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
  background-color: #4102fb;
}
header .a{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3vw;
  font-size: 5vw;
  color: white;
}
header .b{
  font-family: "微软雅黑";
  font-size: 4vw;
  color: white;
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
.d{
  position: fixed;
  width: 100%;
  height: 60vw;
  left: 0;
  top: 11vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2vw;
  box-sizing: border-box;
  background-color: #4102fb;
}
.d img{
  width: 30vw;
  height: 25vw;
  border-radius: 40%;
}
.d p{
  color: white;
  font-family: 微软雅黑;
  font-size: 3vw;
}
.e{
  position: relative;
  width: 95%;
  height: 16vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  margin-top: 55vw;
}
.e .e1{
  width: 20%;
  height: 16vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.e .e1 img{
  width: 8vw;
  height: 8vw;
}
.e .e2{
  width: 60%;
  height: 16vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 微软雅黑;
}
.e .e3{
  width: 20%;
  height: 16vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>