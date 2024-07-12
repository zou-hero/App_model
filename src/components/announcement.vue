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
    公告
  </div>
  <div class="a">
  </div>
</header>
  <div class="container">
    <div class="c">
      <p>2023-04-08 00:00:00</p>
    </div>
    <div class="d">
      <div class="d1">
        <p>系统安全升级通知</p>
      </div>
      <div class="d2">
        <p>查看详情</p>
        <el-icon style="margin-right: 2vw; color: gray"><ArrowRight /></el-icon>
      </div>
    </div>
    <div class="c">
      <p>2021-08-012 15:30:00</p>
    </div>
    <div class="d">
      <div class="d1">
        <p>系统服务升级维护通知</p>
      </div>
      <div class="d2">
        <p>查看详情</p>
        <el-icon style="margin-right: 2vw; color: gray"><ArrowRight /></el-icon>
      </div>
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
  flex-direction: column;
  margin-top: 11vw;
  background-color: #f0f0f0;
}
.container .c{
  height: 12vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
}
.container .c p{
  margin-bottom: 0;
  font-size: 3.5vw;
}
.container .d{
  height: 26vw;
  width: 100%;
  background-color: white;
}

.container .d .d1{
  height: 13vw;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #f0f0f0;
}
.container .d .d1 p{
  font-family: "微软雅黑";
  margin-left: 2vw;
  font-size: 4vw;
}
.container .d .d2{
  height: 13vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container .d .d2 p{
  font-family: "微软雅黑";
  margin-left: 2vw;
  font-size: 4vw;
}
</style>