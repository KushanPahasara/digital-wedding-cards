import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Copy, 
  Trash2, 
  Edit3,
  Eye,
  FileText
} from 'lucide-react';
import { Sidebar } from './GuestListPage';

const TEMPLATE_STATS = [
  { id: 1, name: "Ethereal Garden", usage: "12,402", revenue: "$360k", rating: "4.9", status: "Active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVCvkFAtBWulBCxWZzZrwIU_LhHl6l4O6bSNUr9JKuW1mnJNd95Vqf40VLOtq4LiBMK3VDqBPe2KkqY7U7hpMavxM6Q6jWgkyXaDWq24JaBZilEvje8xmnqw1USBcoYmfdRgvPLEJdLDwnorSmvani8lpLyEWTcUiIev5cZgOjJyzn3gKhztMxW0wi2o7K0C34xvW9x1C2P0PAYTc00dfWnqa5mKhyffldWeLJelkejE_lVhoutUoeKCwLs-L_ha6QawboYZ2V66M" },
  { id: 2, name: "Gilded Elegance", usage: "8,912", revenue: "$310k", rating: "4.8", status: "Active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ2lGSXE30vIatxhBAnrk6gsaLAuwIa5j4FObeK0zx_W6xzoG9cQVao5_lzuQ0GyO0t4NtH7i4wdZms4dt7h84Psxue8aETlh7NVM33dbH4U0kTe9W8xfU7GwjsiKBKVKvuwh1he_4aekhPnM6YlPkC-z5YRtCNPIz-FtApWBBqkTJGYzsdA0gQkV80BjjkPjdKh0tkX2RsFcV_xwRL_erWSflG6lCcpIbv9bTc81MkE1EGufJREeFsxgyNqik5PfFhaeY3XbyG6k" },
  { id: 3, name: "Modern Vows", usage: "15,201", revenue: "$0 (Free)", rating: "4.7", status: "Review", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyXoispZ4gckUUZoyLd4i98h0b2ysX5w8IJCP1LMsenVu4e9_8SYtdjyxVbjgxuGF6r-OooasrKdcw9VuG8oefU7ii_VyLPOgWD4Ev74JstZrBneNmtj7IPfeZA6urxmNG_A2cq8nPYmJujjQFJ0JwTM70RpJwcu6_YMMB4Ml3KVh1BlhH1Qo5r5oWAxXEAPQ97vzC7IxyMbTx3fwA-jb1gOBd7EwIIj7VjhAYOOU_PGwWZDgdzXrvbzD4gZEWuJEFjm_3UXfREiw" },
  { id: 4, name: "Imperial Heritage", usage: "3,112", revenue: "$140k", rating: "4.9", status: "Active", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpudyJB4-idHnrRr19OZ2pTR2DNpNi1yqbd3HAar1H17C4hLQOz0K8D5bO1DAiAfnzhv7ZYJwuuUDJKcmn6atYPbdWRtD9bwZrOxTXbKtolJt0AenM3vcqKRikiJJAkOvRnwM_-Gt7mgkYtPT3NZRs8z1Ol7VFH1Cc1xOXAulAh_m5lTLH-g4T0etlb-J1KrUdZTVj2x5UFAeEnIAgDvt4GRYpzTV24pqNe5UdrWI1DzPTWyHw0GWMx1D6t86Pft26hEGK0MNyKuE" }
];

export default function AdminTemplates() {
  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      <Sidebar active="overview" />

      <main className="flex-grow flex flex-col min-w-0">
        <header className="h-20 border-b border-outline-variant/30 flex items-center justify-between px-8 bg-white">
          <div className="flex items-center gap-3">
             <h1 className="font-serif text-2xl text-on-surface">Template Manager</h1>
             <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Library</span>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
                <input className="bg-surface-container py-2 pl-10 pr-4 rounded-full text-sm outline-none w-64" placeholder="Find template..." />
             </div>
             <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold shadow-sm flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                <Plus className="w-4 h-4" /> Create New
             </button>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-8">
               <div className="flex gap-4">
                  <button className="text-sm font-bold text-primary border-b-2 border-primary pb-1">All Templates (48)</button>
                  <button className="text-sm font-medium text-secondary hover:text-primary pb-1">Categories</button>
                  <button className="text-sm font-medium text-secondary hover:text-primary pb-1">Archives</button>
               </div>
               <button className="flex items-center gap-2 text-xs font-semibold text-secondary px-4 py-2 border border-outline-variant/30 rounded-lg bg-surface">
                  <Filter className="w-4 h-4" /> Filter by Style
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {TEMPLATE_STATS.map(template => (
                    <div key={template.id} className="bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all">
                        <div className="aspect-[4/3] bg-surface-container overflow-hidden relative">
                            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={template.img} alt={template.name} />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-all">
                                    <Edit3 className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-all">
                                    <Copy className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-error shadow-lg hover:scale-110 transition-all">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className={`text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-sm ${
                                    template.status === 'Active' ? 'bg-white text-primary' : 'bg-secondary-container text-on-secondary-container'
                                }`}>
                                    {template.status}
                                </span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-serif text-lg text-on-surface">{template.name}</h3>
                                <MoreVertical className="w-4 h-4 text-outline-variant cursor-pointer" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Usage</p>
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-3 h-3 text-primary" />
                                        <span className="text-sm font-semibold">{template.usage}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Pricing</p>
                                    <div className="flex items-center gap-1">
                                        <FileText className="w-3 h-3 text-primary" />
                                        <span className="text-sm font-semibold">{template.revenue}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-outline-variant/20 flex justify-between items-center">
                                <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline">Edit Canvas</button>
                                <div className="flex items-center gap-1 text-xs font-bold text-primary-container">
                                    <Eye className="w-3 h-3" />
                                    <span>Preview</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Add New Template Placeholder */}
                <div className="border-2 border-dashed border-outline-variant/50 rounded-2xl flex flex-col items-center justify-center p-8 bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer group min-h-[350px]">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary-container mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <Plus className="w-8 h-8" />
                    </div>
                    <p className="font-serif text-xl text-secondary">New Design</p>
                    <p className="text-xs text-secondary mt-1 opacity-60">Blank canvas or import PSD</p>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
