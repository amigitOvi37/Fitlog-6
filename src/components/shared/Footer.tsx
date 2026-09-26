import React from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
   return (
     <div>
       <footer className="w-full bg-[#0a0a0c] border-t border-zinc-900/80 px-6 sm:px-12 md:px-16 py-6 transition-all">
         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
           {/* Left Section: Lime Dumbbell + FITLOG Text */}
           <div className="flex items-center gap-3">
             <Image
               src={Logo}
               alt="FitLog Logo"
               width={24}
               height={24}
               className="w-6 h-6 text-[#a3e635] stroke-[2.5]"
             />
             <span className="font-extrabold tracking-wider text-white text-lg sm:text-xl font-sans uppercase">
               FITLOG
             </span>
           </div>

           {/* Right Section: Copyright & Tagline */}
           <div className="text-zinc-400 text-xs sm:text-sm font-normal tracking-wide text-center sm:text-right">
             © 2026 FitLog — Workout Library. Train hard, log honest.
           </div>
         </div>
       </footer>
     </div>
   );
};

export default Footer;