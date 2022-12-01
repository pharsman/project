<template>
    <section>
        <header>
            <ul>
                <li><img src="@/assets/icons/header-icons/mail.svg" alt="mail"></li>
                <li><img src="@/assets/icons/header-icons/bellsymbol.svg" alt="bell"></li>
                <li><img src="@/assets/icons/header-icons/chat.svg" alt="chat"></li>
                <li><img src="@/assets/icons/header-icons/settings.svg" alt="settings"></li>
            </ul>
        </header>
    </section>
</template>

<style lang="scss" scoped>
section {


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

        h2 {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            text-align: center;
            color: #ffffff;
            text-align: start;
        }

        span {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            color: rgba(255, 255, 255, 0.25);
        }
    }

}

.rame {
    position: absolute;
    width: 163.02px;
    height: 147.8px;
    left: 40.49px;
    top: 74.1px;
    background: linear-gradient(90deg, rgba(135, 108, 245, 0.36) 30.74%, rgba(31, 219, 250, 0.6) 51.8%, rgba(135, 108, 245, 0.36) 80.3%);
    border: 1px solid;
    border-image-source: linear-gradient(90deg, rgba(135, 108, 245, 0) 30.74%, rgba(31, 219, 250, 0.6) 51.8%, rgba(135, 108, 245, 0.36) 80.3%);
    border-radius: 10px;
    animation: tran 1.5s infinite ease-out-in
}

@keyframes tran {
    0% {
        transform: matrix(0.79, 0.62, -0.62, 0.79, 0, 0);
    }

    7% {
        transform: matrix(0.92, -0.39, 0.39, 0.92, 0, 0);
    }

    14% {
        transform: matrix(0.69, -0.72, 0.72, 0.69, 0, 0);
    }

    21% {
        transform: matrix(0.36, -0.93, 0.93, 0.36, 0, 0);
    }

    28% {
        transform: matrix(-0.03, -1, 1, -0.03, 0, 0);
    }

    35% {
        transform: matrix(-0.42, -0.91, 0.91, -0.42, 0, 0);
    }

    42% {
        transform: matrix(-0.74, -0.67, 0.67, -0.74, 0, 0);
    }

    49% {
        transform: matrix(-0.95, -0.33, 0.33, -0.95, 0, 0);
    }

    56% {
        transform: matrix(-1, 0.07, -0.07, -1, 0, 0);
    }

    63% {
        transform: matrix(-0.89, 0.45, -0.45, -0.89, 0, 0);
    }

    70% {
        transform: matrix(-0.64, 0.77, -0.77, -0.64, 0, 0);
    }

    77% {
        transform: matrix(-0.29, 0.96, -0.96, -0.29, 0, 0);
    }

    84% {
        transform: matrix(0.1, 0.99, -0.99, 0.1, 0, 0);
    }

    91% {
        transform: matrix(0.48, 0.87, -0.87, 0.48, 0, 0);
    }

    100% {
        transform: matrix(0.79, 0.62, -0.62, 0.79, 0, 0);
    }
}
</style>