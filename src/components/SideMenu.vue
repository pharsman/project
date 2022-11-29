<template>
    <section class="side-menu">
        <div class="header">
            <h2>Explore</h2>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
@font-face {
    font-family: Lato;
    src: url('@/assets/fonts/lato');
}
.side-menu{
    width: 244px;
    height: 100vh;
    background-color: #2c2f487c;
    .header {
        width: 100%;
        padding: 12px 16px;
        h2{
            font-family: 'Lato', sans-serif;
            font-size: 17px;
            color: #ffffff;
        }
    }
}
</style>