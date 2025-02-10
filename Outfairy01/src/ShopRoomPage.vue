<template>
    <div class="container">
        <!-- 側邊欄 -->
        <aside class="sidebar">
        <ul>
            <li>ALL PRODUCTS</li>
            <li>TOP</li>
            <li>BOTTOM</li>
            <li>ACCESSORIES</li>
            <li>WEEKLY TREND</li>
        </ul>
        </aside>
        
        <!-- 商品列 -->
        <main class="product-grid">
            <div class="product-card" v-for="product in displayProducts" :key="product.id">
                <img :src="product.image" class="product-image" alt="Product">
                <p class="product-name">{{ product.name }}</p>
                <p class="product-price">{{ product.price }}</p>
            </div>
        </main>
    </div>
    
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

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

// 先用範例，之後要引入API
const products = ref([
    { id: 1, name: "Cashmere Crewneck", price: "$200", image: "/images/shopPhoto1.jpg" },
    { id: 2, name: "Windproof jacket", price: "$350", image: "/images/clothPhoto.jpeg" },
    { id: 3, name: "Short-sleeved denim suit", price: "$400", image: "/images/clothPhoto.jpeg" },
    { id: 4, name: "Green cargo pants", price: "$280", image: "/images/clothPhoto.jpeg" },
    { id: 5, name: "Green dress", price: "$300", image: "/images/clothPhoto.jpeg" },
    { id: 6, name: "American vintage top", price: "$220", image: "/images/clothPhoto.jpeg" },
    { id: 7, name: "Blue floor-to-ceiling pants", price: "$450", image: "/images/clothPhoto.jpeg" },
    { id: 8, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 9, name: "Short-sleeve outerwear", price: "$320", image: "/images/clothPhoto.jpeg" },
    { id: 10, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 11, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 12, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 13, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 14, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 15, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },    
    { id: 16, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 17, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 18, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 19, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 20, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 21, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 22, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 23, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 24, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" }
])
let displayProducts = ref(products.value.slice(0, 24));

</script>

<style scoped>
:root {
    --product-width: 1vw;
    --product-height: 2vw;
}

.container {
    padding: 0;
    margin: 0 5rem;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start; /* 讓 sidebar 與上方欄位對齊 */
}

.sidebar li {
    justify-content: flex-start;
    position: relative;
    white-space: nowrap;
    flex: 1;
    font-family: "Inknut Antiqua", serif;
}

.sidebar ul {
  list-style-type: none; /* 移除圓點 */
  font-size: 20px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1vw;
    margin: 5rem;
    margin-bottom: 1rem;
    font-family: "Imprima", serif;
    justify-content: center;
    text-align: center;
}

.product-card {
    width: var(--product-width);
    height: var(--product-height);
    background-color: white;
    padding-bottom: 3rem;
    text-align: center;
}

.product-image {
    width: 90%;
    height: 90%;
    object-fit: cover;
}

.product-name {
    margin: 0%;
    font-size: 24px;
    font-weight: 400;
}

.product-price {
    margin: 0%;
    font-size: 24px;
}

</style>


  