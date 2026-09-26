'use client';
import React, { useContext, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { AllContext } from '@/context/Context';

const Navbar = () => {

   const {activeTab, setActiveTab, planCount, savedCount} = useContext(AllContext);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   
   return (
     <div>
       <header className="w-full bg-[#0d0d0d] border-b border-[#1f1f1f] sticky top-0 z-50 transition-colors">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           {/* LEFT: LOGO */}
           <div className="flex items-center space-x-3 cursor-pointer group">
             <div className="text-[#ccff00] transform -rotate-45 group-hover:scale-110 transition-transform duration-200">
               <Image
                 src={Logo}
                 alt="FitLog Logo"
                 width={24}
                 height={24}
                 className="w-6 h-6 text-[#a3e635] stroke-[2.5]"
               />
             </div>
             <span className="font-extrabold text-xl tracking-wider text-white font-sans uppercase">
               FITLOG
             </span>
           </div>

           {/* CENTER: NAV LINKS */}
           <nav className="hidden md:flex items-center space-x-2">
             <button
               onClick={() => setActiveTab("Workouts")}
               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                 activeTab === "Workouts"
                   ? "bg-[#18260a] text-[#ccff00] border border-[#2b4211]/50 shadow-[0_0_15px_rgba(204,255,0,0.07)]"
                   : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
               }`}
             >
               Workouts
             </button>
             <button
               onClick={() => setActiveTab("My Plan")}
               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                 activeTab === "My Plan"
                   ? "bg-[#18260a] text-[#ccff00] border border-[#2b4211]/50 shadow-[0_0_15px_rgba(204,255,0,0.07)]"
                   : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
               }`}
             >
               My Plan
             </button>
           </nav>

           {/* RIGHT: COUNTERS & ACTION BADGES */}
           <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
             {/* PLAN COUNTER */}
             <div className="flex items-center space-x-2 select-none">
               <span className="text-gray-300">Plan</span>
               <span className="w-6 h-6 rounded-full bg-[#ccff00] text-black font-bold flex items-center justify-center text-xs shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                 {planCount}
               </span>
             </div>

             {/* SAVED COUNTER */}
             <div className="flex items-center space-x-2 select-none">
               <span className="text-gray-300">Saved</span>
               <span className="w-6 h-6 rounded-full bg-[#1a1a1a] text-gray-300 border border-[#333333] font-bold flex items-center justify-center text-xs">
                 {savedCount}
               </span>
             </div>
           </div>

           {/* MOBILE MENU TOGGLE */}
           <div className="flex items-center md:hidden space-x-3">
             <div className="flex items-center space-x-1 bg-[#151515] px-2.5 py-1 rounded-full border border-[#262626] text-xs">
               <span className="text-gray-400">P:</span>
               <span className="text-[#ccff00] font-bold">{planCount}</span>
               <span className="text-gray-600 px-1">|</span>
               <span className="text-gray-400">S:</span>
               <span className="text-gray-200 font-bold">{savedCount}</span>
             </div>

             <button
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               className="p-2 rounded-lg bg-[#141414] text-gray-300 hover:text-white border border-[#262626]"
               aria-label="Toggle Menu"
             >
               {mobileMenuOpen ? (
                 <X className="w-5 h-5" />
               ) : (
                 <Menu className="w-5 h-5" />
               )}
             </button>
           </div>
         </div>

         {/* MOBILE MENU DROPDOWN */}
         {mobileMenuOpen && (
           <div className="md:hidden bg-[#0a0a0a] border-b border-[#1f1f1f] px-4 pt-3 pb-5 space-y-3">
             <button
               onClick={() => {
                 setActiveTab("Workouts");
                 setMobileMenuOpen(false);
               }}
               className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                 activeTab === "Workouts"
                   ? "bg-[#18260a] text-[#ccff00]"
                   : "text-gray-400 bg-[#121212]"
               }`}
             >
               <span>Workouts</span>
               {activeTab === "Workouts" && (
                 <div className="w-2 h-2 rounded-full bg-[#ccff00]"></div>
               )}
             </button>
             <button
               onClick={() => {
                 setActiveTab("My Plan");
                 setMobileMenuOpen(false);
               }}
               className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                 activeTab === "My Plan"
                   ? "bg-[#18260a] text-[#ccff00]"
                   : "text-gray-400 bg-[#121212]"
               }`}
             >
               <span>My Plan</span>
               {activeTab === "My Plan" && (
                 <div className="w-2 h-2 rounded-full bg-[#ccff00]"></div>
               )}
             </button>
           </div>
         )}
       </header>
     </div>
   );
};

export default Navbar;