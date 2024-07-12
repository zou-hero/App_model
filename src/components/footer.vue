<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const currentTab = ref('home')
const router = useRouter()

const navigateTo = (tab: string) => {
  currentTab.value = tab
  switch (tab) {
    case 'home':
      router.push('/index') // 设置首页的路由路径
      break
    case 'exposure':
      router.push('/exposing') // 设置骗局曝光页面的路由路径
      break
    case 'profile':
      router.push('/my') // 设置我的页面的路由路径
      break
    default:
      break
  }
}
</script>

<template>
    <router-view/>
  <div class="footer-container">
    <div class="icon_box" :class="{ active: currentTab === 'home' }" @click="navigateTo('home')">
      <el-icon :class="{ 'blue-icon': currentTab === 'home' }"><House /></el-icon>
      <p :style="{ color: currentTab === 'home' ? 'blue' : 'gray' }">首页</p>
    </div>
    <div class="icon_box" :class="{ active: currentTab === 'exposure' }" @click="navigateTo('exposure')">
      <el-icon :class="{ 'blue-icon': currentTab === 'exposure' }"><Tickets /></el-icon>
      <p :style="{ color: currentTab === 'exposure' ? 'blue' : 'gray' }">骗局曝光</p>
    </div>
    <div class="icon_box" :class="{ active: currentTab === 'profile' }" @click="navigateTo('profile')">
      <el-icon :class="{ 'blue-icon': currentTab === 'profile' }"><User /></el-icon>
      <p :style="{ color: currentTab === 'profile' ? 'blue' : 'gray' }">我的</p>
    </div>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
.footer-container{
  position: fixed;
  width: 100%;
  height: 16vw;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid 1px #f0f0f0;
  background-color: white;
}
.footer-container .el-icon{
  font-size: 5vw;
}
p{
  margin-top: 1vw;
  margin-bottom: 1vw;
  font-size: 3.5vw;
  font-family: "微软雅黑";
  color: gray;
}
.icon_box{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor:pointer;
}
.blue-icon {
  color: blue; /* 设置蓝色图标的颜色 */
}
.active p {
  color: blue; /* 当图标为活动状态时，设置文字为蓝色 */
}
</style>