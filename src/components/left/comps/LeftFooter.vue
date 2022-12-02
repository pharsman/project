<template>
    <div class="flex">
        <div class="img">
            <img src="@/assets/img/user-profile.png" alt="logo">
        </div>
        <p>sophiefortune</p>
        <ul>
            <li><img src="@/assets/icons/footer-icons/mic.svg" alt=""></li>
            <li><img src="@/assets/icons/footer-icons/deafen.svg" alt=""></li>
            <li><img src="@/assets/icons/footer-icons/add-friend.svg" alt=""></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@font-face {
    font-family: 'sf-compact-display';
    src: url('@/assets/fonts/sf-compact-display');
}

.flex {
    position: absolute;
    top: calc(100% - 72px);
    width: 320px;
    height: 72px;
    background: #1D203E;
    box-shadow: inset -1px 0px 0px rgba(255, 255, 255, 0.1);

    ul {
        width: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 44px;
        margin-top: 28px;

        li {
            cursor: pointer;
        }
    }

    .img {
        width: 32px;
        height: 36px;
        overflow: hidden;
        margin-top: 20px;
        box-shadow: none;

        img {
            width: 100%;
        }
    }

    p {
        font-family: sf-copact-display;
        width: 81px;
        height: 16px;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #FFFFFF;
        margin-top: 28px;
        margin-left: 18px;
    }
}
</style>