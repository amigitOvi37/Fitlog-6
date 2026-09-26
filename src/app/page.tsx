'use client';
import Hero from "@/components/workouts/Hero";
import { AllContext } from "@/context/Context";
import { useContext } from "react";
import WorkoutGallary from "@/components/workouts/WorkoutGallary";
import MyPlan from "@/components/myplan/MyPlan";

export default function Home() {
  const { activeTab } = useContext(AllContext);

  if (activeTab === "Workouts")
    return (
      <div>
        <Hero />
        <WorkoutGallary />
      </div>
    );

  return (
    <div>
      <MyPlan />
    </div>
  );
}
