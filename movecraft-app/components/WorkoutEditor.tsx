'use client'

import Button from "./Button"
import ExerciseCard from "./ExerciseCard"
import { Workout } from "@/types/Workout"

type WorkoutEditorProps = {
    workout: Workout;
}

export default function WorkoutEditor({ workout }: WorkoutEditorProps) {
    return (
        <div className="flex flex-col m-5 gap-2">

            <div className="flex justify-center">
                <div className=" flex items-center gap-8 mb-10">
                    <h1 className="text-lg">Actions:</h1>
                    <div className="flex gap-2"><Button variant="primary">Guardar Rutina</Button>
                        <Button variant="edit">Editar</Button></div>
                </div>
            </div>


            <div className="border-l-5 border-emerald-300 pl-8">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold font-mono">Workout: {workout.workoutName}</h1>
                    <p>{workout.description}</p>
                </div>
                <div>
                    {workout.exercises.map((exercise, index) => {
                        return (<ExerciseCard
                            key={`${exercise.name}-${index}`}
                            name={exercise.name}
                            description={exercise.description}
                            setsAndReps={exercise.setsAndReps}
                            load={exercise.load}
                            additionalNotes={exercise.additionalNotes}
                        ></ExerciseCard>)
                    })}
                </div>
            </div>


        </div>


    )
}