export default function Footer() {
    return (
      <footer className="bg-white text-black border-t border-gray-200 px-8 py-10 text-md mt-50">
        <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-10">
          {/* 左側品牌資訊 */}
          <div>
            <h1
            className="text-left"
            style={{
                fontFamily: "Cormorant, serif",
                fontSize: "46px",
                lineHeight: "100%",
                letterSpacing: "1px",
            }}
            >
            Outfairy
            </h1>
            <p className="mt-8 text-gray-500">100 台北市劍潭區大學路 200 號 2 樓</p>
          </div>
  
          {/* 中間連結區塊 */}
          <div className="flex flex-col gap-10 ml-26">
            <h3 className="text-gray-400 mb-4">連結</h3>
            <a href="/" className="hover:underline">主頁</a>
            <a href="/shop" className="hover:underline">商城</a>
            <a href="#" className="hover:underline">關於我們</a>
            <a href="#" className="hover:underline">聯絡我們</a>
          </div>
  
          <div className="flex flex-col gap-10 ml-12">
            <h3 className="text-gray-400 mb-4">幫助中心</h3>
            <a href="#" className="hover:underline">付款方式</a>
            <a href="#" className="hover:underline">退款</a>
            <a href="#" className="hover:underline">隱私條例</a>
          </div>
  
          {/* 品牌快訊訂閱區 */}
          <div>
            <h3 className="text-gray-400 mb-13">品牌快訊</h3>
            <form className="flex border-b border-black max-w-xs">
              <input
                type="email"
                placeholder="輸入信箱"
                className="flex-1 bg-transparent outline-none placeholder:text-gray-500"
              />
              <button type="submit" className="ml-2 font-semibold">
                訂閱
              </button>
            </form>
          </div>
        </div>
  
        {/* 底部版權 */}
        <div className="max-w-7xl mx-auto text-left text-black mt-10 border-t border-gray-200 pt-6">
          2023 furino. All rights reserved
        </div>
      </footer>
    );
  }
  