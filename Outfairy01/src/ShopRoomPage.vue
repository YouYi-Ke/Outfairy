<template>
    <div class="container">
        <!-- 側邊欄 -->
        <aside class="sidebar">
            <ul>
                <li v-for="category in categories" :key="category" @click="filterCategory(category)" :class="{ active: selectedCategory === category }">
                    {{ category }}
                </li>
            </ul>
        </aside>

        <!-- 主要內容 -->
        <div class="main-content">
            <!-- 標題 -->
            <h1 class="category-title">{{ selectedCategory }}</h1>

            <!-- 商品列 -->
            <main class="product-grid">
                <div class="product-card" v-for="product in paginatedProducts" :key="product.id">
                    <img :src="product.image" class="product-image" alt="Product">
                    <p class="product-name">{{ product.name }}</p>
                    <p class="product-price">{{ product.price }}</p>
                </div>
            </main>
        </div>
    </div>

    <!-- 分頁 -->
    <div class="pagination">
                <span v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</span>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue';

const categories = ['ALL PRODUCTS', 'TOP', 'BOTTOM', 'ACCESSORIES', 'WEEKLY TREND'];
const selectedCategory = ref('ALL PRODUCTS');
const currentPage = ref(1);
const itemsPerPage = 24;

// 先用範例，之後要引入API
const products = ref([
    { id: 1, name: "Cashmere Crewneck", price: "$200", image: "/images/shopPhoto1.jpg" },
    { id: 2, name: "Oversized Knitwear", price: "$140", image: "/images/shopPhoto2.jpg" },
    { id: 3, name: "Jeans", price: "$150", image: "/images/shopPhoto3.jpg"},
    { id: 4, name: "Women's Jackets", price: "$400", image: "/images/shopPhoto4.jpg" },
    { id: 5, name: "Green dress", price: "$300", image: "/images/shopPhoto1.jpg" },
    { id: 6, name: "American vintage top", price: "$220", image: "/images/shopPhoto1.jpg" },
    { id: 7, name: "Blue floor-to-ceiling pants", price: "$450", image: "/images/shopPhoto1.jpg"},
    { id: 8, name: "Striped sweater", price: "$420", image: "/images/shopPhoto1.jpg"},
    { id: 9, name: "Short-sleeve outerwear", price: "$320", image: "/images/shopPhoto1.jpg" },
    { id: 10, name: "Striped sweater", price: "$420", image: "/images/shopPhoto1.jpg" },
    { id: 11, name: "Striped sweater", price: "$420", image: "/images/shopPhoto1.jpg" },
    { id: 12, name: "Striped sweater", price: "$420", image: "/images/shopPhoto1.jpg" },
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
    { id: 24, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 25, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" }
])

// 先用範例，之後要引入API
const top = ref([
    { id: 1, name: "Cashmere Crewneck", price: "$200", image: "/images/shopPhoto1.jpg" },
    { id: 2, name: "Oversized Knitwear", price: "$140", image: "/images/shopPhoto1.jpg" },
    { id: 3, name: "Short-sleeved denim suit", price: "$400", image: "/images/shopPhoto1.jpg"},
    { id: 4, name: "Green cargo pants", price: "$280", image: "/images/shopPhoto1.jpg" },
    { id: 5, name: "Green dress", price: "$300", image: "/images/shopPhoto1.jpg" },
    { id: 6, name: "American vintage top", price: "$220", image: "/images/shopPhoto1.jpg" },
    { id: 7, name: "Blue floor-to-ceiling pants", price: "$450", image: "/images/shopPhoto1.jpg"},
    { id: 8, name: "Striped sweater", price: "$420", image: "/images/shopPhoto1.jpg"},
    { id: 9, name: "Short-sleeve outerwear", price: "$320", image: "/images/shopPhoto1.jpg" },
    { id: 10, name: "Striped sweater", price: "$420", image: "/images/shopPhoto1.jpg" },
    { id: 11, name: "Striped sweater", price: "$420", image: "/images/shopPhoto1.jpg" },
    { id: 12, name: "Striped sweater", price: "$420", image: "/images/shopPhoto1.jpg" },
    { id: 13, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 14, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
    { id: 15, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },    
])

const filteredProducts = computed(() => {
    if (selectedCategory.value === 'ALL PRODUCTS') return products.value;
    if (selectedCategory.value === 'TOP') return top.value;
    return products.value.filter(product => product.category === selectedCategory.value);
});

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));
const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return filteredProducts.value.slice(start, start + itemsPerPage);
});

const filterCategory = (category) => {
    selectedCategory.value = category;
    currentPage.value = 1; // 切換分類時回到第一頁
};

const goToPage = (page) => {
    currentPage.value = page;
};
</script>

<style scoped>
.container {
    display: flex;
    margin: 0 7rem; /* 增加左右間距 */
}

.sidebar {
    width: 200px;
    font-family: "Inknut Antiqua", serif;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
    font-size: 18px;
}

.sidebar li {
    cursor: pointer;
    transition: color 0.3s;
}

.sidebar li.active {
    font-weight: bold;
    color: black;
}

.main-content {
    flex: 1;
    padding-left: 30px;
}

.category-title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 25px;
    margin-top: 0px;
    text-align: left;
    font-family: "Inknut Antiqua", serif;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 35px;
    text-align: center;
    font-family: "Imprima", serif;
    font-weight: 400;
    
}

.product-card {
    text-align: center;
}

.product-image {
    width: 100%;
    height: 80%;
    object-fit: cover;
}

.product-name {
    margin: 0%;
}

.product-price {
    margin: 0%;
}

.pagination {
    text-align: center;
    margin-top: 35px;
    margin-left: 230px;
    display: flex;
    justify-content: center;
    font-family: "Italiana";
    font-size: 30px;
}

.pagination span {
    cursor: pointer;
    margin: 0 10px;
    padding: 1px 1px;
}

.pagination span.active {
    background-color: #C5C1A7; /* 灰色背景 */
    color: black; 
    
}
</style>