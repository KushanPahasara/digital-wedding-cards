import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-surface py-24 md:py-32">
          <div className="absolute inset-0 botanical-bg opacity-[0.03] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 flex flex-col items-start gap-8">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-sans text-sm font-semibold text-primary tracking-widest uppercase"
              >
                The Modern Atelier
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-7xl text-on-surface leading-tight"
              >
                Your Love Story, <br/><span className="text-primary italic">Beautifully Announced</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-secondary max-w-xl"
              >
                Create, manage, and share stunning digital wedding invitations with ease. Experience the perfect blend of timeless elegance and modern convenience.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/gallery" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all active:scale-95">
                  Browse Templates
                </Link>
                <button className="border border-outline-variant text-on-surface px-8 py-4 rounded-full font-semibold hover:bg-surface-container transition-all active:scale-95">
                  See How It Works
                </button>
              </motion.div>
            </div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="md:col-span-5 relative mt-12 md:mt-0"
            >
              <div className="aspect-[3/4] bg-surface-container shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl border border-outline-variant/30 overflow-hidden relative group">
                <img 
                  alt="Luxury Wedding Invitation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4zwHPzVe50d3eMXQMmoxic0MgLASWOxhDuLkSP9_-AI4GODbJdBz4UJIGPZMJ_1zF-mTqTRDIMKr3WdAtFyL69z_PaM_ve4zFTA0NbF4hfxap_N_Zegt-WeUcYlVLs-dNi7SI-AgO7NJWEe5zb8M-PYr7TW4MyFm57NzBca5eWlJwfVWaloERbtu5mxlp8nCxMY0UBogxDRkM_l_N0uGCY7TICqZEwE7AjpIEQr2qMBBQkTPE8hocvVIm38C8CaitF0-KTdynLek"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-lg border border-outline-variant/20 hidden lg:block">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <div>
                    <p className="font-semibold text-sm">Artisan Crafted</p>
                    <p className="text-xs text-secondary">Every detail matters</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col gap-2">
                <span className="font-serif text-3xl md:text-5xl text-primary">50,000+</span>
                <span className="font-semibold text-sm text-secondary tracking-widest uppercase">Couples Trust Us</span>
              </div>
              <div className="flex flex-col gap-2 border-x border-outline-variant/30 px-12">
                <span className="font-serif text-3xl md:text-5xl text-primary">1M+</span>
                <span className="font-semibold text-sm text-secondary tracking-widest uppercase">Invites Sent</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center gap-1">
                  <span className="font-serif text-3xl md:text-5xl text-primary">4.9/5</span>
                  <Star className="w-6 h-6 text-primary-container fill-primary-container" />
                </div>
                <span className="font-semibold text-sm text-secondary tracking-widest uppercase">Average Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Templates */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-6 md:px-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="font-semibold text-sm text-primary tracking-widest uppercase mb-4 block">Curated Collections</span>
                <h2 className="font-serif text-3xl md:text-5xl text-on-surface">Timeless Designs for Every Style</h2>
              </div>
              <Link to="/gallery" className="font-semibold text-sm text-primary flex items-center gap-2 hover:underline">
                View All Collections
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: "Vintage Bloom", desc: "Floral Aesthetic", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDehy4dZu9Sf7-skjCOY4WwPlkyZAmPno84yv6RMCyYviOLrGKU5LpG8SGBNxUO1EIWlvWvIh--asPyvFFOh5D-vC1W_h-kApBEXVIqG2_qbAGUF-Y0LY2BxiJ4fy0QBxumDUjnHX8QWDMbVclPBOCBYbGy8fZSQHs7c4wlE6WKCIALgVhKgVkh5ilcrq8PIwXG2MHJ1th7qij5eDzdLe4X34Yx6_sKw-DMm1p5pn4fByzM4VWFUhvUlH1ruYWTe5negNyeXSKjkEk" },
                { title: "Modern Luxe", desc: "Minimalist Style", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA18tIjdFDx87X93II5gy7xtjXLCdn9WSQrDkYoxv2Q2NCsWZN4M9MLwI-LKBbnc-lyIGHh39859TeIVrk0_qC2lHDgPXP3GViSNXagKrvnwmUArABJz4yBEVfK1BqT7QBqpQD7xYqZdb8zbbs1QJZz3JSNswtXPLHeuVb2OPtAtVv5YyNzl5mi6jqjTGbgH5z6SSkEVeh8bKtAzohIWlGHpbR4GBaAXIBnbFsOmUkG7K0roKjUfz2xpfX1zqDdtKYjtTH7V6KMpeA" },
                { title: "Classic Script", desc: "Classic Elegance", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOAtm2utD_5LIJVef5Ko2ZdVoGH6yhajm3Cr8yNnE8XixzEoyACzNlmCKOeu1mLjedVp6naDSaB-WLFtBJo-6xzaEfQgmIKSkt3aOzZ9XkdJM2i3P54Ym8rGDljGHEDcBAivFP24Qt0Rc_hzrFWmocbtUwu8XqXC36VUCEsjha8jIZ88F_AgkKKpszJ6n2Y2gCWSWzQVnpjAlmgPdyDZNrKS7UdRQm1VJM86gmqAHP4LPsNu_yVT5KtmZF4lfnTx5qdoG4APcm71M" },
                { title: "Celestial Night", desc: "Animated Concept", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIZwYf9Z3JkklFQm_UvOKsXXBX9yvNh4cYKkM1gQRREb9mQt7U7vxajf2YXsuYTAA39DwWol4nvNeh6opzl-qb9ZhaCuVISUgNuZAWnkp68ILVYlQfmi0ox-JQsTjHJTXnRGG89N8dysxRaeErJgyTQww3baF5dZVklDIPKyW7XYkpOzpGegVIBa9J_WDI42NEWsi3ljQWZMoJ2RL5s1c5slplRNGgTw8lCNh43O2JNW_5XMTO11KY2yCcR39O1a2ZdxXvPVKA3YI" }
              ].map((item, i) => (
                <Link to="/gallery" key={i} className="group cursor-pointer">
                  <div className="aspect-[4/5] bg-surface-container rounded-lg overflow-hidden border border-outline-variant/30 mb-6 transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                    <img alt={item.title} className="w-full h-full object-cover" src={item.img} />
                  </div>
                  <h3 className="font-serif text-xl text-on-surface">{item.title}</h3>
                  <p className="font-sans text-xs text-secondary uppercase tracking-wider mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-surface-container-high relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path className="text-primary" d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.1"></path>
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-6 md:px-20 text-center relative z-10">
            <h2 className="font-serif text-4xl md:text-5xl text-on-surface mb-8">Ready to Design Your Perfect Day?</h2>
            <p className="font-sans text-lg text-secondary mb-12 max-w-2xl mx-auto">
              Join thousands of couples who have created their dream invitations with our intuitive design tools.
            </p>
            <Link to="/gallery" className="inline-block bg-primary-container text-on-primary-container px-12 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Start Your Design Journey
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function Navbar({ simplified = false }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-surface/90 backdrop-blur-md shadow-[0_10px_30px_rgba(45,45,45,0.05)] h-20">
      <div className="flex justify-between items-center w-full px-6 md:px-20 max-w-7xl mx-auto h-full">
        <Link to="/" className="font-serif text-2xl text-primary font-bold tracking-tight">Card Studio</Link>
        
        {!simplified && (
          <div className="hidden md:flex items-center gap-8">
            <Link to="/gallery" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Gallery</Link>
            <Link to="/countdown" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Widget</Link>
            <Link to="/pricing" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Pricing</Link>
            <Link to="/admin" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Admin</Link>
          </div>
        )}

        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold text-secondary hover:text-primary transition-colors">Login</button>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="font-serif text-2xl text-primary mb-4">Card Studio</div>
          <p className="text-sm text-secondary max-w-sm">
            © 2026 Wedding Invitation Card Studio. Timeless Elegance, Modern Ease.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <a className="text-sm text-secondary hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-sm text-secondary hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="text-sm text-secondary hover:text-primary transition-colors" href="#">Cookie Policy</a>
          <a className="text-sm text-secondary hover:text-primary transition-colors" href="#">Contact Us</a>
        </div>
        <div className="mt-8 md:mt-0 flex gap-4">
          <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all cursor-pointer">
            <Mail className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-secondary hover:text-primary hover:border-primary transition-all cursor-pointer">
            <Star className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
