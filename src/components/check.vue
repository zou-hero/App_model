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
      身份核实
    </div>
    <div class="a">
    </div>
  </header>
  <div class="container">
    <div class="d">
      <div class="d1">
        <img src="/public/功能4.1.png">
      </div>
      <div class="d2">
        <el-button round style="width: 80vw; height: 10vw; font-size: 4vw; color: gray; margin-bottom: 4vw">输入被核实的手机号码</el-button>
        <el-button type="primary" round style="width: 80vw; height: 10vw; font-size: 4vw; color: white; background-color: #4102fb">发送核实请求</el-button>
      </div>
      <div class="d3">
        <p>核实记录 </p>
        <el-icon style="color: black"><ArrowRight /></el-icon>
      </div>
    </div>
    <div class="e">
      <p>核实说明</p>
    </div>
    <div class="f">
      <p>将核实请求发送至对方，对方使用被请求的手机号码注册登录本 APP 进行人脸识别核实身份，结果在核实记录中查看。请求有效时限为24小时</p>
    </div>
    <div class="f" style="height: 10vw; margin-top: 2vw">
      <p>该功能用于在非面对面情况下明确对方真实身份，结果仅供辅助参考，建议结合其他方法综合判断。</p>
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
.d{
  margin-top: 8px;
  width: 100%;
  height: 115vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
}
.d .d1{
  width: 100%;
  height: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.d .d1 img{
  width: 40vw;
  height: 80vw;
}
.d .d2{
  width: 100%;
  height: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.d .d3{
  width: 100%;
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  font-family: 微软雅黑;
}
.e{
  width: 100%;
  height: 10vw;
  display: flex;
  align-items: center;
  font-family: 微软雅黑;
  font-size: 3.5vw;
}
.f{
  width: 100%;
  height: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 微软雅黑;
  color: grey;
}
</style>