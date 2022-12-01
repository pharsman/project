<template>
    <div></div>
    <div class="circles">
        <div class="circle red"></div>
        <div class="circle yellow"></div>
        <div class="circle green"></div>
    </div>
    <div class="logo">
        <img src="@/assets/img/logo.png" alt="logo">
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
div {
    width: 76px;
    height: 100vh;
    background: 0;
    background: 0;
    backdrop-filter: blur(10px);
    position: relative;
    border: none
}

.circles {
    width: 76px;
    height: 29px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    .circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;

        &.red {
            background-color: #ED695E;
            ;
        }

        &.yellow {
            background-color: #F4BF4F;
        }

        &.green {
            background-color: #61C554;
        }
    }
}

.logo {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 32px;
    left: 16px;
    box-shadow: none
}
</style>
