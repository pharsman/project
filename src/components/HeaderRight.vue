<template>
    <section>
        <header>
            <ul>
                <li><img src="@/assets/icons/mail.svg" alt="mail"></li>
                <li><img src="@/assets/icons/bellsymbol.svg" alt="bell"></li>
                <li><img src="@/assets/icons/chat.svg" alt="chat"></li>
                <li><img src="@/assets/icons/settings.svg" alt="settings"></li>
            </ul>
        </header>
        <div class="rame"></div>
        <div class="user-profile">
            <div class="img-place">
                <div class="img">
                    <img src="@/assets/img/user-profile.png" alt="profile picture">
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    position: absolute;
    width: 244px;
    height: 100vh;
    left: calc(100% - 244px);
    top: 0px;
    box-shadow: inset 1px 0px 0px rgba(255, 255, 255, 0.1);
    background: #2c2f48;

    header {
        box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
        height: 44px;

        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 12px;

            li {
                cursor: pointer;
            }
        }
    }

    .user-profile {
        width: 100%;
        height: 194px;
        padding-left: calc(100% - 186px);
        padding-top: 30px;



    }

}

.rame {
position: absolute;
width: 163.02px;
height: 147.8px;
left: 40.49px;
top: 74.1px;
background: linear-gradient(90deg, rgba(135, 108, 245, 0) 30.74%, rgba(31, 219, 250, 0.6) 51.8%, rgba(135, 108, 245, 0.36) 80.3%);
border: 1px solid;
border-image-source: linear-gradient(90deg, rgba(135, 108, 245, 0) 30.74%, rgba(31, 219, 250, 0.6) 51.8%, rgba(135, 108, 245, 0.36) 80.3%);
border-radius: 10px;
}

</style>