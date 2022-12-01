<template>
  <Left />
  <HeaderTop />
  <Main />
  <Right />

</template>

<script setup>
import HeaderTop from '@/components/HeaderTop.vue';
import Right from './components/right/Right.vue';
import Left from './components/left/Left.vue'
import Main from './components/main/Main.vue';

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

body {
  background: #393D5E;
}

.flexs {
  display: flex;
  align-items: flex-start;
}
</style>