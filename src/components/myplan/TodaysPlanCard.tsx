'use client';
import React, { useState } from 'react';
import { Clock, Flame, Star, Check, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlannedExercise, SavedExercise } from '@/types/Type';

const TodaysPlanCard = ({ workout, mode, setTodaysPlans, setSavedWorkouts }: {workout: PlannedExercise | SavedExercise; mode: 'todays' | 'saved'; setTodaysPlans: React.Dispatch<React.SetStateAction<PlannedExercise[]>>; setSavedWorkouts: React.Dispatch<React.SetStateAction<SavedExercise[]>>;}) => {

    const [isDone, setIsDone] = useState(false);

    const isTodaysPlan = mode === 'todays';


    return (
     <div>
        <div className="w-full">
         {}
         <div className="bg-[#11141C] border border-[#1E2330] rounded-2xl p-3 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xl transition-all duration-300 hover:border-[#282E40]">
           {/* Left Section: Image + Content Details */}
           <div className="flex items-center gap-4 flex-1 min-w-0">
             {/* Thumbnail Image */}
             <div className="relative shrink-0 w-28 h-20 sm:w-36 sm:h-22 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50">
               <Image
                 src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                 alt="image"
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 112px, 144px"
               />
               <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
             </div>

             {/* Exercise Info */}
             <div className="flex flex-col justify-center min-w-0">
               <h2 className="text-white text-lg sm:text-xl font-black uppercase tracking-wider truncate leading-tight">
                 {workout.name}
               </h2>
               <p className="text-[#8E95A5] text-sm font-medium mt-0.5">
                 {workout.equipment}
               </p>

               {/* Exercise Stats */}
               <div className="flex items-center gap-4 text-xs sm:text-sm font-medium text-slate-200 mt-2.5 flex-wrap">
                 {/* Duration */}
                 <div className="flex items-center gap-1.5">
                   <Clock className="w-4 h-4 text-[#D2FF00] stroke-[2.2]" />
                   <span>{workout.duration}</span>
                 </div>

                 {/* Calories */}
                 <div className="flex items-center gap-1.5">
                   <Flame className="w-4 h-4 text-[#D2FF00] fill-[#D2FF00]/20 stroke-[2.2]" />
                   <span>{workout.caloriesBurned}</span>
                 </div>

                 {/* Rating */}
                 <div className="flex items-center gap-1.5">
                   <Star className="w-4 h-4 text-[#D2FF00] stroke-[2.2]" />
                   <span>{workout.rating}</span>
                 </div>
               </div>
             </div>
           </div>

{/* Right Section: Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800/60">
              {/* View Details Button */}
              <Link href={`/details/${workout.id}`} className="inline-block">
                <button className="px-5 py-2.5 rounded-full border border-slate-700/80 hover:border-slate-500 bg-transparent text-slate-200 text-xs sm:text-sm font-medium transition-all duration-200 hover:bg-slate-800/50 active:scale-[0.98] whitespace-nowrap">
                  View Details
                </button>
              </Link>

              {/* Mark as Done / Completed Button (today's plan only) */}
              {isTodaysPlan && (
                <button
                  onClick={() => setIsDone(!isDone)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-200 active:scale-[0.98] shadow-lg whitespace-nowrap ${
                    isDone
                      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                      : "bg-[#D2FF00] text-black hover:bg-[#c5f000] hover:shadow-[#d2ff00]/10"
                  }`}
                >
                  <Check className="w-4 h-4 stroke-3" />
                  <span>{isDone ? "Done" : "Mark as Done"}</span>
                </button>
              )}

              {/* Close / Dismiss Button */}
              <button
                 onClick={() => {
                   if (isTodaysPlan) {
                     setTodaysPlans(prev => prev.filter(p => p.planId !== (workout as PlannedExercise).planId));
                   } else {
                     setSavedWorkouts(prev => prev.filter(w => w.savedId !== (workout as SavedExercise).savedId));
                   }
                 }}
                aria-label="Dismiss workout"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
         </div>
       </div>
     </div>
   );
};

export default TodaysPlanCard;