import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './LandingPage';
import { Palette, FileDown, Eye, Share2, ArrowRight } from 'lucide-react';

export default function CountdownPage() {
  const [theme, setTheme] = useState("Floral");
  const [color, setColor] = useState("#735C00");

  return (
    <div className="flex flex-col min-h-screen botanical-bg bg-fixed">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-20 py-24 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Editor Side */}
        <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
                <h1 className="font-serif text-3xl text-on-surface mb-2">Countdown Widget</h1>
                <p className="text-secondary text-sm mb-6">Design a customized countdown experience to embed on your wedding website or social media.</p>
                
                <div className="space-y-6">
                    <div>
                        <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Widget Theme</label>
                        <div className="grid grid-cols-2 gap-2">
                            {["Floral", "Classic", "Modern", "Minimal"].map(t => (
                                <button 
                                    key={t}
                                    onClick={() => setTheme(t)}
                                    className={`py-2 rounded-lg text-xs font-bold transition-all border ${
                                        theme === t ? 'border-primary bg-primary text-on-primary' : 'border-outline-variant text-secondary'
                                    }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Primary Color</label>
                        <div className="flex gap-3">
                            {["#735C00", "#5F5F59", "#8B4513", "#2F4F4F"].map(hex => (
                                <button 
                                    key={hex}
                                    onClick={() => setColor(hex)}
                                    className={`w-8 h-8 rounded-full border-2 border-white shadow-sm ring-1 ring-outline-variant ${color === hex ? 'ring-primary ring-2' : ''}`}
                                    style={{ backgroundColor: hex }}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Event Date</label>
                        <input className="w-full border border-outline-variant rounded-lg py-2 px-3 text-sm focus:border-primary outline-none" type="date" defaultValue="2025-06-14" />
                    </div>

                    <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-full font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        Get Embed Code <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="flex gap-4">
                <button className="flex-grow flex items-center justify-center gap-2 py-3 bg-surface border border-outline-variant rounded-xl text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-all">
                    <FileDown className="w-4 h-4" /> Download SVG
                </button>
                <button className="flex-grow flex items-center justify-center gap-2 py-3 bg-surface border border-outline-variant rounded-xl text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-all">
                    <Share2 className="w-4 h-4" /> Share Link
                </button>
            </div>
        </div>

        {/* Preview Side */}
        <div className="lg:col-span-8 flex flex-col items-center justify-center min-h-[500px] relative">
            <div className="absolute top-0 right-0 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest opacity-40">
                <Eye className="w-4 h-4" /> Live Preview
            </div>

            <div className="w-full max-w-2xl bg-white p-16 rounded-[40px] shadow-2xl border border-outline-variant/20 flex flex-col items-center text-center relative overflow-hidden group">
                 {/* Decorative background for Floral theme */}
                 {theme === 'Floral' && (
                     <div className="absolute inset-0 opacity-[0.03] botanical-bg pointer-events-none"></div>
                 )}
                 
                 <div className="space-y-4 relative z-10">
                    <h2 className="font-serif text-5xl md:text-7xl text-on-surface" style={{ color: color }}>J <span className="italic font-normal opacity-40">&amp;</span> I</h2>
                    <p className="text-secondary font-semibold text-xs tracking-[0.4em] uppercase">June 14th, 2025 • The Winery</p>
                    
                    <div className="flex justify-center gap-12 pt-12">
                        <CountdownUnit val="142" label="Days" color={color} />
                        <CountdownUnit val="08" label="Hrs" color={color} />
                        <CountdownUnit val="54" label="Min" color={color} />
                        <CountdownUnit val="22" label="Sec" color={color} />
                    </div>
                 </div>

                 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 text-[10px] uppercase font-bold tracking-[0.6em]">Card Studio Artisan</div>
            </div>

            <div className="mt-12 p-6 bg-surface-container-high rounded-2xl border border-outline-variant/30 flex items-center gap-4 w-full max-w-lg">
                <Palette className="w-10 h-10 text-primary-container" />
                <div>
                   <p className="text-xs font-bold text-secondary uppercase tracking-widest">Selected Style</p>
                   <p className="font-serif text-xl">{theme} Celebration with Artisan Tones</p>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function CountdownUnit({ val, label, color }: { val: string, label: string, color: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="font-serif text-5xl md:text-6xl" style={{ color }}>{val}</span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-2">{label}</span>
        </div>
    );
}
