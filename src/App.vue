<template>
  <div class="dark" :class="(mode === 'dark') ? 'dark' : 'light'">
    <Left />
    <HeaderTop :mode="mode" @toggle="toggle" />
    <Main />
    <Right />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderTop from '@/components/HeaderTop.vue';
import Right from './components/right/Right.vue';
import Left from './components/left/Left.vue'
import Main from './components/main/Main.vue';

const mode = ref('dark')

const toggle = () => {
  if (mode.value === 'dark') {
    mode.value = 'light'
  } else {
    mode.value = 'dark'
  }
  console.log(mode.value)
}

</script>

<style lang="scss">

</style>