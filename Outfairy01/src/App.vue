<script setup>
import MainRoomPage from "./MainRoomPage.vue";
import ShopRoomPage from "./ShopRoomPage.vue";
import AboutUsPage from "./AboutUs.vue";
import Footer from "./footer.vue";
import { ref } from "vue";
let page = ref("Main");
let change = function (clickedPage) {
    page.value = clickedPage;
}
</script>

<template>
    <div class="container">
        <header>
            <h1><a href="#">Outfairy</a></h1>
        </header>
        <nav>
            <ul class="nav-left">
                <li :class="page === 'Main' ? 'current' : ''" @click="change('Main');">Main Room</li>
                <li :class="page === 'Shop' ? 'current' : ''" @click="change('Shop');">Shop Room</li>
                <li :class="page === 'AboutUs' ? 'current' : ''" @click="change('AboutUs');">About Us</li>
                <li :class="page === 'Test' ? 'current' : ''" @click="change('ProductDescription');">Test</li>
            </ul>
            <ul class="nav-right">
                <li :class="page === 'Personal' ? 'current' : ''" @click="change('Personal');">
                    <font-awesome-icon :icon="['fas', 'user']" />
                </li>
                <li :class="page === 'Cart' ? 'current' : ''" @click="change('Cart');">
                    <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                </li>
                <li :class="page === 'Search' ? 'current' : ''" @click="change('Search');">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </li>
            </ul>
        </nav>
        <main>
            <AboutUsPage v-if="page === 'AboutUs'"></AboutUsPage>
            <ShopRoomPage v-else-if="page === 'Shop'"></ShopRoomPage>
            <MainRoomPage v-else-if="page === 'Main'"></MainRoomPage>
        </main>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}
header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Cormorant", serif;
    font-size: clamp(.5rem, calc(.5vw + 1rem), 2rem);
}

h1 {
    margin: 0%;
    padding-top: .5em;
}

h1 a {
    text-decoration: none;
    color: black;
}

nav {
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: nowrap;
    overflow: hidden;
    font-size: clamp(.1rem, calc(.3vw + 1rem), 1rem);
    margin: .5% 5%;
}

.nav-left,
.nav-right {
    display: flex;
    flex-shrink: 1;
    gap: 3rem;
    list-style: none;
    align-items: center;
}

.nav-left li {
    justify-content: flex-start;
    position: relative;
    white-space: nowrap;
    flex: 1;
    font-family: "Inknut Antiqua", serif;
}

.nav-left li::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .01em;
    opacity: 0;
    background-color: black;
    transition: width 0.2s ease;
}

.nav-left li:hover::after {
    opacity: 1;
}

.nav-right {
    justify-content: flex-end;
    position: relative;
    flex: 1;
}

@media (max-width : 768px){
    nav {
        flex-direction: column;
        font-size: 10px;
    }
}

</style>