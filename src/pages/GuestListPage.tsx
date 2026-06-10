import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './LandingPage';
import { 
  Users, 
  Mail, 
  Search, 
  Download, 
  Plus, 
  CalendarDays, 
  Settings, 
  HelpCircle, 
  LayoutDashboard, 
  Palette, 
  ShoppingBag,
  MoreVertical,
  Filter
} from 'lucide-react';

const GUESTS = [
  { id: 1, name: "Eleanor & Richard Vance", status: "Attending", guests: 2, dietary: "Vegetarian", email: "evance@glamour.com" },
  { id: 2, name: "The Harrison Family", status: "Pending", guests: 4, dietary: "None", email: "j.harrison@tech.org" },
  { id: 3, name: "Marcus Thorne & Guest", status: "Declined", guests: 0, dietary: "-", email: "mthorne@design.co" },
  { id: 4, name: "Sarah Miller", status: "Attending", guests: 1, dietary: "Gluten Free", email: "sarahM@vantage.net" },
  { id: 5, name: "Dr. James & Mrs. Sofia Rossi", status: "Attending", guests: 2, dietary: "Nut Allergy", email: "rossi.md@medical.it" }
];

export default function GuestListPage() {
  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      {/* Sidebar */}
      <Sidebar active="guests" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0">
        <header className="h-20 border-b border-outline-variant/30 flex items-center justify-between px-8 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <h1 className="font-serif text-2xl text-on-surface">Guest List</h1>
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Live Updates</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative group flex items-center h-10 w-10 justify-center rounded-full bg-surface-container hover:bg-primary-container/20 transition-all cursor-pointer">
                <Search className="w-5 h-5 text-secondary" />
             </div>
             <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                <Plus className="w-4 h-4" /> Add Guest
             </button>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard label="Total Sent" count="128" icon={<Mail className="w-5 h-5" />} />
            <StatCard label="Confirmed" count="84" sub="42 RSVPs" color="text-primary" icon={<Users className="w-5 h-5" />} />
            <StatCard label="Pending" count="32" sub="Invites unopened" icon={<CalendarDays className="w-5 h-5" />} />
            <StatCard label="Declined" count="12" icon={<HelpCircle className="w-5 h-5" />} />
          </div>

          {/* Guest Table Container */}
          <div className="bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden min-w-[700px]">
            <div className="px-8 py-6 border-b border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                    <button className="text-sm font-bold text-primary border-b-2 border-primary pb-1 whitespace-nowrap">All Contacts</button>
                    <button className="text-sm font-medium text-secondary hover:text-primary pb-1 whitespace-nowrap">Waitlist</button>
                    <button className="text-sm font-medium text-secondary hover:text-primary pb-1 whitespace-nowrap">Dietary Needs</button>
                    <button className="text-sm font-medium text-secondary hover:text-primary pb-1 whitespace-nowrap">Plus Ones</button>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 text-xs font-semibold text-secondary px-4 py-2 bg-surface-container rounded-lg hover:bg-surface-container-high transition-all">
                        <Filter className="w-3.5 h-3.5" /> Filter
                    </button>
                    <button className="flex items-center gap-2 text-xs font-semibold text-secondary px-4 py-2 bg-surface-container rounded-lg hover:bg-surface-container-high transition-all">
                        <Download className="w-3.5 h-3.5" /> Export PDF
                    </button>
                </div>
            </div>

            <table className="w-full text-left">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-[0.15em]">Guest Name</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-[0.15em]">Status</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-[0.15em]">Seats</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-[0.15em]">Dietary</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-[0.15em]">Email</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-secondary uppercase tracking-[0.15em]"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {GUESTS.map(guest => (
                  <tr key={guest.id} className="hover:bg-surface-container-lowest transition-all group">
                    <td className="px-8 py-5">
                      <div className="font-serif text-lg text-on-surface">{guest.name}</div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                        guest.status === 'Attending' ? 'bg-primary/10 text-primary' : 
                        guest.status === 'Declined' ? 'bg-error/10 text-error' : 
                        'bg-secondary/10 text-secondary'
                      }`}>
                        {guest.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 font-sans text-sm text-on-surface">{guest.guests}</td>
                    <td className="px-8 py-5 font-sans text-xs text-secondary italic">{guest.dietary}</td>
                    <td className="px-8 py-5 font-sans text-sm text-secondary">{guest.email}</td>
                    <td className="px-8 py-5 text-right w-16">
                      <button className="p-2 text-secondary hover:text-primary transition-all rounded-lg hover:bg-surface-container opacity-0 group-hover:opacity-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="px-8 py-6 border-t border-outline-variant/20 flex justify-between items-center">
                <span className="text-xs text-secondary">Showing 5 of 128 guests</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container text-xs disabled:opacity-30" disabled>Previous</button>
                    <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container text-xs">Next</button>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-outline-variant/30 px-6 py-8 h-screen shrink-0">
      <Link to="/" className="font-serif text-2xl text-primary font-bold tracking-tight mb-12 ml-2">Card Studio</Link>
      
      <nav className="space-y-2 flex-grow">
        <SidebarItem icon={<LayoutDashboard />} label="Overview" active={active === 'overview'} to="/admin" />
        <SidebarItem icon={<Palette />} label="My Designs" active={active === 'designs'} to="/editor" />
        <SidebarItem icon={<ShoppingBag />} label="Orders" active={active === 'orders'} to="/pricing" />
        <SidebarItem icon={<Users />} label="Guest List" active={active === 'guests'} to="/guests" />
        <SidebarItem icon={<CalendarDays />} label="Wedding Events" active={active === 'events'} to="#" />
        <div className="pt-8 pb-4">
            <span className="text-[10px] font-bold text-outline-variant uppercase tracking-widest ml-4">Settings</span>
        </div>
        <SidebarItem icon={<Settings />} label="Preferences" active={active === 'settings'} to="#" />
        <SidebarItem icon={<HelpCircle />} label="Support Center" active={active === 'support'} to="#" />
      </nav>

      <div className="mt-auto bg-surface-container rounded-2xl p-4 border border-outline-variant/20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold">IS</div>
          <div>
            <p className="text-sm font-bold text-on-surface">Isabella's Event</p>
            <p className="text-[10px] text-secondary">Pro Plan • 12 days left</p>
          </div>
        </div>
        <button className="w-full text-[10px] uppercase font-bold tracking-widest text-primary hover:underline">View Public Site</button>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active, to }: { icon: React.ReactNode, label: string, active: boolean, to: string }) {
  const Icon = icon as React.ReactElement<{ className?: string }>;
  return (
    <Link to={to} className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
      active 
        ? 'bg-primary-container/20 text-primary shadow-sm border border-primary-container/30' 
        : 'text-secondary hover:text-primary hover:bg-surface-container'
    }`}>
      {React.cloneElement(Icon, { className: "w-5 h-5" })}
      <span className="font-semibold text-sm">{label}</span>
    </Link>
  );
}

function StatCard({ label, count, sub, color = "text-on-surface", icon }: { label: string, count: string, sub?: string, color?: string, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col gap-1">
      <div className="flex justify-between items-start mb-2">
         <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{label}</span>
         <div className="text-primary/40">{icon}</div>
      </div>
      <div className={`text-4xl font-serif ${color}`}>{count}</div>
      {sub && <div className="text-[10px] text-secondary font-medium tracking-wide italic">{sub}</div>}
    </div>
  );
}
