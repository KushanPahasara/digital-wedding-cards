import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from './LandingPage';
import { Search } from 'lucide-react';

const CATEGORIES = ["All", "Floral", "Classic", "Modern", "Minimal", "Cultural", "Animated"];

const TEMPLATES = [
  { id: 1, name: "Ethereal Garden", price: "$29", category: "Floral", tag: "New", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVCvkFAtBWulBCxWZzZrwIU_LhHl6l4O6bSNUr9JKuW1mnJNd95Vqf40VLOtq4LiBMK3VDqBPe2KkqY7U7hpMavxM6Q6jWgkyXaDWq24JaBZilEvje8xmnqw1USBcoYmfdRgvPLEJdLDwnorSmvani8lpLyEWTcUiIev5cZgOjJyzn3gKhztMxW0wi2o7K0C34xvW9x1C2P0PAYTc00dfWnqa5mKhyffldWeLJelkejE_lVhoutUoeKCwLs-L_ha6QawboYZ2V66M", details: "Floral • Digital & Print" },
  { id: 2, name: "Gilded Elegance", price: "$35", category: "Classic", tag: "Premium", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ2lGSXE30vIatxhBAnrk6gsaLAuwIa5j4FObeK0zx_W6xzoG9cQVao5_lzuQ0GyO0t4NtH7i4wdZms4dt7h84Psxue8aETlh7NVM33dbH4U0kTe9W8xfU7GwjsiKBKVKvuwh1he_4aekhPnM6YlPkC-z5YRtCNPIz-FtApWBBqkTJGYzsdA0gQkV80BjjkPjdKh0tkX2RsFcV_xwRL_erWSflG6lCcpIbv9bTc81MkE1EGufJREeFsxgyNqik5PfFhaeY3XbyG6k", details: "Classic • Gold Foil" },
  { id: 3, name: "Modern Vows", price: "Free", category: "Modern", tag: "Animated", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyXoispZ4gckUUZoyLd4i98h0b2ysX5w8IJCP1LMsenVu4e9_8SYtdjyxVbjgxuGF6r-OooasrKdcw9VuG8oefU7ii_VyLPOgWD4Ev74JstZrBneNmtj7IPfeZA6urxmNG_A2cq8nPYmJujjQFJ0JwTM70RpJwcu6_YMMB4Ml3KVh1BlhH1Qo5r5oWAxXEAPQ97vzC7IxyMbTx3fwA-jb1gOBd7EwIIj7VjhAYOOU_PGwWZDgdzXrvbzD4gZEWuJEFjm_3UXfREiw", details: "Modern • Motion" },
  { id: 4, name: "Jasmine Bliss", price: "$29", category: "Floral", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwR6MEl-TKJQlMCQHErleT_Mmy3GWQhlxpDDeR1u5oEyPnDZv_QhAgbAM6OS0k5tVLCUAlL1R-Njkmt_-pyhOyVrC7P5rWc2gbufVnmo7MxW1l5ddUXVV4h14gSMZqe8EQF3ysLtFmht4hk4b9qe3-yu2mIhaUNTtT9h_MDneY7j5gv8EeAjzliBl6vGazKspyVn5OQq6LiiUP8wMWH2G1StfEVOCI7sFZg3ioXVk1rU9aBrD2duvDZIJ7oAsVk-vS0sgeYOknotI", details: "Floral • Minimalist" },
  { id: 5, name: "Imperial Heritage", price: "$45", category: "Cultural", tag: "New", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpudyJB4-idHnrRr19OZ2pTR2DNpNi1yqbd3HAar1H17C4hLQOz0K8D5bO1DAiAfnzhv7ZYJwuuUDJKcmn6atYPbdWRtD9bwZrOxTXbKtolJt0AenM3vcqKRikiJJAkOvRnwM_-Gt7mgkYtPT3NZRs8z1Ol7VFH1Cc1xOXAulAh_m5lTLH-g4T0etlb-J1KrUdZTVj2x5UFAeEnIAgDvt4GRYpzTV24pqNe5UdrWI1DzPTWyHw0GWMx1D6t86Pft26hEGK0MNyKuE", details: "Cultural • Embossed" },
  { id: 6, name: "Pure Simplicity", price: "Free", category: "Minimal", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbRLDp4ktPEv2JIoZ7ech7yO-13v_tzHO1dSPnVTbZvYcO3iD4GUA4ETkW_Y2PtbEIknT1eo5DuO5UwZ9yLrxMitg0yDsr8wxpqMRmU2IO77n8x97PHL3yEgejliJWQU6nz4qeQwKyScnhkhjhIWfTUO8K8fX_gOBALupTOZzOX1f6Luaivj4Eg1ed2M1uEeA1DnKy592hypSMObAv8Cp1naaNNKi5A72p4A6Z64op8a3Sran3bpKUkbRtOtuBb__bc1CK3AuCrK0", details: "Minimal • Modern" },
  { id: 7, name: "Midnight Gala", price: "$39", category: "Classic", tag: "Premium", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmczvDBLzB4EQUrtfv9NrdJ6Kkop5EZZxf5fZ6hKOR-QjV701a3cxhU697eSXEo2hWKfWh8G8pM9CBdUePyixl7z17XhQ1pCVVycNSdYnLzhrR-hY-n6MvNkh9ZotlJ3OWsQTiFGeacycuk58G2ly-O6X_w0xDQIT1IH2yYiNRkt9UsK7kl20MnpCHh221W0T0hjO4FWfGSxm2bVh7S-2k-TM36qEu5RFnTLz5FdHwKVLNffEWIklAR7KwcE63EiUEiNCTPExHs_Y", details: "Classic • Silver Foil" },
  { id: 8, name: "Sunflower Fields", price: "$25", category: "Floral", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDffXU4mJfq14pBpoUGjN7chL4MVpJYkP-dKLVHrZ3emVDpbAzD97EeiW4LgAGK0wx9Yi1GPAhSf7y02CNthpmHxAqjBlFSe4_UP_SZRuB6Y8WX9VSB91xJjUP0ju9pM3HQP5YCgjiM_ExqrS6iaF8NTsfXUMsaQ_lzFZ1tl9Hv-1_b-HXo1E0J4y07PpuZNBWIz7Bt9QLAUQ_9Getc726Y4uJgtV3qXouF2-gjqrWodtU0Hzd4FHzu9Eh6Lp7bsOtzUzej7eXYvHg", details: "Floral • Rustic" },
  { id: 9, name: "Vellum Lace", price: "$39", category: "Animated", tag: "Animated", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa804NjvqFCddypTAG-McqB0-gStuM-M1uWeOCAWRy799zleOad0mKUQFXrtOQPs8WNKRbzq8lL9ODsaa0-kiqAiC-TR__ITe0eZ1H8geQA6XmiSsyf9LWNc46_UXCVoySuPp6b8QH5IKu6gkQz89Uw8SzBBsvyAHWeqDuF1ka5pauBC6Ta7dXlQQy5vzIC9EJ4jsACpFRHzLmnLjxgMbFSVTyfwOJ0JR1PZ8ro-fiYvqmtpsQIJPAUm101VPFy5FWAZ6LksRRQwM", details: "Classic • Digital" },
  { id: 10, name: "Tropical Palms", price: "$29", category: "Modern", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLGagLfVqI5SBRUDlqnsNaq3NVXE3-GNqRjAo85upovxU46ZqRUu4tZg2qMebqPpUbyaFmTibmG0rBnMglLS4Q_5WqHaifXQoY1b1jHMF9nFVYLcGY6jcJIOQLy2C_ZdwiTyv7GxEe57eF4yyCE0QfrizMhhz0I_Qvx_mq6M9baDyaDWmwB905072OshAqvQig6LZvIt2NxEADaShkP-5yB08ec0UT080ybbajRX2VPASOXBkG-xZBkpaT8B6pY6vrXGi4Rk1RUw8", details: "Modern • Destination" },
  { id: 11, name: "Deco Glamour", price: "$49", category: "Classic", tag: "Premium", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaMLl19ILCrepdpp-0N6y_QW6U30uJOofYp8CJR5fyar9OEhmfqIbNX5kOZ3bPt5fIVcoqlb-XrROpO75p8gZBWMyIsLMJ8BqmoIjACmG2WfzN3NP0cdlSrBlwtmQpzNetH3mywLV7Ag2XJmt58wiQ451_RoPuQ2PiquBWK-Rf5C2UvE2XGaDgapmiEATJ4egU9IbOd8g17AB5LD1H5H4W2GON6t7byWhYaMJcnaGvxgIJisCnQjx2_azJO2rMwXXfiUl_JGJaAuk", details: "Classic • Art Deco" },
  { id: 12, name: "Mountain Peak", price: "$25", category: "Minimal", tag: "New", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_xkelo7SXyWBZUsWME284iEh3QolyAP-a1XMHLzaUcJwvzKhDLpS8Y3JGQL8C2rmtfTCokUqI5PWYoSJz80QdjmTujRJ5FGCCwrZStMsaK3ygDKu1e0k1UMe_mcK6c1P_B_cDxOEs1ByTFrWw8gtu3xgf4h891im6Fc2xMF8p6SEhkG22UYkSSil2aBbhMT4mywJsN0YZShq2zJx84vo8k9Nu6hqrXg9kkiwHsX783UMXulM3wD0LlsNogCJcjpi-oBkv2WJr2e4", details: "Minimal • Nature" }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates = TEMPLATES.filter(t => activeCategory === "All" || t.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen botanical-bg bg-fixed">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-20 py-16 pt-32">
        <div className="mb-12 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-6xl text-on-surface mb-4">The Invitation Gallery</h1>
          <p className="font-sans text-lg text-secondary max-w-2xl">
            Discover a curated collection of timeless designs, crafted to capture the essence of your love story and the elegance of your special day.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition-all font-semibold text-sm ${
                activeCategory === cat 
                  ? 'border-primary bg-primary text-on-primary' 
                  : 'border-outline-variant text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map(template => (
            <Link 
              to="/editor" 
              key={template.id} 
              className="group relative bg-surface border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={template.img} 
                  alt={template.name}
                />
                
                {template.tag && (
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] uppercase font-bold px-3 py-1 rounded-full ${
                      template.tag === 'New' ? 'bg-primary text-on-primary' : 
                      template.tag === 'Premium' ? 'bg-primary-container text-on-primary-container' : 
                      'bg-tertiary-container text-on-tertiary-container'
                    }`}>
                      {template.tag}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Select Template
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-serif text-xl text-on-surface">{template.name}</h3>
                  <span className="font-semibold text-primary">{template.price}</span>
                </div>
                <p className="text-secondary font-semibold text-xs uppercase tracking-wider">{template.details}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="bg-secondary-container text-on-secondary-container font-semibold px-12 py-4 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm">
            Load More Designs
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
