import React from 'react';
import { 
  Users, 
  ShoppingBag, 
  TrendingUp, 
  ArrowUpRight, 
  MoreVertical, 
  Search, 
  Bell,
  Mail,
  Calendar
} from 'lucide-react';
import { Sidebar } from './GuestListPage';

const ORDERS = [
  { id: "#CS-8812", client: "Sophia Miller", item: "Artisan Suite", status: "Active", total: "$59.00", date: "Oct 12" },
  { id: "#CS-8811", client: "James Wilson", item: "Essential Pack", status: "Pending", total: "$29.00", date: "Oct 11" },
  { id: "#CS-8810", client: "Dr. Aaron Rossi", item: "Full Estate", status: "Processing", total: "$149.00", date: "Oct 10" },
  { id: "#CS-8809", client: "Elena Vance", item: "Custom Floral", status: "Shipped", total: "$89.50", date: "Oct 09" }
];

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      <Sidebar active="overview" />

      <main className="flex-grow flex flex-col min-w-0">
        <header className="h-20 border-b border-outline-variant/30 flex items-center justify-between px-8 bg-white">
          <div className="flex items-center gap-3">
             <h1 className="font-serif text-2xl text-on-surface">Admin Console</h1>
             <span className="text-[10px] font-bold text-secondary uppercase tracking-widest opacity-60">System Version 2.4.1</span>
          </div>
          <div className="flex items-center gap-6">
             <div className="relative">
                <Search className="w-5 h-5 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
                <input className="bg-surface-container py-2 pl-10 pr-4 rounded-full text-sm outline-none w-64 focus:ring-1 focus:ring-primary border border-transparent" placeholder="Search templates, orders..." />
             </div>
             <div className="flex items-center gap-4 border-l border-outline-variant/20 pl-6">
                <Bell className="w-5 h-5 text-secondary cursor-pointer" />
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-xs font-bold">A</div>
             </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <KPICard label="Total Revenue" value="$42,880" drift="+12.4%" icon={<TrendingUp />} />
                <KPICard label="Active Subscriptions" value="1,248" drift="+5.2%" icon={<Users />} />
                <KPICard label="Card Orders" value="842" drift="+22.1%" icon={<ShoppingBag />} />
                <KPICard label="Conversion Rate" value="4.8%" drift="-0.4%" isNegative icon={<ArrowUpRight />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Recent Orders */}
                <div className="lg:col-span-8 bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col">
                    <div className="px-8 py-6 border-b border-outline-variant/20 flex justify-between items-center">
                        <h2 className="font-serif text-xl text-on-surface">Recent Orders</h2>
                        <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">View All Sales</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-surface-container-low font-bold text-[10px] text-secondary uppercase tracking-widest">
                                <tr>
                                    <th className="px-8 py-4">Order ID</th>
                                    <th className="px-8 py-4">Client</th>
                                    <th className="px-8 py-4">Item</th>
                                    <th className="px-8 py-4">Status</th>
                                    <th className="px-8 py-4">Total</th>
                                    <th className="px-8 py-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant/20">
                                {ORDERS.map(order => (
                                    <tr key={order.id} className="hover:bg-surface-container-low transition-all">
                                        <td className="px-8 py-4 text-sm font-semibold text-primary">{order.id}</td>
                                        <td className="px-8 py-4 text-sm text-on-surface font-medium">{order.client}</td>
                                        <td className="px-8 py-4 text-xs text-secondary">{order.item}</td>
                                        <td className="px-8 py-4">
                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                                                order.status === 'Active' ? 'bg-primary/10 text-primary' : 
                                                order.status === 'Pending' ? 'bg-secondary-container text-on-secondary-container' : 
                                                'bg-surface-container-high text-secondary'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 text-sm font-semibold">{order.total}</td>
                                        <td className="px-8 py-4 text-xs text-secondary">{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* System Tasks */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
                        <h2 className="font-serif text-xl text-on-surface mb-6">Action Required</h2>
                        <div className="space-y-4">
                            <TaskItem title="Approve 12 New Templates" desc="From designer workshop" tag="High" />
                            <TaskItem title="Customer Support Ticket" desc="Re: Refund for Order #CS-8711" tag="Urgent" color="bg-error/10 text-error" />
                            <TaskItem title="Server Maintenance" desc="Scheduled for 3:00 AM UTC" tag="Info" color="bg-secondary-container text-secondary" />
                            <TaskItem title="Export Weekly Report" desc="For quarterly stakeholder sync" tag="New" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}

function KPICard({ label, value, drift, icon, isNegative = false }: { label: string, value: string, drift: string, icon: React.ReactNode, isNegative?: boolean }) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div className="flex justify-between items-start mb-4">
               <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                  {icon}
               </div>
               <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isNegative ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'}`}>
                  {drift}
               </span>
            </div>
            <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{label}</p>
            <p className="text-3xl font-serif text-on-surface mt-1">{value}</p>
        </div>
    );
}

function TaskItem({ title, desc, tag, color = "bg-primary/10 text-primary" }: { title: string, desc: string, tag: string, color?: string }) {
    return (
        <div className="p-4 rounded-xl border border-outline-variant/20 hover:border-primary-container/40 transition-all cursor-pointer bg-surface-container-lowest">
            <div className="flex justify-between items-start mb-1">
               <h3 className="text-sm font-bold text-on-surface">{title}</h3>
               <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${color}`}>{tag}</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed">{desc}</p>
        </div>
    );
}
