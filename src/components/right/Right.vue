<template>
    <div class="right">
        <HeaderRight />
        <RightSide />
        <Members />
        <RightFooter />
    </div>
</template>

<script setup>
import HeaderRight from './comps/HeaderRight.vue';
import RightSide from './comps/RightSide.vue';
import Members from './comps/Members.vue';
import RightFooter from './comps/RightFooter.vue';
</script>

<style scoped lang="scss">
.right {
    position: absolute;
    width: 244px;
    height: 100vh;
    left: calc(100% - 244px);
    top: 0px;
    box-shadow: inset 1px 0px 0px rgba(255, 255, 255, 0.1);
    background: #2c2f48;
}
</style>