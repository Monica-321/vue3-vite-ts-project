<script setup>
import emptyIcon from './images/empty.png'
const props = defineProps({
  icon: {
    type: String,
    default: emptyIcon
  },
  text: {
    type: String,
    default: '哎呀，这里什么都没有'
  }
})
</script>

<template>
  <div class="empty-wrapper">
    <img class="empty-img" :src="icon" alt="">
    <div class="empty-text">{{ text }}</div>
  </div>
</template>

<style lang="scss" scoped>
.empty-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  .empty-img {
    height: 150px;
  }
  .empty-text {
    font-size: 15px;
    color: #AAAAAA;
    line-height: 21px;
    margin-top: 5px;
  }
}
</style>