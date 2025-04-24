import React from 'react'

interface PageSectionProps {
  hasDivider?:boolean;
  children: React.ReactNode;
}


export default function ProgressBar({ fillPercentage = 40 }: { fillPercentage: number }) {

  return (
    <div className="w-6 h-40 bg-black flex items-center justify-center rounded">
      <div className="relative w-5 h-full bg-zinc-300 rounded-full overflow-hidden">
        <div
          className="absolute bottom-0 w-full bg-gradient-to-t from-lime-600 via-lime-400 to-green  rounded-full shadow-xl"
          style={{ height: `${fillPercentage}%` }}
        ></div>
      </div>
    </div>
  );}
// export default function ProgressBar({ fillPercentage = 40 }: { fillPercentage: number }) {
//   return (
//     <div className="w-4 h-40 bg-gray-300 rounded-full relative overflow-hidden">
//       <div
//         className="absolute bottom-0 w-full bg-gradient-to-t from-lime-500 via-lime-400 to-lime-300 rounded-full shadow-[0_0_8px_2px_#a3e635]"
//         style={{ height: `${fillPercentage}%` }}
//       />
//     </div>
//   );
// }
