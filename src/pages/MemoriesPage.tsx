import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Download, Share2, Heart, Plus } from 'lucide-react';
import { motion } from 'motion/react';

const PHOTOS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzXoispZ4gckUUZoyLd4i98h0b2ysX5w8IJCP1LMsenVu4e9_8SYtdjyxVbjgxuGF6r-OooasrKdcw9VuG8oefU7ii_VyLPOgWD4Ev74JstZrBneNmtj7IPfeZA6urxmNG_A2cq8nPYmJujjQFJ0JwTM70RpJwcu6_YMMB4Ml3KVh1BlhH1Qo5r5oWAxXEAPQ97vzC7IxyMbTx3fwA-jb1gOBd7EwIIj7VjhAYOOU_PGwWZDgdzXrvbzD4gZEWuJEFjm_3UXfREiw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIZwYf9Z3JkklFQm_UvOKsXXBX9yvNh4cYKkM1gQRREb9mQt7U7vxajf2YXsuYTAA39DwWol4nvNeh6opzl-qb9ZhaCuVISUgNuZAWnkp68ILVYlQfmi0ox-JQsTjHJTXnRGG89N8dysxRaeErJgyTQww3baF5dZVklDIPKyW7XYkpOzpGegVIBa9J_WDI42NEWsi3ljQWZMoJ2RL5s1c5slplRNGgTw8lCNh43O2JNW_5XMTO11KY2yCcR39O1a2ZdxXvPVKA3YI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLGagLfVqI5SBRUDlqnsNaq3NVXE3-GNqRjAo85upovxU46ZqRUu4tZg2qMebqPpUbyaFmTibmG0rBnMglLS4Q_5WqHaifXQoY1b1jHMF9nFVYLcGY6jcJIOQLy2C_ZdwiTyv7GxEe57eF4yyCE0QfrizMhhz0I_Qvx_mq6M9baDyaDWmwB905072OshAqvQig6LZvIt2NxEADaShkP-5yB08ec0UT080ybbajRX2VPASOXBkG-xZBkpaT8B6pY6vrXGi4Rk1RUw8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCa804NjvqFCddypTAG-McqB0-gStuM-M1uWeOCAWRy799zleOad0mKUQFXrtOQPs8WNKRbzq8lL9ODsaa0-kiqAiC-TR__ITe0eZ1H8geQA6XmiSsyf9LWNc46_UXCVoySuPp6b8QH5IKu6gkQz89Uw8SzBBsvyAHWeqDuF1ka5pauBC6Ta7dXlQQy5vzIC9EJ4jsACpFRHzLmnLjxgMbFSVTyfwOJ0JR1PZ8ro-fiYvqmtpsQIJPAUm101VPFy5FWAZ6LksRRQwM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDffXU4mJfq14pBpoUGjN7chL4MVpJYkP-dKLVHrZ3emVDpbAzD97EeiW4LgAGK0wx9Yi1GPAhSf7y02CNthpmHxAqjBlFSe4_UP_SZRuB6Y8WX9VSB91xJjUP0ju9pM3HQP5YCgjiM_ExqrS6iaF8NTsfXUMsaQ_lzFZ1tl9Hv-1_b-HXo1E0J4y07PpuZNBWIz7Bt9QLAUQ_9Getc726Y4uJgtV3qXouF2-gjqrWodtU0Hzd4FHzu9Eh6Lp7bsOtzUzej7eXYvHg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAmczvDBLzB4EQUrtfv9NrdJ6Kkop5EZZxf5fZ6hKOR-QjV701a3cxhU697eSXEo2hWKfWh8G8pM9CBdUePyixl7z17XhQ1pCVVycNSdYnLzhrR-hY-n6MvNkh9ZotlJ3OWsQTiFGeacycuk58G2ly-O6X_w0xDQIT1IH2yYiNRkt9UsK7kl20MnpCHh221W0T0hjO4FWfGSxm2bVh7S-2k-TM36qEu5RFnTLz5FdHwKVLNffEWIklAR7KwcE63EiUEiNCTPExHs_Y"
];

export default function MemoriesPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <nav className="fixed top-0 w-full h-20 px-8 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/20">
        <Link to="/" className="font-serif text-2xl text-primary font-bold">J & S</Link>
        <div className="flex gap-4">
             <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:shadow-md transition-all">
                <Plus className="w-4 h-4" /> Add Photos
             </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-20 py-32 flex-grow">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-on-surface mb-4">Wedding Memories</h1>
          <p className="text-secondary font-serif italic text-xl">A shared gallery of moments from our special day</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {PHOTOS.map((photo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group bg-white border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-zoom-in"
            >
              <img className="w-full h-auto object-cover" src={photo} alt={`Memory ${i+1}`} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6">
                 <div className="flex justify-end gap-2">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                       <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                       <Download className="w-5 h-5" />
                    </button>
                 </div>
                 <div className="text-white">
                    <p className="font-semibold text-sm">Wedding Reception</p>
                    <p className="text-xs opacity-80 italic">Lake Como, Italy</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
            <p className="text-secondary mb-8">Want these printed? Request a physical album suite.</p>
            <button className="border border-outline-variant text-secondary px-8 py-3 rounded-full font-semibold hover:bg-surface-container transition-all">
                Request Physical Album
            </button>
        </div>
      </main>

      <footer className="py-16 text-center text-secondary">
         <div className="flex justify-center gap-6 mb-8">
            <Share2 className="w-6 h-6 opacity-30 hover:opacity-100 cursor-pointer" />
            <Camera className="w-6 h-6 opacity-30 hover:opacity-100 cursor-pointer" />
         </div>
         <p className="text-[10px] uppercase tracking-[0.4em] opacity-40">Card Studio Keepsake Memory</p>
      </footer>
    </div>
  );
}
