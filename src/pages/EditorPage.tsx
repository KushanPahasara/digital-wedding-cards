import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './LandingPage';
import { ArrowRight, Camera, ZoomIn, Grid, Palette, FileText, Sparkles } from 'lucide-react';

export default function EditorPage() {
  const [formData, setFormData] = useState({
    bride: "Isabella Montgomery",
    groom: "Alexander Thorne",
    date: "2025-06-14",
    time: "16:30",
    venue: "The Glass Conservatory",
    address: "882 Serenity Valley Rd, Napa, CA 94558",
    rsvp: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar simplified />
      <main className="pt-20 min-h-screen flex flex-col md:flex-row botanical-bg bg-fixed">
        {/* Left Panel: Form */}
        <section className="w-full md:w-[450px] lg:w-[520px] bg-white border-r border-outline-variant/30 h-[calc(100vh-80px)] overflow-y-auto flex flex-col">
          <div className="p-8 border-b border-outline-variant/20 bg-surface/50">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-serif text-2xl text-primary">Card Details</h1>
              <span className="text-[10px] font-semibold text-secondary uppercase tracking-widest">Step 2 of 4</span>
            </div>
            <div className="flex gap-2 h-1 w-full bg-secondary-container rounded-full overflow-hidden">
              <div className="w-1/4 h-full bg-primary-container opacity-40"></div>
              <div className="w-1/4 h-full bg-primary-container shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>
              <div className="w-1/4 h-full bg-secondary-container"></div>
              <div className="w-1/4 h-full bg-secondary-container"></div>
            </div>
          </div>

          <div className="p-8 space-y-8 flex-grow">
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold text-secondary ml-1 mb-1 block uppercase tracking-wider">Bride's Full Name</span>
                  <input 
                    name="bride"
                    value={formData.bride}
                    onChange={handleChange}
                    className="w-full border border-outline-variant bg-surface-container-low rounded-lg focus:border-primary-container focus:ring-1 focus:ring-primary-container py-3 px-4 font-sans transition-all outline-none" 
                    type="text"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-secondary ml-1 mb-1 block uppercase tracking-wider">Groom's Full Name</span>
                  <input 
                    name="groom"
                    value={formData.groom}
                    onChange={handleChange}
                    className="w-full border border-outline-variant bg-surface-container-low rounded-lg focus:border-primary-container focus:ring-1 focus:ring-primary-container py-3 px-4 font-sans transition-all outline-none" 
                    type="text"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-secondary ml-1 mb-1 block uppercase tracking-wider">Wedding Date</span>
                  <input 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-outline-variant bg-surface-container-low rounded-lg focus:border-primary-container focus:ring-1 focus:ring-primary-container py-3 px-4 font-sans transition-all outline-none" 
                    type="date"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-secondary ml-1 mb-1 block uppercase tracking-wider">Ceremony Time</span>
                  <input 
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-outline-variant bg-surface-container-low rounded-lg focus:border-primary-container focus:ring-1 focus:ring-primary-container py-3 px-4 font-sans transition-all outline-none" 
                    type="time"
                  />
                </label>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold text-secondary ml-1 mb-1 block uppercase tracking-wider">Venue Name</span>
                  <input 
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full border border-outline-variant bg-surface-container-low rounded-lg focus:border-primary-container focus:ring-1 focus:ring-primary-container py-3 px-4 font-sans transition-all outline-none" 
                    type="text"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-secondary ml-1 mb-1 block uppercase tracking-wider">Venue Address</span>
                  <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-outline-variant bg-surface-container-low rounded-lg focus:border-primary-container focus:ring-1 focus:ring-primary-container py-3 px-4 font-sans transition-all resize-none outline-none" 
                    rows={2}
                  />
                </label>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs font-semibold text-secondary ml-1 mb-1 block uppercase tracking-wider">RSVP Contact</span>
                  <input 
                    name="rsvp"
                    placeholder="e.g. rsvp@isabellaandalex.com"
                    className="w-full border border-outline-variant bg-surface-container-low rounded-lg focus:border-primary-container focus:ring-1 focus:ring-primary-container py-3 px-4 font-sans transition-all outline-none" 
                    type="text"
                  />
                </label>
                <div className="mt-2">
                  <span className="text-xs font-semibold text-secondary ml-1 mb-1 block uppercase tracking-wider">Invitation Photo</span>
                  <div className="border-2 border-dashed border-outline-variant/50 rounded-xl p-8 flex flex-col items-center justify-center bg-surface-container-lowest hover:bg-primary-container/5 transition-colors cursor-pointer group">
                    <Camera className="text-primary w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-sm text-secondary">Upload high-res engagement photo</p>
                    <p className="text-xs text-outline mt-1 italic">JPG, PNG up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-outline-variant/20 bg-white sticky bottom-0">
            <Link to="/pricing" className="w-full bg-primary-container text-on-primary-container py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
              Next Step: Review & Finish
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Right Panel: Preview */}
        <section className="flex-grow bg-surface-container flex flex-col items-center justify-center p-8 lg:p-16 relative">
          <div className="absolute top-8 left-8 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-outline-variant/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Live Preview</span>
          </div>

          <div className="absolute top-8 right-8 flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:text-primary border border-outline-variant/30 shadow-sm transition-all" title="Zoom In">
              <ZoomIn className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:text-primary border border-outline-variant/30 shadow-sm transition-all" title="Grid View">
              <Grid className="w-5 h-5" />
            </button>
          </div>

          {/* Card Preview */}
          <div className="w-full max-w-[600px] aspect-[4/5] bg-white shadow-2xl relative flex flex-col overflow-hidden group">
            <div className="absolute inset-0 opacity-40 pointer-events-none botanical-bg bg-repeat"></div>
            
            <div className="relative z-10 w-full h-full p-12 flex flex-col items-center text-center justify-between border-[16px] border-double border-outline-variant/20 m-1">
              <div className="w-32 h-32 opacity-80 flex items-center justify-center">
                 <span className="font-serif text-primary italic text-3xl opacity-20">Floral Icon</span>
              </div>

              <div className="space-y-6">
                <p className="text-xs font-semibold text-secondary tracking-[0.2em] uppercase">Together with their families</p>
                <div className="space-y-2">
                  <h2 className="font-serif text-6xl text-primary leading-tight">{formData.bride || 'Bride'}</h2>
                  <p className="font-serif italic text-primary-container text-4xl">&amp;</p>
                  <h2 className="font-serif text-6xl text-primary leading-tight">{formData.groom || 'Groom'}</h2>
                </div>
                <p className="text-xs font-medium text-secondary tracking-widest py-4 uppercase">
                  REQUEST THE HONOR OF YOUR COMPANY<br/>AT THE CELEBRATION OF THEIR MARRIAGE
                </p>
                <div className="py-4 border-y border-outline-variant/30 w-full max-w-sm">
                  <p className="font-serif text-on-surface uppercase tracking-widest text-2xl">Saturday</p>
                  <div className="flex items-center justify-center gap-4 my-1">
                    <span className="h-px bg-outline-variant/50 flex-grow"></span>
                    <span className="font-serif text-4xl text-primary">14</span>
                    <span className="h-px bg-outline-variant/50 flex-grow"></span>
                  </div>
                  <p className="font-serif text-on-surface uppercase tracking-widest text-2xl">June 2025</p>
                  <p className="text-xs font-semibold text-secondary mt-2 tracking-wider">AT HALF PAST FOUR IN THE AFTERNOON</p>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-secondary italic text-xl">{formData.venue}</p>
                  <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{formData.address}</p>
                </div>
              </div>

              <div className="w-32 h-20 opacity-60 transform rotate-180 flex items-center justify-center">
                  <span className="font-serif text-primary italic text-xl opacity-20">Ornament</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white/90 px-6 py-3 rounded-full text-primary font-semibold shadow-xl backdrop-blur-sm border border-primary-container/20 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Adjust Layout
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-serif text-2xl text-secondary">"Ethereal Garden" Suite</p>
            <div className="flex gap-4 mt-4 justify-center">
              <span className="flex items-center gap-2 text-xs font-medium text-secondary"><Palette className="w-4 h-4" /> Champagne Gold</span>
              <span className="flex items-center gap-2 text-xs font-medium text-secondary"><FileText className="w-4 h-4" /> 300gsm Vellum Paper</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
