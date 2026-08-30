import { Exercise } from "./Exercise";

export type Workout = {
    workoutName: string;
    description: string;
    exercises: Exercise[]
};