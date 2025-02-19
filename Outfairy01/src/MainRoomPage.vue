<template>
    <div class="container">
        <!-- 橫幅輪播區 -->
        <div class="hero-section" @mouseenter="autoStopSlide" @mouseleave="autoStartSlide">
            <div class="carousel">
                <div class="carousel-track" :style="{transform:`translateX(-${currentIndex * 100}%)`}">
                    <div class="carousel-item" v-for="(image, index) in bannerImages" :key="index">
                        <img :src="image"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-indicators">
            <span v-for="(image, index) in bannerImages" :key="index" :class="{ active: currentIndex === index }"
                @click="goToSlide(index)"></span>
        </div>
        <!-- 商品列 -->
        <div class="product-grid-container">
            <div class="product-grid">
                <div v-for="product in displayProducts" :key="product.id" class="product-card">
                    <img :src="product.image" class="product-image" alt="Product">
                    <p class="product-name">{{ product.name }}</p>
                    <p class="product-price">{{ product.price }}</p>
                </div>
            </div> 
        </div>
        <button v-if="displayProducts.length < products.length" class="load-more" @click="loadMore">查看更多</button>
        <!-- 每週穿搭 -->
        <div class="weeklyTrend">Weekly Trends</div>
        <div class="trend-grid-container">
            <div class="trend-grid">
                <div v-for="trend in trends" :key="trend.id" class="trend-card">
                    <img :src="trend.image" class="trend-image" alt="Trend" />
                    <p class="trend-day">{{ trend.day }}</p>
                </div>
            </div>    
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const bannerImages = ref([
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg'
]);

const currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % bannerImages.length;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + bannerImages.length) % bannerImages.length;
};

const goToSlide = (index) => {
    currentIndex.value = index;
};

const startAutoSlide = () => {
    intervalId = setInterval(nextSlide, 3000);
};

const stopAutoSlide = () => {
    clearInterval(intervalId); // 停止輪播
};

onMounted(() => { startAutoSlide(); });
onBeforeUnmount(() => { stopAutoSlide(); });

// 先用範例，之後要引入API
const products = ref([
    { id: 1, name: "Vintage washed jeans", price: "$280", image: "/images/clothPhoto.jpeg" },
    { id: 2, name: "Windproof jacket", price: "$350", image: "/images/clothPhoto.jpeg" },
    { id: 3, name: "Short-sleeved denim suit", price: "$400", image: "/images/clothPhoto.jpeg" },
    { id: 4, name: "Green cargo pants", price: "$280", image: "/images/clothPhoto.jpeg" },
    { id: 5, name: "Green dress", price: "$300", image: "/images/clothPhoto.jpeg" },
    { id: 6, name: "American vintage top", price: "$220", image: "/images/clothPhoto.jpeg" },
    { id: 7, name: "Blue floor-to-ceiling pants", price: "$450", image: "/images/clothPhoto.jpeg" },
    { id: 8, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 9, name: "Short-sleeve outerwear", price: "$320", image: "/images/clothPhoto.jpeg" }
])
let displayProducts = ref(products.value.slice(0, 6));

const loadMore = () => {
    const nextBatch = products.value.slice(displayProducts.value.length, displayProducts.value.length + 3);
    displayProducts.value = [...displayProducts.value, ...nextBatch];
}

const trends = ref([
    { id: 1, day: "Monday", image: "/images/MondayOutfit.png" },
    { id: 2, day: "Tuesday", image: "/images/MondayOutfit.png" },
    { id: 3, day: "Wednesday", image: "/images/MondayOutfit.png" },
    { id: 4, day: "Thursday", image: "/images/MondayOutfit.png" },
    { id: 5, day: "Friday", image: "/images/MondayOutfit.png" },
    { id: 6, day: "Saturday", image: "/images/MondayOutfit.png" },
])
</script>

<style scoped>
:root {
    --carousel-width: 3vw;
    --carousel-height: 1vw;
    --product-width: 1vw;
    --product-height: 2vw;
}

.container {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.hero-section {
    width: var(--carousel-width);
    max-width: 1500px;
    height: var(--carousel-height);
    margin: 0 auto;
    margin-bottom: 5px;
    position: relative;
    overflow: hidden;
}

.carousel {
    width: var(--carousel-width);
    height: var(--carousel-height);
    position: relative;
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-item {
    min-width: 100%;
    box-sizing: border-box;
}

.carousel-item img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
}

/* 輪播指示器 */
.carousel-indicators {
    display: flex;
    justify-content: center;
    margin: 0px auto 20px;
}

.carousel-indicators span {
    width: 10px;
    height: 10px;
    background-color: #bbb;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.carousel-indicators span.active {
    background-color: #333;
    /* 目前顯示的圖片指示器變色 */
}

.product-grid-container {
    margin: 1vw 3vw;
    text-align: center;
}

.product-grid {
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 0 auto;
}

.product-card {
    padding-bottom: 1rem;
}

.product-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    aspect-ratio: 3/4;
    object-fit: cover;
}

.product-name {
    margin: 0;
    font-family: "Imprima", serif;
    font-size: 24px;
    font-weight: 400;
}

.product-price {
    font-family: "Imprima", serif;
    margin: 0;
    font-size: 24px;
}

.load-more {
    display: block;
    width: 300px;
    margin: 10px auto;
    background-color: rgba(197, 193, 167, 1);
    color: white;
    border: none;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
}

.load-more:hover {
    background-color: #555;
}

.weeklyTrend {
    text-align: center;
    justify-content: center;
    font-size: 24px;
    font-family: "Inknut Antiqua", serif;
    margin: 2vw 0;
}

.trend-grid-container {
    margin: 0 3vw;
    text-align: center;
}

.trend-grid {
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(3, 1fr);
    gap: 3vw;
    margin: 0 auto;
}

.trend-card {
    padding-bottom: 1rem;
}

.trend-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    aspect-ratio: 9/16;
    object-fit: cover;
}

.trend-day {
    margin: 0px;
    font-size: 24px;
    font-weight: 400;
    font-family: "Imprima", serif;
}

@media (max-width: 900px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    .product-image{
        max-width: 300px;
    }
    .product-name {
        font-size: 16px;
    }
    .product-price{
        font-size: 16px;
    }
    .load-more {
        width: 200px;
        font-size: 10px;
    }
    .trend-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .trend-image {
        max-width: 300px;
    }
    .trend-day {
        font-size: 16px;
    }
}

@media (max-width: 600px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .product-image{
        max-width: 400px;
    }
    .trend-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .trend-image {
        max-width: 400px;
    }
}
</style>