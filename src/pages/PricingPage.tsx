import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from './LandingPage';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen botanical-bg bg-fixed">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-20 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-on-surface mb-4">Choose Your Suite</h1>
          <p className="text-secondary max-w-xl mx-auto">Select the perfect experience to announce your celebration. From elegant digital announcements to full premium management.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {/* Essential Plan */}
          <div className="bg-white p-10 rounded-2xl border border-outline-variant/30 flex flex-col group hover:shadow-2xl transition-all duration-500">
            <div className="mb-8">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 block">The Essential</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-serif text-on-surface">$29</span>
                <span className="text-secondary text-sm">/per event</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <PriceItem text="High-Res Digital Invitation" />
              <PriceItem text="RSVP Tracking (up to 50 guests)" />
              <PriceItem text="Basic Customization Tools" />
              <PriceItem text="Email RSVP Export" />
              <PriceItem text="Standard Design Archive" />
            </ul>
            <button className="w-full py-4 border border-outline-variant rounded-full font-semibold hover:bg-surface-container transition-all">
              Choose Essential
            </button>
          </div>

          {/* Premium Plan */}
          <div className="ivory-gradient p-10 rounded-2xl border-2 border-primary-container shadow-xl flex flex-col relative group">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Most Popular
            </div>
            <div className="mb-8">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2 block">The Artisan Suite</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-serif text-on-surface">$59</span>
                <span className="text-secondary text-sm">/per event</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <PriceItem text="Everything in Essential" />
              <PriceItem text="Unlimited Guest Management" />
              <PriceItem text="Interactive Guest Portal" />
              <PriceItem className="font-bold text-primary" text="Memory Gallery for Guests" />
              <PriceItem text="Countdown Widget + Maps" />
              <PriceItem text="Premium Template Access" />
            </ul>
            <button className="w-full py-4 bg-primary text-on-primary rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
              Elevate to Artisan
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white p-10 rounded-2xl border border-outline-variant/30 flex flex-col hover:shadow-2xl transition-all duration-500">
            <div className="mb-8">
              <span className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-2 block">The Full Estate</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-serif text-on-surface">$149</span>
                <span className="text-secondary text-sm">/per event</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <PriceItem text="Everything in Artisan" />
              <PriceItem text="Concierge Setup Support" />
              <PriceItem text="Planner Collaboration Tool" />
              <PriceItem text="Physical Proofing Pack" />
              <PriceItem text="Priority Design Refresh" />
              <PriceItem text="White-Label Guest Domain" />
            </ul>
            <Link to="/guests" className="w-full py-4 border border-outline-variant rounded-full font-semibold hover:bg-surface-container transition-all text-center">
              Choose Full Estate
            </Link>
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="bg-white/70 backdrop-blur-sm p-12 rounded-3xl border border-outline-variant/30 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 rounded-xl overflow-hidden border border-outline-variant/20 shadow-lg">
            <img 
              className="w-full aspect-[4/5] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH131z8A9WjLpxpU9Y-qUoQ_bK5D8NnS8kE8r8n9V9m8n7C8q8o9O8p8Q8" 
              alt="Selected Design" 
              onError={(e) => {
                e.currentTarget.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCzXoispZ4gckUUZoyLd4i98h0b2ysX5w8IJCP1LMsenVu4e9_8SYtdjyxVbjgxuGF6r-OooasrKdcw9VuG8oefU7ii_VyLPOgWD4Ev74JstZrBneNmtj7IPfeZA6urxmNG_A2cq8nPYmJujjQFJ0JwTM70RpJwcu6_YMMB4Ml3KVh1BlhH1Qo5r5oWAxXEAPQ97vzC7IxyMbTx3fwA-jb1gOBd7EwIIj7VjhAYOOU_PGwWZDgdzXrvbzD4gZEWuJEFjm_3UXfREiw";
              }}
            />
          </div>
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="text-primary w-5 h-5" />
              <span className="font-bold text-xs uppercase tracking-widest text-primary">Order Summary</span>
            </div>
            <h2 className="font-serif text-3xl text-on-surface mb-6">Your Invitation Suite</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <div>
                  <p className="font-semibold text-on-surface">"Ethereal Garden" Design Suite</p>
                  <p className="text-sm text-secondary italic">Digital + Artisan Package</p>
                </div>
                <span className="font-serif text-xl">$59.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/20">
                <p className="text-secondary">Concierge Setup (Gifted)</p>
                <span className="text-primary font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="font-serif text-2xl text-on-surface">Total Balance</p>
                <span className="font-serif text-3xl text-primary">$59.00</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/guests" className="flex-grow bg-primary-container text-on-primary-container py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Complete and Start Sending
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 border border-outline-variant rounded-full text-secondary font-semibold hover:bg-surface-container">
                Save for Later
              </button>
            </div>
            <p className="text-[10px] text-outline mt-6 text-center md:text-left flex items-center gap-2">
              <CheckCircle2 className="w-3 h-3" /> Secure checkout with 256-bit encryption. No hidden fees.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PriceItem({ text, className = "" }: { text: string, className?: string }) {
  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <span className="text-sm text-secondary">{text}</span>
    </li>
  );
}
