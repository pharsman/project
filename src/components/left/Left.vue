<template>
    <div class="flex">
        <SideBar />
        <SideMenu />
    </div>
    <Music />
    <LeftFooter />
</template>

<script setup>
import LeftFooter from './comps/LeftFooter.vue';
import SideBar from './comps/SideBar.vue';
import SideMenu from './comps/SideMenu.vue';
import Music from './comps/Music.vue'
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    align-items: flex-start;
}
</style>