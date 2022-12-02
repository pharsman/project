<template>
    <section>
        <div class="new">
            <span class="mem">New Members</span>
            <span class="see">See all</span>
        </div>
        <div class="friends">
            <ul>
                <li v-for="friend in friends" :key="friend.id" :id="friend.id">
                    <div class="flex">
                        <span class="img">
                            <img :src="friend.url ">
                        </span>
                        <span class="name">{{ friend.fullName }}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const friends = ref([
    {
        'id': 1,
        'firstName': 'Asse',
        'lastName': 'Couture',
        'fullName': 'Asse Couture',
        'url': 'src/assets/img/user-profile-1.png'
    },
    {
        'id': 2,
        'firstName': 'Miriam',
        'lastName': 'Soleil',
        'fullName': 'Miriam Soleil',
        'url': 'src/assets/img/user-profile-2.png'
    },
    {
        'id': 3,
        'firstName': 'Marie',
        'lastName': 'Laval',
        'fullName': 'Marie Laval',
        'url': 'src/assets/img/user-profile-3.png'
    },
    {
        'id': 4,
        'firstName': 'Mark',
        'lastName': 'Morain',
        'fullName': 'Mark Morain',
        'url': 'src/assets/img/user-profile-4.png'
    },
])

const getImg = () => {
    return friends[1].url
}

console.log(friends.value[1].url);
</script>

<style scoped lang="scss">
@font-face {
    font-family: Lato;
    src: url('@/assets/fonts/lato');
}

section {
    width: 100%;
    height: 500px;
    margin-top: 30px;

    .new {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 8px;

        .mem {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.55);
            cursor: default;
        }

        .see {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            text-align: right;
            color: rgba(255, 255, 255, 0.25);
            cursor: pointer;
        }
    }

    .friends {
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
                margin-top: 16px;

                .flex {
                    display: flex;
                }

                .name {
                    font-family: 'Lato';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    color: #FFFFFF;
                    margin: 18px 8px
                }
                img{
                    margin: 8px;
                }
            }
        }

    }
}
</style>