<template>
    <div class="cont">
        <span class="follow">Folow me</span>
        <ul>
            <li v-for="soc in social" :key="soc.name">
                <div class="flex">
                    <span class="img">
                        <img :src="soc.url">
                    </span>
                    <span class="tag">
                        {{ soc.tag }}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const social = ref([
    {
        name: 'instagram',
        tag: '@aleksondesign',
        url: 'src/assets/img/instagram.png'
    },
    {
        name: 'twitter',
        tag: '@alsonvady',
        url: 'src/assets/img/twitter.png'
    }
]) 
</script>

<style scoped lang="scss">
@font-face {
    font-family: Lato;
    src: url('@/assets/fonts/lato');
}

.cont {
    position: absolute;
    top: calc(100vh - 288px);
    width: 100%;
    height: 288px;
    padding: 4px 18px;

    .follow {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.55);
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
            width: 212px;
            height: 60px;
            background: rgba(255, 255, 255, 0.082);
            background-blend-mode: overlay;
            border-radius: 5px;
            margin-top: 20px;

            .flex {
                display: flex;

                .tag {
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 50%;
                    text-decoration-line: underline;
                    color: #FFFFFF;
                    flex: none;
                    margin-top: 30px;
                }

                img {
                    margin: 18px;
                }
            }


        }
    }
}
</style>