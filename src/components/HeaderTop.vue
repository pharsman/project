<template>
    <div class="header">
        <input type="search" name="search" id="search" autocomplete="off">
    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
@font-face {
    font-family: Lato;
    src: url('@/assets/fonts/lato');
}



.header {
    position: absolute;
    width: calc(100% - 546px);
    height: 44px;
    left: 320px;
    top: 0;
    background: #2C2F48;

    i {
        img {
            margin: 0 auto;
        }
    }
    #search {
        width: 442px;
        margin-left: calc(50% - 221PX);
        margin-top: 10px;
        height: 24px;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        outline: none;
        font-family: 'Lato';
        font-style: normal;
        font-size: 13px;
        text-align: center;
        background: url('@/assets/icons/search.svg') no-repeat 8px scroll, linear-gradient(180deg, rgba(46, 51, 90, 0.3) 0%, rgba(28, 27, 51, 0.3) 100%);
    }
}
</style>