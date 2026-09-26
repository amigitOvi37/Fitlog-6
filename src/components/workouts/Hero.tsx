import React from 'react';
import Image from 'next/image';
import HeroImg from '@/assets/banner.png'

const Hero = () => {

   const handleBrowse = () => {
      document.getElementById('workout-gallery')?.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <div className="flex justify-center items-center min-h-screen bg-[#0a0a0a] px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl bg-[#13141a] border border-[#1e2029] rounded-2xl shadow-2xl overflow-hidden relative p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-3/5 z-10 flex flex-col items-start text-left">
            {}
            <span className="text-[#a3eb00] text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6">
              WORKOUT LIBRAR
            </span>

            {}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6 font-sans">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            {}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mb-8 font-normal">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {}
            <button
              onClick={handleBrowse}
              className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-[#ccff00]/20 active:scale-[0.98]"
            >
              BROWSE WORKOUTS
            </button>
          </div>

          {/* Right Column - Gym Equipment Anatomical Illustration */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end items-center relative min-h-70 sm:min-h-85">
            {}
            <Image
              src={HeroImg}
              alt="Gym Equipment Anatomical Illustration"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    );
};

export default Hero;