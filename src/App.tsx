/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Star, 
  Mail, 
  Search, 
  LayoutDashboard, 
  Palette, 
  ShoppingBag, 
  Users, 
  CalendarDays, 
  Settings, 
  HelpCircle, 
  Sparkles,
  ZoomIn,
  LayoutGrid,
  Lock,
  Plus,
  Share2,
  FileDown
} from 'lucide-react';

// --- Pages ---
import LandingPage from './pages/LandingPage';
import GalleryPage from './pages/GalleryPage';
import EditorPage from './pages/EditorPage';
import PricingPage from './pages/PricingPage';
import GuestListPage from './pages/GuestListPage';
import RSVPPage from './pages/RSVPPage';
import MemoriesPage from './pages/MemoriesPage';
import CountdownPage from './pages/CountdownPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminTemplates from './pages/AdminTemplates';
import PlannerPortal from './pages/PlannerPortal';

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isAdminView = location.pathname.startsWith('/admin') || location.pathname === '/planner';
  const isGuestView = location.pathname === '/rsvp' || location.pathname === '/memories';

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence mode="wait">
        {/* @ts-ignore - key is valid for React components and needed by AnimatePresence */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
          <Route path="/editor" element={<PageTransition><EditorPage /></PageTransition>} />
          <Route path="/pricing" element={<PageTransition><PricingPage /></PageTransition>} />
          <Route path="/guests" element={<PageTransition><GuestListPage /></PageTransition>} />
          <Route path="/rsvp" element={<PageTransition><RSVPPage /></PageTransition>} />
          <Route path="/memories" element={<PageTransition><MemoriesPage /></PageTransition>} />
          <Route path="/countdown" element={<PageTransition><CountdownPage /></PageTransition>} />
          <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
          <Route path="/admin/templates" element={<PageTransition><AdminTemplates /></PageTransition>} />
          <Route path="/planner" element={<PageTransition><PlannerPortal /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

