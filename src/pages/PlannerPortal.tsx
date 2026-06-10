import React from 'react';
import {  
  ShoppingBag, 
  Users, 
  CalendarDays,
  Mail,
  ArrowRight,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { Sidebar } from './GuestListPage';

const CLIENTS = [
  { id: 1, name: "Isabella & Alexander", eventDate: "Jun 14, 2025", stage: "Ready for Print", progress: 85, avatar: "IA" },
  { id: 2, name: "Michael & Chloe", eventDate: "Aug 22, 2025", stage: "RSVP Period", progress: 45, avatar: "MC" },
  { id: 3, name: "Daniel & Sarah", eventDate: "Sep 05, 2025", stage: "Design Phase", progress: 15, avatar: "DS" }
];

export default function PlannerPortal() {
  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      <Sidebar active="overview" />

      <main className="flex-grow flex flex-col min-w-0">
        <header className="h-20 border-b border-outline-variant/30 flex items-center justify-between px-8 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
             <h1 className="font-serif text-2xl text-on-surface">Planner Workspace</h1>
             <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Partner Portal</span>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 bg-secondary/5 px-4 py-2 rounded-full border border-outline-variant/20">
                <span className="text-xs font-bold text-secondary">Switch Client</span>
                <ArrowRight className="w-4 h-4 text-secondary opacity-40" />
             </div>
             <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                Add New Event
             </button>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
            <div className="text-left mb-8">
                <h2 className="font-serif text-3xl text-on-surface mb-2">Welcome back, Madeline</h2>
                <p className="text-secondary max-w-xl">You have 12 active weddings across 4 cities. 3 clients require your attention today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Active Clients */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em]">Current Portfolios</h3>
                    </div>
                    {CLIENTS.map(client => (
                        <div key={client.id} className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm group hover:shadow-xl transition-all cursor-pointer">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-serif text-xl border-4 border-surface shadow-sm">
                                        {client.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-2xl text-on-surface group-hover:text-primary transition-colors">{client.name}</h4>
                                        <p className="text-xs text-secondary font-medium tracking-wide flex items-center gap-1">
                                            <CalendarDays className="w-3 h-3" /> {client.eventDate}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] font-bold bg-surface-container py-1 px-3 rounded-full uppercase tracking-widest text-secondary block mb-1">
                                        {client.stage}
                                    </span>
                                    <p className="text-xs font-bold text-primary">{client.progress}% Complete</p>
                                </div>
                            </div>
                            <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                <div className="h-full bg-primary transition-all duration-1000 shadow-[0_0_10px_rgba(115,92,0,0.3)]" style={{ width: `${client.progress}%` }}></div>
                            </div>
                            <div className="mt-8 pt-8 border-t border-outline-variant/20 flex gap-6">
                                <QuickAction icon={<Mail />} label="Send Draft" />
                                <QuickAction icon={<Users />} label="View Guests" />
                                <QuickAction icon={<ShoppingBag />} label="Manage Order" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Performance & Notifications */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] botanical-bg transform rotate-45"></div>
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-6">Partner Insights</h3>
                        <div className="space-y-6">
                            <InsightItem icon={<TrendingUp />} label="Commission Earned" value="$3,240.00" sub="+12% this month" />
                            <InsightItem icon={<ShoppingBag />} label="Design Usage" value="8 Designs" sub="Ethereal Garden remains top" />
                            <InsightItem icon={<MessageSquare />} label="Unread Feedback" value="4 Clients" sub="New comments on Michael & Chloe" />
                        </div>
                        <button className="w-full mt-8 py-3 bg-surface-container-high rounded-full text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary-container/20 transition-all">
                            Partner Dashboard
                        </button>
                    </div>

                    <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                         <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">Elite Partner Tip</h3>
                         <p className="text-sm text-on-surface leading-relaxed italic">"Adding a custom countdown widget increases guest RSVP speed by an average of 40%."</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

function QuickAction({ icon, label }: { icon: React.ReactNode, label: string }) {
    return (
        <button className="flex items-center gap-2 text-[10px] font-bold text-secondary uppercase tracking-widest hover:text-primary transition-colors">
            {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4 opacity-60" })}
            {label}
        </button>
    );
}

function InsightItem({ icon, label, value, sub }: { icon: React.ReactNode, label: string, value: string, sub: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{label}</p>
                <p className="text-xl font-serif text-on-surface">{value}</p>
                <p className="text-[10px] text-secondary opacity-60 italic">{sub}</p>
            </div>
        </div>
    );
}

