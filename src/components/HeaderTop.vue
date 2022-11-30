<template>
    <div class="search">
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



.search {
    position: absolute;
    width: calc(100% - 488px);
    height: 44px;
    left: 244px;
    top: 0;
    background: #2C2F48;
    i {
        img {
            margin: 0 auto;
        }
    }

    #search {
        width: 442px;
        height: 24px;
        color: #ffffff;
        margin-left: calc(50% - 221px);
        margin-top: 10px;
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