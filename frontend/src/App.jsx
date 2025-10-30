import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Notebook, BarChart3, PlusCircle, Settings, User, Info } from "lucide-react";
import NeonBackground from "./components/NeonBackground"; // 🌌 new animated background

// Import pages
import Dashboard from "./pages/Dashboard";
import NewEntry from "./pages/NewEntry";
import Journal from "./pages/Journal";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import SettingsPage from "./pages/Settings";
import About from "./pages/About";

export default function App() {
  const navItems = [
    { to: "/", label: "Dashboard", icon: <Home size={18} /> },
    { to: "/new", label: "New Entry", icon: <PlusCircle size={18} /> },
    { to: "/journal", label: "Journal", icon: <Notebook size={18} /> },
    { to: "/stats", label: "Statistics", icon: <BarChart3 size={18} /> },
    { to: "/profile", label: "Profile", icon: <User size={18} /> },
    { to: "/settings", label: "Settings", icon: <Settings size={18} /> },
    { to: "/about", label: "About", icon: <Info size={18} /> },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#001F3F] via-[#003C7E] to-[#001F3F] text-white flex flex-col">
      {/* 🌌 Futuristic Neon Background */}
      <NeonBackground />

      {/* ✨ Navbar */}
      <header className="glass sticky top-0 z-50 border-b border-cyan-500/40 backdrop-blur-lg shadow-[0_0_25px_#00ffff22] bg-[#001f3f88]">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.h1
            className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-[0_0_8px_#00ffffaa]"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mind Tracker
          </motion.h1>

          {/* Navigation */}
          <nav className="flex space-x-5 text-cyan-200 font-medium">
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 transition-all duration-300 px-2 py-1 rounded-md ${
                    isActive
                      ? "text-cyan-300 bg-cyan-900/30 shadow-[0_0_10px_#00ffff55]"
                      : "hover:text-cyan-400 hover:bg-cyan-900/20"
                  }`
                }
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* ✨ Page Content */}
      <main className="flex-1 py-10 px-4 md:px-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/new" element={<NewEntry />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/stats" element={<Statistics />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ✨ Footer */}
      <footer className="glass text-center py-3 border-t border-cyan-500/40 text-sm text-cyan-200 backdrop-blur-md bg-[#002a4a88]">
        <p>
          Made with 💙 by{" "}
          <span className="text-cyan-400 font-semibold">Anjali Verma</span> | © 2025 Mind Tracker
        </p>
      </footer>
    </div>
  );
}
