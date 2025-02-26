<template>
    <div class="container">
      <!-- Product Section -->
      <div class="grid grid-cols-2 gap-8 py-8">
        <!-- Product Images -->
        <div class="flex flex-col gap-2">
          <img :src="mainImage" class="w-full rounded-lg" />
          <div class="grid grid-cols-4 gap-2">
            <img v-for="(img, index) in images" :key="index" :src="img" @click="mainImage = img" class="cursor-pointer border rounded-lg" />
          </div>
        </div>
        
        <!-- Product Details -->
        <div>
          <h2 class="text-3xl font-semibold">Windproof Jacket</h2>
          <p class="text-xl font-bold">NT$350</p>
          <button class="bg-gray-300 text-black px-4 py-2 mt-4 rounded">查看更多</button>
          
          <!-- Tab Navigation -->
          <div class="mt-6 border-t pt-4">
            <div class="flex gap-4">
              <button @click="activeTab = 'description'" :class="{ 'font-bold': activeTab === 'description' }">商品描述</button>
              <button @click="activeTab = 'more'" :class="{ 'font-bold': activeTab === 'more' }">了解更多</button>
              <button @click="activeTab = 'shipping'" :class="{ 'font-bold': activeTab === 'shipping' }">送貨及付款方式</button>
            </div>
            
            <div class="mt-4">
              <div v-if="activeTab === 'description'">
                <p><strong>品牌：</strong>不明</p>
                <p><strong>狀況：</strong>保存良好，有些微使用痕跡</p>
                <p><strong>顏色：</strong>卡其</p>
                <p><strong>尺寸：</strong>XL</p>
                <p><strong>原價：</strong>800 ~ 1500</p>
              </div>
              <div v-if="activeTab === 'more'">
                <p>這個商品沒有更多資訊。</p>
              </div>
              <div v-if="activeTab === 'shipping'">
                <p><strong>送貨方式：</strong></p>
                <ul>
                  <li>超取</li>
                  <li>蝦皮店到店</li>
                  <li>宅配（台灣地區）物流處理費 NT$150</li>
                </ul>
                <p><strong>付款方式：</strong></p>
                <ul>
                  <li>貨到付款</li>
                  <li>信用卡付款</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Related Products -->
      <div class="bg-gray-200 py-8 px-4">
        <h3 class="text-xl font-bold mb-4">相關產品</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(product, index) in relatedProducts" :key="index" class="bg-white p-4 rounded-lg">
            <img :src="product.image" class="w-full rounded-lg" />
            <h4 class="mt-2">{{ product.name }}</h4>
            <p class="text-lg font-bold">NT${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mainImage: '/path/to/main-image.jpg', // 替換成實際圖片 URL
        images: [
          '/images/clothPhoto.jpeg',
          '/images/clothPhoto.jpeg',
          '/images/clothPhoto.jpeg',
          '/images/clothPhoto.jpeg',
        ],
        activeTab: 'description',
        relatedProducts: [
          { id: 1, name: "Blue floor-to-ceiling wide pants", price: "$450", image: "/images/clothPhoto.jpeg" },
          { id: 2, name: "Striped sweater", price: "$420", image: "/images/clothPhoto.jpeg" },
          { id: 3, name: "Short-sleeved denim suit", price: "$320", image: "/images/clothPhoto.jpeg" },
        ]
      };
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 1200px;
  }
  </style>
  