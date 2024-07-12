<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeTab = ref<string>('dynamic'); // 使用 ref 来存储当前活跃的选项卡标识符

const toggleTab = (tab: string) => {
  activeTab.value = activeTab.value === tab ? '' : tab; // 切换选项卡状态
  if (activeTab.value === 'dynamic') {
    router.push('/dynamic'); // 跳转到动态页面的路由路径
  } else if (activeTab.value === 'science') {
    router.push('/science'); // 跳转到科普页面的路由路径
  }
};
</script>

<template>
  <header>
    <div class="h">
      <div class="h-box" :class="{ active: activeTab === 'dynamic' }" @click="toggleTab('dynamic')">
        <p :class="{ 'font-bold': activeTab === 'dynamic' }">动态</p>
        <div v-if="activeTab === 'dynamic'" class="h-a"></div>
      </div>
      <div class="h-box" :class="{ active: activeTab === 'science' }" @click="toggleTab('science')">
        <p :class="{ 'font-bold': activeTab === 'science' }">科普</p>
        <div v-if="activeTab === 'science'" class="h-a"></div>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<style scoped>
header{
  position: fixed;
  height: 14vw;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #f0f0f0;
  background-color: white;
}
header .h{
  width: 32vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header .h .h-box{
  width: 12vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
}
header .h .h-box p{
  font-size: 4.5vw;
  font-family: "微软雅黑";
  letter-spacing: 2px;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
}
header .h .h-box .h-a{
  width: 8vw;
  height: 1.4vw;
  margin-top: 1vw;
  border-radius: 0.7vw;
  background-color: blue;
}
.font-bold {
  font-weight: bold;
}
</style>