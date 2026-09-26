"use client";
import React, { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { IExercise } from "@/types/Type";

const getWorkouts = async () => {
  try {
    const response = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const WorkoutGallary = () => {
  const [workouts, setWorkouts] = useState<IExercise[]>([]);

  useEffect(() => {
    getWorkouts().then(setWorkouts);
  }, []);

  return (
    <div
      id="workout-gallery"
      className="flex flex-col justify-center items-center min-h-screen bg-[#0a0a0a] px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="w-full max-w-7xl mb-8 p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
          THE LIBRARY
        </h1>
        <p className="text-gray-400 mt-2 text-base sm:text-lg">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-14 w-full max-w-7xl">
        {workouts.map((workout: IExercise) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutGallary;
