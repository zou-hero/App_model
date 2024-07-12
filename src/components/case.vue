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
      报案助手
    </div>
    <div class="a">
    </div>
  </header>
  <div class="container">
    <div class="a">
      <div class="a1">
        <el-icon style="font-size: 6vw; margin-bottom: 0.5vw"><Memo /></el-icon>
        <p style="font-size: 3.5vw; margin-top: 1vw; font-family: 微软雅黑;">报案记录</p>
      </div>
    </div>
    <div class="b">
      <img src="/public/功能2.1.png">
      <p>报案请至派出所在民警帮助下完成</p>
    </div>
    <el-button type="primary" round style="width: 95%; height: 10vw; font-size: 4vw; background-color: #4102fb; margin-top: 25vw">
      <el-icon style="margin-right: 1vw;font-size: 5vw"><FullScreen /></el-icon>扫描报案</el-button>
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
  width: 100%;
  height: 20vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container .a .a1{
  width: 20%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 80%;
  cursor: pointer;
}
.container .b{
  height: 70vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10vw;
}
.container .b img{
  height: 70vw;
  width: 70vw;
  border-radius: 30%;
}
.container .b p{
  font-size: 3.5vw;
  color: gray;
  font-family: "微软雅黑";
  margin-top:6vw;
}

</style>