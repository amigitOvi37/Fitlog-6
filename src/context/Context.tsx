'use client';

import React, { createContext, ReactNode, useState } from "react";
import { IExercise } from "@/types/Type";
import { PlannedExercise, SavedExercise } from "@/types/Type";

interface AllCon {
  activeTab: string;
  setActiveTab: (tab: string) => void;

  planCount: number;

  savedCount: number;

  workouts: IExercise[];
  setWorkouts: (workouts: IExercise[]) => void;

  todaysPlans: PlannedExercise[];
  setTodaysPlans: React.Dispatch<React.SetStateAction<PlannedExercise[]>>;

  savedWorkouts: SavedExercise[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<SavedExercise[]>>;
}

export const AllContext = createContext<AllCon>({
  activeTab: "Workouts",
  setActiveTab: () => {},

  planCount: 0,

  savedCount: 0,

  workouts: [],
  setWorkouts: () => {},

  todaysPlans: [],
  setTodaysPlans: () => {},

  savedWorkouts: [],
  setSavedWorkouts: () => {},
});

const AllContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState("Workouts");

  const [workouts, setWorkouts] = useState<IExercise[]>([]);

  const [todaysPlans, setTodaysPlans] =
    useState<PlannedExercise[]>([]);

  const [savedWorkouts, setSavedWorkouts] =
    useState<SavedExercise[]>([]);

  const sharedData = {
    activeTab,
    setActiveTab,

    planCount: todaysPlans.length,

    savedCount: savedWorkouts.length,

    workouts,
    setWorkouts,

    todaysPlans,
    setTodaysPlans,

    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <AllContext.Provider value={sharedData}>
      {children}
    </AllContext.Provider>
  );
};

export default AllContextProvider;