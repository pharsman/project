<template>
  <div class="flex">
    <SideMenu />
    <RouterView />
  </div>


    <HeaderTop />
    <HeaderRight />
</template>

<script setup>
import SideMenu from '@/components/SideMenu.vue';
import HeaderTop from '@/components/HeaderTop.vue';
import HeaderRight from '@/components/HeaderRight.vue'

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
.flex{
  display: flex;
  align-items: flex-start;
}
</style>