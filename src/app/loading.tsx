import React from 'react';

const Loading = () => {
   return (
     <div>
       <div className="flex min-h-screen items-center justify-center bg-[#0d0f14]">
         <div className="flex flex-col items-center gap-4">
           <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#252832] border-t-[#a3e635]" />

           <p className="text-sm text-gray-400">Loading FitLog...</p>
         </div>
       </div>
     </div>
   );
};

export default Loading;