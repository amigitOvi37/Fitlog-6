'use client';
import React, { useState, useContext } from 'react';
import { ChevronDown } from 'lucide-react';
import { AllContext } from '@/context/Context';
import TodaysPlanCard from '@/components/myplan/TodaysPlanCard';
import Empty from '@/components/myplan/Empty';

const MyPlan = () => {

   const [planActiveTab, setPlanActiveTab] = useState('saved'); // 'todays' or 'saved'
   const [sortBy, setSortBy] = useState('Duration');
   const { todaysPlans, savedWorkouts, setTodaysPlans, setSavedWorkouts } = useContext(AllContext);

   return (
     <div>
       <div className="min-h-screen bg-[#0d0f14] text-white p-6 md:p-12 font-sans antialiased selection:bg-[#ccff00] selection:text-black">
         <div className="max-w-6xl mx-auto space-y-6">
           {}
           {/* Header Section */}
           <div className="space-y-1">
             <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase text-white font-sans">
               MY PLAN
             </h1>
             <p className="text-[#8a8f9d] text-sm md:text-base font-normal">
               Cap of five lifts for today. Finish them, then load more.
             </p>
           </div>

           {}
           {/* Stats Summary Card */}
           <div className="bg-[#12151d] border border-[#1e2330] rounded-2xl p-6 md:p-8 grid grid-cols-3 divide-x divide-[#1e2330]">
              {/* Exercises Stat */}
            <div className="flex flex-col justify-center pr-4 md:pr-8">
              <span className="text-[#8a8f9d] text-xs md:text-sm font-medium mb-1">
                Exercises
              </span>
              <span className="text-3xl md:text-5xl font-black tracking-wide text-[#ccff00]">
                {planActiveTab === "todays" ? todaysPlans.length : savedWorkouts.length}
              </span>
            </div>

            {/* Minutes Stat */}
            <div className="flex flex-col justify-center px-4 md:px-8">
              <span className="text-[#8a8f9d] text-xs md:text-sm font-medium mb-1">
                Minutes
              </span>
              <span className="text-3xl md:text-5xl font-black tracking-wide text-white">
                {Math.round((planActiveTab === "todays" ? todaysPlans : savedWorkouts).reduce((sum, w) => sum + (w.duration || 0), 0))}
              </span>
            </div>

            {/* Calories Stat */}
            <div className="flex flex-col justify-center pl-4 md:pl-8">
              <span className="text-[#8a8f9d] text-xs md:text-sm font-medium mb-1">
                Calories
              </span>
              <span className="text-3xl md:text-5xl font-black tracking-wide text-white">
                {(planActiveTab === "todays" ? todaysPlans : savedWorkouts).reduce((sum, w) => sum + (w.caloriesBurned || 0), 0)}
              </span>
            </div>
           </div>

           {}
           {/* Navigation & Controls Bar */}
           <div className="flex flex-row items-center justify-between pt-2 pb-1">
             {/* Toggle Tabs */}
             <div className="bg-[#12151d] border border-[#1e2330] p-1 rounded-xl inline-flex items-center space-x-1">
               <button
                 onClick={() => setPlanActiveTab("todays")}
                 className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                   planActiveTab === "todays"
                     ? "bg-[#1e2330] text-white shadow-sm"
                     : "text-[#8a8f9d] hover:text-white"
                 }`}
               >
                 Today's Plan
               </button>
               <button
                 onClick={() => setPlanActiveTab("saved")}
                 className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                   planActiveTab === "saved"
                     ? "bg-[#1e2330] text-white shadow-sm"
                     : "text-[#8a8f9d] hover:text-white"
                 }`}
               >
                 Saved
               </button>
             </div>

             {/* Sort By Dropdown */}
             <div className="flex items-center space-x-2">
               <span className="text-[#8a8f9d] text-sm font-medium hidden sm:inline">
                 Sort By
               </span>
               <button className="bg-[#12151d] border border-[#1e2330] hover:border-[#2a3040] text-white px-3.5 py-1.5 rounded-xl text-sm font-medium inline-flex items-center space-x-2 transition-colors">
                 <span>{sortBy}</span>
                 <ChevronDown className="w-4 h-4 text-[#8a8f9d]" />
               </button>
             </div>
           </div>

           {}
           {/* Main Content Area / Empty State */}
           {
              planActiveTab === "todays" ? (todaysPlans.length > 0 ? todaysPlans.map((workout) => (
                 <TodaysPlanCard key={workout.planId} workout={workout} mode="todays" setTodaysPlans={setTodaysPlans} setSavedWorkouts={setSavedWorkouts} />
              )) : (
                <Empty />
              )) : savedWorkouts.length > 0 ? savedWorkouts.map((workout) => (
                 <TodaysPlanCard key={workout.savedId} workout={workout} mode="saved" setTodaysPlans={setTodaysPlans} setSavedWorkouts={setSavedWorkouts} />
              )) : (
                <Empty />
              )
           }
         </div>
       </div>
     </div>
   );
};

export default MyPlan;