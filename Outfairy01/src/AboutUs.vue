<script setup>
</script>

<template>
    <main>
        <article>
            <div class="AboutUs">About Us</div>
            <div class="paragraph">
                生活周遭的一切<br>
                都能被賦予新的生命<br>
                我們相信時尚不必昂貴<br>
                每一件衣物都有屬於它的故事<br>
                而我們的使命<br>
                就是讓這些故事得以延續<br>
            </div>
            <div class="paragraph">
                OUTFAIRY<br>
                不僅是一個二手衣物的平台<br>
                更是一個<br>
                讓舊愛遇見新主的空間<br>
                是環保行動的一部分<br>
                也是讓時尚更有溫度的方式<br>
                我們希望透過二手衣物<br>
                讓更多人發現穿搭的無限可能<br>
                同時為地球盡一份心力<br>
            </div>
            <div class="paragrpah">
                讓我們一起，<br />
                為舊衣物寫下新故事！<br />
            </div>
            <div class="address">
                客服時間｜週一至週五 12:00-18:00（不含國定假日）<br />
                地址｜No.xx, xxRd xxx,Taipei City, Taiwan (R.O.C.)<br />
                統編｜xxxxxx<br />
            </div>
        </article>
    </main>
</template>

<style scoped>
main {
    justify-content: center;
    text-align: center;
    line-height: 1.5em;
    font-family: "Abyssinica SIL";
    font-size: 20px;
}

article {
    white-space: nowrap;
    margin: 28px auto;
}

.AboutUs {
    letter-spacing: 1rem;
    font-size: 2em;
}

article div {
    padding: 1em;
}

.paragraph {
    justify-content: center;
    text-align: center;
    letter-spacing: .5rem;
}

.address {
    font-size: 16px;
    letter-spacing: 0.5rem;
}

@media (max-width: 900px) {
    main {
        font-size: 16px;
    }
    .address {
        display: none;
    }
}
</style>
