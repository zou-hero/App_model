<script setup lang="ts">

</script>

<template>
  <div class="circle">
  </div>
  <div class="box">
    <div class="user">
      <div class="u-left">
        <img src="/public/my1.png">
      </div>
      <div class="u-right">
        <p style="margin-top: 4vw; margin-bottom: 2vw; font-size: 5vw">您好，157******90</p>
        <p style="margin-top: 0; font-size: 3vw; cursor: pointer">点击查看个人信息></p>
      </div>
    </div>
    <div class="record">
      <div class="r-left">
        <p style="margin-bottom: 1vw; font-size: 5vw">0</p>
        <p style="margin-top: 0; font-size: 3vw">举报记录</p>
      </div>
      <div class="r-mid">
        <div class="s">
        </div>
      </div>
      <div class="r-right">
        <p style="margin-bottom: 1vw; font-size: 5vw">0</p>
        <p style="margin-top: 0; font-size: 3vw">报案记录</p>
      </div>
    </div>
    <ul class="list">
      <li>
        <div class="a">
          <img src="/public/my2.png">
        </div>
        <div class="b">
          <p>反馈与帮助</p>
        </div>
        <div class="c">
          <el-icon style="color: gray"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <div class="a">
          <img src="/public/my3.png">
        </div>
        <div class="b">
          <p>关于我们</p>
        </div>
        <div class="c">
          <el-icon style="color: gray"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <div class="a">
          <img src="/public/my4.png">
        </div>
        <div class="b">
          <p>用户手册</p>
        </div>
        <div class="c">
          <el-icon style="color: gray"><ArrowRight /></el-icon>
        </div>
      </li>
      <li>
        <div class="a">
          <img src="/public/my5.png">
        </div>
        <div class="b">
          <p>设置</p>
        </div>
        <div class="c">
          <el-icon style="color: gray"><ArrowRight /></el-icon>
        </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.box{
  width: 100%;
  height: calc(100vh - 16vw - 8px);
  margin-bottom: 16vw;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.circle{
  position: fixed;
  top: -230vw;
  //top: calc(-230vw + 8px);
  left: -100vw;
  width: 300vw;
  height: 300vw;
  background-color: #4102fb;
  border-radius: 150vw;
  z-index: 1;
}
.user{
  position: relative;
  width: 100%;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vw;
  z-index: 2;
}
.user .u-left{
  width: 20%;
  height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user .u-left img{
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
}
.user .u-right{
  width: 80%;
  height: 20vw;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "微软雅黑";
  margin-left: 2vw;
}
.record{
  position: relative;
  width: 100%;
  height: 25vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  color: white;
  font-family: "微软雅黑";
}
.record .r-left{
  width: 48%;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.record .r-mid{
  width: 4%;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.record .r-mid .s{
  width: 1px;
  height: 7vw;
  background-color: white;
}
.record .r-right{
  width: 48%;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.list{
  list-style: none;
  position: relative;
  width: 90%;
  height: 45vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 3vw;
  padding-right: 3vw;
  box-sizing: border-box;
  background-color: white;
  z-index: 2;
  border-radius: 8px;
}
.list li{
  list-style: none;
  display: flex;
  width: 100%;
  height: 25%;
  justify-content: space-between;
  align-items: center;
  font-family: "微软雅黑";
  border-bottom: solid 1px #f0f0f0;
  cursor:pointer;
}
.list li .a{
 height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list li .a img{
  width: 5vw;
  height: 5vw;
}
.list li .b{
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
  margin-left: 2vw;
}
.list li .c{
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>