<script setup>
import MainRoomPage from "./MainRoomPage.vue";
import AboutUsPage from "./AboutUs.vue";
import Footer from "./footer.vue";
import { ref } from "vue";
let page = ref("Main");
let change = function (clickedPage) {
    page.value = clickedPage;
}
</script>

<template>
    <header>
        <h1>Outfairy</h1>
    </header>
    <nav>
        <ul class="nav-left">
            <li :class="page === 'Main' ? 'current' : ''" @click="change('Main');">Main Room</li>
            <li :class="page === 'Shop' ? 'current' : ''" @click="change('Shop');">Shop Room</li>
            <li :class="page === 'AboutUs' ? 'current' : ''" @click="change('AboutUs');">About Us</li>
        </ul>
        <!-- <ul class="nav-right">
            <li :class="page === 'Personal' ? 'current' : ''" @click="change('Personal');">Personal</li>
            <li :class="page === 'Cart' ? 'current' : ''" @click="change('Cart');">Cart</li>
            <li :class="page === 'Search' ? 'current' : ''" @click="change('Search');">Search</li>
        </ul> -->
    </nav>
    <main>
        <AboutUsPage v-if="page === 'AboutUs'"></AboutUsPage>
        <MainRoomPage v-else-if="page === 'Main'"></MainRoomPage>
    </main>
    <Footer></Footer>
</template>

<style scoped>
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

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    flex: 1;
}

@media (max-width : 768px){
    nav {
        flex-direction: column;
        font-size: 10px;
    }
}

</style>