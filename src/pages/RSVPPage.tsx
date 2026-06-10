import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MapPin, Calendar, Clock, Camera, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RSVPPage() {
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-surface botanical-bg bg-fixed flex flex-col items-center">
      <nav className="fixed top-0 w-full h-20 px-8 flex justify-between items-center z-50 bg-white/30 backdrop-blur-md">
        <Link to="/" className="font-serif text-2xl text-primary font-bold">J & S</Link>
        <div className="flex gap-8 text-sm font-semibold text-secondary uppercase tracking-widest">
            <Link to="/rsvp" className="text-primary border-b border-primary">Home</Link>
            <Link to="/memories" className="hover:text-primary">Memories</Link>
            <a href="#" className="hover:text-primary">Registry</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mt-32 w-full max-w-4xl px-6 text-center">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12 relative inline-block"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-primary-container p-2">
            <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH131z8A9WjLpxpU9Y-qUoQ_bK5D8NnS8kE8r8n9V9m8n7C8q8o9O8p8Q8" alt="Couple" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg border border-primary-container/20">
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </div>
        </motion.div>

        <h1 className="font-serif text-5xl md:text-8xl text-primary mb-8 leading-tight">
            Sophia <span className="italic font-normal text-4xl md:text-6xl text-primary-container">&amp;</span> James
        </h1>
        
        <p className="font-serif text-2xl md:text-3xl text-secondary italic mb-12">Are getting married!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 justify-items-center">
            <WeddingDetail icon={<Calendar />} title="When" desc="October 24, 2025" />
            <WeddingDetail icon={<MapPin />} title="Where" desc="Villa del Balbianello, Lake Como" />
            <WeddingDetail icon={<Clock />} title="Time" desc="4:00 PM Reception" />
        </div>
      </section>

      {/* Interactive Countdown */}
      <section className="w-full bg-white/50 backdrop-blur-sm py-20 border-y border-primary-container/20 overflow-hidden relative">
        <Countdown timer="Oct 24, 2025 16:00:00" />
      </section>

      {/* RSVP Section */}
      <section className="w-full max-w-2xl px-6 py-24 text-center">
        <h2 className="font-serif text-4xl text-on-surface mb-6">Will You Join Us?</h2>
        <p className="text-secondary mb-12">Please kindly respond by September 1st, 2025. We can't wait to celebrate with you!</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mb-8">
            {!rsvpStatus ? (
                <div className="flex flex-col gap-4">
                    <button 
                        onClick={() => setRsvpStatus('attending')}
                        className="bg-primary text-on-primary py-5 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Yes, I'll Be There
                    </button>
                    <button 
                        onClick={() => setRsvpStatus('declined')}
                        className="border-2 border-outline-variant text-secondary py-5 rounded-full text-lg font-semibold hover:bg-surface-container transition-all"
                    >
                        Regretfully Decline
                    </button>
                </div>
            ) : (
                <AnimatePresence>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-primary-container/10 p-12 rounded-3xl border-2 border-primary-container"
                    >
                        <Heart className="w-16 h-16 text-primary mx-auto mb-6 opacity-30" />
                        <h3 className="font-serif text-3xl text-primary mb-4">
                            {rsvpStatus === 'attending' ? "We're Thrilled!" : "We'll Miss You!"}
                        </h3>
                        <p className="text-secondary italic">Your response has been carefully noted.</p>
                        <button onClick={() => setRsvpStatus(null)} className="mt-8 text-xs font-bold text-primary uppercase tracking-widest hover:underline">Change Response</button>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
      </section>
      
      <footer className="w-full py-12 text-center text-secondary text-xs uppercase tracking-[0.3em] opacity-40">
        Invitation by Card Studio
      </footer>
    </div>
  );
}

function WeddingDetail({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-primary-container/30 flex items-center justify-center text-primary-container">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{title}</p>
                <p className="font-serif text-lg text-on-surface">{desc}</p>
            </div>
        </div>
    );
}

function Countdown({ timer }: { timer: string }) {
    const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, mins: number, secs: number}>({days: 0, hours: 0, mins: 0, secs: 0});

    useEffect(() => {
        const target = new Date(timer).getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;
            if (distance < 0) {
                clearInterval(interval);
                return;
            }
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                secs: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className="max-w-4xl mx-auto flex justify-between px-6">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownUnit value={timeLeft.mins} label="Minutes" />
            <CountdownUnit value={timeLeft.secs} label="Seconds" />
        </div>
    );
}

function CountdownUnit({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="font-serif text-5xl md:text-7xl text-primary-container">{value.toString().padStart(2, '0')}</span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{label}</span>
        </div>
    );
}
