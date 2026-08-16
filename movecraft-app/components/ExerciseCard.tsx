'use client'

import Button from "./Button";

type ExerciseCardProps = {
    type: string
    name: string
    description: string
    setsAndReps: string
    load: string
    additionalNotes: string
};

export default function ExerciseCard({ type, name, description, setsAndReps, load, additionalNotes }: ExerciseCardProps) {
    return (
        <div className="border-2 border-slate-200 p-3 m-4 rounded-lg">
            <div className="flex flex-col items-start justify-center gap-2 ">
                <div className="flex flex-col items-start jsutify-center">
                    <p className={applyTypeStyle(type)}>{type}</p>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p className="text-slate-500">{description}</p>

                    <h3 className="text-slate-500">Sets & Reps</h3>
                    <p>{setsAndReps}</p>
                    <h3 className="text-slate-500">Load</h3>
                    <p>{load}</p>
                    <h3 className="text-slate-500">Notes</h3>
                    <p>{additionalNotes}</p>
                </div>
            </div>

        </div>
    )
}

function applyTypeStyle(type: string) {
    if (type === "Warm-up") {
        return "bg-amber-200 py-1 px-2 rounded-lg"
    }
    if (type === "Workout") {
        return "bg-red-200 py-1 px-2 rounded-lg"
    }
    if (type === "Finisher") {
        return "bg-lime-200 py-1 px-2 rounded-lg"
    }
    if (type === "Cooldown") {
        return "bg-blue-200 py-1 px-2 rounded-lg"
    }
}