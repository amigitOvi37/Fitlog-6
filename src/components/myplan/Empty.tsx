import React, { useContext } from 'react';
import { AllContext } from '@/context/Context';

const Empty = () => {

   const { setActiveTab } = useContext(AllContext);

   return (
      <div>
         <div className="bg-[#12151d] border border-dashed border-[#1e2330] rounded-2xl p-12 md:p-24 flex flex-col items-center justify-center text-center min-h-85">
              <h2 className="text-xl md:text-2xl font-black tracking-wide uppercase text-white mb-2">
                NOTHING HERE YET
              </h2>
              <p className="text-[#8a8f9d] text-sm md:text-base max-w-md mb-6">
                Browse the library and add a lift to get today moving.
              </p>
              <button
                onClick={() => setActiveTab("Workouts")}
                className="bg-[#ccff00] hover:bg-[#b5e600] active:scale-95 text-black font-extrabold text-sm px-7 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)]"
              >
                Go to workouts
              </button>
         </div>
      </div>
   );
};

export default Empty;