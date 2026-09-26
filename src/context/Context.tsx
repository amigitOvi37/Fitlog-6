'use client';

import React, { createContext, ReactNode, useState, useEffect } from "react";
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

  const [todaysPlans, setTodaysPlans] = useState<PlannedExercise[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<SavedExercise[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedPlans = localStorage.getItem("todaysPlans");
    const storedSaved = localStorage.getItem("savedWorkouts");

    if (storedPlans) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional: hydrate from localStorage after initial render
        setTodaysPlans(JSON.parse(storedPlans));
      } catch {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional: hydrate from localStorage after initial render
        setTodaysPlans([]);
      }
    }
    if (storedSaved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional: hydrate from localStorage after initial render
        setSavedWorkouts(JSON.parse(storedSaved));
      } catch {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- Intentional: hydrate from localStorage after initial render
        setSavedWorkouts([]);
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("todaysPlans", JSON.stringify(todaysPlans));
    }
  }, [todaysPlans, isHydrated]);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("savedWorkouts", JSON.stringify(savedWorkouts));
    }
  }, [savedWorkouts, isHydrated]);

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