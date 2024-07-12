<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

// 响应式数据，用于存储当前选中的工具项索引
const selectedToolIndex = ref(0); // 默认没有选中任何工具项
const router = useRouter()

const tools = [
  '推荐',
  '各地动态',
  '反诈知识',
  '时事热点',
];
// 点击工具项时触发的方法，接收工具项的索引
const selectTool = (index: number) => {
  selectedToolIndex.value = index;
  switch (index) {
    case 0:
      router.push('/dynamicRecommend');
      break;
    case 1:
      router.push('/dynamicRecommend');
      break;
    case 2:
      router.push('/dynamicRecommend');
      break;
    case 3:
      router.push('/dynamicRecommend');
      break;
      // 添加其他工具项的跳转逻辑
  }
};
</script>

<template>
  <div class="tools-box">
    <div class="tools">
      <!-- 使用v-for循环渲染工具项 -->
      <div
          v-for="(tool, index) in tools"
          :key="index"
          class="tool"
          :style="{ color: selectedToolIndex === index ? 'blue' : '#444444',
          backgroundColor: selectedToolIndex === index ? '#f0f0f0' : 'white'}"
          @click="selectTool(index)"
      >
        {{ tool }}
      </div>
    </div>
  </div>
  <router-view/>
</template>

<style scoped>
.tools-box {
  position: fixed;
  left: 0;
  top: 0;
  margin-top: 14vw;
  height: 12vw;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  background-color: white;
  border-bottom: solid 1px #f0f0f0;
}
.tools {
  height: 12vw;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 2vw;
}
.tool {
  flex: 0 0 auto;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 4vw;
  text-align: center;
  font-size: 3.5vw;
  color: #444444;
  border-radius: 4px;
  font-family: "微软雅黑";
  cursor: pointer;
}
</style>