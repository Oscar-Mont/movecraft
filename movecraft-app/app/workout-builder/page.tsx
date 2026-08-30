import WorkoutBuilderClient from "@/components/WorkoutBuilderClient";
import Link from "next/link";

export default function WorkoutBuilderPage() {
    return (
        <div className="flex flex-col">
            <div className="flex gap-3 m-5">
                <Link href="/dashboard" className="hover:text-emerald-300">DASHBOARD</Link>
                <p> | </p>
                <h1 className="text-emerald-300">WORKOUT BUILDER</h1>
            </div>

            <h2 className="mx-5">Pide una rutina de ejercicio. Recuerda ser lo más específico que puedas y no ingresar información privada de tus pacientes o clientes.</h2>
            <WorkoutBuilderClient></WorkoutBuilderClient>
        </div>
    )
}