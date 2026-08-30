'use client'

import Button from "./Button"
import { workoutName, description, mockWorkoutPlan } from "@/data/mock-data"
import ExerciseCard from "./ExerciseCard"

export default function WorkoutEditor() {
    return (
        <div className="flex flex-col m-5 gap-2">

            <div className=" flex items-center justify-between border-2 border-slate-200 p-2 rounded-lg">
                <h1 className="text-lg">Actions:</h1>
                <div className="flex gap-2"><Button variant="primary">Save Workout</Button>
                    <Button variant="edit">Edit</Button></div>
            </div>

            <h1 className="text-3xl font-bold">Workout: {workoutName}</h1>
            <p>{description}</p>
            <div>
                {mockWorkoutPlan.map((exercise) => {
                    return (<ExerciseCard
                        key={`${exercise.name}-${exercise.load}`}
                        name={exercise.name}
                        description={exercise.description}
                        setsAndReps={exercise.setsAndReps}
                        load={exercise.load}
                        additionalNotes={exercise.additionalNotes}
                    ></ExerciseCard>)
                })}
            </div>

        </div>


    )
}