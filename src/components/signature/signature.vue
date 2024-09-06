<template>
  <div class="sign-wrapper"
       :style="{'background-image': `url(${signBg})`}">
  <!-- signature -->
   <canvas></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import signBg from './images/signBg.png'
const props = defineProps({
  signBg: {
    type: String,
    default: signBg
  },
  width: {
    type: Number
  },
  height: {
    type: Number
  }
})

let ctx = null // 画布上下文
onMounted(() => {
  // 获取canvas 实例
  const canvas = document.querySelector('canvas')
  // 设置宽高
  canvas.width = props.width
  canvas.height = props.height
  // 创建上下文
  ctx = canvas.getContext('2d')
  // 定义线条的宽度，即画笔的粗细    
  ctx.lineWidth = 3;    
  // 定义画笔的颜色
  ctx.strokeStyle = "#000";
  // 监听绘制各个事件
})

</script>

<style lang="scss" scoped>
.sign-wrapper {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-color: #fff;
}
</style>