export interface IExercise {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number; 
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export type PlannedExercise = IExercise & {
  planId: string;
};

export type SavedExercise = IExercise & {
  savedId: string;
};