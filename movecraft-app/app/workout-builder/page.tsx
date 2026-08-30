import WorkoutBuilderClient from "@/components/WorkoutBuilderClient";
import Link from "next/link";

export default function WorkoutBuilderPage() {
    return (
        <div className="flex flex-col">
            <div className="flex gap-3 m-5">
                <Link href="/dashboard">DASHBOARD</Link>
                <p> | </p>
                <h1 className="text-blue-500">WORKOUT BUILDER</h1>
            </div>

            <h2 className="mx-5 text-slate-800">Ask AI for daily workouts to share with your clients.</h2>
            <WorkoutBuilderClient></WorkoutBuilderClient>
        </div>
    )
}