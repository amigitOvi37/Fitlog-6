import React from "react";
import { Clock, Flame, Star } from "lucide-react";
import { IExercise } from "@/types/Type";
import Image from "next/image";
import Link from "next/link";

const WorkoutCard = ({ workout }: { workout: IExercise }) => {
  return (
    <Link href={`/details/${workout.id}`} className="block">
      <div className="max-w-md w-full bg-[#13151b] rounded-3xl overflow-hidden shadow-xl text-white font-sans border border-slate-800/50 cursor-pointer hover:scale-[1.02] transition-transform duration-200">
        {/* Card Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {workout.muscleGroups.map((tag, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black font-extrabold text-xs tracking-wide px-3.5 py-1.5 rounded-full uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-black uppercase tracking-wider text-white mb-1">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="text-slate-400 text-sm font-medium mb-5">
            {workout.equipment}
          </p>

          {/* Divider */}
          <div className="border-t border-slate-800/80 mb-4" />

          {/* Details Footer */}
          <div className="flex items-center gap-6 text-slate-300 text-sm font-medium">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{workout.duration}</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-slate-400" />
              <span>{workout.caloriesBurned}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-slate-400" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
