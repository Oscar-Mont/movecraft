'use client'

import { Exercise } from "@/types/Exercise";

export default function ExerciseCard({ name, description, setsAndReps, load, additionalNotes }: Exercise) {
    return (
        <div className="border-l-5 border-dotted border-emerald-300 pl-5 mt-1">
            <div className="flex flex-col items-start justify-center gap-2">
                <div className="flex flex-col items-start jsutify-center mb-10 gap-1">
                    {/* <p className={applyTypeStyle(category)}>{category}</p> */}
                    <h2 className="text-2xl font-bold text-emerald-300">{name}</h2>
                    <p className="">{description}</p>

                    <h3 className="font-bold text-xl text-emerald-300">Sets & Reps</h3>
                    <p>{setsAndReps}</p>
                    <h3 className="font-bold text-xl text-emerald-300">Load</h3>
                    <p>{load}</p>
                    <h3 className="font-bold text-xl text-emerald-300">Notes</h3>
                    <p>{additionalNotes}</p>
                </div>
            </div>

        </div>
    )
}

// function applyTypeStyle(type: string) {
//     if (type === "Warm-up") {
//         return "bg-amber-200 py-1 px-2 rounded-lg"
//     }
//     if (type === "Workout") {
//         return "bg-red-200 py-1 px-2 rounded-lg"
//     }
//     if (type === "Finisher") {
//         return "bg-lime-200 py-1 px-2 rounded-lg"
//     }
//     if (type === "Cooldown") {
//         return "bg-blue-200 py-1 px-2 rounded-lg"
//     }
// }