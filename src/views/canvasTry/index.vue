<template>
  <div class="signPage" >
    <!-- <div class="left" ref="view">
      <div class="signInfo">
        <van-icon name="warning" />
        <span>请签署</span>
      </div>
      <div class="sign-buttons">
        <van-button class="btn" type="primary" text="快速签署" @click="quickSign" />
        <van-button class="btn" text="重写" @click="clearSign" />
        <van-button class="btn" type="success" text="确定" @click="showDialog"/>
      </div>
    </div>
    <div class="content" id="signContent">
       <signature
        class="sign-canvas"
        ref="SignCanvas"
        :width="canvasWidth"
        :height="canvasHeight"
       ></signature>
    </div> -->
    
    <signature
        v-if="canvasWidth"
        class="sign-canvas"
        ref="SignCanvas"
        :width="canvasWidth"
        :height="canvasHeight"
       ></signature>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from 'vue'
import { Icon, Button } from 'vant'
import Signature from '@/components/signature/signature.vue'

const canvasWidth = ref(0)
const canvasHeight = ref(0)
onMounted(() => {
  const width = document.documentElement.clientWidth
  const height = document.documentElement.clientHeight
  // const width = document.getElementById('signContent').clientWidth
  // const height = document.getElementById('signContent').clientHeight
  canvasWidth.value = width
  canvasHeight.value = height
  // console.log(document.documentElement)
  console.log('canvasWidth', width,'canvasHeight', height)
  // resizeScreen()
})

const view = ref(null)
const resizeScreen = () => {
  // 利用 CSS3 旋转 对根容器逆时针旋转 90 度
  const detectOrient = function () {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    //  根据根节点计算比例
    let rate = htmlWidth / 375
    let width = 44 * rate
    let height = document.documentElement.clientHeight - 30 * rate
    let $wrapper = view.value // 这里是页面最外层元素
    let style = ''
    if (width >= height) {
      // 横屏
      style += 'width:' + width + 'px;' // 注意旋转后的宽高切换
      style += 'height:' + height + 'px;'
      style += '-webkit-transform: rotate(0); transform: rotate(0);'
      style += '-webkit-transform-origin: 0 0;'
      style += 'transform-origin: 0 0;'
    } else {
      // 竖屏
      style += 'width:' + height + 'px;'
      style += 'height:' + width + 'px;'
      style +=
        '-webkit-transform: rotate(90deg); transform: rotate(90deg);'
      // 注意旋转中点的处理
      style +=
        '-webkit-transform-origin: ' +
        width / 2 +
        'px ' +
        width / 2 +
        'px;'
      style += 'transform-origin: ' + width / 2 + 'px ' + width / 2 + 'px;'
    }
    $wrapper.style.cssText = style
  }
  window.onresize = detectOrient
  detectOrient()
}

// 快速签署
const quickSign = () => {

}
// 重写
const clearSign = () => {
  
}
// 确定弹窗
const showDialog = () => {

}

</script>

<style scoped lang="scss">
.signPage {
  position: relative;
  // padding: 15px;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  overflow-x: hidden;
  box-sizing: border-box;
  .content {
    width: calc(100% - 60px);
    overflow-x: hidden;
    background-size: 100% 100%;
    .sign-canvas {
      border-radius: 4px;
    }
  }
  .left {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .signInfo {
      display: flex;
      align-items: center;
    }
    span {
      max-width: 180px;
    }
    .sign-buttons {
      display: flex;
      justify-content: flex-end;
      .btn {
        font-size: 18px;
        border-radius: 4px;
        width: 100px;
        margin-left: 10px;
      }
    }
  }
}
</style>