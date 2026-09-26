'use client';
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { IExercise } from "@/types/Type";
import { AllContext } from "@/context/Context";

const getWorkouts = async (): Promise<IExercise[]> => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts data:", error);
    return [];
  }
};

export default function WorkoutDetailsPage() {
  const params = useParams<{ id: string }>();
  const [workout, setWorkout] = useState<IExercise | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWorkout = async () => {
      const workouts = await getWorkouts();
      const found = workouts.find((w) => String(w.id) === params.id);
      setWorkout(found ?? null);
      setLoading(false);
    };
    loadWorkout();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0a0a0a] text-white">
        Loading...
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0a0a0a] text-white">
        Workout not found
      </div>
    );
  }

  return <WorkoutDetails workout={workout} />;
}

// ...

const WorkoutDetails = ({ workout }: { workout: IExercise }) => {
  const { todaysPlans, setTodaysPlans, savedWorkouts, setSavedWorkouts } = useContext(AllContext);

  const handleAddToPlan = () => {
    setTodaysPlans([...todaysPlans, { ...workout, planId: `${workout.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }]);
  };

  const handleSaveForLater = () => {
    setSavedWorkouts([...savedWorkouts, { ...workout, savedId: `${workout.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }]);
  };
  return (
    <div className="bg-[#0B0F17]">
      <div className="bg-[#0B0F17] text-white p-6 max-w-5xl mx-auto font-sans m-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-100 rounded-2xl overflow-hidden bg-gray-800">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
              alt={workout.name || "Workout Image"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Side - Information */}
          <div className="flex flex-col space-y-6">
            {/* Header & Tags */}
            <div>
              <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white mb-2">
                {workout.name}
              </h1>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {workout.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {workout.muscleGroups?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#C6FF00] text-black text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Details Table Card */}
            <div className="bg-[#121824] rounded-xl p-4 divide-y divide-gray-800/60 border border-gray-800/40">
              {/* Equipment */}
              <div className="flex justify-between items-center py-2.5 first:pt-0 text-sm">
                <span className="text-gray-400 font-medium tracking-wide uppercase text-xs">
                  Equipment
                </span>
                <span className="text-gray-200 font-semibold">
                  {workout.equipment || "N/A"}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex justify-between items-center py-2.5 text-sm">
                <span className="text-gray-400 font-medium tracking-wide uppercase text-xs">
                  Difficulty
                </span>
                <span className="text-gray-200 font-semibold">
                  {workout.difficulty || "N/A"}
                </span>
              </div>

              {/* Sets */}
              <div className="flex justify-between items-center py-2.5 text-sm">
                <span className="text-gray-400 font-medium tracking-wide uppercase text-xs">
                  Sets
                </span>
                <span className="text-gray-200 font-semibold">
                  {workout.sets || "N/A"}
                </span>
              </div>

              {/* Reps */}
              <div className="flex justify-between items-center py-2.5 text-sm">
                <span className="text-gray-400 font-medium tracking-wide uppercase text-xs">
                  Reps
                </span>
                <span className="text-gray-200 font-semibold">
                  {workout.reps || "N/A"}
                </span>
              </div>

              {/* Duration */}
              <div className="flex justify-between items-center py-2.5 text-sm">
                <span className="text-gray-400 font-medium tracking-wide uppercase text-xs">
                  Duration
                </span>
                <span className="text-gray-200 font-semibold">
                  {workout.duration ? `${workout.duration} min` : "N/A"}
                </span>
              </div>

              {/* Calories */}
              <div className="flex justify-between items-center py-2.5 text-sm">
                <span className="text-gray-400 font-medium tracking-wide uppercase text-xs">
                  Calories
                </span>
                <span className="text-gray-200 font-semibold">
                  {workout.caloriesBurned
                    ? `${workout.caloriesBurned} kcal`
                    : "N/A"}
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-between items-center py-2.5 last:pb-0 text-sm">
                <span className="text-gray-400 font-medium tracking-wide uppercase text-xs">
                  Rating
                </span>
                <span className="text-gray-200 font-semibold">
                  {workout.rating || "N/A"}
                </span>
              </div>
            </div>

            {/* Instructions */}
            {workout.instructions && workout.instructions.length > 0 && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                  Instructions
                </h2>

                <ol className="space-y-3 text-sm text-gray-300">
                  {workout.instructions.map((step, index) => (
                    <li key={index} className="flex gap-2 leading-relaxed">
                      <span className="font-medium text-gray-400">
                        {index + 1}.
                      </span>

                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleAddToPlan}
                className="flex-1 bg-[#C6FF00] hover:bg-[#b0e600] text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Add to today's plan
              </button>

              <button
                onClick={handleSaveForLater}
                className="flex-1 bg-[#121824] hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-xl border border-gray-700/60 flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
